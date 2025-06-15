'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { 
  Menu, X, Download, Mail, Linkedin, Github, 
  Code, Brain, Users, Zap, Target, MessageSquare,
  ChevronDown, ExternalLink
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'timeline', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold neon-text"
            >
              RaphTech
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['Accueil', 'À propos', 'Parcours', 'Compétences', 'Contact'].map((item, index) => {
                const sectionId = ['home', 'about', 'timeline', 'skills', 'contact'][index];
                return (
                  <button
                    key={item}
                    onClick={() => scrollToSection(sectionId)}
                    className={`hover:text-purple-400 transition-colors ${
                      activeSection === sectionId ? 'text-purple-400' : 'text-white'
                    }`}
                  >
                    {item}
                  </button>
                );
              })}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="md:hidden glass mt-2 rounded-lg p-4"
            >
              {['Accueil', 'À propos', 'Parcours', 'Compétences', 'Contact'].map((item, index) => {
                const sectionId = ['home', 'about', 'timeline', 'skills', 'contact'][index];
                return (
                  <button
                    key={item}
                    onClick={() => scrollToSection(sectionId)}
                    className="block w-full text-left py-2 hover:text-purple-400 transition-colors"
                  >
                    {item}
                  </button>
                );
              })}
            </motion.div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-purple-800/20 to-blue-900/30"></div>
        
        {/* Animated particles */}
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-3 h-3 bg-purple-400 rounded-full floating opacity-60"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            ></div>
          ))}
        </div>

        <div className="flex items-center justify-between w-full max-w-7xl mx-auto px-4 z-10">
          {/* Left Content */}
          <div className="flex-1 max-w-2xl">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-6xl md:text-8xl font-bold mb-8"
              style={{
                background: 'linear-gradient(135deg, #c084fc 0%, #6b21a8 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              Welcome
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-gray-300 text-lg mb-8 leading-relaxed max-w-lg"
            >
              Passionné par l'innovation technologique et le marketing digital, je combine expertise commerciale 
              et maîtrise des outils d'intelligence artificielle pour créer des solutions automatisées performantes.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl mb-8 h-12 flex items-center"
            >
              <span className="text-purple-400 font-semibold">
                <Typewriter
                  words={['commercial', 'digital marketing', 'réseaux sociaux', 'e-commerce', 'intelligence artificielle', 'agent IA']}
                  loop={0}
                  cursor
                  cursorStyle='_'
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mb-8"
            >
              <Button
                onClick={() => scrollToSection('about')}
                className="bg-white text-purple-900 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold"
              >
                GET STARTED
              </Button>
            </motion.div>

            {/* Social Media Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex items-center gap-4"
            >
              {/* LinkedIn */}
              <div className="social-button">
                <a
                  href="https://www.linkedin.com/in/raphael-theuillon-689139261/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative w-12 h-12 rounded-full group block"
                >
                  <div className="floater w-full h-full absolute top-0 left-0 bg-blue-500 rounded-full duration-300 group-hover:-top-8 group-hover:shadow-2xl"></div>
                  <div className="icon relative z-10 w-full h-full flex items-center justify-center border-2 border-blue-500 rounded-full">
                    <Linkedin className="h-5 w-5 group-hover:text-[#171543] text-white duration-300" />
                  </div>
                </a>
              </div>

              {/* GitHub */}
              <div className="social-button">
                <a
                  href="https://github.com/Raphael91000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative w-12 h-12 rounded-full group block"
                >
                  <div className="floater w-full h-full absolute top-0 left-0 bg-gray-800 rounded-full duration-300 group-hover:-top-8 group-hover:shadow-2xl"></div>
                  <div className="icon relative z-10 w-full h-full flex items-center justify-center border-2 border-gray-800 rounded-full">
                    <Github className="h-5 w-5 group-hover:text-[#171543] text-white duration-300" />
                  </div>
                </a>
              </div>

              {/* Fiverr */}
              <div className="social-button">
                <a
                  href="https://www.fiverr.com/users/raph910/seller_dashboard"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative w-12 h-12 rounded-full group block"
                >
                  <div className="floater w-full h-full absolute top-0 left-0 bg-green-500 rounded-full duration-300 group-hover:-top-8 group-hover:shadow-2xl"></div>
                  <div className="icon relative z-10 w-full h-full flex items-center justify-center border-2 border-green-500 rounded-full">
                    <Zap className="h-5 w-5 group-hover:text-[#171543] text-white duration-300" />
                  </div>
                </a>
              </div>

              {/* Email */}
              <div className="social-button">
                <button className="relative w-12 h-12 rounded-full group">
                  <div className="floater w-full h-full absolute top-0 left-0 bg-red-500 rounded-full duration-300 group-hover:-top-8 group-hover:shadow-2xl"></div>
                  <div className="icon relative z-10 w-full h-full flex items-center justify-center border-2 border-red-500 rounded-full">
                    <Mail className="h-5 w-5 group-hover:text-[#171543] text-white duration-300" />
                  </div>
                </button>
              </div>
            </motion.div>
          </div>

          {/* Right Content - AI Circle */}
          <div className="flex-1 flex justify-center items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="relative w-96 h-96"
            >
              {/* Outer rotating circles */}
              <div className="absolute inset-0 animate-spin" style={{ animationDuration: '20s' }}>
                <div className="w-full h-full border border-purple-400/30 rounded-full"></div>
                <div className="absolute top-4 left-4 w-4 h-4 bg-purple-400 rounded-full"></div>
                <div className="absolute top-8 right-8 w-3 h-3 bg-pink-400 rounded-full"></div>
                <div className="absolute bottom-6 left-12 w-2 h-2 bg-blue-400 rounded-full"></div>
                <div className="absolute bottom-12 right-6 w-3 h-3 bg-purple-300 rounded-full"></div>
              </div>

              {/* Middle rotating circles */}
              <div className="absolute inset-8 animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}>
                <div className="w-full h-full border border-purple-400/50 rounded-full"></div>
                <div className="absolute top-2 left-2 w-3 h-3 bg-pink-400 rounded-full"></div>
                <div className="absolute top-6 right-4 w-2 h-2 bg-purple-400 rounded-full"></div>
                <div className="absolute bottom-4 left-6 w-4 h-4 bg-blue-400 rounded-full"></div>
              </div>

              {/* Inner rotating circles */}
              <div className="absolute inset-16 animate-spin" style={{ animationDuration: '10s' }}>
                <div className="w-full h-full border border-purple-400/70 rounded-full"></div>
                <div className="absolute top-1 left-1 w-2 h-2 bg-purple-400 rounded-full"></div>
                <div className="absolute bottom-2 right-2 w-3 h-3 bg-pink-400 rounded-full"></div>
              </div>

              {/* Central AI circle */}
              <div className="absolute inset-24 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center shadow-2xl">
                <div className="w-full h-full bg-gradient-to-br from-purple-500 to-purple-700 rounded-full flex items-center justify-center border-4 border-white/20">
                  <span className="text-4xl font-bold text-white tracking-wider">A.I.</span>
                </div>
              </div>

              {/* Concentric circles effect */}
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="absolute rounded-full border border-purple-400/20"
                  style={{
                    top: `${i * 8}px`,
                    left: `${i * 8}px`,
                    right: `${i * 8}px`,
                    bottom: `${i * 8}px`,
                    animationDelay: `${i * 0.2}s`
                  }}
                ></div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 neon-text">À propos</h2>
            <Card className="glass neon-glow">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="w-32 h-32 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">RT</span>
                  </div>
                  <div className="text-left">
                    <h3 className="text-2xl font-bold mb-4 text-purple-400">Raphaël Theuillon</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Passionné par l'innovation technologique et le marketing digital, je combine expertise commerciale 
                      et maîtrise des outils d'intelligence artificielle pour créer des solutions automatisées performantes. 
                      Mon approche unique allie stratégie commerciale, créativité digitale et technologies de pointe pour 
                      optimiser les performances de mes clients.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section id="timeline" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 neon-text">Mon Parcours</h2>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-purple-600 to-pink-600 h-full"></div>

            {/* Timeline items */}
            {[
              {
                year: '2024',
                title: 'Expert en Intelligence Artificielle',
                description: 'Création d\'agents IA personnalisés et automatisation de processus métier',
                type: 'experience',
                side: 'left'
              },
              {
                year: '2023',
                title: 'Consultant Digital Marketing',
                description: 'Stratégies multicanales pour e-commerce et optimisation ROI',
                type: 'experience',
                side: 'right'
              },
              {
                year: '2022',
                title: 'Spécialiste E-commerce',
                description: 'Gestion complète de boutiques en ligne et growth hacking',
                type: 'experience',
                side: 'left'
              },
              {
                year: '2021',
                title: 'Développeur Commercial',
                description: 'Prospection digitale et développement de portefeuille client',
                type: 'experience',
                side: 'right'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: item.side === 'left' ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative mb-12 ${item.side === 'left' ? 'text-right pr-8' : 'text-left pl-8'} 
                  ${item.side === 'left' ? 'md:mr-1/2' : 'md:ml-1/2'}`}
              >
                {/* Timeline dot */}
                <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-purple-600 rounded-full border-4 border-white neon-glow"></div>
                
                <Card className="glass neon-glow">
                  <CardContent className="p-6">
                    <Badge className="mb-2 bg-purple-600">{item.year}</Badge>
                    <h3 className="text-xl font-bold mb-2 text-purple-400">{item.title}</h3>
                    <p className="text-gray-300">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 neon-text">Compétences</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Digital & IA',
                icon: Brain,
                skills: ['Automatisation', 'Agents IA', 'Machine Learning', 'Data Analysis', 'Python', 'API Integration'],
                color: 'from-purple-600 to-blue-600'
              },
              {
                title: 'Commercial',
                icon: Target,
                skills: ['Prospection', 'Négociation', 'CRM', 'Lead Generation', 'Sales Funnel', 'KPI Analysis'],
                color: 'from-pink-600 to-purple-600'
              },
              {
                title: 'Soft Skills',
                icon: Users,
                skills: ['Leadership', 'Communication', 'Gestion de projet', 'Créativité', 'Adaptabilité', 'Esprit d\'équipe'],
                color: 'from-blue-600 to-teal-600'
              }
            ].map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <Card className="glass neon-glow h-full hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 cursor-pointer group">
                  <CardContent className="p-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-full flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                      <category.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-center text-purple-400 group-hover:text-purple-300 transition-colors duration-300">{category.title}</h3>
                    <div className="space-y-2">
                      {category.skills.map((skill, skillIndex) => (
                        <div key={skillIndex} className="flex items-center justify-between">
                          <span className="text-gray-300 group-hover:text-white transition-colors duration-300">{skill}</span>
                          <div className="w-16 h-2 bg-gray-700 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${85 + Math.random() * 15}%` }}
                              transition={{ duration: 1, delay: skillIndex * 0.1 }}
                              className={`h-full bg-gradient-to-r ${category.color}`}
                            ></motion.div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 neon-text">Contact</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <Card className="glass neon-glow">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-6 text-purple-400">Écrivez-moi</h3>
                <form className="space-y-4">
                  <Input
                    placeholder="Votre nom"
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                  />
                  <Input
                    type="email"
                    placeholder="Votre email"
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                  />
                  <Textarea
                    placeholder="Votre message"
                    rows={5}
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                  />
                  <Button className="w-full bg-purple-600 hover:bg-purple-700 neon-glow">
                    <Mail className="mr-2 h-4 w-4" />
                    Envoyer
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info & Links */}
            <div className="space-y-6">
              <Card className="glass neon-glow">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-6 text-purple-400">Retrouvez-moi</h3>
                  <div className="space-y-4">
                    <Button
                      asChild
                      variant="outline"
                      className="w-full glass border-purple-400 text-white hover:bg-purple-600"
                    >
                      <a
                        href="https://www.linkedin.com/in/raphael-theuillon-689139261/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Linkedin className="mr-2 h-4 w-4" />
                        LinkedIn
                        <ExternalLink className="ml-auto h-4 w-4" />
                      </a>
                    </Button>
                    
                    <Button
                      asChild
                      variant="outline"
                      className="w-full glass border-purple-400 text-white hover:bg-purple-600"
                    >
                      <a
                        href="https://github.com/Raphael91000"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="mr-2 h-4 w-4" />
                        GitHub
                        <ExternalLink className="ml-auto h-4 w-4" />
                      </a>
                    </Button>
                    
                    <Button
                      asChild
                      variant="outline"
                      className="w-full glass border-purple-400 text-white hover:bg-purple-600"
                    >
                      <a
                        href="https://www.fiverr.com/users/raph910/seller_dashboard"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Zap className="mr-2 h-4 w-4" />
                        Fiverr
                        <ExternalLink className="ml-auto h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Button
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 neon-glow"
                size="lg"
              >
                <Download className="mr-2 h-4 w-4" />
                Télécharger mon CV
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
            © 2024 RaphTech - Raphaël Theuillon. Tous droits réservés.
          </p>
        </div>
      </footer>
    </div>
  );
}