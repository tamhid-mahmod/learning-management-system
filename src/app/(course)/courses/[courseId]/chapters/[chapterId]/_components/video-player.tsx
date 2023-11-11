"use client";

import { useState } from "react";
import MuxPlayer from "@mux/mux-player-react";
import "@mux/mux-player/themes/classic";
import { Loader2, Lock } from "lucide-react";

import { cn } from "@/lib/utils";

interface VideoPlayerProps {
  chapterId: string;
  title: string;
  courseId: string;
  nextChapterId?: string;
  playbackId: string;
  isLocked: boolean;
  completeOnEnd: boolean;
}

export const VideoPlayer = ({
  chapterId,
  title,
  courseId,
  nextChapterId,
  playbackId,
  isLocked,
  completeOnEnd,
}: VideoPlayerProps) => {
  const [isReady, setIsReady] = useState<boolean>(false);

  return (
    <div className="relative aspect-video">
      {!isReady && !isLocked && (
        <div className="absolute inset-0 flex items-center justify-center bg-slate-800">
          <Loader2 className="h-8 w-8 animate-spin text-secondary" />
        </div>
      )}

      {isLocked && (
        <div className="absolute inset-0 flex items-center justify-center bg-slate-800 flex-col gap-y-2 text-secondary">
          <Lock className="h-8 w-8" />

          <p className="text-sm">This chapter is locked</p>
        </div>
      )}

      {!isLocked && (
        <div>
          <MuxPlayer
            theme="classic"
            title={title}
            className={cn(!isReady && "hidden")}
            onCanPlay={() => setIsReady(true)}
            onEnded={() => {}}
            autoPlay
            playbackId={playbackId}
          />
        </div>
      )}
    </div>
  );
};
