function Header() {
  return (
    <div className="Header">
      <img
        src="https://cdn.freelogovectors.net/wp-content/uploads/2021/02/myntra-logo-freelogovectors.net_.png "height="50px"  width="50px" alt="Myntra Logo" className="myntralogo"
      />

      <div className="options">
        <button className="button">Men</button>
        <button className="button2">Women</button>
        <button className="button3">Children</button>
        <button className="button4">Kids</button>
        <button className="button5">Home & Living</button>
        <button className="button6">Beauty</button>
        <button className="button7">Studio</button>
      </div>

      <input className="searchbar" placeholder="Search for products, brands and more"/>
      <div className="profile">
        <button className="but1">profile</button>
        <button className="but2">wishlist</button>
        <button className="but3">Bag</button>
      </div>
    </div>

  );
}
export default Header;