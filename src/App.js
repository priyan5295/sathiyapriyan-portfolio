
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import './App.css';
// import About from './components/About';
// import Contact from './components/Contact';
// import Footer from './components/Footer';
// import Header from './components/Header';
// import Hero from './components/Hero';
// import Projects from './components/Projects';
// import Resume from './components/Resume';
import NotFound from './components/NotFound';
import AppLayout from './components/Layout/AppLayout';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import AuthLayout from './components/Layout/AuthLayout';
import { Suspense, lazy } from 'react';
import LoadingPage from './components/PageLoad/LoadingPage';

const LazyHero = lazy(() => import('./components/Hero'));
const LazyAbout = lazy(() => import('./components/About'));
const LazyProjects = lazy(() => import('./components/Projects'));
const LazyResume = lazy(() => import('./components/Resume'));
const LazyContact = lazy(() => import('./components/Contact'));




function App() {
  return (

    <div className="App">
      <BrowserRouter>


        {/* <h1 className='text-3xl font-bold underline text-blue-400'>Hello its here </h1> */}

        {/* <Header /> */}

        <Routes>
          <Route path='/' element={<AppLayout />}>
            <Route path='/' element={<Suspense fallback={<div><LoadingPage/></div>}><LazyHero /></Suspense>} />
            <Route path='/about' element={<Suspense fallback={<div><LoadingPage/></div>}><LazyAbout /></Suspense>} />
            <Route path='/projects' element={<Suspense fallback={<div><LoadingPage/></div>}><LazyProjects /></Suspense>} />
            <Route path='/resume' element={<Suspense fallback={<div><LoadingPage/></div>}><LazyResume /></Suspense>} />
            <Route path='/contact' element={<Suspense fallback={<div><LoadingPage/></div>}><LazyContact /></Suspense>} />
          </Route>
          <Route path='*' element={<NotFound /> } />

          <Route path='/' element={<AuthLayout/> }>
              <Route path='/login' element={<Login/>}/>
              <Route path='/register' element={<Register/>}/>
          </Route>
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </div>

  );
}

export default App;
