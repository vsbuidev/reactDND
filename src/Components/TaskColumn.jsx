import React from "react";
import { useDrop } from "react-dnd";

import TaskCard from "./TaskCard";

const TaskColumn = ({ title, tasks, moveTask }) => {
  const [, drop] = useDrop({
    accept: "TASK",
    drop: (item) => moveTask(item.column, title, item.id),
  });

  return (
    <div
      ref={drop}
      style={{
        flex: 1,
        border: "1px solid #ddd",
        margin: "8px",
        padding: "8px",
      }}
    >
      <h2>{title}</h2>
      {tasks.map((task) => (
        <TaskCard key={task.id} id={task.id} content={task.content} />
      ))}
    </div>
  );
};

export default TaskColumn;
