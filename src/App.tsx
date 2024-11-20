import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import LocomotiveScroll from 'locomotive-scroll';
import { Bell } from 'lucide-react';
import Hero from './components/Hero';
import SpatialComputing from './components/SpatialComputing';
import DigitalCanvas from './components/DigitalCanvas';
import Design from './components/Design';
import Technology from './components/Technology';
import ProductView from './components/ProductView';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mainRef.current) return;
  
    const locoScroll = new LocomotiveScroll({
      el: mainRef.current,
      smooth: true,
    });
  
    locoScroll.on("scroll", () => ScrollTrigger.update());    // Replace 'on' with 'addEventListener' for v5+
  
    ScrollTrigger.scrollerProxy(mainRef.current, {
      scrollTop(value) {
        return arguments.length
          ? locoScroll.scrollTo(value, 0, 0)
          : locoScroll.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      pinType: mainRef.current.style.transform ? "transform" : "fixed",
    });
  
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();
  
    return () => {
      locoScroll.destroy();
    };
  }, []);
  

  return (
    <div id="main" ref={mainRef} className="relative overflow-hidden">
      <Hero />
      <SpatialComputing />
      <DigitalCanvas />
      <Design />
      <Technology />
      <ProductView />
    </div>
  );
}

export default App;