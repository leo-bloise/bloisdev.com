"use client";

import useCubeAnimation from "@/hooks/useCubeAnimation";
import { useRef } from "react";

export default function RotatingCube({canvasSize = 300}: {canvasSize?: number}) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useCubeAnimation(canvasRef, canvasSize);

  return <canvas ref={canvasRef} className={`max-w-[${canvasSize}px] max-h-[${canvasSize}px]`} width={canvasSize} height={canvasSize} />
}
