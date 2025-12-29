export default function Contact() {
  return (
    <section id="contact" className="bg-slate-950 text-white py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Get in <span className="text-sky-400">Touch</span>
        </h2>
        <p className="text-slate-400 mb-12 max-w-2xl text-center">
          Interested in collaborating on full-stack projects, ML implementations, or checking my CAW-labs? 
          Reach out by email, LinkedIn, or the form below.
        </p>

        <div className="grid md:grid-cols-[1.2fr,1fr] gap-8">
          {/* Contact Form */}
          <form
            className="space-y-4 bg-slate-900/70 backdrop-blur-sm border border-slate-800/50 rounded-2xl p-8 shadow-2xl"
            action="https://formspree.io/f/YOUR_FORM_ID"  // 
            method="POST"
          >
            <div className="space-y-1 text-sm">
              <label htmlFor="name" className="text-slate-200 font-medium block mb-1">
                Name
              </label>
              <input
                id="name"
                name="name"
                className="w-full rounded-xl bg-slate-950/80 border border-slate-700/50 px-4 py-3 text-sm text-slate-100 
                focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/30 transition-all duration-200
                placeholder:text-slate-500"
                placeholder="Your name"
                required
              />
            </div>
            
            <div className="space-y-1 text-sm">
              <label htmlFor="email" className="text-slate-200 font-medium block mb-1">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="w-full rounded-xl bg-slate-950/80 border border-slate-700/50 px-4 py-3 text-sm text-slate-100 
                focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/30 transition-all duration-200
                placeholder:text-slate-500"
                placeholder="your@email.com"
                required
              />
            </div>
            
            <div className="space-y-1 text-sm">
              <label htmlFor="message" className="text-slate-200 font-medium block mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="w-full rounded-xl bg-slate-950/80 border border-slate-700/50 px-4 py-3 text-sm text-slate-100 resize-vertical 
                focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/30 transition-all duration-200
                placeholder:text-slate-500"
                placeholder="Tell me about your project..."
                required
              />
            </div>
            
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-sky-500 via-cyan-400 to-emerald-400 
              px-6 py-3.5 text-sm font-semibold text-slate-950 shadow-xl shadow-sky-500/40 hover:brightness-110 
              hover:shadow-sky-500/60 transition-all duration-300 hover:-translate-y-0.5 group"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
              Send Message
            </button>
          </form>

          {/* Contact Info + Social Links */}
          <div className="space-y-6 text-sm">
            <div className="space-y-4">
              <div className="flex items-center gap-3 p-4 bg-slate-900/50 rounded-xl border border-slate-800/50">
                <div className="w-10 h-10 bg-gradient-to-br from-sky-500 to-cyan-400 rounded-lg flex items-center justify-center shadow-lg">
                  <svg className="w-5 h-5 text-slate-950" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.27 7.27c.883.883 2.317.883 3.2 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-slate-400 text-xs uppercase tracking-wider mb-1">Email</p>
                  <p className="font-mono text-slate-200">chouaib.chafi@univ-constantine2.dz</p>  
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 bg-slate-900/50 rounded-xl border border-slate-800/50">
                <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center shadow-lg">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-slate-400 text-xs uppercase tracking-wider mb-1">LinkedIn</p>
                  <a
                    href="https://www.linkedin.com/in/chafi-chouaib-00a785352?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"  // ← YOUR LINKEDIN
                    target="_blank"
                    rel="noreferrer"
                    className="font-mono text-sky-400 hover:text-sky-300 font-medium group"
                  >
                    /in/chafichouaib
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 bg-slate-900/50 rounded-xl border border-slate-800/50">
                <div className="w-10 h-10 bg-gradient-to-br from-slate-900 to-slate-800 rounded-lg flex items-center justify-center shadow-lg border border-slate-700">
                  <svg className="w-5 h-5 text-slate-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-slate-400 text-xs uppercase tracking-wider mb-1">X / Twitter</p>
                  <a
                    href="https://x.com/ChouaibChafi"  // ← YOUR X/TWITTER
                    target="_blank"
                    rel="noreferrer"
                    className="font-mono text-sky-400 hover:text-sky-300 font-medium group"
                  >
                    @chouaibchafi
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 bg-slate-900/50 rounded-xl border border-slate-800/50">
                <div className="w-10 h-10 bg-gradient-to-br from-slate-900 to-slate-800 rounded-lg flex items-center justify-center shadow-lg border border-slate-700">
                  <svg className="w-5 h-5 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <div>
                  <p className="text-slate-400 text-xs uppercase tracking-wider mb-1">GitHub</p>
                  <a
                    href="https://github.com/chouxchafi22"
                    target="_blank"
                    rel="noreferrer"
                    className="font-mono text-emerald-400 hover:text-emerald-300 font-medium group"
                  >
                    chouxchafi22
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-800 text-xs text-slate-500 text-center">
              <p>📍Constantine , Algeria</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
