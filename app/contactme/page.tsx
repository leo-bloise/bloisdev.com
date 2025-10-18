import Header from "@/components/Header";
import linkedIn from "@/public/linkedin.png";
import github from "@/public/github.png";
import gmail from "@/public/gmail.png";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
    return <main className="flex flex-col w-full gap-y-32 pb-4">
        <Header />
        <h1 className="text-7xl text-center">Contact me</h1>
        <article className="flex items-center justify-around">
            <Link
                href={"https://www.linkedin.com/in/leobloise/"}
                target="_blank"
            >
                <Image
                    src={linkedIn}
                    width={150}
                    height={150}
                    alt="Linkedin icon"
                    className="rounded-2xl"
                />
            </Link>
            <Link
                href={"https://github.com/leo-bloise"}
                target="_blank"
                >
                <Image
                    src={github}
                    width={150}
                    height={150}
                    alt="Github icon"
                    className="rounded-2xl"
                />
            </Link>
            <Link
                href={"mailto:leonardocsbloise@gmail.com"}
                target="_blank"
            >
                <Image 
                    src={gmail}
                    width={150}
                    height={150}
                    alt="E-mail icon"
                    className="rounded-2xl"
                />
            </Link>
        </article>
    </main>
}