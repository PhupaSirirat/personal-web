import { useRef } from 'react';
import { tv } from 'tailwind-variants';
import Navigation from '@/components/Navigation';
import Content from '@/components/Content';

const MainPage = tv({
  slots: {
    background: 'h-min items-center justify-center',
    container: 'flex',
  },
});

const { background, container } = MainPage();

export default function App() {
  const aboutMe = useRef<HTMLElement>(null);
  const experience = useRef<HTMLElement>(null);
  const projects = useRef<HTMLElement>(null);
  return (
    <>
      <main className={background({ class: 'bg-prinmary' })}>
        <div className={container()}>
          <Navigation aboutMe={aboutMe} experience={experience} projects={projects} />
          <Content aboutMe={aboutMe} experience={experience} projects={projects} />
        </div>
      </main>
    </>
  );
}
