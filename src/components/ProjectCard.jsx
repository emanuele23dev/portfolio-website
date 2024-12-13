import PropTypes from 'prop-types';

const ProjectCard = ({imgSrc, title, tags, classes}) => {
    return (
       <div className={'card relative p-4 rounded-2xl bg-zinc-700 hover:bg-zinc-600/50 active:bg-zinc-600/60 ring-1 ring-inset ring-zinc-50/5 transition-colors' + (classes || '')}>
        <figure className='img-box aspect-square rounded-lg mb-4 overflow-hidden'>
            <img src={imgSrc} alt={title} loading='lazy' className='img-cover w-full h-full' />
        </figure>

        <div className='mt-4 flex justify-between items-start'>
           <div>
            <h3 className='title-1 mb-2'>
                {title}
            </h3>

            <div className='flex flex-wrap gap-2'>
                {tags.map((label, key) => (
                    <span key={key} className='px-2 py-1 bg-zinc-800 text-zinc-400 rounded text-sm'>
                        {label}
                    </span>
                ))}
            </div>
           </div>

        
        </div>

       
       </div>
    )
}
ProjectCard.propTypes = {
    imgSrc: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    tags: PropTypes.array.isRequired,
    classes: PropTypes.string,
}
export default ProjectCard;