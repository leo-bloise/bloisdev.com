"use client";

import useCubeAnimation from "@/hooks/useCubeAnimation";
import { useRef } from "react";

export default function RotatingCube() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const canvasSize = 300;

  useCubeAnimation(canvasRef, canvasSize);

  return <canvas ref={canvasRef} className={`max-w-[${canvasSize}px] max-h-[${canvasSize}px]`} width={canvasSize} height={canvasSize} />
}
