import "./Nav.css";

const Nav = () => {
  return (
    <div className="nav-container">
      <div className="logo-container">
        <h1>GeekGallery</h1>
      </div>
      <div className="search-cotainer">
        <input type="text" className="search-box" placeholder="Search" />
        <button>Search</button>
      </div>
    </div>
  );
};

export default Nav;
