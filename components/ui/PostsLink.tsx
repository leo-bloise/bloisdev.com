import Link from "next/link";

type Props = {
  date: Date;
  title: string;
  href: string;
};

export default function PostsLink({ date, title, href }: Props) {
  const formatter = new Intl.DateTimeFormat("en-US", { dateStyle: "long" });

  return (
    <li className="flex w-fit gap-x-6 items-center">
      <Link className="flex gap-x-6" href={href}>
        <span className="text-lg text-accent border-b-accent border-b-2">
          {formatter.format(date)}
        </span>
        <h2 className="text-lg">{title}</h2>
      </Link>
    </li>
  );
}
