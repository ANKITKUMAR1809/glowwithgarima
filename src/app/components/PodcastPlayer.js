"use client";

import { useState, useRef, useEffect } from "react";
import { Play, Loader2 } from "lucide-react";

export default function PodcastPlayer({ src }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [hasStarted, setHasStarted] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handlePlay = () => {
      setIsPlaying(true);
      setHasStarted(true);
    };
    const handlePause = () => setIsPlaying(false);
    const handleWaiting = () => setIsLoading(true);
    const handlePlaying = () => setIsLoading(false);
    const handleCanPlay = () => setIsLoading(false);
    const handleLoadStart = () => setIsLoading(true);
    const handleLoadedData = () => setIsLoading(false);

    video.addEventListener("play", handlePlay);
    video.addEventListener("pause", handlePause);
    video.addEventListener("waiting", handleWaiting);
    video.addEventListener("playing", handlePlaying);
    video.addEventListener("canplay", handleCanPlay);
    video.addEventListener("loadstart", handleLoadStart);
    video.addEventListener("loadeddata", handleLoadedData);

    // Initial check in case it loaded extremely fast
    if (video.readyState >= 2) {
      setIsLoading(false);
    }

    return () => {
      video.removeEventListener("play", handlePlay);
      video.removeEventListener("pause", handlePause);
      video.removeEventListener("waiting", handleWaiting);
      video.removeEventListener("playing", handlePlaying);
      video.removeEventListener("canplay", handleCanPlay);
      video.removeEventListener("loadstart", handleLoadStart);
      video.removeEventListener("loadeddata", handleLoadedData);
    };
  }, []);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play().catch((err) => {
        console.log("Play interrupted: ", err);
      });
    }
  };

  return (
    <div className="relative w-full aspect-video rounded-3xl overflow-hidden border border-pink-100/50 shadow-premium bg-zinc-950 group">
      {/* HTML5 Video Element */}
      <video
        ref={videoRef}
        src={src}
        className="w-full h-full object-cover"
        controls={hasStarted}
        preload="metadata"
        playsInline
      />

      {/* Loading Overlay */}
      {isLoading && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/70 backdrop-blur-sm z-30 transition-all duration-300">
          <div className="relative flex items-center justify-center">
            {/* Glowing ring */}
            <div className="absolute w-16 h-16 rounded-full border-4 border-primary/20 animate-ping" />
            <Loader2 className="w-10 h-10 text-primary animate-spin" />
          </div>
          <span className="mt-4 text-xs font-bold tracking-wider text-pink-100 uppercase animate-pulse">
            Connecting / Buffering...
          </span>
        </div>
      )}

      {/* Custom Big Play Button Overlay before video starts playing */}
      {!hasStarted && !isLoading && (
        <div 
          onClick={togglePlay}
          className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-t from-black/60 via-black/20 to-black/60 z-20 cursor-pointer group-hover:from-black/70 group-hover:to-black/70 transition-all duration-300"
        >
          {/* Play button ring */}
          <div className="w-20 h-20 rounded-full bg-white/10 border border-white/20 backdrop-blur-md flex items-center justify-center text-white transform group-hover:scale-110 transition-transform duration-300 shadow-xl">
            <Play className="w-8 h-8 fill-current translate-x-0.5 text-primary" />
          </div>
          <p className="mt-4 text-sm font-bold text-white tracking-wider uppercase drop-shadow-md">
            Play Podcast Episode
          </p>
        </div>
      )}
    </div>
  );
}
