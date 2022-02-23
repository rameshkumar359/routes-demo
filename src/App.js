import Home from './home';
import Search from './search'
import Error from './error'
import {Routes, Route} from 'react-router-dom';
import './App.css';

function App() {
  return (
   <div>
     <Routes>
       <Route path="/" element={<Home/>}></Route>
       <Route exact path="/search" element={<Search/>}></Route>
       <Route exact path="*" element={<Error/>}></Route>
     </Routes>
    

   </div>
  );
}

export default App;
