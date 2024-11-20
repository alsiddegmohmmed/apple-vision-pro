declare module 'locomotive-scroll' {
    interface LocomotiveScrollOptions {
      el: HTMLElement;
      smooth: boolean;
      [key: string]: any;
    }
  
    export default class LocomotiveScroll {
      constructor(options: LocomotiveScrollOptions);
      on(event: string, callback: (args?: any) => void): void; // for v4.x
      addEventListener(event: string, callback: (args?: any) => void): void; // for v5.x
      scrollTo(target: string | HTMLElement, options?: object): void;
      update(): void;
      destroy(): void;
    }
  }
  