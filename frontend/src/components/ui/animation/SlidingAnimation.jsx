import { motion, AnimatePresence } from 'framer-motion';
import { OptionButton } from '../../../pages/Settings/Settings.styles';
import './SlidingAnimation.css';
import { useState } from 'react';

const SlidingAnimation = ({ option1, option2, handleOpen }) => {
  const [isActive, setIsActive] = useState(option1);

  const checkActive = option => {
    if (option === isActive) return true;
  };

  return (
    <div>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1, ease: 'easeInOut' }}
            onClick={() => handleOpen(option1)}
          >
            <OptionButton
              onClick={() => setIsActive(option1)}
              className={checkActive(option1) ? 'activeClass' : 'inactiveClass'}
            >
              {option1}
            </OptionButton>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2, ease: 'easeInOut' }}
            onClick={() => handleOpen(option2)}
          >
            <OptionButton
              onClick={() => setIsActive(option2)}
              className={checkActive(option2) ? 'activeClass' : 'inactiveClass'}
            >
              {option2}
            </OptionButton>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default SlidingAnimation;
