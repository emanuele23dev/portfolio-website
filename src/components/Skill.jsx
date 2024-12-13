import SkillCard from './SkillCard';
import figmaIcon from '../assets/img/figma.svg';
import htmlIcon from '../assets/img/html.png';
import cssIcon from '../assets/img/css3.svg';
import bootstrapIcon from '../assets/img/Boot.svg';
import javascriptIcon from '../assets/img/javascript.svg';
import nodejsIcon from '../assets/img/nodejs.svg';
import expressjsIcon from '../assets/img/expressjs.svg';
import reactIcon from '../assets/img/react.svg';

const skillItem = [
  {
    imgSrc: figmaIcon,
    label: 'Figma',
    desc: 'Design tool'
  },
  {
    imgSrc: htmlIcon,
    label: 'Html',
    desc: 'Base Structure'
  },
  {
    imgSrc: cssIcon,
    label: 'CSS',
    desc: 'User Interface'
  },
  {
    imgSrc: bootstrapIcon,
    label: 'Bootstrap',
    desc: 'Framework CSS'
  },
  {
    imgSrc: javascriptIcon,
    label: 'JavaScript',
    desc: 'Interaction'
  },
  {
    imgSrc: nodejsIcon,
    label: 'NodeJS',
    desc: 'Web Server'
  },
  {
    imgSrc: expressjsIcon,
    label: 'ExpressJS',
    desc: 'Node Framework'
  },
  {
    imgSrc: reactIcon,
    label: 'React',
    desc: 'Framework'
  },
];


const Skill = () => {
  return (
   <section className="section md:pt-8">
    <div className="container">
      <h2 className="headline-2 reveal-up">
        Essential Tools I use
      </h2>
      <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] reveal-up">
        Discover the powerful tools and technologies I use to create exceptional, high-performing websites & applications.
      </p>
      <div className="grid gap-3 grid-cols-[repeat(auto-fill,minmax(250px,_1fr))]">
        {
            skillItem.map(({imgSrc, label, desc}, key) => (
                <SkillCard
                imgSrc={imgSrc} label={label} desc={desc} key={key} classes="reveal-up" />
            ))
        }
      </div>
    </div>
   </section>
  )
}

export default Skill;