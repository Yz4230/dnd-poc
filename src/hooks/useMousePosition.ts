import { useEffect, useState } from "react";

export type MousePosition = { x: number; y: number };

const useMousePosition = (initialPosition?: MousePosition) => {
  const [position, setPosition] = useState<MousePosition>(
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
