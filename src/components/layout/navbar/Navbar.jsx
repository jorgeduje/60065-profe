import imagenLogon from "../../../assets/images/logo.png";
import { CartWidget } from "../../common/cartWidget/CartWidget";
import "./navbar.css";

export const Navbar = () => {
  return (
		<>
			<div className="container-navbar navbar">
				<img className="navbar-image" src={imagenLogon} alt="" />
				<ul className="navbar-ul">
					<li className="navbar-ul-li">Todas</li>
					<li className="navbar-ul-li">Urbanas</li>
					<li className="navbar-ul-li">Deportivas</li>
				</ul>
				<CartWidget />
			</div>
		</>
  );
};