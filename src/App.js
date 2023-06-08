import React from 'react';
import './App.css';
import { Route,Routes } from 'react-router-dom';
import Home from './pages/Home';
import Resarvation from './pages/ResarvationPage';
import Catalogue from './pages/Catalogue';
import Connaitre from './pages/Connaitre';
import Faq from './pages/Faq';
import PublicationTest from './pages/Publication-test';
import Publications from './pages/Publications';
import Recrutement from './pages/Recrutement';
import Offre from './pages/Offre';
import RecrutementForm from './pages/RecrutementForm';
import Error from './pages/Error';






function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/resarvation' element={<Resarvation />}/>
        <Route path='/catalogue' element={<Catalogue />}/>
        <Route path='/connaitre' element={<Connaitre />}/>
        <Route path='/faq' element={<Faq />}/>
        <Route path='/publications' element={<Publications />}/>
        <Route path='/publication' element={<PublicationTest />}/>
        <Route path='/recrutement' element={<Recrutement />}/>
        <Route path='/Offres' element={<Offre/>}/>
        <Route path='/RecrutementForm' element={<RecrutementForm />}/>
        <Route path='*' element={<Error />}/>

      </Routes>
      
    </div>
  );
}

export default App;
