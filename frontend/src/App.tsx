import {
  ArrowRight,
  BrainCircuit,
  ChartNoAxesCombined,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import Navbar from "./components/navigation/Navbar";
import LogoIntro from "./components/LogoIntro";

function App() {
  return (
    <main className="app">
      <LogoIntro />
      <Navbar />

      <section className="hero">
        <div className="hero-content">
          <div className="eyebrow">
            <Sparkles size={16} />
            Enterprise recruitment intelligence
          </div>

          <h1>
            Build exceptional teams with
            <span className="gradient-text"> intelligent hiring.</span>
          </h1>

          <p className="hero-description">
            NexHire AI helps technology companies discover, evaluate and hire
            qualified candidates using explainable artificial intelligence and
            structured recruitment workflows.
          </p>

          <div className="hero-actions">
            <button className="button button-primary" type="button">
              Start hiring
              <ArrowRight size={18} />
            </button>

            <button className="button button-secondary" type="button">
              Explore platform
            </button>
          </div>

          <div className="trust-row">
            <span>
              <ShieldCheck size={18} />
              Secure by design
            </span>

            <span>
              <BrainCircuit size={18} />
              Explainable AI
            </span>

            <span>
              <ChartNoAxesCombined size={18} />
              Real-time insights
            </span>
          </div>
        </div>

        <div className="hero-visual" aria-label="AI recruitment overview">
          <div className="visual-glow" />

          <div className="intelligence-card">
            <div className="card-header">
              <div>
                <span className="card-label">
                  AI talent intelligence
                </span>

                <h2>Candidate Match</h2>
              </div>

              <span className="live-status">Live</span>
            </div>

            <div className="score-section">
              <div className="score-ring">
                <span>94%</span>
              </div>

              <div>
                <strong>Excellent match</strong>
                <p>Senior Machine Learning Engineer</p>
              </div>
            </div>

            <div className="match-list">
              <div className="match-item">
                <span>Technical expertise</span>
                <strong>96%</strong>
              </div>

              <div className="progress-track">
                <span style={{ width: "96%" }} />
              </div>

              <div className="match-item">
                <span>Relevant experience</span>
                <strong>92%</strong>
              </div>

              <div className="progress-track">
                <span style={{ width: "92%" }} />
              </div>

              <div className="match-item">
                <span>Role compatibility</span>
                <strong>94%</strong>
              </div>

              <div className="progress-track">
                <span style={{ width: "94%" }} />
              </div>
            </div>

            <div className="card-footer">
              <ShieldCheck size={17} />
              Every recommendation includes an explanation.
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
