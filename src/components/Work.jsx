import ProjectCard from "./ProjectCard";
import project1 from '../assets/img/project-1.jpg';
import project2 from '../assets/img/project-2.jpg';
import project3 from '../assets/img/project-3.png';
import project4 from '../assets/img/project-4.jpg';
import project5 from '../assets/img/project-5.jpg';
import project6 from '../assets/img/project-6.jpg';

const works = [
  {
    imgSrc: project1,
    title: 'Spotify app',
    tags: ['Development', 'Frontend', 'App'],
  },
  {
    imgSrc: project2,
    title: 'Photographer Website',
    tags: ['UX', 'UI', 'Web Design'],
  },
  {
    imgSrc: project3,
    title: 'Dropbox Clone',
    tags: ['Development', 'Website', 'Frontend'],
  },
  {
    imgSrc: project4,
    title: 'E-Movers',
    tags: ['UX', 'UI', 'Web Design'],
  },
    {
    imgSrc: project5,
    title: 'Meta',
    tags: ['UX', 'UI', 'Frontend'],
  },
  {
    imgSrc: project6,
    title: 'Hera-V',
    tags: ['Development', 'Website', 'Frontend'],
  },
];

const Work = () => {
    return (
        <section id="work" className="section md:pt-8">
            <div className="container">
                <h2 className="headline-2 mb-10 reveal-up">
                    My portfolio
                </h2>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {works.map(({imgSrc, title, tags}, key) => (
                        <ProjectCard 
                            imgSrc={imgSrc} 
                            title={title} 
                            tags={tags} 
                            key={key} 
                            classes="reveal-up"
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}
export default Work;