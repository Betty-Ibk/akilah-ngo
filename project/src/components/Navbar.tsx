import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <span className="text-2xl font-bold text-blue-600">Akilah</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#programs" className="text-gray-700 hover:text-blue-600 transition">Programs</a>
            <a href="#impact" className="text-gray-700 hover:text-blue-600 transition">Impact</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition">Contact</a>
            <a href="#donate" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
              Donate
            </a>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            <a href="#programs" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Programs</a>
            <a href="#impact" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Impact</a>
            <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Contact</a>
            <a href="#donate" className="block px-3 py-2 text-blue-600 font-medium">Donate</a>
          </div>
        </div>
      )}
    </nav>
  );
}