import { Fragment } from "react";

/** Text broken into word spans, for word-by-word reveals. */
export function Words({ text, className = "w" }: { text: string; className?: string }) {
  const parts = text.split(/(\s+)/);
  return (
    <>
      {parts.map((part, i) =>
        /^\s+$/.test(part) || !part ? (
          <Fragment key={i}>{part}</Fragment>
        ) : (
          <span key={i} className={className}>
            {part}
          </span>
        ),
      )}
    </>
  );
}

/** Text broken into clipped words of character spans, for letters that rise into place. */
export function Chars({ text }: { text: string }) {
  const words = text.split(" ");
  return (
    <>
      {words.map((word, i) => (
        <Fragment key={i}>
          <span className="wd" aria-hidden>
            {Array.from(word).map((ch, j) => (
              <span key={j} className="ch">
                {ch}
              </span>
            ))}
          </span>
          {i < words.length - 1 ? " " : null}
        </Fragment>
      ))}
    </>
  );
}

/** The round full stop that ends a title. */
export function Stop() {
  return <span className="stop" aria-hidden />;
}
