import { motion } from 'framer-motion';
import { tv } from 'tailwind-variants';

const Nav = tv({
  slots: {
    container: '',
  },
});

const { container } = Nav();

export default function Navigation() {
  return (
    <main className="w-1/2 flex items-center justify-center">
      <motion.div
        className={container()}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 2,
          delay: 0.3,
          ease: [0, 0.51, 0.2, 1.01],
        }}
      >
        <div className="text-quaternary">
          <section>
            <h1 className="text-6xl ">Phupa Sirirat</h1>
            <p className="text-2xl">
              3rd Year Student - Chulalongkorn University
            </p>
          </section>

          <nav className="mt-10">
            <ul className="w-max">
              <li>
                <a href="#" className="group flex items-center py-3 active">
                  <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                  <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                    ABOUT ME
                  </span>
                </a>
              </li>
            </ul>
            <p></p>
          </nav>
        </div>
      </motion.div>
    </main>
  );
}
