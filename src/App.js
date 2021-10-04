
import 'bootstrap/dist/css/bootstrap.min.css';
import { createContext } from 'react';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Header from './components/Header/Header';
import Home from './components/home/Home';
import NotFound from './components/notfound404/NotFound';
import Service from './components/service/Service';
export const ContactTitle=createContext(`title`)
function App() {
return (
  
  <ContactTitle.Provider value='Contact Us'>
<div className="App">
     
     <BrowserRouter>
     <Header></Header>
     <Switch>
         <Route exact path='/'>
         <Home />
         </Route>
 
         <Route path='/home'>
         <Home />
         </Route>
 
         <Route path='/service'>
         <Service />
         </Route>
 
         <Route path='/about'>
         <About />
         </Route>
 
         <Route path='/contact'>
         <Contact />
         </Route>
 
         <Route path='*'>
         <NotFound />
         </Route>
         
         </Switch>
         <Footer />
         </BrowserRouter>
     </div>
  </ContactTitle.Provider>
    
  );
}

export default App;
