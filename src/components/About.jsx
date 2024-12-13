import logo from '../assets/img/logo.png';

const aboutItems = [
  {
    label: "Project done",
    number: 45,
  },
  {
    label: "Years of learning",
    number: 1,
  },
];

const About = () => {
  return (
    <section id="about" className="section md:mb-10">
      <div className="container">
        <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up">
          <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[75ch]">
            Welcome! I&apos;m Emanuele, a junior web developer eager to enhance
            my skills and grow in the field. I have a passion for creating
            visually appealing and functional websites. With a blend of
            creativity and a willingness to learn, I strive to turn your ideas
            into engaging digital experiences that prioritize both aesthetics
            and performance.
          </p>
          <div className="flex flex-wrap items-center gap-4 md:gap-7">
            {
            aboutItems.map(({label, number}, key) => (
              <div key={key}>
                <div className="flex items-center md:mb-2">
                  <span className="text-2xl font-bold md:text-4xl">{number}</span>
                  <span className="text-sky-400 font-bold md:text-3xl">+</span>
                </div>
                <p className="text-sm text-zinc-400">{label}</p>
              </div>
            ))
            }

            <a href="/" className="ml-auto md:w-[40px]">
            <img src={logo} width={30} height={30} alt="" />
            </a>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
