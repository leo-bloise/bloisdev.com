import { getPostFromDb } from "@/lib/posts";
import { notFound } from "next/navigation";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import Markdown from "react-markdown";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import remarkMath from "remark-math";
import 'katex/dist/katex.min.css'
import rehypeKatex from "rehype-katex";

type Props = {
    params: Promise<{ postId: string }>
}

const generateIdFromText = (text: string) => {
    return text.toLowerCase().replace(/\s+/g, '--')
}

export default async function Page({ params }: Props) {
    const { postId } = await params;
    const post = await getPostFromDb(postId);

    if (post === null) return notFound();

    return (
        <article className="prose max-w-[965px] m-auto">
            <header className="flex flex-col items-center p-10 gap-y-4">
                <h1 className="text-5xl text-center">{post.title}</h1>
                <h2>Created by: Leonardo Bloise</h2>
            </header>
            <Markdown
                remarkPlugins={[
                    remarkMath
                ]}
                rehypePlugins={[
                    rehypeKatex
                ]}
                skipHtml
                components={{
                    h1: (props) => <h1 id={generateIdFromText(props.children?.toString() ?? '')} {...props} className="text-2xl font-bold my-4" />,
                    h2: (props) => <h2 {...props} id={generateIdFromText(props.children?.toString() ?? '')} className="text-xl font-semibold my-4" />,
                    h3: (props) => <h3 {...props} id={generateIdFromText(props.children?.toString() ?? '')} className="text-lg font-medium my-4" />,
                    h4: (props) => <h4 {...props} id={generateIdFromText(props.children?.toString() ?? '')} className="text-md font-medium my-4" />,
                    h5: (props) => <h5 {...props} id={generateIdFromText(props.children?.toString() ?? '')} className="text-sm font-medium my-4" />,
                    h6: (props) => <h6 {...props} id={generateIdFromText(props.children?.toString() ?? '')} className="text-xs font-medium my-4" />,
                    code: (props) => {
                        const { children, className, node, ...rest } = props
                        const match = /language-(\w+)/.exec(className || '')
                        return match ? (<SyntaxHighlighter
                            style={dracula}
                            PreTag="div"
                            children={String(children).replace(/\n$/, '')}
                            language={match[1]}
                        />
                        ) : (
                            <code {...rest} className='bg-gray-900 px-2 py-1 rounded-lg text-red-500'>
                                {children}
                            </code>
                        )
                    },
                    blockquote: (props) => <blockquote {...props} className="border-l-4 border-accent pl-4 italic text-accent" />,
                    ul: (props) => <ul {...props} className="list-disc ml-6" />,
                    li: (props) => <li {...props} className="my-1" />,
                    ol: (props) => <ol {...props} className="list-decimal ml-6" />,
                    p: (props) => <p {...props} className="my-6" />,
                    a: (props) => <a {...props} className="text-blue-400" />,
                    img: (props) => <img {...props} className="rounded-lg my-4 mx-auto block max-w-full" />,
                }}
            >
                {post.content}
            </Markdown>
        </article>
    );
}