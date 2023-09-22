import { motion } from 'framer-motion';
import { tv } from 'tailwind-variants';

import GitHub from '@/assets/icons/github.svg';
import IG from '@/assets/icons/ig.svg';
import LinkedIn from '@/assets/icons/linkedin.svg';

const profileSection = tv({
  slots: {
    Container: 'w-1/2 flex flex-col mt-28 items-center text-white fixed',
    MyName: 'text-6xl mb-4 font-bold',
    Text: 'text-xl font-extralight',
    Nav: 'mt-10',
    NavLine:
      'mr-4 h-px w-8 bg-white transition-all group-hover:w-16 group-hover:bg-quaternary group-focus-visible:w-16 group-focus-visible:bg-quaternary motion-reduce:transition-none',
    NavText:
      'text-xs font-bold uppercase tracking-widest group-hover:text-quaternary group-focus-visible:text-quaternary',
    Link: 'group flex items-center py-3 cursor-pointer',
    NavList: 'w-max',
    LinkTree: 'w-32 mt-16 flex gap-4',
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
  LinkTree,
} = profileSection();

export default function Navigation() {
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
                className={Link()}
                whileTap={{ scale: 0.95 }}
              >
                <span className={NavLine()} />
                <span className={NavText()}>ABOUT ME</span>
              </motion.a>
            </li>
            <li>
              <motion.a
                className={Link()}
                whileTap={{ scale: 0.95 }}
              >
                <span className={NavLine()} />
                <span className={NavText()}>EXPERIENCE</span>
              </motion.a>
            </li>
            <li>
              <motion.a
                className={Link()}
                whileTap={{ scale: 0.95 }}
              >
                <span className={NavLine()} />
                <span className={NavText()}>PROJECTS</span>
              </motion.a>
            </li>
          </ul>
          <p></p>
        </nav>

        <ul className={LinkTree()}>
          <li>
            <motion.div
              whileHover={{ scale: 1.2 }}
              whileTap={{
                scale: 0.8,
                borderRadius: '100%',
              }}
            >
              <a href="https://github.com/PhupaSirirat" target="_blank">
                <img src={GitHub} alt="GitHub icon" />
              </a>
            </motion.div>
          </li>
          <li>
            <motion.div
              whileHover={{ scale: 1.2 }}
              whileTap={{
                scale: 0.8,
                borderRadius: '100%',
              }}
            >
              <a href="https://www.instagram.com/okb.p_al.gos/" target="_blank">
                <img src={IG} alt="IG icon" />
              </a>
            </motion.div>
          </li>
          <li>
            <motion.div
              whileHover={{ scale: 1.2 }}
              whileTap={{
                scale: 0.8,
                borderRadius: '100%',
              }}
            >
              <a
                href="https://www.linkedin.com/in/phupa-sirirat-948381231/"
                target="_blank"
              >
                <img src={LinkedIn} alt="LinkedIn icon" />
              </a>
            </motion.div>
          </li>
        </ul>
      </div>
    </section>
  );
}
