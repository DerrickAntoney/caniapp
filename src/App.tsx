import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/Hero/Hero'
import About from '../pages/About'
import Courses from '../pages/Courses';
import Books from '../pages/Books';
import Youtube from '../pages/Youtube';
import Contact from '../pages/Contact';
import Layout from '../components/Layout/Layout';

function App() {

  return (
    <Router>
      <Layout>
      <Routes>
        <Route path='/' element={<About/>}/>
        <Route path='/Courses' element={<Courses/>}/>
        <Route path='/Books' element={<Books/>}/>
        <Route path='/Youtube' element={<Youtube/>}/>
        <Route path='/Contact' element={<Contact/>}/>
      </Routes>
      </Layout>
    </Router>
  )
}

export default App
