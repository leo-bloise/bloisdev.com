import Link from "next/link";

type Props = {
    text: string;
    href: string;
    active: boolean;
}

export default function MenuItem({ text, href, active }: Props) {
    return <li className={`text-sm ${!active && 'border-b-[1px]'} hover:border-none`}>
        <Link href={href} >
            {text}
        </Link>
    </li>
}