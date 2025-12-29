const skills = {
  Languages: ["JavaScript (ES6+)", "Python", "PHP", "Dart", "HTML5", "CSS3", "SQL"],
  Frontend: ["React", "Vite", "Tailwind CSS", "React Hook Form", "Zod"],
  Backend: ["Node.js", "Laravel", "PHP", "MySQL", "REST APIs"],
  Mobile: ["Flutter", "Dart", "Provider"],
  DataScience: ["Scikit-learn", "Pandas", "Matplotlib", "K-means", "PCA"],
  Networking: ["Wireshark", "TCP/UDP", "Fast Ethernet", "Packet Analysis"],
  Tools: ["Git/GitHub", "Jest", "Vite", "VS Code", "Postman"],
  Other: ["Responsive Design", "SPA Patterns", "State Management", "Testing"],
};

export default function Skills() {
  return (
    <section id="skills" className="bg-slate-950 text-white py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Skills & <span className="text-sky-400">Technologies</span>
        </h2>
        <p className="text-slate-400 mb-12 max-w-2xl">
          Technologies used across my M1 Computer Science labs - from React SPAs and full-stack 
          development to machine learning implementations and network protocol analysis.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skills).map(([category, items]) => (
            <div
              key={category}
              className="group rounded-2xl border border-slate-800/50 bg-gradient-to-b from-slate-900/50 to-slate-950/70 
              p-8 hover:border-sky-500/60 hover:shadow-xl hover:shadow-sky-500/20 transition-all duration-300 
              backdrop-blur-sm"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-2 h-8 bg-gradient-to-b from-sky-400 to-cyan-400 rounded-full shadow-lg" />
                <h3 className="text-xl font-semibold text-white">{category}</h3>
              </div>
              
              <ul className="space-y-3">
                {items.map((item, index) => (
                  <li 
                    key={item}
                    className="flex items-center gap-3 p-3 rounded-xl bg-slate-800/50 hover:bg-sky-500/10 
                               border border-slate-700/50 hover:border-sky-400/30 transition-all duration-200 
                               group-hover:-translate-x-1"
                  >
                    <span className="w-2 h-2 rounded-full bg-gradient-to-r from-sky-400 to-cyan-400 scale-0 group-hover:scale-100 transition-transform" />
                    <span className="text-sm font-medium text-slate-200 min-w-0 truncate">
                      {item}
                    </span>
                    <div className="ml-auto w-16 h-1.5 bg-slate-700/50 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-sky-400 to-emerald-400 rounded-full transition-all duration-500" 
                           style={{ width: `${60 + index * 5}%` }} />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
