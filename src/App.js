import "./App.css";
import Dictionary from "./Dictionary";
function App() {
  return (
    <div className="App">
      <header className="App-header">📚 DICTIONARY</header>
      <Dictionary defaultwords="Ocean" />
      <footer className="App-footer">
        <a
          href="https://github.com/RachanaAnand93/Dictionary-app"
          target="_blank"
          rel="noreferrer"
        >
          Open-source code
        </a>
        , by Rachana Anand
      </footer>
    </div>
  );
}
export default App;
