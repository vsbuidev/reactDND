import React from "react";
import { useDrag } from "react-dnd";

const TaskCard = ({ id, content }) => {
  const [{ isDragging }, drag] = useDrag({
    type: "TASK",
    item: { id, column: "todo" }, // Specify the source column
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <div
      ref={drag}
      style={{
        opacity: isDragging ? 0.5 : 1,
        cursor: "move",
        border: "1px solid #aaa",
        borderRadius: "4px",
        padding: "8px",
        margin: "4px 0",
        backgroundColor: "#fff",
      }}
    >
      {content}
    </div>
  );
};

export default TaskCard;
