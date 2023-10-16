import {Routes,Route,BrowserRouter} from 'react-router-dom'
import Home from './components/Home';
import {About}  from './components/About';
import Getapi from './components/Getapi';
import Navbar from './components/Navbar';
import Form from './components/Form';
import Pure from './components/Purecomponent';
import CreateProduct from './components/Postapi';

function App() {
  return (
    <div className="App">
     
      <BrowserRouter>
         <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/get" element={<Getapi/>} />
          <Route path='/form' element={<Form/>}/>
          <Route path='/post' element={<CreateProduct/>}/>
          <Route path='/pure' element={<Pure/>}/>
        </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
