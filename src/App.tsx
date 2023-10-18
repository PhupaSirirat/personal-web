import { useRef, useState } from 'react';
import { tv } from 'tailwind-variants';
import Navigation from '@/components/Navigation';
import Content from '@/components/Content';
import Header from './components/Header';
import Footer from './components/Footer';

const MainPage = tv({
  slots: {
    background: 'h-min items-center justify-center bg-prinmary',
    container: 'md:flex',
    mdHide: 'md:hidden',
  },
});

const { background, container, mdHide } = MainPage();

export default function App() {
  const aboutMe = useRef<HTMLElement>(null);
  const skills = useRef<HTMLElement>(null);
  const experience = useRef<HTMLElement>(null);
  const projects = useRef<HTMLElement>(null);
  const [ref, setRef] = useState(aboutMe);
  const [isNav, setNav] = useState(false);

  return (
    <>
      <main className={background()}>
        <div className={mdHide()}>
          <Header />
        </div>
        <div className={container({ class: 'block' })}>
          <Navigation
            aboutMe={aboutMe}
            skills={skills}
            experience={experience}
            projects={projects}
            currentRef={ref}
            setRef={setRef}
            setNav={setNav}
          />
          <Content
            aboutMe={aboutMe}
            skills={skills}
            experience={experience}
            projects={projects}
            setRef={setRef}
            isNav={isNav}
          />
        </div>
        <div className={mdHide()}>
          <Footer />
        </div>
      </main>
    </>
  );
}
