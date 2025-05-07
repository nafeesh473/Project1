
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
      <div className="container-fluid p-0">

{/* Navbar - No need for column here */}

<Navbar />


{/* Main Content */}
<div className="bg-dark text-light">

  {/* Header Section */}
  <section className="">
    <Header />
  </section>

  {/* Product Section */}
  <section className="py-5">
    <Product />
  </section>

  {/* About Section */}
  <section className="py-5">
    <About />
  </section>

  {/* Technology Section */}
  <section className="py-5">
    <Technology />
  </section>

  {/* Serve Section */}
  <section className="py-5">
    <Serve />
  </section>

  {/* Serve2 Section */}
  <section className="py-5">
    <Serve2 />
  </section>

  {/* Divider */}
  <hr className="my-5" />

  {/* Contact Section */}
  <section className="py-5">
  <h1 className='text-center'>Contect</h1>
    <Contact />
  </section>

</div>
</div>


    </>
  
  

  );
}

export default App;
