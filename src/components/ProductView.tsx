import { useEffect } from 'react';
import { gsap } from 'gsap';

export default function ProductView() {
  useEffect(() => {
    // Eye tracking transition animation
    const tl1 = gsap.timeline({
      scrollTrigger: {
        trigger: "#page21",
        start: "top top",
        scrub: 1,
        scroller: "#main",
        pin: true
      }
    });

    tl1.to("#page21>#troff", {
      opacity: 0
    });

    // Sensors visualization animation
    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: "#page22",
        start: "top top",
        scrub: 1,
        scroller: "#main",
        pin: true
      }
    });

    tl2.to("#page22>#snroff", {
      opacity: 0
    });

    // Final technology reveal animation
    gsap.to("#page23>img", {
      scrollTrigger: {
        trigger: "#page23>img",
        start: "top bottom",
        end: "bottom 60%",
        scrub: 0.5,
        scroller: "#main"
      },
      opacity: 1
    });
  }, []);

  return (
    <div className="space-y-0">
      {/* Eye Tracking Transition */}
      <div id="page21" className="relative h-screen w-screen bg-black">
        <img
          id="troff"
          src="https://www.apple.com/v/apple-vision-pro/a/images/overview/technology/features/eye_tracking_off__fx6m2dj3mlqq_large.jpg"
          alt="Eye Tracking Off"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 z-10"
        />
        <img
          id="tron"
          src="https://www.apple.com/v/apple-vision-pro/a/images/overview/technology/features/eye_tracking_on__ln11reqs6mi6_large.jpg"
          alt="Eye Tracking On"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2"
        />
      </div>

      {/* Sensors Visualization */}
      <div id="page22" className="relative h-screen w-screen bg-black">
        <img
          id="snroff"
          src="https://www.apple.com/v/apple-vision-pro/a/images/overview/technology/features/sensors_off__cfzcmow4c3f6_large.jpg"
          alt="Sensors Off"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 z-10"
        />
        <img
          id="snron"
          src="https://www.apple.com/v/apple-vision-pro/a/images/overview/technology/features/sensors_all__dp0a8e4y4u4i_large.jpg"
          alt="Sensors On"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2"
        />
      </div>

      {/* Technology Overview */}
      <div id="page23" className="relative h-screen w-screen bg-black">
        <img
          src="https://www.apple.com/v/apple-vision-pro/a/images/overview/technology/features/sensors_chips__s805s5o3gkii_medium.jpg"
          alt="Vision Pro Technology"
          className="h-full w-full object-cover opacity-0"
        />
      </div>
    </div>
  );
}