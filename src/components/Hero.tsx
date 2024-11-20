import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Bell } from 'lucide-react';

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    gsap.to("#page>video", {
      scrollTrigger: {
        trigger: "#page>video",
        start: "2% top",
        end: "bottom top",
        scroller: "#main"
      },
      onStart: () => {
        videoRef.current?.play();
      }
    });

    gsap.to("#page", {
      scrollTrigger: {
        trigger: "#page",
        start: "top top",
        end: "bottom top",
        scroller: "#main",
        pin: true
      }
    });

    gsap.to("#page-bottom", {
      scrollTrigger: {
        trigger: "#page-bottom",
        start: "5% top",
        end: "bottom top",
        scroller: "#main",
        scrub: 0.5,
      },
      opacity: 0
    });
  }, []);

  return (
    <div id="page" className="relative h-screen w-screen bg-black">
      <nav className="absolute top-0 left-1/2 -translate-x-1/2 flex items-center justify-between px-5 h-[7vh] w-1/2 text-white">
        <h3 className="font-normal">Vision Pro</h3>
        <button className="px-5 py-2 rounded-full bg-white text-black">
          <Bell className="w-4 h-4" />
        </button>
      </nav>
      
      <video
        ref={videoRef}
        className="absolute left-1/2 -translate-x-1/2 h-full w-1/2 object-cover"
        src="https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/hero/large_2x.mp4"
        muted
      />
      
      <div id="page-bottom" className="absolute bottom-[5%] left-1/2 -translate-x-1/2 flex flex-col items-center justify-center h-[20%] w-1/4">
        <h3 className="text-[#dadada93] mb-4">Introduction</h3>
        <img 
          src="https://www.apple.com/v/apple-vision-pro/a/images/overview/hero/apple_vision_pro_logo__ux94yix23r6y_large.png"
          alt="Vision Pro Logo"
          className="w-full"
        />   
      </div>
    </div>
  );
}