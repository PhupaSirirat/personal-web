import { tv } from 'tailwind-variants';
import { motion } from 'framer-motion';
import ProfileImage from '@/assets/me.jpeg';

const contentSection = tv({
  slots: {
    Container: 'w-full h-min flex flex-col items-end',
    ContentContainer: 'w-[55vw] min-h-screen px-16 pt-32 text-lg',
    TextContent: 'mt-4',
    HyperText: 'text-3xl',
  },
});

const { Container, ContentContainer, TextContent, HyperText } =
  contentSection();

interface NavigationProps {
  aboutMe: React.RefObject<HTMLElement>;
  skills: React.RefObject<HTMLElement>;
  experience: React.RefObject<HTMLElement>;
  projects: React.RefObject<HTMLElement>;
}

export default function Content({
  aboutMe,
  skills,
  experience,
  projects,
}: NavigationProps) {
  return (
    <section className={Container()}>
      <section className={ContentContainer({ class: 'pt-16' })} ref={aboutMe}>
        <div className="flex justify-center">
          <motion.img
            whileHover={{ scale: [null, 1.5, 1.4] }}
            transition={{ duration: 0.3 }}
            src={ProfileImage}
            alt="Profile image"
            className="w-48 h-48 my-4 object-cover rounded-full"
          />
        </div>
        <h1 className={HyperText()}>ABOUT ME</h1>
        <p className={TextContent()}>
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
        <h1 className={HyperText()}>SKILLS</h1>
        <p className={TextContent()}>
          Frontend - HTML/CSS, Vanilla.js, React, Next, TailwindCSS
          <br />
          <br />
          Backend - Node.js, Express.js, PostgreSQL, MongoDB, RESTful API, JWT,
          Docker
          <br />
          <br />
          Version Control - Git & GitHub
          <br />
          <br />
          Web Developement Tools - Vscode, npm, pnpm, vite, PayloadCMS
          <br />
          <br />
          Other Relevant Skills - SEO Basics, Performance Optimizaiton,
          Responsive Design, UX/UI Principles
        </p>
      </section>

      <section className={ContentContainer()} ref={experience}>
        <h1 className={HyperText()}>EXPERIENCE</h1>
        <p className={TextContent()}>
          Frontend Developer - Thinc Web Renovate ( Chula ) [ Feb 2023 - current
          ]
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I'm responsible for
          building and implementing the user interface and user experience of
          a website or web application. This involves working on both
          the client-side and the server-side of the web.
        </p>
      </section>

      <section className={ContentContainer()} ref={projects}>
        <h1 className={HyperText()}>PROJECTS</h1>
        <p className={TextContent()}>
          -
        </p>
      </section>
    </section>
  );
}
