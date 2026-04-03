import { motion } from "framer-motion";

export default function Testimonials() {
  return (
    <section className="py-24 px-8 bg-[#F8F4EF]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="uppercase tracking-widest text-sm text-gray-500 font-bold mb-4 block">
            [ Client Stories ]
          </span>
          <h2 className="text-5xl font-display font-bold text-[#1C1C1C]">What Our Clients Say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-6">
          
          {/* Testimonial 1 (Spans 2 columns) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 md:row-span-1 bg-[#1C1C1C] text-[#F8F4EF] p-8 rounded-2xl shadow-lg relative overflow-hidden"
          >
            {/* Quotation Mark Background */}
            <svg className="absolute top-0 right-10 w-24 h-24 text-white/5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 104 100">
              <path fill="currentColor" d="M104 102V59.727H84.114c0-5.868.225-11.62 .676-17.257.451-5.638 1.577-10.62 3.38-14.944 1.803-4.324 4.62-7.887 8.45-10.69C100.45 14.034 105.858 12 112.845 12V0c-11.268 0-20.507 2.592-27.718 7.775-7.211 5.183-12.507 11.943-15.887 20.281-3.38 8.338-5.07 18.028-5.07 29.07V102H104zm-64.225 0V59.727H19.887c0-5.868.225-11.62.676-17.257.451-5.638 1.577-10.62 3.38-14.944 1.803-4.324 4.62-7.887 8.45-10.69C36.225 14.034 41.634 12 48.62 12V0C37.352 0 28.113 2.592 20.901 7.775 13.69 12.958 8.394 19.718 5.014 28.056 1.634 36.394 0 46.084 0 57.126V102h39.775z" transform="translate(-0 -12)"/>
            </svg>
            
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=150&auto=format&fit=crop" alt="Sarah Jenkins" className="w-12 h-12 rounded-full border-2 border-white/20 object-cover" />
                <div>
                  <p className="text-sm font-bold">Sarah Jenkins</p>
                  <p className="text-xs opacity-70">Homeowner, Westmount</p>
                </div>
              </div>
              <h4 className="text-xl font-display font-bold mb-4 leading-snug">
                The craftsmanship is unparalleled. Our new kitchen is the absolute centerpiece of our home.
              </h4>
              <p className="text-sm opacity-80 leading-relaxed font-sans">
                “ From the initial consultation to the final installation, the team at Marmo & Co. was exceptional. The custom cabinetry and marble countertops exceeded our expectations. They truly transformed our outdated space into a modern culinary masterpiece. I honestly feel we got every penny’s worth. ”
              </p>
            </div>
          </motion.div>

          {/* Testimonial 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:col-span-1 md:row-span-1 bg-[#B8965A] text-white p-8 rounded-2xl shadow-lg"
          >
            <div className="flex items-center gap-4 mb-6">
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop" alt="Michael Chen" className="w-12 h-12 rounded-full border-2 border-white/20 object-cover" />
              <div>
                <p className="text-sm font-bold">Michael Chen</p>
                <p className="text-xs opacity-80">Real Estate Developer</p>
              </div>
            </div>
            <h4 className="text-xl font-display font-bold mb-4 leading-snug">
              Professional, timely, and incredibly skilled.
            </h4>
            <p className="text-sm opacity-90 leading-relaxed font-sans">
              “ I was hesitant about a full renovation, but their 3D planning process made it so easy to visualize. The final result is exactly what we wanted and adds immense value to the property. ”
            </p>
          </motion.div>

          {/* Testimonial 3 (Spans 2 rows vertically) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-1 md:row-span-2 bg-white text-[#1C1C1C] border border-[#D6D0C8] p-8 rounded-2xl shadow-lg"
          >
            <div className="flex items-center gap-4 mb-6">
              <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=150&auto=format&fit=crop" alt="Emma Thompson" className="w-12 h-12 rounded-full border-2 border-[#1C1C1C]/10 object-cover" />
              <div>
                <p className="text-sm font-bold">Emma Thompson</p>
                <p className="text-xs text-gray-500">Interior Designer</p>
              </div>
            </div>
            <h4 className="text-xl font-display font-bold mb-4 leading-snug">
              A seamless experience from start to finish. Highly recommended!
            </h4>
            <p className="text-sm text-gray-600 leading-relaxed font-sans">
              “ We hired Marmo & Co. for a complete kitchen overhaul. The attention to detail in the millwork is simply stunning. Every drawer and cabinet feels solid and perfectly aligned. I needed some structure from professionals who could help execute my complex design step by step. The entire staff did not disappoint. They were very hands-on and I never had to wait long for assistance. The stone fabrication, in particular, was outstanding. I've already recommended them to three of my clients. 100% recommend! ”
            </p>
          </motion.div>

          {/* Testimonial 4 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="md:col-span-1 md:row-span-1 bg-white text-[#1C1C1C] border border-[#D6D0C8] p-8 rounded-2xl shadow-lg"
          >
            <div className="flex items-center gap-4 mb-6">
              <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop" alt="David Rossi" className="w-12 h-12 rounded-full border-2 border-[#1C1C1C]/10 object-cover" />
              <div>
                <p className="text-sm font-bold">David Rossi</p>
                <p className="text-xs text-gray-500">Homeowner, Laval</p>
              </div>
            </div>
            <h4 className="text-xl font-display font-bold mb-4 leading-snug">
              Beautiful, flawless marble work.
            </h4>
            <p className="text-sm text-gray-600 leading-relaxed font-sans">
              “ Thank you for the wonderful experience! The stone fabrication for our island is flawless. It's the first thing everyone notices when they walk in. ”
            </p>
          </motion.div>

          {/* Testimonial 5 (Spans 2 columns) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="md:col-span-2 md:row-span-1 bg-[#2A2A2A] text-[#F8F4EF] p-8 rounded-2xl shadow-lg"
          >
            <div className="flex items-center gap-4 mb-6">
              <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=150&auto=format&fit=crop" alt="James Wright" className="w-12 h-12 rounded-full border-2 border-white/20 object-cover" />
              <div>
                <p className="text-sm font-bold">James Wright</p>
                <p className="text-xs opacity-70">Homeowner, Kirkland</p>
              </div>
            </div>
            <h4 className="text-xl font-display font-bold mb-4 leading-snug">
              They brought our dream kitchen to life with incredible precision and care.
            </h4>
            <p className="text-sm opacity-80 leading-relaxed font-sans">
              “ We had a very specific vision for a transitional kitchen blending classic wood tones with modern marble. Marmo & Co. executed it perfectly. The project manager was always available to answer questions, and the installation crew was meticulous. The standard is above the rest. You will get the personal attention you need from an incredible team. ”
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
