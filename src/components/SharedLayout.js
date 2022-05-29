import React,{useEffect} from 'react'
import { Outlet } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import { setScroll } from '../redux/slice/scrollSlice';
//components
import Footer from './Footer';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

const SharedLayout = () => {
  const scroll = useSelector((state) => state.scroll.scroll)
  const dispatch = useDispatch();

  useEffect(() => {
  window.addEventListener("scroll", () => {
      dispatch(setScroll(window.scrollY > 30))
  });
  }, [dispatch]);
  return (
    <>
        <Navbar />
        <div className='main-container'>
        <Sidebar />
        <div className={scroll? `sub-container scscroll`: `sub-container`}>
        <Outlet />
        <Footer/>
        </div>
        
        </div>
        
    </>
  )
}

export default SharedLayout