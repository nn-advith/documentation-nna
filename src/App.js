import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

//components
import SharedLayout from './components/SharedLayout';
import Home from './components/Home'
import { useSelector } from 'react-redux';
import Section1 from './components/Section1/Home';
import Section2 from './components/Section2/Home';
import Section3 from './components/Section3/Home';

const App = () => {
  const dark = useSelector((state) => state.dark.dark)
  return <>
  <div className={`main ${dark ? 'dark': 'light'}`}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SharedLayout />}>
            <Route index element={<Home/>}/>
            <Route path='/one' element={<Section1 />}>
              <Route path='1.1' element={<Section1 />}/>
              <Route path='1.2' element={<Section1 />}/>
              <Route path='1.3' element={<Section1 />}/>
              <Route path='1.4' element={<Section1 />}/>
            </Route>
            <Route path='/two' element={<Section2 />}>
              <Route path='2.1' element={<Section2 />}/>
              <Route path='2.2' element={<Section2 />}/>
              <Route path='2.3' element={<Section2 />}/>
              <Route path='2.4' element={<Section2 />}/>
            </Route>
            <Route path='/three' element={<Section3 />}>
              <Route path='3.1' element={<Section3 />}/>
              <Route path='3.2' element={<Section3 />}/>
              <Route path='3.3' element={<Section3 />}/>
              <Route path='3.4' element={<Section3 />}/>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
  </div>
  </>
}

export default App