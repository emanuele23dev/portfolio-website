import { useRef, useEffect } from "react";
import PropTypes from "prop-types";

export default function Navbar({ navOpen }) {
    const lastActiveLink = useRef();
    const activeBox = useRef();
    const isScrolling = useRef(false);

    const initActiveBox = () => {
        if (lastActiveLink.current && activeBox.current) {
            requestAnimationFrame(() => {
                activeBox.current.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
                activeBox.current.style.top = lastActiveLink.current.offsetTop + "px";
                activeBox.current.style.left = lastActiveLink.current.offsetLeft + "px";
                activeBox.current.style.width = lastActiveLink.current.offsetWidth + "px";
                activeBox.current.style.height = lastActiveLink.current.offsetHeight + "px";
            });
        }
    }

    const setActiveLink = (link, immediate = false) => {
        if (!link) return;
        
        document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
        link.classList.add('active');
        lastActiveLink.current = link;

        if (immediate && activeBox.current) {
            activeBox.current.style.transition = 'none';
        }
        
        initActiveBox();
        
        // Ripristina la transizione dopo l'aggiornamento immediato
        if (immediate) {
            requestAnimationFrame(() => {
                activeBox.current.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
            });
        }
    }

    useEffect(() => {
        const homeLink = document.querySelector('a[href="#home"]');
        setActiveLink(homeLink, true);

        const handleScroll = () => {
            if (isScrolling.current) return;

            const navbarHeight = 80;
            const scrollPosition = window.scrollY + navbarHeight;

            const sections = Array.from(document.querySelectorAll('section[id]'));
            
            let activeSection = null;
            
            for (const section of sections) {
                const sectionTop = section.offsetTop - navbarHeight;
                const sectionBottom = sectionTop + section.offsetHeight;
                
                if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                    activeSection = section;
                    break;
                }
            }

            if (window.scrollY === 0) {
                setActiveLink(homeLink);
                return;
            }

            if (activeSection) {
                const correspondingLink = document.querySelector(`a[href="#${activeSection.id}"]`);
                setActiveLink(correspondingLink);
            }
        };

        let scrollTimeout;
        const throttledScroll = () => {
            if (scrollTimeout) return;
            
            scrollTimeout = setTimeout(() => {
                handleScroll();
                scrollTimeout = null;
            }, 100);
        };

        window.addEventListener('scroll', throttledScroll, { passive: true });
        window.addEventListener('resize', initActiveBox);
        
        handleScroll();
        
        return () => {
            window.removeEventListener('scroll', throttledScroll);
            window.removeEventListener('resize', initActiveBox);
            if (scrollTimeout) clearTimeout(scrollTimeout);
        };
    }, []);

    const activeCurrentLink = (event) => {
        event.preventDefault();
        const targetId = event.target.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        
        if (targetSection) {
            isScrolling.current = true;
            setActiveLink(event.target);
            
            const navbarHeight = 80;
            const targetPosition = targetSection.offsetTop - navbarHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
            
            setTimeout(() => {
                isScrolling.current = false;
            }, 1000);
        }
    }

    const navItems = [
        {
            label: 'Home',
            link: '#home',
            className: 'nav-link',
            ref: lastActiveLink
        },
        {
            label: 'About',
            link: '#about',
            className: 'nav-link'
        },
        {
            label: 'Work',
            link: '#work',
            className: 'nav-link'
        },
        {
            label: 'Contact',
            link: '#contact',
            className: 'nav-link'
        }
    ];

    return (
        <nav className={'navbar ' + (navOpen ? 'active' : '')}>
            {navItems.map(({ label, link, className, ref }, key) => (
                <a 
                    href={link} 
                    key={key} 
                    ref={ref}
                    className={className} 
                    onClick={activeCurrentLink}
                >
                    {label}
                </a>
            ))}
            <div className="active-box" ref={activeBox}></div>
        </nav>
    )
}

Navbar.propTypes = {
    navOpen: PropTypes.bool.isRequired
}
