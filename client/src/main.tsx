import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Add CSS variable for Poppins font family
const style = document.createElement('style');
style.textContent = `
  :root {
    --font-poppins: 'Poppins', sans-serif;
  }

  body {
    font-family: var(--font-poppins);
  }
`;
document.head.appendChild(style);

createRoot(document.getElementById("root")!).render(<App />);
