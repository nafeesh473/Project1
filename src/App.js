
import './App.css';
import Navbar from './componants/Navbar';
import Header from './componants/Header';
import Product from './componants/Product';
import About from './componants/About';
import Technology from './componants/Technology';
import Serve from './componants/Serve';
import Contact from './componants/Contact';
import Serve2 from './componants/Serve2';

function App() {
  return (
    <>
      <div className='row'>
        <div className='col-lg'>

      <Navbar/>
        </div>
        <br/>

    <div className='bg-dark text-light'>

    <Header/>
    
        <div className='col-lg'>
        <br/>
    <Product/>
        </div>
  
        <br/>
        <div className='col-lg'>
    <About/>
        </div>
        <br/>
        <br/>
    
        <div className='col-lg'>
    
    <Technology/>
        </div>
        <br/>
        <div className='col-lg'>
    
    <Serve/>
        </div>
        <br/>
        <div className='col-lg'>
   
    <Serve2/>
        </div>
        <br/>
 
    <hr/>
        <div className='col-lg'>
  
    <Contact/>
        </div>
    
    </div>
    </div>

    </>
  
  

  );
}

export default App;
