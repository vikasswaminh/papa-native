import React from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Cpu, 
  Layers, 
  Terminal, 
  Zap, 
  BookOpen, 
  Code, 
  ChevronRight,
  Settings,
  GitBranch,
  Rocket
} from 'lucide-react';

const FW1: React.FC = () => {
  const phases = [
    {
      title: "Phase 0 – Boot a shell",
      duration: "1 week",
      goal: "Linux boots, SSH works, Rust binary runs",
      tasks: ["Buildroot image", "BusyBox", "Static Rust hello-world"],
      metric: "I can SSH and run my Rust binary"
    },
    {
      title: "Phase 1 – VPN only",
      duration: "1–2 weeks",
      goal: "Secure connectivity first",
      tasks: ["Kernel WireGuard", "Rust service generates configs", "CLI: fw vpn add-peer"],
      metric: "Control plane first, data plane later"
    },
    {
      title: "Phase 2 – eBPF firewall v1",
      duration: "2–3 weeks",
      goal: "Stateless L3/L4 filtering",
      tasks: ["XDP hook", "Packet parsing", "BPF maps for rules", "Rust policy → map update"],
      metric: "iptables is unused"
    },
    {
      title: "Phase 3 – Stateful flows",
      duration: "2 weeks",
      goal: "Connection tracking & NAT",
      tasks: ["Add connection tracking", "Basic SNAT/DNAT"],
      metric: "Still no DPI"
    }
  ];

  return (
    <div className="bg-brand-charcoal min-h-screen pb-20">
      {/* Header / Hero */}
      <section className="relative py-20 bg-gradient-to-b from-brand-blue/5 to-transparent overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <div className="flex items-center space-x-2 text-brand-blue mb-4">
              <Shield className="w-6 h-6" />
              <span className="font-bold tracking-widest uppercase text-sm">Product Guide v1</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
              Papanative: <span className="text-brand-blue">Headless Network Appliance</span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed">
              Building a modern, secure, and high-performance firewall using Rust safety, 
              eBPF speed, and Linux maturity.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-8 space-y-16">
            
            {/* 1. Scope */}
            <section id="scope" className="scroll-mt-24">
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <Layers className="w-6 h-6 mr-3 text-brand-blue" />
                Product Scope
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
                  <h3 className="font-bold text-white mb-4">What we are building</h3>
                  <ul className="space-y-2 text-gray-400 text-sm">
                    <li className="flex items-start"><ChevronRight className="w-4 h-4 mr-2 text-brand-blue flex-shrink-0 mt-0.5" /> Stateful firewall (L3/L4 first)</li>
                    <li className="flex items-start"><ChevronRight className="w-4 h-4 mr-2 text-brand-blue flex-shrink-0 mt-0.5" /> VPN (WireGuard-compatible)</li>
                    <li className="flex items-start"><ChevronRight className="w-4 h-4 mr-2 text-brand-blue flex-shrink-0 mt-0.5" /> Policy-driven routing</li>
                    <li className="flex items-start"><ChevronRight className="w-4 h-4 mr-2 text-brand-blue flex-shrink-0 mt-0.5" /> Central Rust control plane</li>
                  </ul>
                </div>
                <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
                  <h3 className="font-bold text-gray-500 mb-4">NOT in v1</h3>
                  <ul className="space-y-2 text-gray-500 text-sm">
                    <li className="flex items-start"><X className="w-4 h-4 mr-2 flex-shrink-0 mt-0.5" /> DPI / L7 Proxy</li>
                    <li className="flex items-start"><X className="w-4 h-4 mr-2 flex-shrink-0 mt-0.5" /> IDS/IPS</li>
                    <li className="flex items-start"><X className="w-4 h-4 mr-2 flex-shrink-0 mt-0.5" /> Fancy UI</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 2. Architecture Diagram */}
            <section id="architecture" className="scroll-mt-24">
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <Cpu className="w-6 h-6 mr-3 text-brand-blue" />
                High-Level Architecture
              </h2>
              <div className="bg-white/5 border border-white/10 p-8 rounded-3xl overflow-x-auto">
                <div className="min-w-[600px] flex flex-col items-center space-y-8">
                  <div className="w-64 p-4 bg-brand-blue/20 border border-brand-blue/50 rounded-xl text-center">
                    <div className="font-bold mb-1">Rust Control Plane</div>
                    <div className="text-[10px] text-gray-400">Policy • Config • VPN • Update</div>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="h-8 w-px bg-brand-blue/50" />
                    <div className="text-[10px] bg-brand-charcoal px-2 py-1 border border-white/10 rounded font-mono">netlink / maps</div>
                    <div className="h-8 w-px bg-brand-blue/50" />
                  </div>
                  <div className="w-64 p-4 bg-brand-orange/10 border border-brand-orange/30 rounded-xl text-center">
                    <div className="font-bold mb-1 text-brand-orange">eBPF / XDP (Rust)</div>
                    <div className="text-[10px] text-gray-400">Firewall • NAT • Flow Tracking</div>
                  </div>
                  <div className="h-8 w-px bg-gray-600" />
                  <div className="w-80 p-6 bg-white/5 border border-white/10 rounded-2xl text-center">
                    <div className="font-bold mb-1">Linux Kernel</div>
                    <div className="text-[10px] text-gray-400">Drivers • Scheduler • Memory</div>
                  </div>
                </div>
              </div>
              <p className="mt-4 text-sm text-gray-500 italic text-center">
                Your “custom kernel” = eBPF + Rust logic.
              </p>
            </section>

            {/* 3. Base Linux Choice */}
            <section id="os" className="scroll-mt-24">
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <Settings className="w-6 h-6 mr-3 text-brand-blue" />
                Base Linux Choice
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-brand-blue/5 border border-brand-blue/20 rounded-2xl ring-2 ring-brand-blue/20">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="font-bold text-brand-blue text-lg">Buildroot</h3>
                    <span className="px-2 py-1 bg-brand-blue text-white text-[10px] font-bold rounded">RECOMMENDED</span>
                  </div>
                  <p className="text-sm text-gray-400 mb-4">Tiny, deterministic, and appliance-friendly. No systemd complexity.</p>
                  <ul className="text-xs space-y-2 text-gray-300">
                    <li>• Used by top router vendors</li>
                    <li>• Full control over rootfs</li>
                    <li>• Minimal attack surface</li>
                  </ul>
                </div>
                <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
                  <h3 className="font-bold text-white text-lg mb-4">Alpine Linux</h3>
                  <p className="text-sm text-gray-400 mb-4">Fast start, musl + busybox, and extremely Rust-friendly.</p>
                  <ul className="text-xs space-y-2 text-gray-300">
                    <li>• Disk image based</li>
                    <li>• Faster development cycle</li>
                    <li>• Great for initial prototyping</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 4. Development Phases */}
            <section id="phases" className="scroll-mt-24">
              <h2 className="text-2xl font-bold mb-8 flex items-center">
                <Rocket className="w-6 h-6 mr-3 text-brand-blue" />
                Development Roadmap
              </h2>
              <div className="space-y-8 relative before:absolute before:left-4 before:top-2 before:bottom-2 before:w-px before:bg-white/10">
                {phases.map((phase, i) => (
                  <div key={i} className="relative pl-12">
                    <div className="absolute left-0 top-1 w-8 h-8 bg-brand-charcoal border-2 border-brand-blue rounded-full flex items-center justify-center font-bold text-brand-blue text-sm z-10">
                      {i}
                    </div>
                    <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
                      <div className="flex flex-wrap justify-between items-center mb-4 gap-2">
                        <h3 className="font-bold text-white text-lg">{phase.title}</h3>
                        <span className="text-xs font-mono text-brand-blue bg-brand-blue/10 px-2 py-1 rounded">{phase.duration}</span>
                      </div>
                      <p className="text-sm text-gray-300 mb-4 font-medium italic">Goal: {phase.goal}</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <div className="text-[10px] uppercase tracking-wider font-bold text-gray-500 mb-2">Tasks</div>
                          <ul className="text-xs space-y-1 text-gray-400">
                            {phase.tasks.map((task, j) => <li key={j}>• {task}</li>)}
                          </ul>
                        </div>
                        <div>
                          <div className="text-[10px] uppercase tracking-wider font-bold text-gray-500 mb-2">Success Metric</div>
                          <p className="text-xs text-brand-blue font-mono">“{phase.metric}”</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* 5. Policy Engine */}
            <section id="policy" className="scroll-mt-24">
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <Zap className="w-6 h-6 mr-3 text-brand-blue" />
                How Policy Works
              </h2>
              <div className="bg-brand-charcoal border border-white/10 rounded-2xl overflow-hidden">
                <div className="bg-white/5 px-4 py-2 flex items-center space-x-2 border-b border-white/10">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  <span className="text-[10px] text-gray-500 font-mono ml-4">policy.yaml</span>
                </div>
                <div className="p-6 overflow-x-auto">
                  <pre className="text-sm font-mono text-brand-blue leading-relaxed">
{`rules:
  - action: allow
    src: 10.0.0.0/24
    dst: any
    proto: tcp
    port: 443

# Pipeline:
# Policy → Rust compiler → BPF maps → XDP program`}
                  </pre>
                </div>
              </div>
              <p className="mt-4 text-sm text-gray-400">
                No runtime parsing in kernel. All logic is compiled down to efficient BPF bytecode.
              </p>
            </section>

          </div>

          {/* Sidebar Navigation */}
          <div className="lg:col-span-4">
            <div className="sticky top-24 space-y-8">
              <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
                <h3 className="font-bold mb-4 flex items-center">
                  <BookOpen className="w-4 h-4 mr-2 text-brand-blue" />
                  Navigation
                </h3>
                <nav className="space-y-1">
                  {[
                    { name: "Product Scope", id: "scope" },
                    { name: "Architecture", id: "architecture" },
                    { name: "OS Choice", id: "os" },
                    { name: "Roadmap", id: "phases" },
                    { name: "Policy Engine", id: "policy" }
                  ].map(item => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className="block px-3 py-2 text-sm text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-all"
                    >
                      {item.name}
                    </a>
                  ))}
                </nav>
              </div>

              <div className="bg-brand-blue/10 border border-brand-blue/20 p-6 rounded-2xl">
                <h3 className="font-bold mb-4 flex items-center text-brand-blue">
                  <Terminal className="w-4 h-4 mr-2" />
                  Tooling Stack
                </h3>
                <div className="space-y-4">
                  <div>
                    <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">OS + Kernel</div>
                    <div className="text-sm font-mono text-white">Linux LTS 6.6+</div>
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">Rust</div>
                    <div className="text-sm font-mono text-white">Stable • no_std eBPF</div>
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">eBPF</div>
                    <div className="text-sm font-mono text-white">Aya (Rust-first)</div>
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">VPN</div>
                    <div className="text-sm font-mono text-white">WireGuard • BoringTun</div>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
                <h3 className="font-bold mb-4 flex items-center">
                  <GitBranch className="w-4 h-4 mr-2 text-brand-blue" />
                  Repo Layout
                </h3>
                <pre className="text-[10px] font-mono text-gray-400">
{`firewall-appliance/
├── buildroot/
├── kernel/
│   ├── ebpf/
│   └── loader/
├── control-plane/
│   ├── policy-engine/
│   └── vpn-manager/
├── image/
└── docs/`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="mt-24 py-20 bg-brand-blue text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Ready to Build?</h2>
          <p className="text-brand-blue-50 mb-10 max-w-xl mx-auto">
            The future of networking is safe, fast, and Rust-based. Start your journey with Papanative today.
          </p>
          <a
            href="https://github.com"
            className="inline-flex items-center px-8 py-3 bg-white text-brand-blue rounded-full font-bold hover:bg-gray-100 transition-all shadow-xl"
          >
            <Github className="w-5 h-5 mr-2" />
            Clone Reference Repo
          </a>
        </div>
      </section>
    </div>
  );
};

const X = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M18 6L6 18M6 6l12 12" />
  </svg>
);

export default FW1;
