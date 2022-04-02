import { useEffect, useState } from "react";

import type { Position } from "../type";

const useMousePosition = (initialPosition?: Position) => {
  const [position, setPosition] = useState<Position>(
    initialPosition ?? { x: 0, y: 0 }
  );

  const handleMouseMove = (event: MouseEvent) =>
    setPosition({ x: event.clientX, y: event.clientY });

  useEffect(() => {
    addEventListener("mousemove", handleMouseMove);

    return () => removeEventListener("mousemove", handleMouseMove);
  }, []);

  return position;
};

export default useMousePosition;
