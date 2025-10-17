import { RefObject, useEffect, useState } from "react";
import useHtmlBackgroundColor from "./useHtmlBackgroundColor";
import useColors from "./useHtmlBackgroundColor";

type Vector2 = {
  x: number;
  y: number;
};

type Vector3 = number[];

export default function useCubeAnimation(
  canvasRef: RefObject<HTMLCanvasElement | null>
) {
  const [rotation, setRotation] = useState<Vector2>({ x: 0.5, y: 0.5 });
  const { 
    background,
    foreground
  } = useColors();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;

    const vertices = [
      [-1, -1, -1],
      [1, -1, -1],
      [1, 1, -1],
      [-1, 1, -1],
      [-1, -1, 1],
      [1, -1, 1],
      [1, 1, 1],
      [-1, 1, 1],
    ];

    const edges = [
      [0, 1],
      [1, 2],
      [2, 3],
      [3, 0], 
      [4, 5],
      [5, 6],
      [6, 7],
      [7, 4], 
      [0, 4],
      [1, 5],
      [2, 6],
      [3, 7], 
    ];

    const rotateX = (point: Vector3, angle: number) => {
      const cos = Math.cos(angle);
      const sin = Math.sin(angle);
      return [
        point[0],
        point[1] * cos - point[2] * sin,
        point[1] * sin + point[2] * cos,
      ];
    };

    const rotateY = (point: Vector3, angle: number) => {
      const cos = Math.cos(angle);
      const sin = Math.sin(angle);
      return [
        point[0] * cos + point[2] * sin,
        point[1],
        -point[0] * sin + point[2] * cos,
      ];
    };

    const project = (point: Vector3) => {
      const scale = 300 / (point[2] + 4);
      return [point[0] * scale + width / 2, point[1] * scale + height / 2];
    };

    const transformed = vertices.map((v) => {
      let point = rotateX(v, rotation.x);
      point = rotateY(point, rotation.y);
      return project(point);
    });

    ctx.fillStyle = background;
    ctx.fillRect(0, 0, width, height);

    ctx.strokeStyle = foreground;
    ctx.lineWidth = 2;
    edges.forEach(([start, end]) => {
      const [x1, y1] = transformed[start];
      const [x2, y2] = transformed[end];
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.stroke();
    });

    ctx.fillStyle = foreground;
    transformed.forEach(([x, y]) => {
      ctx.beginPath();
      ctx.arc(x, y, 4, 0, Math.PI * 2);
      ctx.fill();
    });
  }, [background, rotation, canvasRef.current, foreground]);

  useEffect(() => {
    let animationFrameId: number;

    const animate = () => {
      setRotation((prev) => ({
        x: prev.x + 0.005,
        y: prev.y + 0.01,
      }));
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, []);
}
