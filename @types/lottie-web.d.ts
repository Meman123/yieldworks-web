declare module "lottie-web" {
    export interface AnimationConfig {
      container: HTMLElement;
      renderer?: "svg" | "canvas" | "html";
      loop?: boolean | number;
      autoplay?: boolean;
      animationData?: any;
      path?: string;
    }
  
    export interface AnimationItem {
      play(): void;
      stop(): void;
      pause(): void;
      destroy(): void;
    }
  
    export function loadAnimation(options: AnimationConfig): AnimationItem;
  }
  