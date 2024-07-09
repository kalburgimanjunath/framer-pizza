import { motion } from 'framer-motion';
const Hero = () => {
  return (
    <div className="p-20 border rounded-lg m-5 mt-20">
      <motion.h2
        animate={{ scale: 1.5, fontWeight: 'bold' }}
        transition={{ type: 'easeOut', delay: 2 }}
      >
        Welcome to the portal
      </motion.h2>
      <motion.h4
        animate={{ scale: 1.5, y: 10, fontSize: 12, color: 'orange' }}
        transition={{ type: 'easeOut', delay: 2 }}
        className="font-nornal text-sm"
      >
        You will get all types of pizzas...
      </motion.h4>
    </div>
  );
};
export default Hero;
