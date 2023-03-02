import {Link} from '@reach/router'
import classes from './Layout.module.css'



function Layout (props) {
    
    return(
        <div className={classes.app}>

            <nav classes = {classes.nav}>
                <div>
                    <h3>Brand name</h3>
                </div>
                <div className = {classes.menu}>
                    <ul>
                        <li>
                            <Link to='/'>
                            Home
                            </Link>
                        </li>
                        <li>
                            <Link to='/about'>
                            About
                            </Link>
                        </li>
                       
                    </ul>
                </div>
            </nav>
            <main className={classes.main}>
           {props.children}
            </main>
            
           
            
            <footer className={classes.footer}>
                <h3>footer</h3>
                <ul>
                    <li>footer link one</li>
                    <li>footer link two</li>
                    <li>footer link three</li>
                </ul>
               
              
            </footer>
            




         </div>
    )
}

export default Layout