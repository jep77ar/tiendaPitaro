import Brand from "./Brand";
import CartWidget from "./CartWidget";
import './../App.css'


const NavBar = () => {
    return <div className="navBar">
                <Brand />
                <div>
                    <a className="categoria" href="/#">Cat. 1</a>

                    <a className="categoria" href="/#">Cat. 2</a>

                    <a className="categoria" href="/#">Cat. 3</a>

                </div>

                <CartWidget />
            </div>;
}

export default NavBar;