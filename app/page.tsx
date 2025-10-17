import Header from "@/components/Header";
import RotatingCube from "@/components/RotatingCube";

export default function Home() {
  return (
    <main className="flex flex-col w-full gap-y-10">
      <Header />
      <div className="w-full flex justify-center">
        <RotatingCube />
      </div>
    </main>
  );
}
