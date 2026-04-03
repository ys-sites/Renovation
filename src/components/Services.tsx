// src/components/Services.tsx
import { motion } from "framer-motion";
import { PenTool, Hammer, Wrench } from "lucide-react";

export default function Services() {
  const services = [
    { icon: PenTool, title: "Planning & Design", desc: "We listen, advise, and plan each kitchen project with care, then bring your vision to life through customized 3D renderings tailored to your space." },
    { icon: Hammer, title: "Custom Builds", desc: "Expertly crafted cabinets built to match your vision, style, and functional needs." },
    { icon: Wrench, title: "Kitchen Renovation", desc: "From initial planning to final installation, we handle every detail with precision and care." }
  ];

  return (
    <section id="services" className="py-24 px-8 bg-[#F9F9F9]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="uppercase tracking-widest text-sm text-gray-500 font-bold mb-4 block">
            [ Our Services ]
          </span>
          <h2 className="text-5xl font-display font-bold text-[#1C1C1C]">What Do We Offer</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="bg-white p-12 text-center shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col items-center"
            >
              <div className="w-20 h-20 mb-6 flex items-center justify-center text-[#1C1C1C]">
                <service.icon size={64} strokeWidth={1} />
              </div>
              <h3 className="text-2xl font-display font-bold mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
