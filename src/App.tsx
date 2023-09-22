import { tv } from 'tailwind-variants';
import Navigation from '@/components/Navigation';

const Theme = tv({
  slots: {
    background: 'h-screen items-center justify-center',
    container: 'flex',
  },
});

const { background } = Theme();

export default function App() {
  return (
    <>
      <main className={background({ class: 'bg-prinmary' })}>
          <div className='flex'>
            <Navigation />
            <section className='w-1/2 h-screen bg-secondary'>
              <p>Section 2</p>
            </section>
          </div>
      </main>
    </>
  );
}
