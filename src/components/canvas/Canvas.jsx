import React, { forwardRef } from "react";

export const Canvas = forwardRef(function Canvas(
  { width, height, render, data },
  ref
) {
  const { font = "Arial", fontSize = 24, color = "#000" } = data;

  const style = {
    width,
    height,
    position: "relative",
    background: "#fff",
    overflow: "hidden",
  };

  const renderWithFont = (props) => (
    <div
      style={{
        width: "100%",
        height: "100%",
        fontFamily: font,
        fontSize: fontSize,
        color: color,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {render(props)}
    </div>
  );

  return (
    <div ref={ref} style={style} className="rounded-xl border shadow">
      {renderWithFont({ width, height, data })}
    </div>
  );
});
