import { ButtonPrimary } from "./Button";
import logo from '../assets/img/logo.png';

const sitemap = [
  {
    label: 'Home',
    href: '#home'
  },
  {
    label: 'About',
    href: '#about'
  },
  {
    label: 'Work',
    href: '#work'
  },
  {
    label: 'Contact',
    href: '#contact'
  }
];

const socials = [
  {
    label: 'GitHub',
    href: 'https://github.com/emanuele23dev'
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/emanuelemeggiarin/'
  },
  {
    label: 'Behance',
    href: 'https://www.behance.net/EmanueleMeggiarin'
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/emanuele_meggiarin/'
  },
];


const Footer = () => {
    return (
        <footer className="section !pt-6">
            <div className="container">

             <div className="lg:grid lg:grid-cols-2">
                <div className="mb-8">
               <h2 className="headline-2 mb-8 lg:max-w-[12ch]">
    Let&apos;s work together!
                </h2>
                <ButtonPrimary 
                    href="mailto:emanuele.meggiarin@gmail.com"
                    label="Start project"
                    icon='chevron_right'
                />
                </div>
                <div className="grid grid-cols-2 gap-4 lg:pl-20">
                    <div>
                        <p className="mb-2">Sitemap</p>
                        <ul>
                            {sitemap.map(({label, href}, key) => (
                                <li key={key}>
                                    <a
                                    href={href}
                                    className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200"
                                    >
                                        {label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <p className="mb-2">Socials</p>
                        <ul>
                            {socials.map(({label, href}, key) => (
                                <li key={key}>
                                    <a
                                    href={href}
                                    target="_blank"
                                    className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200"
                                    >
                                        {label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>
             </div>

             <div className="flex items-center justify-between pt-10 mb-8">
                <a
                href="/"
                className="shrink-0 mr-6"
                >
                    <img
                    src={logo}
                    width={25}
                    height={25}
                    alt="logo" />
                </a>

                <p className="text-xs">
                    &copy; {new Date().getFullYear()} Emanuele Meggiarin. All rights reserved.
                </p>
             </div>

            </div>
        </footer>
    )
}

export default Footer;