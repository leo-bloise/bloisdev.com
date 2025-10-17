import RotatingCube from "@/components/ui/RotatingCube";

export default function NotFound() {
    return <main className="h-screen flex items-center flex-col gap-y-4 justify-center">
        <div className="flex items-center gap-x-8">
            <h1 className="text-9xl font-bold">404</h1>
            <RotatingCube canvasSize={100}></RotatingCube>
        </div>
        <p className="text-2xl">Oops! Nothing to see here</p>
    </main>
}