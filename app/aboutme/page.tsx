import Header from "@/components/Header";
import familyPhoto from "@/public/family.jpg";
import cp2Photo from "@/public/cp2.png";
import Image from "next/image";

export default function Page() {
    return <main className="flex flex-col w-full gap-y-32 pb-4">
        <Header />
        <h1 className="text-7xl text-center">About me</h1>
        <article className="px-12 w-full">
            <section>
                <figure className="flex float-left flex-col gap-y-2 items-center px-6 py-4 pt-0">
                    <Image
                        className="rounded-lg"
                        src={familyPhoto}
                        alt="Me holding my cousin while my parents and my brother pose for a family photo"
                        width={500}
                        height={500}
                    />
                    <figcaption className="italic">Me and my family</figcaption>
                </figure>

                <p className="pb-4">Thanks for stopping by, here’s a little about me.</p>

                <p>
                    My name is Leonardo Bloise. I’m a software developer based in Rio de Janeiro, Brazil. I was introduced to computers at a young age: my father worked in telecommunications, so I had early access to technology, which influenced my career path.
                    I remember downloading and playing games on our old family computer, a Pentium 4 running Windows XP, while my parents watched TV.
                </p>

                <figure className="flex float-right flex-col gap-y-2 items-center px-6 py-4">
                    <Image
                        className="rounded-lg m-4"
                        src={cp2Photo}
                        alt="Colégio Pedro II building"
                        width={500}
                        height={500}
                    />
                    <figcaption className="italic">Colégio Pedro II (high school)</figcaption>
                </figure>

                <p className="p-4">
                    As I grew older, my interest in technology deepened. I attended a technical high school (Colégio Pedro II) where I focused on IT. It was an excellent environment to learn fundamentals such as programming, algorithms, and data structures. I also collaborated on projects with classmates that helped me sharpen my skills.
                </p>

                <p className="pb-4">
                    I learned programming logic with C and later explored web development using HTML, CSS, and JavaScript. During that time I was also introduced to AJAX, Bootstrap, and jQuery. These technologies that significantly shaped early web development.
                </p>

                <p className="pb-4">
                    After high school I initially pursued another passion and enrolled in university to study biology. While assisting with the publication of <a className="text-blue-300 underline" href="https://example.com">this research article</a>, I realized that software development was my true calling. In 2022 I transitioned fully into software development and began a new career path.
                </p>

                <p className="mb-4">
                    These days, most of my time is spent building web applications, but what truly excites me is solving difficult problems at scale. I enjoy finding elegant solutions that make systems faster or simpler. Outside of code, I enjoy studying geometry, physics, biology, and mathematics for fun and inspiration.
                </p>

                <p>If I am not coding, I am probably watching something, playing a game, or working out.</p>
            </section>
        </article>
    </main>
}