import { CartWidget } from "../../common/cartWidget/CartWidget";
import "./navbar.css";
import imagenLogon from "../../../assets/images/logo.png";

export const Navbar = () => {
  return (
    <>
      <div className="container-navbar">
        {/* <h2>Comision-60065</h2> */}
        {/* <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdu3wld1Zlzz4rpjiiiEDF_aLobx8JEa9DVw&s"
          alt="logo"
        /> */}

        {/* <img src="/public/logo.png" alt="" /> */}
        {/* <img src={imagenLogon} alt="" /> */}
        {/* <img
          src="https://res.cloudinary.com/dnqfh2chg/image/upload/v1727995118/images_iesgfb.png"
          alt=""
        /> */}
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
