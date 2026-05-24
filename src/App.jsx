function App() {
  return (
    <>
      <header className="site-header">
        <div className="container nav">
          <div className="brand">
            <span className="brand-badge" />
            <span>Daniel Dorante BIT</span>
          </div>
          <nav style={{ display: 'flex', gap: 6 }}>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="container">
            <div className="hero-grid">
              <div className="hero-text">
                <span className="eyebrow">Portfolio 2025</span>
                <h1 className="title">Hi, I'm Daniel, I build backend systems and intelligent software</h1>
                <p className="subtitle">Backend-focused software engineer working across data, machine learning, and intelligent systems. I build clean APIs, scalable tools, and practical ML solutions.</p>
                <div className="cta-row">
                  <a className="btn primary" href="#projects">View Projects</a>
                  <a className="btn" href="#contact">Contact Me</a>
                </div>
              </div>
              <figure className="hero-photo">
                {}
                <img src="/profile.jpg" alt="Daniel Dorante" width={420} height={420} loading="eager" decoding="async" />
              </figure>
            </div>
          </div>
        </section>

        <section id="about">
          <div className="container">
            <div className="section-head">
              <div>
                <div className="section-title">About</div>
                <h2>Detail Oriented Backend Developer</h2>
              </div>
            </div>
            <div className="grid">
              <article className="card">
                <p>
                  Hey, I'm Daniel. I'm a developer who leans heavily toward backend engineering, data work, and machine learning. I love building systems that actually do something like clean APIs, pipelines, automation, and ML models that solve real problems.
                  I've worked with everything from Django and SQL to TensorFlow and computer vision, and I'm always looking for projects that challenge how I think about systems and data.
                </p>
                <div className="spacer-sm" />
                <p className="muted">
                  Learning more about distributed systems, smarter model deployment, and ways to make complex data feel simple.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section id="qualifications">
  <div className="container">
    <div className="section-head">
      <div>
        <div className="section-title">Qualifications</div>
        <h2>Qualifications</h2>
      </div>
    </div>

    <div className="grid">
      <article className="card">
        <h3 className="text-lg font-semibold">Bachelor of Computer Science</h3>
        <p className="text-gray-300 text-sm">
          Queensland University of Technology — 2025
        </p>
        <p className="text-gray-400 text-sm">
          Major: Computer Science<br />
          Minor: University Wide Minor
        </p>

        <div className="spacer-sm" />

        <h3 className="text-lg font-semibold">Diploma of Information Technology</h3>
        <p className="text-gray-300 text-sm">
          Tafe — 2019
        </p>
<div className="spacer-sm" />
        <h3 className="text-lg font-semibold">Queensland Certificate of Education</h3>
        <p className="text-gray-300 text-sm">
          Redlynch State College — 2018
        </p>
        <div className="spacer-sm" />
      </article>
    </div>
  </div>
</section>

        <section id="experience">
          <div className="container">
            <div className="section-head">
              <div>
                <div className="section-title">Experience</div>
                <h2>Graduate Software Engineer at SDSI (2026-Present)</h2>
              </div>
            </div>
            <div className="grid">
              <article className="card">
                <p>
                  As a Graduate Software Engineer, I work across Quality Assurance, support operations, troubleshooting, and internal tooling within a large-scale emergency services dispatch environment. My role involves investigating and reproducing software defects, analysing logs and system behaviour, supporting ticket resolution workflows, and collaborating within Agile/Scrum teams using Jira and Azure-based infrastructure. Alongside my assigned QA responsibilities, I have independently developed automation tools, internal utilities, and troubleshooting solutions using C#, .NET, WPF, SQL, and PowerShell to improve workflow efficiency and reduce repetitive manual processes. I regularly collaborate with other graduates through shared repositories, peer-reviewed pull requests, and internal tooling initiatives focused on automation, operational support, and system reliability.
                </p>
                <div className="spacer-sm" />
                <div className="tag-row">
                  <span className="tag">Dotnet</span>
                  <span className="tag">Automation</span>
                  <span className="tag">Jira</span>
                  <span className="tag">CI/CD</span>
                  <span className="tag">Support Engineering</span>
                  <span className="tag">C#</span>
                  <span className="tag">SQL</span>
                  <span className="tag">Quality Assurance</span>
                  <span className="tag">Agile/Scrum</span>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section id="capstone">
          <div className="container">
            <div className="section-head">
              <div>
                <h2>Industry Capstone Project — Backend Developer (2024 - 2025)</h2>
              </div>
            </div>
            <div className="grid">
              <article className="card">
                <p>
                  I spent a full year working in a team of four on an industry project with a mining company, building an offline-first Android application for managing tasks and equipment in remote environments. I was responsible for the backend, where I developed a large-scale Django API with endpoint design, offline/online syncing logic, and robust data workflows for the Android client. We held weekly Scrum meetings with the company’s CEO, worked with real requirements and constraints, and delivered a complete production-ready solution: a full Java Android application supported by a substantial backend system.
                </p>
                <div className="spacer-sm" />
                <div className="tag-row">
                  <span className="tag">Java</span>
                  <span className="tag">Python</span>
                  <span className="tag">Django</span>
                  <span className="tag">API design</span>
                  <span className="tag">Agile/Scrum</span>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section id="projects">
          <div className="container">
            <div className="section-head">
              <div>
                <div className="section-title">Projects</div>
                <h2>Selected Projects</h2>
              </div>
              <a className="btn" href="#contact">Let's collaborate</a>
            </div>

            <div className="grid">
              <article className="card sm-6">
                <div className="eyebrow">Chess Engine</div>
                <h3>Red Squirrel</h3>
                <p>A custom chess engine designed from the ground up with alpha-beta pruning, move ordering, and a bespoke evaluation function. Includes a full UI built in Pygame for playing, testing, and visualising positions.</p>
                <div className="tag-row">
                  <span className="tag">Python</span>
                  <span className="tag">Pygame</span>
                  <span className="tag">Alpha-beta Pruning</span>
                  <span className="tag">Open Source</span>
                </div>
              </article>

              <article className="card sm-6">
                <div className="eyebrow">Bird Species Classifier</div>
                <h3>Bird Machine</h3>
                <p>CNN-based bird species classifier built using MobileNetV2 and EfficientNet-Lite, trained on a large labeled dataset. Achieved 91% accuracy with a full preprocessing, training, and evaluation pipeline.</p>
                <div className="tag-row">
                  <span className="tag">Python</span>
                  <span className="tag">Tensorflow</span>
                  <span className="tag">CNN</span>
                  <span className="tag">Deep Learning</span>
                  <span className="tag">Computer Vision</span>
                </div>
              </article>

              <article className="card sm-4">
                <div className="eyebrow">Block Chain Application</div>
                <h3>CarbonChain</h3>
                <p>Decentralized accountability platform built with Ethereum smart contracts to track and reward sustainable corporate behaviour. Includes a frontend dashboard and full Solidity-based contract system.</p>
                <div className="tag-row">
                  <span className="tag">Solidity</span>
                  <span className="tag">Ethereum</span>
                  <span className="tag">Blockchain</span>
                  <span className="tag">MetaMask</span>
                </div>
              </article>

              <article className="card sm-4">
                <div className="eyebrow">Java Desktop Application</div>
                <h3>Ergo Quest</h3>
                <p>Java-based desktop application for tracking and visualising user gaming habits. Designed custom UI components and implemented local data storage for session analytics and performance insights.</p>
                <div className="tag-row">
                  <span className="tag">Java</span>
                  <span className="tag">CSS</span>
                  <span className="tag">Analytics</span>
                  <span className="tag">Desktop App</span>

                </div>
              </article>

              <article className="card sm-4">
                <div className="eyebrow">Cloud Application</div>
                <h3>SadBoi</h3>
                <p>Cloud-hosted web application built with AWS (S3, ECS, EC2) and MongoDB. Implemented containerised services, storage pipelines, and a full frontend interface for data management and retrieval.</p>
                <div className="tag-row">
                  <span className="tag">AWS</span>
                  <span className="tag">MongoDB</span>
                  <span className="tag">Docker</span>
                  <span className="tag">Cloud Architecture</span>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section id="skills">
          <div className="container">
            <div className="section-head">
              <div>
                <div className="section-title">Skills</div>
                <h2>Tools I specialize in</h2>
              </div>
            </div>
            <div className="grid">
              <div className="card">
                <div className="tag-row">
                  {[
                  'Python', 'C, C++, C#', 'Django', 'REST APIs', 'SQL',
                  'Machine Learning', 'CNNs', 'TensorFlow', 
                  'Data Pipelines', 'Computer Vision',
                  'Android (Java)', 
                  'AWS', 'Docker', 'Cloud Architecture',
                  'Git', 'Linux'
                ].map((t) => (<span key={t} className="tag">{t}</span>))}
              </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact">
          <div className="container">
            <div className="section-head">
              <div>
                <div className="section-title">Contact</div>
                <h2>Let's build something great</h2>
              </div>
            </div>
            <div className="grid">
              <div className="card">
                <p>Open to backend or front end roles. For the quickest reply, email me.</p>
                <div className="spacer-md" />
                <div className="cta-row">
                  <a className="btn primary" href="mailto:dpdorante249@gmail.com">Email Me</a>
                  <a className="btn" href="https://github.com/DanielDorante" target="_blank" rel="noreferrer">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2C6.48 2 2 6.58 2 12.26C2 16.84 4.87 20.66 8.84 21.98C9.34 22.07 9.52 21.76 9.52 21.5C9.52 21.27 9.51 20.57 9.51 19.72C7 20.25 6.35 18.64 6.35 18.64C5.89 17.47 5.21 17.16 5.21 17.16C4.27 16.48 5.28 16.49 5.28 16.49C6.31 16.56 6.85 17.64 6.85 17.64C7.77 19.33 9.35 18.84 10 18.58C10.1 17.9 10.38 17.45 10.69 17.21C8.64 16.97 6.5 16.15 6.5 12.59C6.5 11.59 6.86 10.78 7.47 10.16C7.37 9.92 7.05 8.97 7.57 7.65C7.57 7.65 8.33 7.39 9.5 8.32C10.22 8.11 11 8.01 11.78 8.01C12.56 8.01 13.34 8.11 14.06 8.32C15.22 7.39 15.98 7.65 15.98 7.65C16.5 8.97 16.18 9.92 16.08 10.16C16.69 10.78 17.05 11.6 17.05 12.59C17.05 16.16 14.9 16.96 12.85 17.2C13.24 17.49 13.58 18.12 13.58 19.1C13.58 20.52 13.56 21.55 13.56 21.5C13.56 21.76 13.74 22.08 14.25 21.98C18.21 20.66 21.08 16.84 21.08 12.26C21.08 6.58 16.6 2 11.08 2H12Z" fill="currentColor"/>
                    </svg>
                    GitHub
                  </a>
                  <a className="btn" href="https://www.linkedin.com/in/danieldorante/" target="_blank" rel="noreferrer">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6.94 8.94H4V20H6.94V8.94ZM5.47 7.53C6.42 7.53 7.19 6.76 7.19 5.81C7.19 4.86 6.42 4.09 5.47 4.09C4.52 4.09 3.75 4.86 3.75 5.81C3.75 6.76 4.52 7.53 5.47 7.53ZM20 20H17.06V14.52C17.06 13.22 17.03 11.55 15.28 11.55C13.5 11.55 13.22 12.95 13.22 14.43V20H10.28V8.94H13.09V10.38H13.13C13.52 9.63 14.49 8.84 15.97 8.84C19.01 8.84 20 10.84 20 13.83V20Z" fill="currentColor"/>
                    </svg>
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container" style={{display:'flex', alignItems:'center', justifyContent:'space-between', gap:12, flexWrap:'wrap'}}>
          <div className="muted">© {new Date().getFullYear()} Daniel Dorante</div>
          <div className="socials">
            <a className="icon-btn" href="https://github.com/DanielDorante" aria-label="GitHub" target="_blank" rel="noreferrer">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.48 2 2 6.58 2 12.26C2 16.84 4.87 20.66 8.84 21.98C9.34 22.07 9.52 21.76 9.52 21.5C9.52 21.27 9.51 20.57 9.51 19.72C7 20.25 6.35 18.64 6.35 18.64C5.89 17.47 5.21 17.16 5.21 17.16C4.27 16.48 5.28 16.49 5.28 16.49C6.31 16.56 6.85 17.64 6.85 17.64C7.77 19.33 9.35 18.84 10 18.58C10.1 17.9 10.38 17.45 10.69 17.21C8.64 16.97 6.5 16.15 6.5 12.59C6.5 11.59 6.86 10.78 7.47 10.16C7.37 9.92 7.05 8.97 7.57 7.65C7.57 7.65 8.33 7.39 9.5 8.32C10.22 8.11 11 8.01 11.78 8.01C12.56 8.01 13.34 8.11 14.06 8.32C15.22 7.39 15.98 7.65 15.98 7.65C16.5 8.97 16.18 9.92 16.08 10.16C16.69 10.78 17.05 11.6 17.05 12.59C17.05 16.16 14.9 16.96 12.85 17.2C13.24 17.49 13.58 18.12 13.58 19.1C13.58 20.52 13.56 21.55 13.56 21.5C13.56 21.76 13.74 22.08 14.25 21.98C18.21 20.66 21.08 16.84 21.08 12.26C21.08 6.58 16.6 2 11.08 2H12Z" fill="currentColor"/>
              </svg>
            </a>
            <a className="icon-btn" href="https://www.linkedin.com/in/danieldorante/" aria-label="LinkedIn" target="_blank" rel="noreferrer">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.94 8.94H4V20H6.94V8.94ZM5.47 7.53C6.42 7.53 7.19 6.76 7.19 5.81C7.19 4.86 6.42 4.09 5.47 4.09C4.52 4.09 3.75 4.86 3.75 5.81C3.75 6.76 4.52 7.53 5.47 7.53ZM20 20H17.06V14.52C17.06 13.22 17.03 11.55 15.28 11.55C13.5 11.55 13.22 12.95 13.22 14.43V20H10.28V8.94H13.09V10.38H13.13C13.52 9.63 14.49 8.84 15.97 8.84C19.01 8.84 20 10.84 20 13.83V20Z" fill="currentColor"/>
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App
