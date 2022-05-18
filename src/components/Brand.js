import logoTienda from "./../assets/moto-01-logo.png"

const Brand = () => {
   return ( 
   <div  className="brand">
        <img src={logoTienda} alt="Tienda MotoWeb" />
        <div>MotoWeb</div>
    </div>)
}

export default Brand;