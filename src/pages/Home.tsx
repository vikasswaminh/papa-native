import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Shield, Globe, Terminal, ExternalLink, Github, Mail, Linkedin } from 'lucide-react';

const projects = [
  {
    title: "Papanative Firewall",
    description: "A high-performance headless network appliance built with Rust and eBPF. Features stateful packet filtering and WireGuard integration.",
    tags: ["Rust", "eBPF", "Linux", "WireGuard"],
    link: "/fw1",
    github: "https://github.com",
    image: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=modern%20server%20rack%20with%20blue%20neon%20lights%20cyberpunk%20style%20minimalist&image_size=landscape_4_3"
  },
  {
    title: "NetSense IDS",
    description: "Distributed intrusion detection system utilizing XDP for high-speed packet analysis and threat detection.",
    tags: ["Go", "eBPF", "Prometheus"],
    github: "https://github.com",
    image: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=abstract%20digital%20network%20security%20visualization%20blue%20and%20black&image_size=landscape_4_3"
  },
  {
    title: "RustFlow",
    description: "A userspace network stack implementation in pure Rust, focusing on performance and memory safety.",
    tags: ["Rust", "Networking", "Systems"],
    github: "https://github.com",
    image: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=rust%20programming%20language%20concept%20abstract%20industrial%20style&image_size=landscape_4_3"
  }
];

const Home: React.FC = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center bg-brand-charcoal overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-blue/10 to-transparent pointer-events-none" />
        <div className="absolute top-0 left-0 w-full h-full opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-blue rounded-full filter blur-[128px] animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-orange/30 rounded-full filter blur-[128px] animate-pulse delay-1000" />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              Avikas <span className="text-brand-blue">Swami</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-2xl mx-auto font-light leading-relaxed">
              Systems Engineer specializing in <span className="text-white font-medium">Rust</span>, 
              <span className="text-white font-medium"> eBPF</span>, and high-performance network infrastructure.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="#projects"
                className="px-8 py-3 bg-brand-blue text-white rounded-full font-semibold hover:bg-brand-blue/90 transition-all hover:scale-105 shadow-lg shadow-brand-blue/20"
              >
                View Projects
              </a>
              <a 
                href="#contact"
                className="px-8 py-3 border border-white/10 text-white rounded-full font-semibold hover:bg-white/5 transition-all"
              >
                Contact Me
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-brand-charcoal/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6 flex items-center">
                <Terminal className="w-8 h-8 text-brand-blue mr-3" />
                About Me
              </h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                I am a passionate systems engineer with a deep interest in building secure and efficient network applications. 
                My expertise lies at the intersection of systems programming and networking, with a focus on leveraging 
                the safety of Rust and the power of eBPF to redefine kernel-level performance.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Shield, text: "Security-First Design" },
                  { icon: Cpu, text: "Low-Level Systems" },
                  { icon: Globe, text: "Network Protocols" },
                  { icon: Terminal, text: "Open Source Contributor" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center space-x-2 text-sm text-gray-300">
                    <item.icon className="w-4 h-4 text-brand-blue" />
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl overflow-hidden border border-white/10 group">
                <img 
                  src="https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=portrait%20of%20a%20young%20male%20engineer%20with%20glasses%20minimalist%20background%20modern%20lighting&image_size=square_hd" 
                  alt="Avikas Swami"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-brand-blue/20 rounded-2xl -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-gray-400">A selection of my recent work in systems and networking.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-brand-blue/50 transition-all"
              >
                <div className="aspect-video overflow-hidden">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-brand-blue transition-colors">{project.title}</h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-2 py-1 text-[10px] uppercase tracking-wider font-bold bg-brand-blue/10 text-brand-blue rounded border border-brand-blue/20">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    {project.link ? (
                      <a href={project.link} className="text-sm font-semibold flex items-center hover:text-brand-blue transition-colors">
                        View Details <ExternalLink className="w-4 h-4 ml-1" />
                      </a>
                    ) : (
                      <div />
                    )}
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-white/10 rounded-full transition-colors">
                      <Github className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-brand-blue/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-brand-charcoal border border-white/10 rounded-3xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold mb-6">Let's Connect</h2>
            <p className="text-gray-400 mb-10 max-w-lg mx-auto">
              Interested in collaborating or just want to chat about Rust and eBPF? Feel free to reach out through any of these platforms.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              {[
                { icon: Mail, label: "Email", href: "mailto:engineer@example.com" },
                { icon: Github, label: "GitHub", href: "https://github.com" },
                { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" }
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  className="flex items-center space-x-3 px-6 py-3 rounded-xl bg-white/5 hover:bg-brand-blue hover:text-white transition-all group"
                >
                  <item.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span className="font-medium">{item.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
