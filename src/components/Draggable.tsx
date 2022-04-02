import useMousePosition from "../hooks/useMousePosition";

import type { Position, Rect } from "../type";
import type { FC } from "react";

type Props = {
  rect: Rect;
  offset: Position;
  initial: Position;
};

const Draggable: FC<Props> = ({ children, rect, offset, initial }) => {
  const mouse = useMousePosition(initial);

  return (
    <div
      css={{
        display: "grid",
        position: "fixed",
        pointerEvents: "none",
      }}
      style={{
        width: rect.width,
        height: rect.height,
        left: mouse.x - (offset.x ?? 0),
        top: mouse.y - (offset.y ?? 0),
      }}
    >
      {children}
    </div>
  );
};

export default Draggable;
