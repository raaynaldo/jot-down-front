import Navbar from './components/Navbar/Navbar';

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className='space-x-4'>
        <a href="/" className="btn">Click me</a>
        <a href="/" className="btn">Click me</a>
      </div>
    </div>
  );
};

export default App;
