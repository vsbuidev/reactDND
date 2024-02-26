import React, { useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import TaskColumn from "./TaskColumn";

const initialTasks = {
  todo: [
    { id: 1, content: "Task 1" },
    { id: 2, content: "Task 2" },
    { id: 3, content: "Task 3" },
    { id: 4, content: "Task 4" },
    { id: 5, content: "Task 5" },
  ],
  inProgress: [],
  done: [],
};

const TaskManager = () => {
  const [tasks, setTasks] = useState(initialTasks);

  const moveTask = (sourceColumn, destinationColumn, taskId) => {
    const validMove =
      (sourceColumn === "todo" && destinationColumn === "inProgress") ||
      (sourceColumn === "inProgress" && destinationColumn === "done");
    if (!validMove) {
      alert(
        "Invalid move, Task must move from todo to inprogress and then to done"
      );
      return;
    }
    const sourceTasks = [...tasks[sourceColumn]];
    const destinationTasks = [...tasks[destinationColumn]];

    const taskToMove = sourceTasks.find((task) => task.id === taskId);

    sourceTasks.splice(sourceTasks.indexOf(taskToMove), 1);

    destinationTasks.push(taskToMove);

    setTasks({
      ...tasks,
      [sourceColumn]: sourceTasks,
      [destinationColumn]: destinationTasks,
    });
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div style={{ display: "flex" }}>
        {Object.keys(tasks).map((column) => (
          <TaskColumn
            key={column}
            title={column}
            tasks={tasks[column]}
            moveTask={moveTask}
          />
        ))}
      </div>
    </DndProvider>
  );
};

export default TaskManager;
