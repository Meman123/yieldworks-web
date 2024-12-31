import gsap from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
gsap.registerPlugin(MotionPathPlugin);
export default function AnimatedFishTemplate() {
  return (
    <iframe
      src="./templates/index.html"
      style={{
        width: "100%",
        height: "100vh",
        border: "none",
      }}
    ></iframe>
  );
}


