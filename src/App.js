import React,{ useState } from 'react';
import {Routes,Route,BrowserRouter} from 'react-router-dom'
import Home from './components/Home';
import {About}  from './components/About';
import Getapi from './components/Getapi';
import Navbar from './components/Navbar';
import Form from './components/Form';
import Pure from './components/Purecomponent';
import CreateProduct from './components/Postapi';
import ContextExample from './components/ContextExample';
import {userContext} from './components/context'

function App() {
  const [userinfo,setUserInfo] = useState({
    author:"rohit sharma",
    desg:"Developer"
  })
  console.log(setUserInfo)
  return (
    <div className="App">

      <userContext.Provider value={userinfo}>

      <BrowserRouter>
         <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about"  element={<About />} />
          <Route path="/get" element={<Getapi/>} />
          <Route path='/form' element={<Form/>}/>
          <Route path='/post' element={<CreateProduct/>}/>
          <Route path='/pure' element={<Pure/>}/>
          <Route path='/context' element={<ContextExample/>}/>
        
        </Routes>
      
      </BrowserRouter>

      </userContext.Provider>
     
   
    </div>
  );
}

export default App;
