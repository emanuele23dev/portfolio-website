import Navbar from "./Navbar";
import { useState } from "react";
import logo from '../assets/img/logo.png';

export default function AppHeader() {
    const [navOpen, setNavOpen] = useState(false);

    const handleContactClick = (e) => {
        e.preventDefault();
        const contactSection = document.getElementById('contact');
        const contactLink = document.querySelector('a[href="#contact"]');
        
        // Disattiva temporaneamente tutti gli altri link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
        });
        
        // Attiva immediatamente il link contact
        if (contactLink) {
            contactLink.classList.add('active');
            // Simula il click per l'active box
            const clickEvent = new MouseEvent('click', {
                bubbles: true,
                cancelable: true,
                view: window
            });
            contactLink.dispatchEvent(clickEvent);
        }

        // Scroll diretto alla sezione contact
        contactSection.scrollIntoView({ behavior: 'smooth' });
    };

    return ( 
        <header className="fixed top-0 left-0 w-full h-20 flex items-center bg-gradient-to-b from-zinc-900 to-zinc-900/0 z-40">
            <div className="max-w-screen-2xl w-full mx-auto px-4 flex items-center justify-between md:px-6 md:grid md:grid-cols-[1fr,3fr,1fr]">
            
                 <h1>
                    <a href="/" className="logo">
                    <img src={logo} width={30} height={30} alt="logo" />
                    </a>
                 </h1>
             
             <div className="relative md:justify-self-center">
                <button className="menu-btn md:hidden" onClick={() => setNavOpen((prev) => !prev)}>
                    <span className="material-symbols-rounded">{navOpen ? 'close' : 'menu'}</span>
                </button>

                <Navbar navOpen={navOpen}/>
             </div>
             <a 
                href="#contact" 
                className="btn btn-secondary max-md:hidden md:justify-self-end"
                onClick={handleContactClick}
            >
                Contact Me
            </a>
            </div>
        </header>
    );
}
