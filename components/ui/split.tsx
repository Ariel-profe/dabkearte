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

/** Button label whose letters stomp one after another on hover, like a dabke line. */
export function BtnText({ children }: { children: string }) {
  let i = 0;
  return (
    <span className="btn-text">
      {Array.from(children).map((ch, j) =>
        ch === " " ? (
          <Fragment key={j}> </Fragment>
        ) : (
          <span key={j} className="bt-ch" style={{ ["--i" as string]: i++ }}>
            {ch}
          </span>
        ),
      )}
    </span>
  );
}

/** The round full stop that ends a title. */
export function Stop() {
  return <span className="stop" aria-hidden />;
}
