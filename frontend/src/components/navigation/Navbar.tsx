import { BrainCircuit } from "lucide-react";

import ThemeSwitcher from "../theme/ThemeSwitcher";

function Navbar() {
  return (
    <nav className="navbar" aria-label="Primary navigation">
      <a className="brand" href="/" aria-label="NexHire AI home">
        <span className="brand-icon" aria-hidden="true">
          <BrainCircuit size={22} />
        </span>

        <span>NexHire</span>
        <span className="brand-accent">AI</span>
      </a>

      <div className="navigation-links">
        <a href="#platform">Platform</a>
        <a href="#solutions">Solutions</a>
        <a href="#security">Security</a>
      </div>

      <div className="navbar-actions">
        <ThemeSwitcher />

        <button className="button button-secondary" type="button">
          Sign in
        </button>
      </div>
    </nav>
  );
}

export default Navbar;