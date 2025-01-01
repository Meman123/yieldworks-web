"use client"; // Asegura que el archivo es un componente cliente

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger, MotionPathPlugin } from "gsap/all";
import '../styles/weird-fishes.css';


// Registrar los plugins de GSAP
gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

const WeirdFishes = () => {
  useEffect(() => {
    // Ajustes de escala para diferentes tamaños de pantalla
    const rx = window.innerWidth < 1000 ? window.innerWidth / 1200 : 1;
    const ry = window.innerHeight < 700 ? window.innerHeight / 1200 : 1;

    // Trayectoria del pez
    const path = [
      { x: 800, y: 200 },
      { x: 900, y: 20 },
      { x: 1100, y: 100 },
      { x: 1000, y: 200 },
      { x: 900, y: 20 },
      { x: 10, y: 500 },
      { x: 100, y: 300 },
      { x: 500, y: 400 },
      { x: 1000, y: 200 },
      { x: 1100, y: 300 },
      { x: 400, y: 400 },
      { x: 200, y: 250 },
      { x: 100, y: 300 },
      { x: 500, y: 450 },
      { x: 1100, y: 500 },
    ];

    // Escalar la trayectoria al tamaño de la pantalla
    const scaledPath = path.map(({ x, y }) => ({
      x: x * rx,
      y: y * ry,
    }));

    // Seleccionar elementos del DOM
    const sections: HTMLElement[] = [...document.querySelectorAll("section")];
    const fish = document.querySelector<HTMLElement>(".fish");
    const fishHeadAndBody = [
      ...document.querySelectorAll<HTMLElement>(".fish__head"),
      ...document.querySelectorAll<HTMLElement>(".fish__body"),
    ];
    const lights = [...document.querySelectorAll<HTMLElement>("[data-lights]")];
    //const rays = document.querySelector<HTMLElement>("[data-rays]");

    // Animación de burbujas
    const bubbles = gsap.timeline();
    bubbles.set(".bubbles__bubble", { y: 100 });
    bubbles.to(".bubbles__bubble", {
      scale: 1.2,
      y: -300,
      opacity: 1,
      duration: 2,
      stagger: 0.2,
    });
    bubbles.to(
      ".bubbles__bubble",
      {
        scale: 1,
        opacity: 0,
        duration: 1,
      },
      "-=1"
    );

    bubbles.pause();

    // Animación principal del pez
    const tl = gsap.timeline({
      scrollTrigger: {
        scrub: 1.5,
      },
    });
    tl.to(fish, {
      motionPath: {
        path: scaledPath,
        align: "self",
        alignOrigin: [0.5, 0.5],
        autoRotate: true,
      },
      duration: 10,
      immediateRender: true,
    });
    tl.to(".indicator", { opacity: 0 }, 0);
    tl.to(fish, { rotateX: 180 }, 1);
    tl.to(fish, { rotateX: 0 }, 2.5);
    tl.to(fish, { z: -500, duration: 2 }, 2.5);
    tl.to(fish, { rotateX: 180 }, 4);
    tl.to(fish, { rotateX: 0 }, 5.5);
    tl.to(fish, { z: -50, duration: 2 }, 5);
    tl.to(fish, { rotate: 0, duration: 1 }, "-=1");
    tl.to(".fish__skeleton", { opacity: 0.6, duration: 0.1, repeat: 4 }, "-=3");
    tl.to(fishHeadAndBody, { opacity: 0, duration: 0.1, repeat: 4 }, "-=3");
    tl.to(".fish__inner", { opacity: 0.1, duration: 1 }, "-=1");
    tl.to(".fish__skeleton", { opacity: 0.1, duration: 1 }, "-=1");

    bubbles.play();
    tl.pause();

    // Animación de luces
    const lightsTl = gsap.timeline({
      scrollTrigger: {
        scrub: 6,
      },
    });
    lightsTl.from(lights[0], {
      x: window.innerWidth * -1,
      y: window.innerHeight,
      ease: "power4.out",
      duration: 80,
    }, 0);
    lightsTl.to(lights[0], {
      x: window.innerWidth,
      y: window.innerHeight * -1,
      ease: "power4.out",
      duration: 80,
    }, "-=5");

    // Función para generar burbujas
    const makeBubbles = (p: HTMLParagraphElement, i: number) => {
      const { top, left } = fish?.getBoundingClientRect() || { top: 0, left: 0 };
      gsap.to(p, { opacity: 1, duration: 1 });
      gsap.set(".bubbles", { x: left, y: top });
      if (bubbles.paused()) {
        bubbles.restart();
      }
      if (i > 6) {
        gsap.to(".bubbles", { opacity: 0 });
      }
    };

    // Función para rotar el pez
    const rotateFish = (self: ScrollTrigger) => {
      if (self.direction === -1) {
        gsap.to(fish, { rotationY: 180, duration: 0.4 });
      } else {
        gsap.to(fish, { rotationY: 0, duration: 0.4 });
      }
    };

    // Función para ocultar texto
    const hideText = (p: HTMLParagraphElement) => {
      gsap.to(p, { opacity: 0, duration: 1 });
    };

    // Configuración de animaciones por sección
    sections.forEach((section, i) => {
      const p = section.querySelector("p") as HTMLParagraphElement;
      gsap.to(p, { opacity: 0 });

      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        onEnter: () => makeBubbles(p, i),
        onEnterBack: () => {
          if (i <= 6) {
            gsap.to(".bubbles", { opacity: 1 });
          }
        },
        onLeave: () => {
          hideText(p);
          if (i === 0) {
            gsap.to(".rays", {
              opacity: 0,
              y: -500,
              duration: 8,
              ease: "power4.in",
            });
          }
        },
        onLeaveBack: () => hideText(p),
        onUpdate: (self) => rotateFish(self),
      });
    });
  }, []);

  return (
    <>
      <>
  <p className="indicator">
    <span>Scroll</span>
    <span>↓</span>
  </p>
  <div className="fish-wrapper">
    <div className="fish">
      <div className="fish__skeleton" />
      <div className="fish__inner">
        {/*body*/}
        <div className="fish__body" />
        <div className="fish__body" />
        <div className="fish__body" />
        <div className="fish__body" />
        {/*head*/}
        <div className="fish__head" />
        <div className="fish__head fish__head--2" />
        <div className="fish__head fish__head--3" />
        <div className="fish__head fish__head--4" />
        <div className="fish__tail-main" />
        <div className="fish__tail-fork" />
        <div className="fish__fin" />
        <div className="fish__fin fish__fin--2" />
      </div>
    </div>
  </div>
  <div className="bubbles">
    <div className="bubbles__inner">
      <div className="bubbles__bubble" />
      <div className="bubbles__bubble" />
      <div className="bubbles__bubble" />
    </div>
  </div>
  <div className="rays">
    <div data-rays="" />
  </div>
  <div className="lights">
    <div className="lights__group" data-lights={1}>
      <div className="lights__light" />
      <div className="lights__light" />
      <div className="lights__light" />
      <div className="lights__light" />
      <div className="lights__light" />
      <div className="lights__light" />
      <div className="lights__light" />
      <div className="lights__light" />
    </div>
  </div>
  <div className="content">
    <section>
      <div className="section__content">
        <p>Nada hacia abajo...</p>
      </div>
    </section>
    <section>
      <div className="section__content">
        <p>mas abajo</p>
      </div>
    </section>
    <section>
      <div className="section__content">
        <p></p>
      </div>
    </section>
    <section>
      <div className="section__content">
        <p></p>
      </div>
    </section>
    <section>
      <div className="section__content">
        <p>Un poco mas</p>
      </div>
    </section>
    <section>
      <div className="section__content">
        <p></p>
      </div>
    </section>
    <section>
      <div className="section__content">
        <p></p>
      </div>
    </section>
    <section>
      <div className="section__content">
        <p></p>
      </div>
    </section>
    <section>
      <div className="section__content">
        <p>Ya casi...</p>
      </div>
    </section>
    <section>
      <div className="section__content">
        <p></p>
      </div>
    </section>
    <section>
      <div className="section__content">
        <p>Alejito Marica</p>
      </div>
    </section>
  </div>
</>

    </>
  );
};

export default WeirdFishes;
