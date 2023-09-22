import { tv } from 'tailwind-variants';
import Navigation from '@/components/Navigation';
import Content from '@/components/Content';

const Theme = tv({
  slots: {
    background: 'h-min items-center justify-center',
    container: 'flex',
  },
});

const { background, container } = Theme();

export default function App() {
  return (
    <>
      <main className={background({ class: 'bg-prinmary' })}>
        <div className={container()}>
          <Navigation />
          <Content />
        </div>
      </main>
    </>
  );
}
