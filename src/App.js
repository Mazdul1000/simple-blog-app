import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import BlogDetails from './components/BlogDetails/BlogDetails';
import Blogs from './components/Blogs/Blogs';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <div className="App">
     <Header></Header>

     <Routes>
 <Route path='/' element={<Home></Home>}></Route>
 <Route path='/home' element={<Home></Home>}></Route>
 <Route path='/about' element={<About></About>}></Route>
 <Route path='/blogs' element={<Blogs></Blogs>}></Route>
 <Route path='/blog/:blogId' element={<BlogDetails></BlogDetails>}></Route>
 <Route path='*' element={<NotFound></NotFound>}></Route>


     </Routes>
    
    </div>
  );
}

export default App;
