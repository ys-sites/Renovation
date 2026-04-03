export default function Footer() {
  return (
    <footer className="bg-[#111] text-gray-400 py-12 px-8 text-center">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-2xl font-display font-bold text-white mb-4 md:mb-0">MARMO & CO.</div>
        <p>Copyright © 2026 Marmo & Co. All Rights Reserved.</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="#" className="hover:text-white transition-colors">Facebook</a>
          <a href="#" className="hover:text-white transition-colors">Instagram</a>
          <a href="#" className="hover:text-white transition-colors">Pinterest</a>
        </div>
      </div>
    </footer>
  );
}
