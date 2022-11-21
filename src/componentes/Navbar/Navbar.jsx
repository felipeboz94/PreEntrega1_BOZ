//creo la componente basado en funcion
//se usan proptyps que viene de manera nativa en React


import PropTypes from 'prop-types';
import CartWidget from '../CartWidget'

const NavBar = ({menus})=>{
    return (
        <div className = 'navBar'>
            <nav>
                <ul>
                    {
                    menus.map((menu,index)=>{
                        return  <li key = {index}><a  href = '#'>{menu}</a></li>
                    })
                    }
                </ul>
            </nav>      
            <h1>
            ¡Bienvenido al e-commerce!
            </h1>
            <CartWidget/>
        </div>
    )
}
//el layout tiene que pasarle la propiedad al children 

NavBar.proptype = {
    menus: PropTypes.array.isRequired
    //,    children: PropTypes.element
}

export default NavBar;