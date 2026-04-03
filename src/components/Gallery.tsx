import { motion } from "framer-motion";

const images = [
  "https://images.unsplash.com/photo-1556911220-bff31c812dba?q=80&w=2068&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1556909190-eccf4a8bf97a?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=2070&auto=format&fit=crop",
];

export default function Gallery() {
  return (
    <section id="portfolio" className="py-24 px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <span className="uppercase tracking-widest text-sm text-gray-500 font-bold mb-4 block">
          [ Our Gallery ]
        </span>
        <h2 className="text-5xl font-display font-bold text-[#1C1C1C]">Precision in Every Detail</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {images.map((img, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="relative h-[400px] overflow-hidden group"
          >
            <motion.div 
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.6 }}
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${img})` }}
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
