import { useRef, useState } from "react";

export const usePerspective = () => {
  const resumeRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!resumeRef.current) return;

    const rect = resumeRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -5; // Max 5 degrees
    const rotateY = ((x - centerX) / centerX) * 5; // Max 5 degrees

    setTilt({ rotateX, rotateY });
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    setTilt({ rotateX: 0, rotateY: 0 });
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleDownloadPDF = () => {
    const link = document.createElement("a");
    link.href = "/alex-bussey-resume.pdf";
    link.download = "alex-bussey-resume.pdf";
    link.click();
  };

  return {
    resumeRef,
    tilt,
    isHovering,
    handleMouseMove,
    handleMouseLeave,
    handleMouseEnter,
    handleDownloadPDF,
  };
};
