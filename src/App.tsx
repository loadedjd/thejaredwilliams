import "./App.css";
import packageJson from "../package.json";
import confetti from "canvas-confetti";
import { useEffect } from "react";

function App() {
  const version = packageJson.version;
  const target = import.meta.env.VITE_TARGET;

  useEffect(() => {
    document.addEventListener("click", function (event) {
      const x = event.clientX / window.innerWidth;
      const y = event.clientY / window.innerHeight;

      confetti({ origin: { x, y }, particleCount: 10, spread: 80 });
    });
  }, []);

  return (
    <>
      <h1>Jared</h1>
      <div className="card">
        Version {version} | Target {target}
      </div>
    </>
  );
}

export default App;
