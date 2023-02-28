import './App.css';

import Button from './components/button/Button'
import Button2 from './components/button-2/button';


 




function App() {
    return(
        <div className="app">

            <nav>
                <div>
                    <h3>Brand name</h3>
                </div>
                <div>
                    <ul>
                        <li>link one</li>
                        <li>link two</li>
                        <li>link three</li>
                    </ul>
                </div>
            </nav>
            <main>

            </main>
            
            <h3>this is body</h3>
            <p>
            In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.
            </p>
            
            <footer>
                <h3>footer</h3>
                <ul>
                    <li>footer link one</li>
                    <li>footer link two</li>
                    <li>footer link three</li>
                </ul>
                <Button variant = 'primary' text='hello' size='small'/>
                <Button2 variant = 'primary' text='button2' size='small'/>
              
            </footer>
            




         </div>
    )
}

export default App