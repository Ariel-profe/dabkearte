"use client";

import { useEffect, useRef } from "react";
import { lockScroll } from "@/lib/motion";

export type Video = { title: string; text: string; href: string };

const youtubeId = (href: string) => {
  const url = new URL(href);
  return url.hostname === "youtu.be" ? url.pathname.slice(1) : url.searchParams.get("v") ?? "";
};

/** Modal YouTube player. The iframe only exists while a video is open, so closing it stops playback. */
export function VideoPlayer({ video, onClose }: { video: Video | null; onClose: () => void }) {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog || !video) return;
    dialog.showModal();
    lockScroll(true);
    dialog.addEventListener("close", onClose);
    return () => {
      dialog.removeEventListener("close", onClose);
      if (dialog.open) dialog.close();
      lockScroll(false);
    };
  }, [video, onClose]);

  const close = () => ref.current?.close();

  return (
    <dialog
      ref={ref}
      className="player"
      aria-labelledby="player-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) close();
      }}
    >
      {video && (
        <div className="player-in">
          <div className="player-head">
            <h3 id="player-title" className="player-title">
              {video.title}
            </h3>
            <button type="button" className="player-close" onClick={close} aria-label="Cerrar video">
              <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
                <path d="m1 1 12 12M13 1 1 13" />
              </svg>
            </button>
          </div>
          <div className="player-frame">
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${youtubeId(video.href)}?autoplay=1&rel=0&playsinline=1`}
              title={video.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
          <p className="player-foot">
            <span>{video.text}</span>
            <a className="link link--under" href={video.href} target="_blank" rel="noopener noreferrer">
              Ver en YouTube
            </a>
          </p>
        </div>
      )}
    </dialog>
  );
}
