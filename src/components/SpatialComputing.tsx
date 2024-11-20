import { useEffect } from 'react';
import { gsap } from 'gsap';

export default function SpatialComputing() {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#page1",
        start: "top top",
        scrub: 1,
        scroller: "#main",
        pin: true
      }
    });

    tl.to("#page1>h1", {
      top: "-50%"
    });
  }, []);

  return (
    <div id="page1" className="relative h-screen w-screen bg-white">
      <video
        className="h-full w-full object-cover"
        src="https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/foundation-spatial-computing/large.mp4"
        autoPlay
        loop
        muted
      />
      <h1 className="absolute bottom-[20%] left-1/2 -translate-x-1/2 text-[4vw] text-white font-normal whitespace-nowrap">
        Welcome to the era of spatial computing
      </h1>
    </div>
  );
}