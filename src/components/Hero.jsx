import profilePic from '../assets/profile.jpg';
export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white px-4 pt-24"
    >
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1 space-y-6">
          <p className="text-xs uppercase tracking-[0.35em] text-sky-400/90 animate-pulse">
            Developer Portfolio
          </p>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Hi, I'm <span className="text-sky-400">Chafi Chouaib</span>
            <span className="block text-slate-300 mt-2 text-2xl md:text-3xl">
              Junior Frontend/Backend Developer
            </span>
          </h1>

          <p className="text-slate-400 max-w-xl">
            M1 Computer Science student building full-stack web apps (React/Vite, Node.js, Laravel),
            mobile apps (Flutter), and machine learning solutions (K-means, PCA). This portfolio
            showcases my CAW-labs projects, network analysis, and telecom coursework from networking,
            web dev, and data science.

          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-sky-500 px-6 py-2.5 text-sm font-semibold text-slate-950 
              shadow-lg shadow-sky-500/30 hover:bg-sky-400 transition-transform duration-300 hover:-translate-y-0.5"
            >
              View my work
              <span className="inline-block animate-bounce">↓</span>
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-slate-600 px-6 py-2.5 text-sm font-semibold 
              text-slate-200 hover:border-sky-400 hover:text-sky-300 transition-transform duration-300 hover:-translate-y-0.5"
            >
              Contact me
            </a>
          </div>

          <div className="flex flex-wrap gap-3 pt-3 text-xs text-slate-400">
            <span className="px-3 py-1 rounded-full border border-slate-700 bg-slate-900/60">React</span>
            <span className="px-3 py-1 rounded-full border border-slate-700 bg-slate-900/60">Vite</span>
            <span className="px-3 py-1 rounded-full border border-slate-700 bg-slate-900/60">Tailwind CSS</span>
            <span className="px-3 py-1 rounded-full border border-slate-700 bg-slate-900/60">Jest</span>
            <span className="px-3 py-1 rounded-full border border-slate-700 bg-slate-900/60">PHP</span>
            <span className="px-3 py-1 rounded-full border border-slate-700 bg-slate-900/60">MySQL</span>
            <span className="px-3 py-1 rounded-full border border-slate-700 bg-slate-900/60">Node.js</span>
            <span className="px-3 py-1 rounded-full border border-slate-700 bg-slate-900/60">Flutter</span>
            <span className="px-3 py-1 rounded-full border border-slate-700 bg-slate-900/60">Laravel</span>
          </div>
        </div>

        <div className="flex-1">
          <div
            className="relative group w-64 h-64 md:w-72 md:h-72 mx-auto rounded-3xl bg-gradient-to-tr from-sky-500 via-cyan-400 to-emerald-400 
            p-[2px] shadow-[0_0_60px_rgba(56,189,248,0.55)]"
          >
            <div
              className="relative h-full w-full rounded-3xl bg-slate-950 flex flex-col items-center justify-center overflow-hidden
              transition-transform duration-500 group-hover:-translate-y-1 group-hover:rotate-1"
            >
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,_#38bdf8,_transparent_60%),radial-gradient(circle_at_bottom,_#22c55e,_transparent_60%)]" />

              <div className="relative z-20 w-32 h-32 md:w-36 md:h-36 rounded-2xl overflow-hidden mx-auto mb-4 border-4 border-slate-800/50 shadow-2xl">
                <img
                  src={profilePic}
                  alt="Chafi Chouaib - Junior Developer"
                  className="w-full h-full object-cover brightness-105 contrast-110 saturate-110 hover:brightness-110 transition-all duration-300"
                  loading="lazy"
                />
              </div>

              <div className="text-center space-y-1">
                <p className="text-xs uppercase tracking-[0.25em] text-sky-400/90 animate-pulse">
                  Available for work
                </p>
                <p className="text-lg font-semibold bg-gradient-to-r from-sky-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent">
                  Full-Stack / ML Engineer
                </p>


              </div>

              <div className="absolute -bottom-10 w-[140%] h-24 bg-gradient-to-r from-sky-500/40 via-transparent to-emerald-500/40 blur-3xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
