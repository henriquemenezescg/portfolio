import React, { useState } from 'react';
import { Mail, Send, Linkedin, Github, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset status after 3 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 3000);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: 'Email',
      value: 'henriquemenezescg@gmail.com',
      href: 'mailto:henriquemenezescg@gmail.com'
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: 'Telefone',
      value: '+55 (11) 94454-6474',
      href: 'tel:+5511944546474'
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: 'Localização',
      value: 'Santo André, SP',
      href: '#'
    }
  ];

  const socialLinks = [
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/henrique-menezes-b5a179206/',
      color: 'hover:text-blue-600'
    },
    {
      icon: <Github className="w-6 h-6" />,
      label: 'GitHub',
      href: 'https://github.com/henriquemenezescg',
      color: 'hover:text-slate-800'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Vamos Conversar
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Estou sempre aberto a novas oportunidades e conexões. Entre em contato 
            comigo para discutir projetos, colaborações ou apenas para trocar ideias sobre tecnologia.
          </p>
        </div>

        <div className=" flex items-center justify-center">

          {/* Contact Information */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-6">
                Informações de Contato
              </h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-500">{info.label}</p>
                      <a
                        href={info.href}
                        className="text-slate-800 hover:text-blue-600 transition-colors"
                        onClick={info.href === '#' ? (e) => e.preventDefault() : undefined}
                      >
                        {info.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold text-slate-800 mb-4">
                Conecte-se Comigo
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center text-slate-600 ${social.color} transition-all duration-200 hover:scale-110 hover:shadow-lg`}
                    title={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Additional Info */}
            <div className="bg-slate-50 p-6 rounded-xl">
              <h4 className="text-lg font-semibold text-slate-800 mb-3">
                Disponibilidade
              </h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                Estou disponível para oportunidades de estágio, projetos freelance 
                e posições juniores em desenvolvimento web. Prefiro comunicação por 
                email, mas também estou disponível para calls agendadas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;