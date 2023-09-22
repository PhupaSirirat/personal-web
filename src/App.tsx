import { motion } from 'framer-motion';

function App() {
  return (
    <>
      <div className="h-screen flex items-center justify-center">
        <motion.div
          className="w-40 bg-white rounded-lg p-4"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 2,
            delay: 0.3,
            ease: [0, 0.51, 0.2, 1.01],
          }}
        >
          <div className="h-full flex items-center justify-center text-black">
            <p>Phupa Sirirat</p>
          </div>
        </motion.div>
      </div>
    </>
  );
}

export default App;
