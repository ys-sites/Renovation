import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 px-8 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="flex-1 flex justify-center"
      >
        <div className="w-[400px] h-[400px] md:w-[500px] md:h-[500px] rounded-full overflow-hidden border-8 border-white shadow-2xl">
          <img 
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop" 
            alt="Custom Kitchen" 
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="flex-1"
      >
        <span className="uppercase tracking-widest text-sm text-gray-500 font-bold mb-4 block">
          [ About Marmo & Co. ]
        </span>
        <h2 className="text-5xl md:text-6xl font-display font-bold mb-6 text-[#1C1C1C]">
          Custom Kitchen Cabinets Built to Last
        </h2>
        <div className="w-12 h-1 bg-[#B8965A] mb-6"></div>
        <p className="text-gray-600 text-lg mb-8 leading-relaxed">
          Transform your space with our expert kitchen renovation services. From initial planning to final installation, we handle every detail with precision and care. Whether modern, classic, or transitional, we bring your vision to life with high-quality craftsmanship, tailored designs, and a seamless renovation experience you can trust.
        </p>
        <motion.a 
          href="#portfolio"
          whileHover={{ scale: 1.05 }}
          className="inline-block bg-[#1C1C1C] text-white px-8 py-4 uppercase tracking-widest text-sm font-bold"
        >
          View Projects
        </motion.a>
      </motion.div>
    </section>
  );
}
