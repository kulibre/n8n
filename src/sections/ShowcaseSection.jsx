import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each app showcase
    const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          <div ref={rydeRef} className="first-project-wrapper">
            <a href="https://kisanmarkaz.vercel.app/" target="_blank" rel="noopener noreferrer" className="block">
              <div className="image-wrapper">
                <img src="/images/project1.png" alt="Ryde App Interface" />
              </div>
              <div className="text-content">
                <h2>
                  Agriculture Made Simple with a Powerful, User-Friendly Website
                  called KisanMarkaz
                </h2>
                <p className="text-white-50 md:text-xl">
                  A website built with React, Node.js, & TailwindCSS for a fast,
                  user-friendly experience.
                </p>
              </div>
            </a>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={libraryRef}>
              <a href="https://nova-three-hazel.vercel.app/" target="_blank" rel="noopener noreferrer" className="block">
                <div className="image-wrapper bg-[#FFEFDB]">
                  <img
                    src="/images/project2.png"
                    alt="Game Company Landing Page"
                  />
                </div>
                <h2>Game Company Landing Page</h2>
              </a>
            </div>

            <div className="project" ref={ycDirectoryRef}>
              <a href="https://velvetpour-ten.vercel.app/" target="_blank" rel="noopener noreferrer" className="block">
                <div className="image-wrapper bg-[#FFE7EB]">
                  <img src="/images/project3.png" alt="Animated Cocktail Landing Page" />
                </div>
                <h2>Animated Cocktail Landing Page</h2>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;
