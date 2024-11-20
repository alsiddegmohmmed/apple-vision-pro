import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ChevronRight } from 'lucide-react';

export default function Design() {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#page4",
        start: "top top",
        scrub: 1,
        scroller: "#main",
        pin: true
      }
    });

    tl.to("#page4>#center-page4", {
      top: "-50%"
    });
  }, []);

  return (
    <div className="space-y-0">
      <div id="page3" className="relative h-screen w-screen bg-white">
        <div id="page3-upper" className="absolute z-10 top-[5%] left-1/2 -translate-x-1/2 h-[25%] w-[35%]">
          <img
            src="https://www.apple.com/v/apple-vision-pro/a/images/overview/intro/logo__4zgkuyebgtem_large.png"
            alt="Vision Pro Logo"
            className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[70%]"
          />
          <div className="absolute bottom-0 h-[60%] w-full flex items-center justify-between px-20 text-[#ff823d]">
            <h3 className="font-medium">WATCH THE FILM</h3>
            <h3 className="font-medium flex items-center gap-1">
              WATCH THE EVENT <ChevronRight className="w-4 h-4" />
            </h3>
          </div>
        </div>
        <img
          src="https://www.apple.com/v/apple-vision-pro/a/images/overview/design/light_seal__fo87cv0zkcmm_large.jpg"
          alt="Vision Pro"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%]"
        />
        <button className="absolute bottom-[7%] left-1/2 -translate-x-1/2 px-8 py-4 border border-black rounded-full text-[1.4vw] font-medium hover:bg-black hover:text-white transition-colors">
          + Take a closer look at Vision Pro
        </button>
      </div>

      <div id="page4" className="relative h-screen w-screen">
        <video
          className="h-full w-full object-cover"
          src="https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/visionos/large.mp4"
          autoPlay
          loop
          muted
        />
        <div id="center-page4" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-white text-[2vw]">
          <h5>Apps</h5>
          <h1>
            Free your desktop.
            <br />
            And your apps will follow.
          </h1>
        </div>
      </div>
    </div>
  );
}