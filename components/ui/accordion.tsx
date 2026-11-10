"use client";

import { useState, type ReactNode } from "react";
import { ScrollTrigger } from "@/lib/motion";

export function PlusIcon() {
  return (
    <span className="icon-btn" aria-hidden>
      <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path className="v" d="M7 0v14" />
        <path d="M0 7h14" />
      </svg>
    </span>
  );
}

type AccordionProps<T> = {
  items: T[];
  initialOpen?: number;
  className?: string;
  itemClassName: string;
  buttonClassName: string;
  idPrefix: string;
  label: (item: T) => ReactNode;
  panel: (item: T) => ReactNode;
};

/** One panel open at a time; the panel height animates through grid-template-rows. */
export function Accordion<T>({ items, initialOpen = -1, className, itemClassName, buttonClassName, idPrefix, label, panel }: AccordionProps<T>) {
  const [open, setOpen] = useState(initialOpen);

  const toggle = (i: number) => {
    setOpen((cur) => (cur === i ? -1 : i));
    // Layout below the accordion moves; let pinned scenes measure again after the transition.
    window.setTimeout(() => ScrollTrigger.refresh(), 650);
  };

  return (
    <div className={className}>
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={i} className={`${itemClassName}${isOpen ? " is-open" : ""}`}>
            <button
              className={buttonClassName}
              type="button"
              aria-expanded={isOpen}
              aria-controls={`${idPrefix}-${i}`}
              data-acc-btn
              onClick={() => toggle(i)}
            >
              {label(item)}
              <PlusIcon />
            </button>
            <div id={`${idPrefix}-${i}`} data-acc-panel role="region">
              <div className="acc-in">{panel(item)}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
