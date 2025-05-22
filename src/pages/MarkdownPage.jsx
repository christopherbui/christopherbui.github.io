import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function MarkdownPage() {
  const { slug } = useParams();
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    fetch(`/project-content/${slug}.md`)
      .then((res) => (res.ok ? res.text() : '# Not found'))
      .then(setMarkdown)
      .catch(() => setMarkdown('# Error loading markdown'));
  }, [slug]);

  return (
    <div className="max-w-4xl mx-auto px-4 pt-0 pb-20">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ node, ...props }) => (
            <h1 className="text-[2.4rem] text-[rgb(106,188,104)] font-medium font-lilex mt-12 mb-8" {...props} />
          ),
          h2: ({ node, ...props }) => (
            <h2 className="text-[1.8rem] text-[rgb(86,162,238)] font-medium font-lilex mt-10 mb-6" {...props} />
          ),
          h3: ({ node, ...props }) => (
            <h3 className="text-[1.4rem] text-[rgb(181,114,232)] font-medium font-lilex mt-8 mb-4" {...props} />
          ),
          p: ({ node, ...props }) => (
            <p className="text-[1rem] text-neutral-800 font-normal font-lilex leading-normal mt-2 mb-4" {...props} />
          ),
          li: ({ node, ...props }) => (
            <li className="text-[1rem] text-neutral-700 font-normal font-lilex list-disc ml-10 my-2" {...props} />
          ),
          a: ({ node, ...props }) => (
            <a
              className="text-[rgb(86,162,238)] hover:underline"
              target="_blank"
              rel="noopener noreferrer"
              {...props}
            />
          ),
          img: ({ node, ...props }) => (
            <img
              className="mx-auto my-6 max-w-full h-auto rounded-xl border-[2px] border-neutral-700 transition-all duration-260"
              {...props}
            />
          ),
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || '');
            return !inline && match ? (
              <SyntaxHighlighter
                style={oneDark}
                language={match[1]}
                PreTag="div"
                className="rounded-md my-4 font-mono text-sm"
                {...props}
              >
                {String(children).replace(/\n$/, '')}
              </SyntaxHighlighter>
            ) : (
              <code className="bg-gray-200 dark:bg-gray-800 px-1 rounded" {...props}>
                {children}
              </code>
            );
          },
          table: ({ node, ...props }) => (
            <table className="font-lilex table-auto w-full my-6 border-collapse border border-gray-300 dark:border-gray-600" {...props} />
          ),
          thead: ({ node, ...props }) => (
            <thead className="bg-gray-100 dark:bg-gray-800" {...props} />
          ),
          tbody: ({ node, ...props }) => (
            <tbody className="divide-y divide-gray-300 dark:divide-gray-600" {...props} />
          ),
          th: ({ node, ...props }) => (
            <th className="p-2 border border-gray-300 dark:border-gray-600 font-semibold text-left" {...props} />
          ),
          td: ({ node, ...props }) => (
            <td className="p-2 border border-gray-300 dark:border-gray-600" {...props} />
          ),
        }}
      >
        {markdown}
      </ReactMarkdown>
    </div>
  );
}
