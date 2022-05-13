import { BsCart4 } from "react-icons/bs";
import { IconContext } from "react-icons";

const CartWidget = () => {
        return <div className="cartWidget">
                        <IconContext.Provider value={{size: "60px", className: "cartWidgetIcon" }}>
                                <div>
                                        <BsCart4/> 
                                </div>
                        </IconContext.Provider>
                        <h2>2</h2>
                </div>
        }

export default CartWidget;