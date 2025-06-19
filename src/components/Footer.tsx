import React from "react";
import { Heart, Code } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-800 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Main Footer Content */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">Henrique</h3>
            <p className="text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Desenvolvedor em formação, sempre em busca de novos desafios e
              oportunidades para crescer na área de tecnologia.
            </p>
          </div>

          {/* Footer Links */}
          <div className="flex flex-wrap justify-center gap-8 mb-8 text-sm">

            <a
              href="https://www.linkedin.com/in/henrique-menezes-b5a179206/"
              className="text-slate-300 hover:text-white transition-colors"
              target="_blank"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/henriquemenezescg"
              className="text-slate-300 hover:text-white transition-colors"
              target="_blank"
            >
              GitHub
            </a>
          </div>

          {/* Copyright */}
          <div className="border-t border-slate-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-slate-400 text-sm">
                © {currentYear} Henrique. Todos os direitos reservados.
              </p>
              <div className="flex items-center space-x-2 text-slate-400 text-sm">
                <span>Feito com</span>
                <Heart className="w-4 h-4 text-red-500 fill-current" />
                <span>e</span>
                <Code className="w-4 h-4" />
                <span>por Henrique</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
