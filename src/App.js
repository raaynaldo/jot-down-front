import MarkdownPreview from "./components/MarkdownPreview/MarkdownPreview";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="space-x-4">
        <a href="/" className="btn">
          Click me
        </a>
        <a href="/" className="btn">
          Click me
        </a>
      </div>
      <MarkdownPreview />
    </div>
  );
};

export default App;
