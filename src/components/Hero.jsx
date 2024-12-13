import { ButtonPrimary } from "./Button";
import TypewriterText from "./TypewriterText";
import avatar from '../assets/img/avatar-1.jpg';
import robotImage from '../assets/img/robot.jpg';

const Hero = () => {
  const handleScrollDown = (e) => {
    e.preventDefault();
    const aboutSection = document.getElementById('about');
    const aboutLink = document.querySelector('a[href="#about"]');
    
    // Simula il click sul link nella nav per una transizione fluida
    if (aboutLink) {
      const clickEvent = new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
        view: window
      });
      aboutLink.dispatchEvent(clickEvent);
    }
  };

  return (
    <section id="home" className="pt-28 lg:pt-36">
      <div className="container lg:grid lg:grid-cols-2 items-center lg:gap-10">
        <div>
          <div className="flex items-center gap-3">
            <figure className="img-box w-9 h-9 rounded-lg">
              <img
                className="img-cover"
                src={avatar}
                alt="avatar"
              />
            </figure>

            <div className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide">
              <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping"></span>
              </span>
              Available
            </div>
          </div>

          <h2 className="headline-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-8 lg:mb-10 leading-[1.8] lg:leading-[1.5]">
            <TypewriterText text="Building Scalable Modern Websites for the Future" />
          </h2>

          <div className="flex items-center gap-3">
            <ButtonPrimary
              href="#about"
              onClick={handleScrollDown}
              label="Scroll down"
              icon="arrow_downward"
            />
          </div>
        </div>

        <div className="hidden lg:block">
          <figure className="w-full max-w-[480px] ml-auto overflow-hidden">
            <img
              width={656}
              height={800}
              className="w-full rounded-lg"
              src={robotImage}
              alt="hero"
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Hero;
