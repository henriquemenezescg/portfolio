import React from 'react';
import { GraduationCap, Target, BookOpen, Trophy } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: 'Formação Acadêmica',
      description: 'Cursando o último trimestre de Análise e Desenvolvimento de Sistemas pela Descomplica'
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: 'Conhecimentos',
      description: 'Fundamentos de programação, desenvolvimento web e metodologias ágeis'
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Objetivo Profissional',
      description: 'Desenvolver aplicações web modernas e funcionais, contribuindo para soluções inovadoras'
    },
    {
      icon: <Trophy className="w-6 h-6" />,
      title: 'Diferenciais',
      description: 'Dedicação ao aprendizado contínuo e paixão por resolver problemas através da tecnologia'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Sobre Mim
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Sou um futuro desenvolvedor em constante evolução, combinando conhecimento acadêmico 
            com paixão pela tecnologia para criar soluções digitais impactantes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="prose prose-lg">
              <p className="text-slate-600 leading-relaxed mb-6">
                Estou no último trimestre do curso de <strong>Análise e Desenvolvimento de Sistemas </strong>
                 pela Descomplica, onde desenvolvi uma base sólida em programação e metodologias de desenvolvimento.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                Minha jornada na tecnologia é impulsionada pela curiosidade e pelo desejo de transformar 
                ideias em soluções práticas. Busco constantemente aprimorar minhas habilidades técnicas 
                e me manter atualizado com as tendências do mercado.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Estou ansioso para aplicar meus conhecimentos em projetos reais e contribuir para 
                equipes que valorizam inovação, qualidade e crescimento mútuo.
              </p>
            </div>
          </div>

          {/* Right Content - Highlights Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-slate-50 to-blue-50 p-6 rounded-xl hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="text-blue-600 mb-4">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-slate-800 mb-3">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-16 pt-16 border-t border-gray-200">
          <h3 className="text-2xl font-bold text-slate-800 text-center mb-12">
            Tecnologias & Ferramentas
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'HTML5', 'CSS3', 'JavaScript', 'React', 'Node.js', 
              'Git','Tailwind CSS'
            ].map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium hover:bg-blue-200 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;