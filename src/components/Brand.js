import { NavLink } from "react-router-dom";

const Brand = () => {
    let img ="/assets/moto-01-logo.png";
   return ( 
            <NavLink to="/">
                <div  className="brand">
                    <img src={img} alt="Tienda MotoWeb" />
                    <div>MotoWeb</div>
                </div>
            </NavLink>          
            )

}

export default Brand;