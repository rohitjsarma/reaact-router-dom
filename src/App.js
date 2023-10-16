import {Routes,Route,BrowserRouter} from 'react-router-dom'
import Home from './components/Home';
import {About}  from './components/About';
import Getapi from './components/Getapi';
import Navbar from './components/Navbar';
import Form from './components/Form';
import FormDataForm from './components/FormData';
import Pure from './components/Purecomponent';

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
          <Route path='/fd' element={<FormDataForm/>}/>
          <Route path='/pure' element={<Pure/>}/>
        </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
