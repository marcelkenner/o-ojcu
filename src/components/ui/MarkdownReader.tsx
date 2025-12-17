import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface Props {
  markdown: string;
  className?: string;
}

function isExternalHref(href: string | undefined): boolean {
  if (!href) return false;
  return href.startsWith("http://") || href.startsWith("https://");
}

export default function MarkdownReader({ markdown, className }: Props) {
  return (
    <article className={`markdown markdown--reading ${className ?? ""}`.trim()}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          a({ href, children }) {
            const external = isExternalHref(href);
            return (
              <a className="md-link" href={href} target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined}>
                {children}
              </a>
            );
          },
          h1({ children }) {
            return (
              <h1 className="md-h md-h1">{children}</h1>
            );
          },
          h2({ children }) {
            return (
              <h2 className="md-h md-h2">{children}</h2>
            );
          },
          h3({ children }) {
            return (
              <h3 className="md-h md-h3">{children}</h3>
            );
          },
          p({ children }) {
            return <p className="md-p">{children}</p>;
          },
          ul({ children }) {
            return (
              <ul className="md-list md-list--ul">{children}</ul>
            );
          },
          ol({ children }) {
            return (
              <ol className="md-list md-list--ol">{children}</ol>
            );
          },
          li({ children }) {
            return <li className="md-li">{children}</li>;
          },
          blockquote({ children }) {
            return (
              <blockquote className="md-quote">{children}</blockquote>
            );
          },
          hr() {
            return <hr className="md-hr" />;
          },
          pre({ children }) {
            return (
              <pre className="md-pre">{children}</pre>
            );
          },
          code({ className: rawClassName, children }) {
            const className = rawClassName ?? "";
            const match = /language-(\w+)/.exec(className);
            const language = match?.[1];
            return (
              <code className={`md-code ${className}`.trim()} data-language={language}>
                {String(children).replace(/\n$/, "")}
              </code>
            );
          },
          table({ children }) {
            return (
              <div className="md-table">
                <table className="md-table__table">{children}</table>
              </div>
            );
          },
          thead({ children }) {
            return (
              <thead className="md-thead">{children}</thead>
            );
          },
          th({ children }) {
            return (
              <th className="md-th">{children}</th>
            );
          },
          td({ children }) {
            return (
              <td className="md-td">{children}</td>
            );
          },
        }}
      >
        {markdown}
      </ReactMarkdown>
    </article>
  );
}
