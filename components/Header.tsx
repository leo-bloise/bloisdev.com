import Menu from "./ui/Menu";

export default function Header() {
    return <header className="flex items-center justify-around py-8">
        <h1 className="text-xl">Bloisdev</h1>
        <Menu />
        <p className="text-sm">Contact me</p>
    </header>
}