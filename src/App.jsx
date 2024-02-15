import './App.css';
import Header from './components/Header';
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom';
import Main from './components/Main'
import Add from './components/Add'
import Edit from './components/Edit'
import View from './components/View'
import PageNotFound from './components/PageNotFound'
function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={ <Main/>} />
        <Route path='/add' element={ <Add/>} />
        <Route path='/edit/:id' element={<Edit/>} />
        <Route path='/view/:id' element={ <View/>} />
        <Route path='*' element={ <PageNotFound/>} />

      </Routes>
     
      <Footer/>
      
    </div>
  );
}

export default App;
