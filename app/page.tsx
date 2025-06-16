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
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold text-orange-400"
            >
              RaphTech
            </motion.div>

            <div className="hidden md:flex space-x-8">
              {['Accueil', 'À propos', 'Parcours', 'Compétences', 'Contact'].map((item, index) => {
                const sectionId = ['home', 'about', 'timeline', 'skills', 'contact'][index];
                return (
                  <button
                    key={item}
                    onClick={() => scrollToSection(sectionId)}
                    className={`transition-colors ${
                      activeSection === sectionId ? 'text-orange-400' : 'text-white hover:text-orange-400'
                    }`}
                  >
                    {item}
                  </button>
                );
              })}
            </div>

            <button
              className="md:hidden text-orange-400"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

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
                    className="block w-full text-left py-2 hover:text-orange-400 transition-colors text-white"
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
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
        
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-orange-400 rounded-full floating opacity-40"
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
          <div className="flex-1 max-w-2xl">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-6xl md:text-8xl font-bold mb-8 text-orange-400"
            >
              Welcome
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-gray-300 text-lg mb-8 leading-relaxed max-w-lg"
            >
              Technico-commercial avec une solide expérience en gestion d'entreprise, vente et bâtiment. 
              Doté d'un fort esprit d'initiative et passionné par l'entrepreneuriat, le digital et les 
              technologies innovantes, notamment l'intelligence artificielle.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl mb-8 h-12 flex items-center"
            >
              <span className="text-orange-400 font-semibold">
                <Typewriter
                  words={['technico-commercial', 'entrepreneur', 'gestion d\'équipe', 'marketing digital', 'intelligence artificielle', 'création d\'entreprise']}
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
                className="bg-orange-400 text-black hover:bg-orange-500 px-8 py-3 rounded-full font-semibold"
              >
                GET STARTED
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex items-center gap-4"
            >
              <div className="social-button">
                <a
                  href="https://www.linkedin.com/in/raphael-theuillon-689139261/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative w-12 h-12 rounded-full group block"
                >
                  <div className="floater w-full h-full absolute top-0 left-0 bg-blue-500 rounded-full duration-300 group-hover:-top-8 group-hover:shadow-2xl"></div>
                  <div className="icon relative z-10 w-full h-full flex items-center justify-center border-2 border-blue-500 rounded-full">
                    <Linkedin className="h-5 w-5 group-hover:text-black text-white duration-300" />
                  </div>
                </a>
              </div>

              <div className="social-button">
                <a
                  href="https://github.com/Raphael91000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative w-12 h-12 rounded-full group block"
                >
                  <div className="floater w-full h-full absolute top-0 left-0 bg-gray-600 rounded-full duration-300 group-hover:-top-8 group-hover:shadow-2xl"></div>
                  <div className="icon relative z-10 w-full h-full flex items-center justify-center border-2 border-gray-600 rounded-full">
                    <Github className="h-5 w-5 group-hover:text-black text-white duration-300" />
                  </div>
                </a>
              </div>

              <div className="social-button">
                <a
                  href="https://www.fiverr.com/users/raph910/seller_dashboard"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative w-12 h-12 rounded-full group block"
                >
                  <div className="floater w-full h-full absolute top-0 left-0 bg-orange-400 rounded-full duration-300 group-hover:-top-8 group-hover:shadow-2xl"></div>
                  <div className="icon relative z-10 w-full h-full flex items-center justify-center border-2 border-orange-400 rounded-full">
                    <Zap className="h-5 w-5 group-hover:text-black text-white duration-300" />
                  </div>
                </a>
              </div>

              <div className="social-button">
                <button className="relative w-12 h-12 rounded-full group">
                  <div className="floater w-full h-full absolute top-0 left-0 bg-orange-500 rounded-full duration-300 group-hover:-top-8 group-hover:shadow-2xl"></div>
                  <div className="icon relative z-10 w-full h-full flex items-center justify-center border-2 border-orange-500 rounded-full">
                    <Mail className="h-5 w-5 group-hover:text-black text-white duration-300" />
                  </div>
                </button>
              </div>
            </motion.div>
          </div>

          <div className="flex-1 flex justify-center items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="relative w-96 h-96"
            >
              <div className="absolute inset-0 animate-spin" style={{ animationDuration: '20s' }}>
                <div className="w-full h-full border border-orange-400/30 rounded-full"></div>
                <div className="absolute top-4 left-4 w-4 h-4 bg-orange-400 rounded-full"></div>
                <div className="absolute top-8 right-8 w-3 h-3 bg-orange-500 rounded-full"></div>
                <div className="absolute bottom-6 left-12 w-2 h-2 bg-orange-300 rounded-full"></div>
                <div className="absolute bottom-12 right-6 w-3 h-3 bg-orange-400 rounded-full"></div>
              </div>

              <div className="absolute inset-8 animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}>
                <div className="w-full h-full border border-orange-400/50 rounded-full"></div>
                <div className="absolute top-2 left-2 w-3 h-3 bg-orange-500 rounded-full"></div>
                <div className="absolute top-6 right-4 w-2 h-2 bg-orange-400 rounded-full"></div>
                <div className="absolute bottom-4 left-6 w-4 h-4 bg-orange-300 rounded-full"></div>
              </div>

              <div className="absolute inset-16 animate-spin" style={{ animationDuration: '10s' }}>
                <div className="w-full h-full border border-orange-400/70 rounded-full"></div>
                <div className="absolute top-1 left-1 w-2 h-2 bg-orange-400 rounded-full"></div>
                <div className="absolute bottom-2 right-2 w-3 h-3 bg-orange-500 rounded-full"></div>
              </div>

              <div className="absolute inset-24 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center shadow-2xl">
                <div className="w-full h-full bg-gradient-to-br from-orange-500 to-orange-700 rounded-full flex items-center justify-center border-4 border-white/20">
                  <span className="text-4xl font-bold text-white tracking-wider">A.I.</span>
                </div>
              </div>

              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="absolute rounded-full border border-orange-400/20"
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
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-orange-400">À propos</h2>
            <Card className="glass neon-glow">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="w-32 h-32 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">RT</span>
                  </div>
                  <div className="text-left">
                    <h3 className="text-2xl font-bold mb-4 text-orange-400">Raphaël Theuillon</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Technico-commercial avec une solide expérience en gestion d'entreprise, vente et bâtiment. 
                      Doté d'un fort esprit d'initiative, d'une excellente capacité d'adaptation et d'un goût prononcé 
                      pour le travail en équipe ou en autonomie. Passionné par l'entrepreneuriat, le digital et les 
                      technologies innovantes, je combine expertise commerciale et maîtrise des outils d'IA pour créer 
                      des solutions automatisées performantes.
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
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-orange-400">Mon Parcours</h2>
            
            {/* Légende */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center gap-2 bg-gray-900/50 px-4 py-2 rounded-full border border-orange-400/30">
                <span>💼</span>
                <div className="w-3 h-3 bg-orange-400 rounded-full"></div>
                <span className="text-sm text-orange-400">Expériences Professionnelles</span>
              </div>
              <div className="flex items-center gap-2 bg-gray-900/50 px-4 py-2 rounded-full border border-green-400/30">
                <span>🚀</span>
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <span className="text-sm text-green-400">Projets Personnels</span>
              </div>
              <div className="flex items-center gap-2 bg-gray-900/50 px-4 py-2 rounded-full border border-blue-400/30">
                <span>🎓</span>
                <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                <span className="text-sm text-blue-400">Formation</span>
              </div>
            </div>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-orange-400 to-orange-600 h-full"></div>

            {[
              {
                year: '2023-2024',
                title: 'Technico-commercial - Murprotec',
                description: 'Prospection terrain, gestion relation client, formation nouveaux commerciaux et participation stratégie développement',
                side: 'left',
                type: 'experience',
                icon: '💼'
              },
              {
                year: '2022-2023',
                title: 'Technico-commercial - CTBG',
                description: 'Développement portefeuille client, stratégies commerciales, supervision planning et encadrement équipes',
                side: 'right',
                type: 'experience',
                icon: '💼'
              },
              {
                year: '2022-2024',
                title: 'Restaurant Le Kin Di Thaï (Associé)',
                description: 'Création et organisation complète, recrutement équipes, stratégie marketing digital et optimisation livraison',
                side: 'left',
                type: 'project',
                icon: '🚀'
              },
              {
                year: '2021-2024',
                title: 'Entreprise de transport colis (Associé)',
                description: 'Création, gestion de flotte, optimisation tournées avec scan automatisé et négociation tarifaire',
                side: 'right',
                type: 'project',
                icon: '🚀'
              },
              {
                year: '2022-2023',
                title: 'Wash Center',
                description: 'Lancement projet, développement concept, management équipe et marketing digital',
                side: 'left',
                type: 'project',
                icon: '🚀'
              },
              {
                year: '2019-2021',
                title: 'BTS Bâtiment (Alternance)',
                description: 'Formation en alternance chez Cazy Guillaume - CFA BTP Blois',
                side: 'right',
                type: 'formation',
                icon: '🎓'
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
                <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full border-4 border-black neon-glow" style={{
                  background: item.type === 'experience' ? '#fb923c' : item.type === 'project' ? '#22c55e' : '#3b82f6'
                }}></div>
                
                <Card className="glass neon-glow" style={{
                  borderColor: item.type === 'experience' ? 'rgba(251, 146, 60, 0.3)' : item.type === 'project' ? 'rgba(34, 197, 94, 0.3)' : 'rgba(59, 130, 246, 0.3)'
                }}>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-lg">{item.icon}</span>
                      <Badge 
                        className="text-black font-bold" 
                        style={{
                          background: item.type === 'experience' ? '#fb923c' : item.type === 'project' ? '#22c55e' : '#3b82f6'
                        }}
                      >
                        {item.year}
                      </Badge>
                      <Badge 
                        variant="outline" 
                        className="text-xs"
                        style={{
                          borderColor: item.type === 'experience' ? '#fb923c' : item.type === 'project' ? '#22c55e' : '#3b82f6',
                          color: item.type === 'experience' ? '#fb923c' : item.type === 'project' ? '#22c55e' : '#3b82f6'
                        }}
                      >
                        {item.type === 'experience' ? 'Expérience Pro' : item.type === 'project' ? 'Projet Personnel' : 'Formation'}
                      </Badge>
                    </div>
                    <h3 className="text-xl font-bold mb-2" style={{
                      color: item.type === 'experience' ? '#fb923c' : item.type === 'project' ? '#22c55e' : '#3b82f6'
                    }}>{item.title}</h3>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-orange-400">Compétences</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Agents IA',
                icon: Brain,
                description: 'Création d\'agents IA personnalisés et automatisation de processus métier',
                color: 'from-orange-400 to-orange-600'
              },
              {
                title: 'Marketing Digital',
                icon: Target,
                description: 'Stratégies multicanales, création de contenus et optimisation ROI',
                color: 'from-orange-500 to-orange-700'
              },
              {
                title: 'Gestion d\'équipe',
                icon: Users,
                description: 'Management, formation et encadrement des équipes commerciales',
                color: 'from-orange-400 to-orange-600'
              },
              {
                title: 'Prospection terrain',
                icon: Target,
                description: 'Développement portefeuille client et négociation commerciale',
                color: 'from-orange-500 to-orange-700'
              },
              {
                title: 'Négociation commerciale',
                icon: MessageSquare,
                description: 'Excellence en négociation avec clients et fournisseurs',
                color: 'from-orange-400 to-orange-600'
              },
              {
                title: 'Création d\'entreprise',
                icon: Zap,
                description: 'Lancement de projets, gestion complète et développement business',
                color: 'from-orange-500 to-orange-700'
              },
              {
                title: 'Gestion de projet',
                icon: Code,
                description: 'Coordination complète de projets complexes et multidisciplinaires',
                color: 'from-orange-400 to-orange-600'
              },
              {
                title: 'Stratégie d\'entreprise',
                icon: Brain,
                description: 'Développement de concepts business et optimisation des performances',
                color: 'from-orange-500 to-orange-700'
              }
            ].map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="glass neon-glow h-full hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 cursor-pointer group">
                  <CardContent className="p-6 text-center">
                    <div className={`w-16 h-16 bg-gradient-to-br ${skill.color} rounded-full flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                      <skill.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-lg font-bold mb-3 text-orange-400 group-hover:text-orange-300 transition-colors duration-300">{skill.title}</h3>
                    <p className="text-gray-300 group-hover:text-white transition-colors duration-300 text-sm leading-relaxed">
                      {skill.description}
                    </p>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-orange-400">Contact</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="glass neon-glow">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-6 text-orange-400">Écrivez-moi</h3>
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
                  <Button className="w-full bg-orange-400 hover:bg-orange-500 text-black neon-glow">
                    <Mail className="mr-2 h-4 w-4" />
                    Envoyer
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card className="glass neon-glow">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-6 text-orange-400">Retrouvez-moi</h3>
                  <div className="space-y-4">
                    <Button
                      asChild
                      variant="outline"
                      className="w-full glass border-orange-400 text-white hover:bg-orange-400 hover:text-black"
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
                      className="w-full glass border-orange-400 text-white hover:bg-orange-400 hover:text-black"
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
                      className="w-full glass border-orange-400 text-white hover:bg-orange-400 hover:text-black"
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
                className="w-full bg-gradient-to-r from-orange-400 to-orange-600 hover:from-orange-500 hover:to-orange-700 text-black neon-glow"
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

      <style jsx>{`
        /* Base responsive styles */
        .glass {
          background: rgba(25, 25, 25, 0.8);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 147, 41, 0.2);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }

        .neon-glow {
          box-shadow: 0 0 20px rgba(255, 147, 41, 0.3);
        }

        /* Particle animation */
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-10px) rotate(120deg); }
          66% { transform: translateY(-5px) rotate(240deg); }
        }

        .floating {
          animation: float 6s ease-in-out infinite;
        }

        /* Social buttons effect */
        .social-button {
          position: relative;
        }

        .floater {
          transition: all 0.3s ease;
        }

        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }

        ::-webkit-scrollbar-track {
          background: #1a1a1a;
        }

        ::-webkit-scrollbar-thumb {
          background: linear-gradient(135deg, #ff9329, #ffb366);
          border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(135deg, #e8760e, #ff9329);
        }

        /* Mobile responsive adjustments */
        @media (max-width: 768px) {
          .text-6xl {
            font-size: 3rem;
          }
          
          .text-8xl {
            font-size: 4rem;
          }
          
          .text-4xl {
            font-size: 2rem;
          }
          
          .text-5xl {
            font-size: 2.5rem;
          }
          
          /* Hero section mobile - KEEP SIDE BY SIDE */
          #home .flex {
            flex-direction: row !important;
          }
          
          #home .flex-1:first-child {
            flex: 0.6;
            max-width: 60%;
          }
          
          #home .flex-1:last-child {
            flex: 0.4;
            max-width: 40%;
            margin-top: 0;
          }
          
          #home .w-96 {
            width: 10rem;
            height: 10rem;
          }
          
          #home .text-lg {
            font-size: 0.9rem;
          }
          
          #home .text-xl {
            font-size: 1rem;
          }
          
          #home .text-2xl {
            font-size: 1.1rem;
          }
          
          #home .px-8 {
            padding-left: 1rem;
            padding-right: 1rem;
          }
          
          #home .gap-4 {
            gap: 0.5rem;
          }
          
          #home .w-12 {
            width: 2rem;
            height: 2rem;
          }
          
          #home .h-5 {
            width: 1rem;
            height: 1rem;
          }
          
          /* Timeline mobile */
          .md\\:mr-1\\/2, .md\\:ml-1\\/2 {
            margin-left: 0 !important;
            margin-right: 0 !important;
            padding-left: 2rem !important;
            padding-right: 1rem !important;
            text-align: left !important;
          }
          
          /* Skills grid mobile */
          .lg\\:grid-cols-4 {
            grid-template-columns: repeat(1, 1fr);
          }
          
          .md\\:grid-cols-3 {
            grid-template-columns: repeat(2, 1fr);
          }
          
          /* Contact grid mobile */
          .md\\:grid-cols-2 {
            grid-template-columns: repeat(1, 1fr);
          }
          
          /* About section mobile */
          .md\\:flex-row {
            flex-direction: column;
          }
          
          /* Navigation mobile improvements */
          .hidden.md\\:flex {
            display: none;
          }
          
          /* Légende mobile */
          .flex-wrap {
            flex-direction: column;
            align-items: center;
          }
          
          .flex-wrap > div {
            margin-bottom: 0.5rem;
          }
        }

        /* Tablet responsive */
        @media (max-width: 1024px) and (min-width: 769px) {
          .lg\\:grid-cols-4 {
            grid-template-columns: repeat(3, 1fr);
          }
          
          #home .w-96 {
            width: 20rem;
            height: 20rem;
          }
        }

        /* Small mobile adjustments */
        @media (max-width: 480px) {
          .text-6xl {
            font-size: 2rem;
          }
          
          .text-8xl {
            font-size: 2.5rem;
          }
          
          #home .flex-1:first-child {
            flex: 0.65;
            max-width: 65%;
          }
          
          #home .flex-1:last-child {
            flex: 0.35;
            max-width: 35%;
          }
          
          #home .w-96 {
            width: 8rem;
            height: 8rem;
          }
          
          #home .text-lg {
            font-size: 0.8rem;
            line-height: 1.2;
          }
          
          #home .leading-relaxed {
            max-width: 100%;
          }
          
          #home .gap-4 {
            gap: 0.25rem;
          }
          
          #home .w-12 {
            width: 1.75rem;
            height: 1.75rem;
          }
          
          #home .px-8 {
            padding-left: 0.75rem;
            padding-right: 0.75rem;
          }
          
          #home .py-3 {
            padding-top: 0.5rem;
            padding-bottom: 0.5rem;
          }
          
          .md\\:grid-cols-3 {
            grid-template-columns: repeat(1, 1fr);
          }
          
          .max-w-lg {
            max-width: 100%;
          }
          
          /* Ensure AI circle stays visible */
          #home .inset-24 {
            inset: 1.5rem;
          }
          
          #home .text-4xl {
            font-size: 1.5rem;
          }
        }

        /* Ultra wide screen adjustments */
        @media (min-width: 1920px) {
          .max-w-7xl {
            max-width: 90rem;
          }
        }
      `}</style>
    </div>
  );
}