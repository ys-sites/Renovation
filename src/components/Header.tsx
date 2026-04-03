import { motion, useScroll, useTransform } from "framer-motion";

export default function Header() {
  const { scrollY } = useScroll();
  const backgroundColor = useTransform(scrollY, [0, 100], ["rgba(28, 28, 28, 0)", "rgba(28, 28, 28, 0.95)"]);
  const backdropBlur = useTransform(scrollY, [0, 100], ["blur(0px)", "blur(8px)"]);
  
  return (
    <motion.header 
      style={{ backgroundColor, backdropFilter: backdropBlur }}
      className="fixed top-0 w-full z-50 p-6 flex justify-between items-center transition-colors duration-300"
    >
      <div className="text-3xl font-display font-bold text-white">MARMO & CO.</div>
      <nav className="hidden md:flex gap-8 font-sans font-medium text-white text-sm tracking-widest uppercase">
        {['About', 'Services', 'Portfolio', 'Contact'].map((item) => (
          <motion.a 
            key={item}
            href={`#${item.toLowerCase()}`}
            whileHover={{ y: -2, color: "#B8965A" }}
            className="transition-colors"
          >
            {item}
          </motion.a>
        ))}
      </nav>
      <div className="text-white font-bold hidden md:block">
        (514) 623-8414
      </div>
    </motion.header>
  );
}
