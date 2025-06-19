import React from "react";
import { ExternalLink, Github, Globe, Code, Target } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Projeto Clima",
      description:
        "Projeto de exibição de clima em tempo real utilizando a API OpenWeatherMap em JavaScript.",
      technologies: ["HTML5", "JavaScript", "CSS3", "Web APIs"],
      demoUrl: "https://henriquemenezescg.github.io/Projeto-Clima/",
      githubUrl: "https://github.com/henriquemenezescg/Projeto-Clima",
      featured: true,
    },
    {
      title: "Projeto Quiz",
      description:
        "Projeto de desenvolvimento de um quiz interativo em JavaScript, com perguntas de múltipla escolha e feedback imediato para o usuário.",
      technologies: ["HTML5", "JavaScript", "CSS Grid"],
      demoUrl: "https://henriquemenezescg.github.io/Projeto-Quiz/",
      githubUrl: "https://github.com/henriquemenezescg/Projeto-Quiz",
      featured: true,
    },
    {
      title: "Projeto StarBucks",
      description:
        "Réplica de uma página visual do Starbucks, focada em praticar habilidades de HTML, CSS e design de interfaces, destacando a estética e a responsividade.",
      technologies: ["HTML5", "CSS3", "Responsive Design"],
      demoUrl: "https://henriquemenezescg.github.io/Projeto-Starbucks/",
      githubUrl: "https://github.com/henriquemenezescg/Projeto-Starbucks",
      featured: false,
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-br from-slate-50 to-blue-50"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Meus Projetos
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Uma seleção dos projetos que desenvolvi durante minha jornada
            acadêmica, demonstrando aplicação prática dos conhecimentos
            adquiridos.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 overflow-hidden ${
                project.featured
                  ? "lg:col-span-2 xl:col-span-1 ring-2 ring-blue-100"
                  : ""
              }`}
            >
              {/* Project Image Placeholder */}
              <div className="h-48 bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                <Code className="w-16 h-16 text-white opacity-80" />
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-slate-800 leading-tight">
                    {project.title}
                  </h3>
                  {project.featured && (
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                      Destaque
                    </span>
                  )}
                </div>

                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-slate-100 text-slate-700 text-xs font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex space-x-4">
                  <a
                    href={project.demoUrl}
                    className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                    target="_blank"
                  >
                    <Globe className="w-4 h-4" />
                    <span>Demo</span>
                  </a>
                  <a
                    href={project.githubUrl}
                    className="flex items-center space-x-2 px-4 py-2 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors text-sm font-medium"
                    target="_blank"
                  >
                    <Github className="w-4 h-4" />
                    <span>Código</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-xl p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-slate-800 mb-4">
              Interessado em ver mais?
            </h3>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Estes são apenas alguns exemplos do meu trabalho. Estou sempre
              desenvolvendo novos projetos e aprimorando minhas habilidades.
            </p>
            <a
              href="https://github.com/henriquemenezescg?tab=repositories"
              className="inline-flex items-center space-x-2 px-6 py-3 bg-slate-800 text-white rounded-lg hover:bg-slate-900 transition-colors font-medium"
              target="_blank"
            >
              <Github className="w-5 h-5" />
              <span>Ver todos os projetos no GitHub</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
