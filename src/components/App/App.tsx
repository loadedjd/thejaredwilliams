import "./App.css";
import packageJson from "../../../package.json";

function App() {
  const version = packageJson.version;
  const target = import.meta.env.VITE_TARGET;

  return (
    <div className="wrapper">
      <div className="pill-container">
        <div className="pill">
          <p className="pill-text">Version</p>
          <p className="pill-value">{version}</p>
        </div>
        <div className="pill">
          <p className="pill-text">Environment</p>
          <p className="pill-value">{target}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
