import { motion } from 'framer-motion';
import { tv } from 'tailwind-variants';

import GitHubIcon from '@/assets/icons/github.svg';
import IGIcon from '@/assets/icons/ig.svg';
import LinkedInIcon from '@/assets/icons/linkedin.svg';
import EmailIcon from '@/assets/icons/email.svg';
import LocationIcon from '@/assets/icons/location.svg';
import { useState, useEffect } from 'react';

const profileSection = tv({
  slots: {
    Container: 'w-1/2 flex flex-col mt-28 items-center text-white fixed',
    MyName: 'text-6xl mb-4 font-bold',
    Text: 'text-xl font-extralight',
    Nav: 'mt-16',
    NavLine:
      'mr-4 h-px w-8 bg-white transition-all group-hover:w-16 group-hover:bg-quaternary group-focus-visible:w-16 group-focus-visible:bg-quaternary motion-reduce:transition-none hover:active',
    NavText:
      'text-xs font-bold uppercase tracking-widest group-hover:text-quaternary group-focus-visible:text-quaternary',
    Link: 'group flex items-center py-3 cursor-pointer',
    NavList: 'w-max',
    Contact: 'w-40 mt-20 flex gap-4',
    Icon: 'w-5 h-5',
    Location: 'flex items-center gap-2 mt-6',
  },
});

const {
  Container,
  MyName,
  Text,
  Nav,
  NavLine,
  NavText,
  NavList,
  Link,
  Contact,
  Icon,
  Location,
} = profileSection();

interface NavigationProps {
  aboutMe: React.RefObject<HTMLElement>;
  skills: React.RefObject<HTMLElement>;
  experience: React.RefObject<HTMLElement>;
  projects: React.RefObject<HTMLElement>;
}

export default function Navigation({
  aboutMe,
  skills,
  experience,
  projects,
}: NavigationProps) {
  const [ref, setRef] = useState(aboutMe);
  const scrollToRef = (ref: React.RefObject<HTMLElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  useEffect(() => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [ref]);

  return (
    <section className={Container()}>
      <div>
        <div>
          <h1 className={MyName()}>Phupa Sirirat</h1>
          <p className={Text()}>
            3rd Year Student - Faculty of Computer Science <br />
            Chulalongkorn University
          </p>
        </div>

        <nav className={Nav()}>
          <ul className={NavList()}>
            <li>
              <motion.a
                className={Link({
                  class: `${ref === aboutMe ? 'active' : ''}`,
                })}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  scrollToRef(aboutMe);
                  setRef(aboutMe);
                }}
              >
                <span className={NavLine()} />
                <p className={NavText()}>ABOUT ME</p>
              </motion.a>
            </li>
            <li>
              <motion.a
                className={Link({
                  class: `${ref === skills ? 'active' : ''}`,
                })}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  scrollToRef(skills);
                  setRef(skills);
                }}
              >
                <span className={NavLine()} />
                <p className={NavText()}>SKILLS</p>
              </motion.a>
            </li>
            <li>
              <motion.a
                className={Link({
                  class: `${ref === experience ? 'active' : ''}`,
                })}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  scrollToRef(experience);
                  setRef(experience);
                }}
              >
                <span className={NavLine()} />
                <p className={NavText()}>EXPERIENCE</p>
              </motion.a>
            </li>
            <li>
              <motion.a
                className={Link({
                  class: `${ref === projects ? 'active' : ''}`,
                })}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  scrollToRef(projects);
                  setRef(projects);
                }}
              >
                <span className={NavLine()} />
                <p className={NavText()}>PROJECTS</p>
              </motion.a>
            </li>
          </ul>
          <p></p>
        </nav>

        <ul className={Contact()}>
          <li>
            <motion.div
              whileHover={{ scale: 1.4 }}
              whileTap={{
                scale: 0.8,
                borderRadius: '100%',
              }}
            >
              <a href="https://github.com/PhupaSirirat" target="_blank">
                <img src={GitHubIcon} alt="GitHub icon" className={Icon()} />
              </a>
            </motion.div>
          </li>
          <li>
            <motion.div
              whileHover={{ scale: 1.4 }}
              whileTap={{
                scale: 0.8,
                borderRadius: '100%',
              }}
            >
              <a href="https://www.instagram.com/okb.p_al.gos/" target="_blank">
                <img src={IGIcon} alt="IG icon" className={Icon()} />
              </a>
            </motion.div>
          </li>
          <li>
            <motion.div
              whileHover={{ scale: 1.4 }}
              whileTap={{
                scale: 0.8,
                borderRadius: '100%',
              }}
            >
              <a
                href="https://www.linkedin.com/in/phupa-sirirat-948381231/"
                target="_blank"
              >
                <img
                  src={LinkedInIcon}
                  alt="LinkedIn icon"
                  className={Icon()}
                />
              </a>
            </motion.div>
          </li>
          <li>
            <motion.div
              whileHover={{ scale: 1.4 }}
              whileTap={{
                scale: 0.8,
                borderRadius: '100%',
              }}
            >
              <a href="mailto:phupasirirat@gmail.com" target="_blank">
                <img src={EmailIcon} alt="Email icon" className="w-5 h-5" />
              </a>
            </motion.div>
          </li>
        </ul>

        <div className={Location()}>
          <img src={LocationIcon} alt="Location icon" className={Icon()} />
          <p>Bangkok, Thailand</p>
        </div>
      </div>
    </section>
  );
}
