import { useEffect } from 'react';
import { tv } from 'tailwind-variants';
import { motion } from 'framer-motion';
import ProfileImage from '@/assets/me.jpeg';

const contentSection = tv({
  slots: {
    Container: 'w-full h-min flex flex-col items-center md:items-end',
    ContentContainer: 'md:w-[55vw] min-h-screen px-8 md:px-16 pt-32 text-lg',
    ContentText: 'mt-4 leading-space',
    ContentHeader: 'text-2xl font-semibold',
    ContentTopic: 'text-3xl font-bold',
    Link: 'text-quaternary underline',
    ImageContainer: 'flex justify-center mb-16 md:mb-0',
    MyImage: 'w-64 h-64 md:w-56 md:h-56 my-4 object-cover rounded-full',
  },
});

const {
  Container,
  ContentContainer,
  ContentText,
  ContentHeader,
  ContentTopic,
  Link,
  ImageContainer,
  MyImage,
} = contentSection();

interface NavigationProps {
  aboutMe: React.RefObject<HTMLElement>;
  skills: React.RefObject<HTMLElement>;
  experience: React.RefObject<HTMLElement>;
  projects: React.RefObject<HTMLElement>;
  isNav: boolean;
  setRef: React.Dispatch<React.SetStateAction<React.RefObject<HTMLElement>>>;
}

export default function Content({
  aboutMe,
  skills,
  experience,
  projects,
  isNav,
  setRef,
}: NavigationProps) {
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { ref: aboutMe, name: 'aboutMe' },
        { ref: skills, name: 'skills' },
        { ref: experience, name: 'experience' },
        { ref: projects, name: 'projects' },
      ];

      // Find the section that is currently in view
      const currentSection = sections.find(({ ref }) => {
        if (ref.current && !isNav) {
          const rect = ref.current.getBoundingClientRect();
          return (
            rect.top <= window.innerHeight / 2 &&
            rect.bottom >= window.innerHeight / 2
          );
        }
      });

      if (currentSection && !isNav) {
        setRef(currentSection.ref);
      }
    };

    // Attach the event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [aboutMe, skills, experience, projects, isNav, setRef]);

  return (
    <section className={Container()}>
      <section className={ContentContainer({ class: 'pt-16' })} ref={aboutMe}>
        <div className={ImageContainer()}>
          <motion.img
            whileHover={{ scale: [null, 1.5, 1.4] }}
            transition={{ duration: 0.3 }}
            src={ProfileImage}
            alt="Profile image"
            className={MyImage()}
          />
        </div>
        <h1 className={ContentTopic()}>ABOUT ME</h1>
        <p className={ContentText()}>
          Hello, I'm Phupa Sirirat, a dedicated university student specializing
          in frontend web development. With a focus on crafting seamless user
          experiences, I'm passionate about building dynamic interactions
          between users and websites. While I have some backend proficiency, my
          heart truly lies in frontend work.
          <br />
          <br />
          Beyond coding, I enjoy video games, exploring intriguing projects,
          playing basketball, and delving into captivating manga. I'm eager to
          embark on new web development ventures and contribute my skills to
          exciting projects. Let's connect and create exceptional web
          experiences together!
        </p>
      </section>

      <section className={ContentContainer()} ref={skills}>
        <h1 className={ContentTopic()}>SKILLS</h1>
        <p className={ContentText()}>
          Frontend - HTML/CSS, Vanilla.js, React, Next, TailwindCSS
          <br />
          Backend - Node.js, Express.js, PostgreSQL, MongoDB, RESTful API, JWT,
          Docker
          <br />
          Version Control - Git & GitHub
          <br />
          Web Developement Tools - Vscode, npm, pnpm, vite, PayloadCMS
          <br />
          Other Relevant Skills - SEO Basics, Performance Optimizaiton,
          Responsive Design, UX/UI Principles, I love tailwindCSS
        </p>
      </section>

      <section className={ContentContainer()} ref={experience}>
        <h1 className={ContentTopic()}>EXPERIENCE</h1>
        <p className={ContentText()}>
          <h5 className={ContentHeader()}>Frontend Developer</h5>
          Thinc Web Renovate{' '}
          <span className=" text-tertiary">( Feb 2023 - Oct 2023)</span>
          <ul className="list-disc">
            <li>
              Participated in pre-project analysis and technical assessments to
              validate creation of user-friendly interface.
            </li>
            <li>
              Contributed to back-end experience and collaborated on APIs.
            </li>
            <li>
              Develop and maintain user-facing features for web applications.
            </li>
            <li>
              Collaborate with UX/UI designers to implement designs into
              interactive, responsive web interfaces.
            </li>
            <li>
              Laid groundwork of SEO to increase visibility and enable adding
              fresh pages to site.
            </li>
            <li>
              Use version control systems (e.g., Git) for code management and
              collaboration with a team.
            </li>
          </ul>
        </p>
      </section>

      <section className={ContentContainer()} ref={projects}>
        <h1 className={ContentTopic()}>PROJECTS</h1>
        <p className={ContentText()}>
          <h5 className={ContentHeader()}>
            University and Self-taught Projects :)
          </h5>
          <br />
          Database System Project (CMS) - As a Fullstack Developer{' '}
          <a
            href="https://github.com/PhupaSirirat/DatabaseSystemProject"
            target="_blank"
          >
            <span className={Link()}>Click</span>
          </a>
          <br />
          <br />
          Web Blogs - As a Fullstack Developer using MERN stack{' '}
          <a
            href="https://github.com/PhupaSirirat/mern-workshop"
            target="_blank"
          >
            <span className={Link()}>Click</span>
          </a>
          <br />
          <br />
          TamSangCRUD - As a Fullstack Developer{' '}
          <a
            href="https://github.com/PhupaSirirat/tamsang-crud"
            target="_blank"
          >
            <span className={Link()}>Click</span>
          </a>
          <br />
          <br />
          <span className="text-md">
            I'm currently interested in 3D web development suing ThreeJS and
            Game development using Unity!
          </span>
        </p>
      </section>
    </section>
  );
}
