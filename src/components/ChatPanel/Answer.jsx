import 'highlight.js/styles/github-dark.css';
import ReactMarkdown from "react-markdown";
import rehypeHighlight from 'rehype-highlight';

export default function Answer({ answer, question }) {
  return (
    <>
      {answer == "Failed to fetch" ? (
        <span className="text-red-400 block text-left">
          {answer}
          <ul>
            <li>Please Check your internet connection</li>
            <li>Try again in a few minutes</li>
          </ul>
        </span>
      ) : (
        <ReactMarkdown
          components={{
            p: ({ node, ...props }) => (
              <p className="text-zinc-400 mb-2" {...props} />
            ),
            li: ({ node, ...props }) => (
              <li className="ml-6 list-disc text-zinc-400" {...props} />
            ),
            strong: ({ node, ...props }) => (
              <strong className="text-zinc-300 font-semibold" {...props} />
            ),
          }}
          rehypePlugins={[rehypeHighlight]}
        >
          {answer}
        </ReactMarkdown>
      )}
    </>
  );
}
