import { CartWidget } from "../../common/cartWidget/CartWidget";
import "./navbar.css";
import imagenLogon from "../../../assets/images/logo.png";

export const Navbar = ({ darkMode }) => {
  return (
    <>
      <div
        className={
          darkMode ? "container-navbar-dark navbar" : "container-navbar navbar"
        }
      >
        <img
          src="https://res.cloudinary.com/dnqfh2chg/image/upload/v1727995204/images_hthelg.png"
          alt=""
          style={{
            width: "100px",
            height: "100px",
          }}
        />
        <ul style={{ display: "flex", gap: "10px" }}>
          <li>Todas</li>
          <li>Urbanas</li>
          <li>Deportivas</li>
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
