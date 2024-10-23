import { CartWidget } from "../../common/cartWidget/CartWidget";
import "./navbar.css";
import { Link } from "react-router-dom";

export const Navbar = ({ darkMode }) => {
  return (
    <>
      <div
        className={
          darkMode ? "container-navbar-dark navbar" : "container-navbar navbar"
        }
      >
        <Link to="/">
          <img
            src="https://res.cloudinary.com/dnqfh2chg/image/upload/v1727995204/images_hthelg.png"
            alt=""
            style={{
              width: "100px",
              height: "100px",
            }}
          />
        </Link>
        <ul style={{ display: "flex", gap: "10px" }}>
          <Link to="/">Todas</Link>
          <Link to="/category/urbanas">Urbanas</Link>
          <Link to="/category/deportivas">Deportivas</Link>
        </ul>

        <CartWidget />
      </div>
    </>
  );
};

// // if
//  if(condicion){
//   --> esto
//  }else{
//   ---> esto
//  }
//  // ternario / 2 caminos
// condicion ? esto : esto

// // switch

// if(){

// }else if() {

// }else if(){

// }
//   else{

// }
