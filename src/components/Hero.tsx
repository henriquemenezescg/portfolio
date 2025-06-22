import React from 'react';
import { ChevronDown, Code, Laptop } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      const offsetTop = aboutSection.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Profile Image Placeholder */}
          <div className="flex justify-center mb-8">
            <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
              <Laptop className="w-16 h-16 text-white" />
            </div>
          </div>

          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold text-slate-800 leading-tight">
              Olá, eu sou
              <span className="block text-blue-600 mt-2">Henrique</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Estudante de Análise e Desenvolvimento de Sistemas, 
              apaixonado por tecnologia e desenvolvimento web
            </p>
          </div>

          {/* Quick Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto mt-12">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center space-x-3">
                <Code className="w-8 h-8 text-blue-600" />
                <div className="text-left">
                  <h3 className="font-semibold text-slate-800">Formação</h3>
                  <p className="text-slate-600 text-sm">ADS - Último Trimestre</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center space-x-3">
                <Laptop className="w-8 h-8 text-blue-600" />
                <div className="text-left">
                  <h3 className="font-semibold text-slate-800">Foco</h3>
                  <p className="text-slate-600 text-sm">Desenvolvimento Web</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="pt-8">
            <button
              onClick={scrollToAbout}
              className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Conheça mais sobre mim
              <ChevronDown className="ml-2 w-5 h-5 animate-bounce" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;