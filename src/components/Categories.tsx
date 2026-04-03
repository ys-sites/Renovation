import { motion } from "framer-motion";

const categories = [
  { title: "Classic Cabinets", num: "01", img: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=2070&auto=format&fit=crop" },
  { title: "Contemporary Cabinets", num: "02", img: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070&auto=format&fit=crop" },
  { title: "Modern Cabinets", num: "03", img: "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?q=80&w=2070&auto=format&fit=crop" },
  { title: "Country Style Cabinets", num: "04", img: "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?q=80&w=2070&auto=format&fit=crop" },
];

export default function Categories() {
  return (
    <section className="w-full flex flex-col md:flex-row h-auto md:h-[600px]">
      {categories.map((cat, i) => (
        <motion.div 
          key={i}
          initial="initial"
          whileHover="hover"
          className="relative flex-1 h-[300px] md:h-full overflow-hidden group cursor-pointer border-r border-white/20 last:border-0"
        >
          <motion.div 
            variants={{
              initial: { scale: 1 },
              hover: { scale: 1.1 }
            }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${cat.img})` }}
          />
          <div className="absolute inset-0 bg-black/50 group-hover:bg-black/20 transition-colors duration-500" />
          
          <div className="absolute inset-0 p-8 flex flex-col justify-end">
            <div className="flex items-end justify-between">
              <h3 className="text-white text-2xl md:text-3xl font-display font-bold w-2/3">
                {cat.title}
              </h3>
              <span className="text-transparent text-6xl md:text-8xl font-display font-bold" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.5)' }}>
                {cat.num}
              </span>
            </div>
          </div>
        </motion.div>
      ))}
    </section>
  );
}
