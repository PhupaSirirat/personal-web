import { motion } from 'framer-motion';
import { tv } from 'tailwind-variants';
import GitHubIcon from '@/assets/icons/github.svg';
import IGIcon from '@/assets/icons/ig.svg';
import LinkedInIcon from '@/assets/icons/linkedin.svg';
import EmailIcon from '@/assets/icons/email.svg';

const profileSection = tv({
  slots: {
    Container: 'w-full h-48 flex flex-col items-center justify-center',
    Contact: 'mt-4 flex items-center justify-center gap-4',
    Icon: 'w-10 h-10',
    Location: 'flex items-center gap-2 mt-6',
    Credit: 'text-sm mt-16',
  },
});

const { Container, Contact, Icon } = profileSection();

export default function Footer() {
  return (
    <div className={Container()}>
      <p>Contact</p>
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
              <img src={LinkedInIcon} alt="LinkedIn icon" className={Icon()} />
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
              <img src={EmailIcon} alt="Email icon" className={Icon()} />
            </a>
          </motion.div>
        </li>
      </ul>
    </div>
  );
}
