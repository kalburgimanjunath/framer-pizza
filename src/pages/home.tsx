import Hero from '../components/hero';
import { motion } from 'framer-motion';
const Products = () => {
  const products = [
    { id: 1, title: 'product1', description: 'description', price: 2000 },
    { id: 2, title: 'product2', description: 'description', price: 2000 },
    { id: 3, title: 'product3', description: 'description', price: 2080 },
    { id: 4, title: 'product4', description: 'description', price: 2400 },
    { id: 5, title: 'product5', description: 'description', price: 3000 },
  ];
  return (
    <motion.div>
      <motion.div
        className="p-5 "
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          textDecoration: 'underline',
          fontSize: 20,
          fontWeight: 'bold',
        }}
        transition={{
          type: 'easeIn',
          delay: 0.2,
        }}
      >
        Featured Products
      </motion.div>
      <div className="m-3 grid grid-cols-4">
        {products &&
          products.map((item, index) => {
            return (
              <motion.div
                className="p-2"
                initial={{ y: -100 }}
                animate={{
                  y: 0,
                }}
                transition={{ type: 'easeIn', delay: 0.2 }}
              >
                <div>
                  <motion.img
                    whileHover={{ scale: 1.2, cursor: 'pointer' }}
                    src={'https://picsum.photos/seed/picsum/200/300'}
                    size={200}
                    initial={{ x: 200, y: -100 }}
                    animate={{ x: 0, y: 0 }}
                  />
                </div>
                <div key={index} className="font-bold">
                  {item.title}
                </div>
                <div key={index}>{item.price}</div>
              </motion.div>
            );
          })}
      </div>
    </motion.div>
  );
};
export default function Home() {
  return (
    <div>
      <Hero />
      <Products />
    </div>
  );
}
