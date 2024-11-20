import { useEffect } from 'react';
import { gsap } from 'gsap';

export default function DigitalCanvas() {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#page2",
        start: "top top",
        scrub: 1,
        scroller: "#main",
        pin: true
      }
    });

    tl.to("#page2>h1", {
      top: "-50%"
    });
  }, []);

  return (
    <div id="page2" className="relative h-screen w-screen">
      <video
        className="h-full w-full object-cover"
        src="https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/foundation-digital-canvas/large.mp4"
        autoPlay
        loop
        muted
      />
      <h1 className="absolute bottom-[20%] left-1/2 -translate-x-1/2 text-[4vw] text-white font-normal whitespace-nowrap text-center">
        Apple Vision Pro seamlessly blends <br /> digital content with your physical space.
      </h1>
    </div>
  );
}