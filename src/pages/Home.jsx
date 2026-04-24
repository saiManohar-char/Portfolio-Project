function Home() {
  return (
    <div className="home-container">
      <header className="hero-section fade-in-up stagger-1">
        <div className="profile-wrapper">
          <div className="profile-placeholder">SM</div>
        </div>
        <div className="hero-content">
          <h1>Hello, I'm <span className="highlight">Sai Manohar</span></h1>
          <p className="subtitle">Backend Developer & Machine Learning Enthusiast</p>
        </div>
      </header>

      <section className="info-grid">
        <div className="info-card glass-card fade-in-up stagger-2">
          <div className="card-header">
            <span className="icon">👤</span>
            <h2>About Me</h2>
          </div>
          <p>
            I am a dedicated Backend Developer with a deep interest in Machine Learning and Computer Vision. 
            I specialize in building robust server-side applications and exploring the intersection of 
            AI and human-computer interaction.
          </p>
        </div>

        <div className="info-card glass-card fade-in-up stagger-3">
          <div className="card-header">
            <span className="icon">🔬</span>
            <h2>Research & Interests</h2>
          </div>
          <ul className="interest-list">
            <li>Machine Learning & Neural Networks</li>
            <li>Computer Vision & Gesture Recognition</li>
            <li>Backend Architecture & API Design</li>
            <li>Internet of Things (IoT)</li>
          </ul>
        </div>

        <div className="info-card glass-card fade-in-up stagger-4">
          <div className="card-header">
            <span className="icon">📞</span>
            <h2>Personal Identity</h2>
          </div>
          <div className="details-list">
            <div className="detail-item">
              <span className="label">Name</span>
              <span className="value">Sai Manohar</span>
            </div>
            <div className="detail-item">
              <span className="label">Contact</span>
              <span className="value">+91 9347735269</span>
            </div>
            <div className="detail-item">
              <span className="label">Personal Email</span>
              <span className="value email">manoharsai2005@gmail.com</span>
            </div>
            <div className="detail-item">
              <span className="label">Location</span>
              <span className="value">Andhra Pradesh, India</span>
            </div>
          </div>
        </div>

        <div className="info-card glass-card full-width fade-in-up stagger-4">
          <div className="card-header">
            <span className="icon">⚡</span>
            <h2>Technical Arsenal</h2>
          </div>
          <div className="skills-tags">
            {['Java', 'Spring Boot', 'Python', 'OpenCV', 'MediaPipe', 'C++', 'MySQL', 'Git', 'HTML', 'CSS', 'REST API', 'Linux'].map(skill => (
              <span key={skill} className="skill-tag">{skill}</span>
            ))}
          </div>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{ __html: `
        .home-container {
          display: flex;
          flex-direction: column;
          gap: 80px;
        }
        .hero-section {
          display: flex;
          align-items: center;
          gap: 50px;
          padding: 40px 0;
        }
        .profile-wrapper {
          position: relative;
          width: 180px;
          height: 180px;
          flex-shrink: 0;
        }
        .profile-wrapper::after {
          content: '';
          position: absolute;
          inset: -10px;
          background: linear-gradient(135deg, var(--primary), var(--accent));
          border-radius: 50%;
          opacity: 0.3;
          filter: blur(20px);
          z-index: -1;
        }
        .profile-placeholder {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background: var(--bg-dark);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 5rem;
          font-weight: 800;
          color: white;
          border: 2px solid var(--glass-border);
          font-family: 'Space Grotesk', sans-serif;
        }
        .hero-content h1 {
          font-size: clamp(2.5rem, 8vw, 4rem);
          font-family: 'Space Grotesk', sans-serif;
          line-height: 1.1;
          margin-bottom: 15px;
        }
        .highlight {
          background: linear-gradient(135deg, var(--primary), var(--accent));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .subtitle {
          font-size: 1.3rem;
          color: var(--text-muted);
          max-width: 500px;
        }
        .info-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 25px;
        }
        .glass-card {
          background: var(--card-bg);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid var(--glass-border);
          border-radius: 24px;
          padding: 35px;
          transition: var(--transition);
        }
        .glass-card:hover {
          transform: translateY(-8px);
          border-color: var(--primary);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4), 0 0 20px rgba(139, 92, 246, 0.1);
        }
        .card-header {
          display: flex;
          align-items: center;
          gap: 15px;
          margin-bottom: 25px;
        }
        .card-header h2 {
          font-size: 1.4rem;
          font-family: 'Space Grotesk', sans-serif;
        }
        .icon {
          font-size: 1.5rem;
          background: var(--glass);
          width: 45px;
          height: 45px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 12px;
        }
        .interest-list {
          list-style: none;
        }
        .interest-list li {
          margin-bottom: 12px;
          padding-left: 20px;
          position: relative;
          color: var(--text-muted);
        }
        .interest-list li::before {
          content: '→';
          position: absolute;
          left: 0;
          color: var(--accent);
        }
        .details-list {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .detail-item {
          display: flex;
          flex-direction: column;
        }
        .label {
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--text-muted);
          margin-bottom: 4px;
        }
        .value {
          font-weight: 500;
          font-size: 1.05rem;
        }
        .email {
          color: var(--accent);
          font-size: 0.95rem;
        }
        .full-width {
          grid-column: 1 / -1;
        }
        .skills-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }
        .skill-tag {
          background: var(--glass);
          border: 1px solid var(--glass-border);
          padding: 8px 18px;
          border-radius: 12px;
          font-size: 0.9rem;
          font-weight: 500;
          transition: var(--transition);
        }
        .skill-tag:hover {
          background: white;
          color: var(--bg-dark);
          transform: translateY(-2px);
        }
        @media (max-width: 768px) {
          .hero-section {
            flex-direction: column;
            text-align: center;
            gap: 30px;
          }
          .info-grid {
            grid-template-columns: 1fr;
          }
        }
      `}} />
    </div>
  );
}

export default Home;
