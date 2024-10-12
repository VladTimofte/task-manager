import React, { useState } from "react";

function TaskItem({ task, deleteTask, updateTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(task);

  const handleSave = () => {
    updateTask(editedTask);
    setIsEditing(false);
    console.log(task)
    console.log(editedTask)
  };

  return (
    <div className={`task-item ${task.priority.toLowerCase()}`}>
      {isEditing ? (
        <div className="edit-task">
          <input
            type="text"
            value={editedTask.name}
            onChange={(e) =>
              setEditedTask({ ...editedTask, name: e.target.value })
            }
          />
          <select
            value={editedTask.priority}
            onChange={(e) =>
              setEditedTask({ ...editedTask, priority: e.target.value })
            }
          >
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
          <select
            value={editedTask.category}
            onChange={(e) =>
              setEditedTask({ ...editedTask, category: e.target.value })
            }
          >
            <option value="Personal">Personal</option>
            <option value="Work">Work</option>
            <option value="Others">Others</option>
          </select>
          <button onClick={handleSave}>Save</button>
        </div>
      ) : (
        <>
          <h3>{task.name}</h3>
          <p>Priority: {task.priority}</p>
          <p>Category: {task.category}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => deleteTask(task.id)}>Delete</button>
        </>
      )}
    </div>
  );
}

export default TaskItem;
