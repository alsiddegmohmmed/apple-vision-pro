import { useEffect } from 'react';
import { gsap } from 'gsap';

export default function Technology() {
  useEffect(() => {
    gsap.to("#page23>img", {
      scrollTrigger: {
        trigger: "#page23>img",
        start: "top bottom",
        end: "bottom 60%",
        scrub: 0.5,
        scroller: "#main",
      },
      opacity: 1,
    });
  }, []);

  return (
    <div className="space-y-0">
      {/* Technology Header */}
      <div id="page17" className="relative h-screen w-screen flex flex-col items-center justify-center bg-black text-white">
        <h4 className="text-[2vw] font-medium mb-8">Technology</h4>
        <h1 className="text-[5vw] leading-none font-medium mb-12 text-center">
          Innovation you can <br /> see, hear, and feel.
        </h1>
        <p className="text-[1.5vw] font-medium text-[#ffffff7c] w-1/2 text-center">
          <span className="text-white">Pushing boundaries from the inside out.</span> Spatial experiences on Vision Pro are only possible through groundbreaking Apple technology. Displays the size of a postage stamp that deliver more pixels than a 4K TV to each eye. Incredible advances in Spatial Audio. A revolutionary dual‑chip design featuring custom Apple silicon. A sophisticated array of cameras and sensors. All the elements work together to create an unprecedented experience you have to see to believe.
        </p>
      </div>

      {/* Display Information */}
      <div id="page19" className="flex flex-col items-center justify-center text-white h-[30vh] w-screen bg-black">
        <h1 className="text-[4vw] font-medium mb-6">More pixels than a 4K TV. For each eye.</h1>
        <h5 className="text-[1.5vw] w-[35%] text-center">
          The custom micro‑OLED display system features 23 million pixels, delivering stunning resolution and colors. And a specially designed three‑element lens creates the feeling of a display that's everywhere you look.
        </h5>
      </div>

      {/* Video Section */}
      <div id="page20" className="relative h-screen w-screen bg-black">
        <video
          className="h-full w-full object-cover"
          src="https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/spatial-audio/large.mp4"
          autoPlay
          loop
          muted
        />
        <div id="center-page20" className="absolute h-[20%] w-[20%] bottom-[18%] right-[5%] text-white">
          <h1 className="mb-7">Our most advanced <br /> Spatial Audio system ever.</h1>
          <p>Dual-driver audio pods positioned next to each ear deliver personalized sound while letting you hear what's around you. Ambient Spatial Audio makes sounds feel like they're coming from your surroundings.</p>
        </div>
      </div>
    </div>
  );
}
