import CartWidget from "./CartWidget";
import logoTienda from "./../assets/moto-01-logo.png"
import './../App.css'

const NavBar = () => {
    return <div className="navBar">
                <div>
                    <img src={logoTienda} alt="Tu moto tienda" width="60"align="left"/>
                </div>
                <div>

                    <a className="categoria" href="/#">Cat. 1</a>

                    <a className="categoria" href="/#">Cat. 2</a>

                    <a className="categoria" href="/#">Cat. 3</a>

                </div>

                <CartWidget />
            </div>;
}

export default NavBar;