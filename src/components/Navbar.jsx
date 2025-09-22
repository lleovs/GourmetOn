import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // ícones hamburguer

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-fuchsia-100 shadow-lg z-50">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* barra completa */}
        <div className="flex justify-between items-center h-16">
          {/* logo */}
          <div className="text-2xl font-bold text-gray-800">GourmetOn</div>

          {/* links desktop */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-blue-600">
              Home
            </a>
            <a href="#sobre" className="text-gray-700 hover:text-blue-600">
              Comentarios
            </a>
            <a href="#servicos" className="text-gray-700 hover:text-blue-600">
              Serviços
            </a>
            <a href="#contato" className="text-gray-700 hover:text-blue-600">
              Contato
            </a>
          </div>

          {/* botão mobile */}
          <button
            className="md:hidden text-gray-800"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* menu mobile */}
      {open && (
        <div className="md:hidden bg-white shadow-md">
          <div className="px-4 pt-2 pb-4 space-y-2">
            <a
              href="#home"
              className="block text-gray-700 hover:text-blue-600"
              onClick={() => setOpen(false)}
            >
              Home
            </a>
            <a
              href="#sobre"
              className="block text-gray-700 hover:text-blue-600"
              onClick={() => setOpen(false)}
            >
              Sobre
            </a>
            <a
              href="#servicos"
              className="block text-gray-700 hover:text-blue-600"
              onClick={() => setOpen(false)}
            >
              Serviços
            </a>
            <a
              href="#contato"
              className="block text-gray-700 hover:text-blue-600"
              onClick={() => setOpen(false)}
            >
              Contato
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
