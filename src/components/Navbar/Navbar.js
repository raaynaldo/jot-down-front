import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className='flex flex-col lg:flex-row justify-between px-8 py-4 bg-blue-500'>
      <h3 className="text-white"><a href="/">Jot Down</a></h3>
      <ul className="flex space-x-8 items-center">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
