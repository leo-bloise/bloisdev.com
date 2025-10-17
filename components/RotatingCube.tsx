"use client";

import useCubeAnimation from "@/hooks/useCubeAnimation";
import { useRef } from "react";

export default function RotatingCube() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  useCubeAnimation(canvasRef);

  return <canvas ref={canvasRef} className="max-w-[300px] max-h-[300px]" width={300} height={300} />
}
