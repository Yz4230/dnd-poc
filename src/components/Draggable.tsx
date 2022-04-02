import useMousePosition from "../hooks/useMousePosition";

import type { FC } from "react";

type Props = {
  bound: { width: number; height: number };
  offset: { x: number; y: number };
  initial: { x: number; y: number };
};

const Draggable: FC<Props> = ({ children, bound, offset, initial }) => {
  const mouse = useMousePosition(initial);

  return (
    <div
      css={{
        display: "grid",
        position: "fixed",
        pointerEvents: "none",
      }}
      style={{
        width: bound.width,
        height: bound.height,
        left: mouse.x - (offset.x ?? 0),
        top: mouse.y - (offset.y ?? 0),
      }}
    >
      {children}
    </div>
  );
};

export default Draggable;
