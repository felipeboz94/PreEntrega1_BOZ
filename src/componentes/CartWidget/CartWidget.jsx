//creo la componente basado en funcion
//se usan proptyps que viene de manera nativa en React
import logo from "./shopping-cart.png"
import Cart from '../icons/Cart'
import './CartWidget.css'
const CartWidget = ()=>{
    return (
        <div>
            <Cart/>
            <p>(1)</p>
        </div>

    )
}

export default CartWidget;