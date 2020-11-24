import { useEffect } from "react";
import $ from "jquery";
export default function useWindowResize(cb) {
  const handleResize = () => {
    cb($(window).width());
  };

  useEffect(() => {
    cb($(window).width());
    window.addEventListener("resize", handleResize);
  }, [cb]);
}
