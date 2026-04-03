import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 px-4 min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with faint image overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center opacity-[0.07]"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1556911220-bff31c812dba?q=80&w=2068&auto=format&fit=crop)' }}
        />
        <div className="absolute inset-0 bg-[#F8F9FA]/90" />
      </div>

      <div className="relative z-10 w-full max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-[#1C1C1C] mb-4 tracking-tight"
          >
            Request a Professional Quote
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 text-lg max-w-2xl mx-auto"
          >
            Fill out the details below. We'll review your project and provide a comprehensive, no-hidden-fees estimate tailored to your needs.
          </motion.p>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-white w-full p-8 md:p-12 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100"
        >
          <form className="flex flex-col gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-gray-900">Full Name * *</label>
                <input 
                  type="text" 
                  placeholder="Jean Francois" 
                  className="p-3.5 border border-gray-200 rounded-lg focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all" 
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-gray-900">Phone Number * *</label>
                <input 
                  type="tel" 
                  placeholder="(514) 622-1599" 
                  className="p-3.5 border border-gray-200 rounded-lg focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all" 
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-gray-900">Email Address * *</label>
                <input 
                  type="email" 
                  placeholder="jean@example.com" 
                  className="p-3.5 border border-gray-200 rounded-lg focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all" 
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-gray-900">City * *</label>
                <input 
                  type="text" 
                  placeholder="Montreal" 
                  className="p-3.5 border border-gray-200 rounded-lg focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all" 
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-gray-900">What do you need renovated? * *</label>
              <select className="p-3.5 border border-gray-200 rounded-lg focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all text-gray-600 bg-white appearance-none">
                <option>Select a service...</option>
                <option>Full Kitchen Renovation</option>
                <option>Custom Cabinetry</option>
                <option>Marble & Stone Countertops</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-gray-900">Project Details (Optional) (Optional)</label>
              <textarea 
                placeholder="Rough square footage, timeline, or specific problems you want solved..." 
                className="p-3.5 border border-gray-200 rounded-lg h-32 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all resize-none" 
              />
            </div>

            <motion.button 
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              type="button"
              className="w-full bg-[#EF4444] hover:bg-[#DC2626] text-white font-bold text-lg py-4 rounded-lg mt-4 transition-colors flex items-center justify-center gap-2"
            >
              Request Free Quote <ArrowRight size={20} strokeWidth={2.5} />
            </motion.button>

            <div className="text-center mt-2 flex items-center justify-center gap-2 text-gray-500 text-sm">
              <ShieldCheck size={16} strokeWidth={2} />
              <span>Your information is secure and will never be shared.</span>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
