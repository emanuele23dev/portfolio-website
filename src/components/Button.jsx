import PropTypes from 'prop-types';

const ButtonPrimary = ({ 
    href,
    target = "_self",
    label,
    icon,
    classes,
    onClick
 }) => {
    const buttonContent = (
        <div className="glowing-button-container perspective">
            <button 
                className="glowing-button" 
                data-text={`${label} ${icon === 'arrow_downward' ? '↓' : ''}`}
                onClick={onClick}
            >
                <span className="relative z-10 flex items-center gap-2 tracking-wider">
                    {label}
                    {icon && <span className="material-symbols-rounded" aria-hidden="true">{icon}</span>}
                </span>
            </button>
        </div>
    );

    return href ? (
        <a href={href} target={target} onClick={onClick}>{buttonContent}</a>
    ) : buttonContent;
};
 


ButtonPrimary.propTypes = {
    label: PropTypes.string.isRequired,
    href: PropTypes.string,
    target: PropTypes.string,
    icon: PropTypes.string,
    classes: PropTypes.string,
    onClick: PropTypes.func
}

export {
    ButtonPrimary
}