const projects = [
  {
    title: "Lab 7: Kanban Board",
    description: "Interactive task management board with drag-and-drop functionality, column management, and responsive design using React hooks.",
    tech: ["React", "Vite", "Tailwind CSS", "React DnD"],
    github: "https://github.com/chouxchafi22/caw-labs/tree/main/lab-7-kanban-board",
    demo: "",
  },
  {
    title: "Lab 5: Authentication Forms",
    description: "Complete login/register system with form validation, error handling, password strength checking, and loading states.",
    tech: ["React", "Tailwind CSS", "React Hook Form", "Zod"],
    github: "https://github.com/chouxchafi22/caw-labs/tree/main/lab-5-auth-forms",
    demo: "",
  },
  {
    title: "Lab 3: Todo Dashboard",
    description: "Full-featured todo app with local storage persistence, filtering, search, and dark mode toggle using React Context.",
    tech: ["React", "Vite", "Tailwind CSS", "Local Storage"],
    github: "https://github.com/chouxchafi22/caw-labs/tree/main/lab-3-todo-dashboard",
    demo: "",
  },
  {
    title: "Network Analysis: Wireshark Labs",
    description: "Packet capture analysis, protocol dissection (TCP/UDP/ICMP), and network troubleshooting using Wireshark for Fast Ethernet labs.",
    tech: ["Wireshark", "Network Protocols", "Packet Analysis", "Telecom"],
    github: "https://github.com/chouxchafi22/caw-labs/tree/main/networking-labs",
    demo: "",
  },
  {
    title: "Machine Learning: K-means Clustering",
    description: "K-means implementation with data preprocessing, elbow method for optimal K, and visualization using Scikit-learn and Matplotlib.",
    tech: ["Python", "Scikit-learn", "Pandas", "PCA", "Matplotlib"],
    github: "https://github.com/chouxchafi22/caw-labs/tree/main/ml-kmeans-clustering",
    demo: "",
  },
  {
    title: "REST API: PHP Backend",
    description: "Full CRUD API with user authentication, database integration, input validation, and CORS handling using PHP and MySQL.",
    tech: ["PHP", "MySQL", "REST API", "Laravel"],
    github: "https://github.com/chouxchafi22/caw-labs/tree/main/php-rest-api",
    demo: "",
  },
  {
    title: "Flutter Mobile App",
    description: "Cross-platform mobile application with state management, navigation, API integration, and responsive UI design.",
    tech: ["Flutter", "Dart", "Provider", "HTTP"],
    github: "https://github.com/chouxchafi22/caw-labs/tree/main/flutter-todo-app",
    demo: "",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-slate-950 text-white py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Featured <span className="text-sky-400">CAW-Labs</span>
        </h2>
        <p className="text-slate-400 mb-8 max-w-2xl">
          Hands-on projects from my M1 Computer Science labs - React SPAs, full-stack APIs, 
          machine learning implementations, network analysis, and mobile development.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-gradient-to-b from-slate-900/80 to-slate-950 
              p-8 transition-all duration-300 hover:-translate-y-2 hover:border-sky-500/60 hover:shadow-2xl hover:shadow-sky-500/20"
            >
              <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.18),_transparent_60%)]" />
              
              <div className="relative z-10 flex flex-col h-full">
                <span className="inline-block w-8 h-8 rounded-lg bg-sky-500/20 text-sky-400 text-xs font-mono px-2 py-1 mb-4 opacity-80">
                  0{index + 1}
                </span>
                
                <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-sky-400 transition-all duration-300 line-clamp-2">
                  {project.title}
                </h3>
                
                <p className="text-sm text-slate-400 mb-6 leading-relaxed line-clamp-3 flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-slate-900/80 border border-slate-700 px-3 py-1.5 text-xs text-slate-300 
                               hover:bg-sky-500/20 hover:border-sky-500/50 hover:text-sky-300 transition-all duration-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-auto pt-4 border-t border-slate-800">
                  <a
                    href={project.github}
                    className="text-sky-400 hover:text-sky-300 font-semibold text-sm transition-all duration-200 underline underline-offset-2 group-hover:no-underline flex items-center gap-1"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Code
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
