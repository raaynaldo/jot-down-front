import Navbar from './components/Navbar/Navbar';
import Main from './containers/Main/Main';

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      {/* <div className='space-x-4'>
        <a href="/" className="btn">Click me</a>
        <a href="/" className="btn">Click me</a>
      </div> */}
      <Main></Main>
    </div>
  );
};

export default App;
