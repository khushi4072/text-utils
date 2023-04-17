import './App.css';
import Navbar from './Components/Navbar';
import Forms from './Components/Forms'
import About from './Components/About'
import { Alert } from './Components/Alert';
import { useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";





function App() {
  const[mode,modeset]=useState('light');
  const[ alert,setalert]=useState(null);
  const Showalert=(message,type)=>{
    setalert({
    msg:message,
    type:type})
    setTimeout(()=>{
      Showalert(null);

    },3000)


  }
  const toggles=()=>{
    if(mode==='dark'){
      modeset('light')
      document.body.style.backgroundColor='white'
      Showalert("light mode enabled","success")
      document.title='Textutils-Lightmode'
    }
    else{
      modeset('dark')
      document.body.style.backgroundColor='grey'
      Showalert("dark mode enabled","success")
      document.title='Textutils-Darkmode'


    }
  }
  return (
    <>
    <BrowserRouter>


    <Navbar title="mytextutil" mode={mode} togglemode={toggles}/>
    <Alert alert={alert}/>
       <div className="container my-3">
<Routes>
      <Route exact path="/about" element={<About mode={mode} />} />

    <Route exact path="/" element={    <Forms title="Analayze Your Text" mode={mode}/>
}/>
    </Routes>
  </div>
  </BrowserRouter>


</>
    
  
// {/*    
//     <Navbar title="mytextutil" mode={mode} togglemode={toggles}></Navbar>
//     <Alert alert={alert}></Alert> */}
//     )createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/about" element={<About />}>
//       <Route path="/" element={<Forms title="Analayze Your Text" mode={mode}/>
// } />
//     <Router>
//     <Navbar title="mytextutil" mode={mode} togglemode={toggles}/>
//     <Alert alert={alert}/>

//     <div className="container">

//         <Route path="/about">
//           <About/>
//         </Route>
       
//         <Route path="/"> 
//         <Forms title="Analayze Your Text" mode={mode}/>

//           </Route>


//     {/* <Forms title="Analayze Your Text" mode={mode}></Forms> */}
//     {/* <About></About> */}
//     </div>
//     </Router>

//     </>
//   );
    );
    
}



export default App;
