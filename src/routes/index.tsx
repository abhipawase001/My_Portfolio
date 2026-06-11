import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { IntroSequence } from "@/components/IntroSequence";
import { Portfolio } from "@/components/Portfolio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Abhijit Pawase — AI Engineer & Full-Stack Developer" },
      {
        name: "description",
        content:
          "Portfolio of Abhijit Pawase — AI/Data Science engineer, full-stack developer, Google Student Ambassador, hackathon winner and national skating champion.",
      },
      { property: "og:title", content: "Abhijit Pawase — Portfolio" },
      {
        property: "og:description",
        content:
          "AI architect & full-stack engineer. Project Drishti, Milan Tours, Project Sarthi.",
      },
    ],
  }),
  component: Index,
});

const INTRO_KEY = "abhi_intro_played_v1";

function Index() {
  const [showIntro, setShowIntro] = useState<boolean | null>(null);

  useEffect(() => {
    const played = typeof window !== "undefined" && sessionStorage.getItem(INTRO_KEY);
    setShowIntro(!played);
  }, []);

  const handleDone = () => {
    sessionStorage.setItem(INTRO_KEY, "1");
    setShowIntro(false);
  };

  if (showIntro === null) {
    return <div className="min-h-screen bg-bg" />;
  }

  return (
    <>
      <Portfolio />
      <AnimatePresence>
        {showIntro && <IntroSequence key="intro" onDone={handleDone} />}
      </AnimatePresence>
    </>
  );
}
