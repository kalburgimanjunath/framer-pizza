import { motion } from 'framer-motion';
export default function Header() {
  const menuitems = ['home', 'products', 'cart', 'contactus'];
  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'easeIn', delay: 1 }}
      className="flex bg-pink-100 fixed top-0 w-full shadow-lg font-bold justify-between"
    >
      {menuitems &&
        menuitems.map((item, index) => {
          return (
            <motion.div
              key={index}
              className="p-2 hover:bg-green-100 cursor-pointer "
            >
              {item.toLocaleUpperCase()}
            </motion.div>
          );
        })}
    </motion.div>
  );
}
