function Projects() {
  const projects = [
    {
      title: "Hand Gesture Volume Control",
      description: "An AI-powered system that utilizes MediaPipe and OpenCV to control computer volume through real-time hand gesture recognition. It tracks hand landmarks and mapping finger distance to volume levels.",
      github: "https://github.com/saiManohar-char/Hand-Gesture-project",
      tech: ["Python", "OpenCV", "MediaPipe"]
    },
    {
      title: "Rolling Ball Maze",
      description: "A physics-based puzzle game developed in Unity. Players navigate a ball through challenging mazes using intuitive controls and realistic physics interactions.",
      github: "https://github.com/saiManohar-char/Rolling-Ball-Project",
      tech: ["Unity", "C#", "ShaderLab"]
    }
  ];

  return (
    <div className="projects-container">
      <header className="projects-header fade-in-up stagger-1">
        <h1 className="page-title">Featured <span className="highlight">Projects</span></h1>
        <p className="page-subtitle">Exploring the boundaries of AI-driven interaction and game mechanics.</p>
      </header>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className={`project-card glass-card fade-in-up stagger-${index + 2}`}>
            <div className="project-content">
              <div className="project-info">
                <h3>{project.title}</h3>
                <div className="tech-stack">
                  {project.tech.map((t, i) => <span key={i} className="tech-tag">{t}</span>)}
                </div>
                <p className="project-desc">{project.description}</p>
              </div>
              <a 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="github-button"
              >
                <span>Project Repository</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
              </a>
            </div>
          </div>
        ))}
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .projects-container {
          display: flex;
          flex-direction: column;
          gap: 60px;
        }
        .projects-header {
          text-align: left;
        }
        .page-title {
          font-size: clamp(2.5rem, 8vw, 4rem);
          font-family: 'Space Grotesk', sans-serif;
          margin-bottom: 15px;
        }
        .page-subtitle {
          color: var(--text-muted);
          font-size: 1.25rem;
          max-width: 600px;
        }
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: 30px;
        }
        .project-card {
          height: 100%;
          display: flex;
        }
        .project-content {
          display: flex;
          flex-direction: column;
          gap: 30px;
          width: 100%;
          justify-content: space-between;
        }
        .project-info h3 {
          font-size: 1.75rem;
          font-family: 'Space Grotesk', sans-serif;
          margin-bottom: 15px;
        }
        .tech-stack {
          display: flex;
          gap: 8px;
          margin-bottom: 20px;
        }
        .tech-tag {
          font-size: 0.75rem;
          background: rgba(255, 255, 255, 0.05);
          color: var(--accent);
          padding: 4px 12px;
          border-radius: 6px;
          letter-spacing: 0.05em;
          font-weight: 600;
          text-transform: uppercase;
        }
        .project-desc {
          color: var(--text-muted);
          font-size: 1.05rem;
          line-height: 1.7;
        }
        .github-button {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          padding: 14px 28px;
          background: var(--primary);
          color: white;
          text-decoration: none;
          border-radius: 12px;
          font-weight: 600;
          transition: var(--transition);
          box-shadow: 0 4px 15px rgba(139, 92, 246, 0.3);
        }
        .github-button:hover {
          background: var(--primary-hover);
          transform: translateY(-3px);
          box-shadow: 0 8px 25px rgba(139, 92, 246, 0.5);
        }
        @media (max-width: 768px) {
          .projects-grid {
            grid-template-columns: 1fr;
          }
        }
      `}} />
    </div>
  );
}

export default Projects;
