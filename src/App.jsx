
//defino arrow function para el componente basado en función
// llamado Initial
// <div>
//por cada componente distinto hay una carpeta distinta
//esto es un componente contenedor
import Layout from './componentes/Layout'
import NavBar from './componentes/Navbar'
import ItemListContainer from './componentes/ItemList'
import styles from './componentes/styles/main.scss'

const App = () =>{
    const Menus = ['Inicio','Productos','Contactanos']
    const Productos = ['Tarjeta 1','Tarjeta 2', 'Tarjeta 3']
    return(
        <Layout> 
        <NavBar menus = {Menus}/>
            <ItemListContainer lista = {Productos}/>                 
        </Layout>
    )
}

//se lo exporta por defecto.
//las constantes no se pueden exportar por default in line
// pero si las funciones
export default App;