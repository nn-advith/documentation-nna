import React,{ useEffect} from 'react'
import nna1 from '../images/nna1.png'
import nna2 from '../images/nna2.png'
import {RiMoonFill} from 'react-icons/ri';
import {HiSearch} from 'react-icons/hi';
import {BsSunFill} from 'react-icons/bs';
import { useDispatch,useSelector } from 'react-redux';
import { switchDark } from '../redux/slice/darkSlice';
import { setScroll } from '../redux/slice/scrollSlice';
import {Link} from 'react-router-dom'

const Navbar = () => {
    const dark = useSelector((state) => state.dark.dark)
    const scroll = useSelector((state) => state.scroll.scroll)
    const dispatch = useDispatch();

    useEffect(() => {
    window.addEventListener("scroll", () => {
        dispatch(setScroll(window.scrollY > 30))
    });
    }, [dispatch]);
    
  return (
    <>
        <nav className={scroll? `nav sticky ${dark? 'dark' : 'light'}`: `nav ${dark? 'dark' : 'light'}`}>
            <Link to='/' className='link header headlink'>
                <img src={dark?nna2:nna1} alt="header" className='navimage'/>
                Documentation
            </Link>
            <div className='search-wrap'>
                <div className='search-par'>
                    <input type='search' placeholder='Search' className={`search ${dark ? 'sdark': 'slight'}`}/>
                    <div className={`icon `} >
                        <HiSearch />
                    </div>
                </div>
                <div className={`switch ${dark ? 'sdark': 'slight'}`} onClick={() => {dispatch(switchDark())}}>
                {dark ? <BsSunFill /> : <RiMoonFill />}
                </div>
            </div>
        </nav>
    </>
  )
}

export default Navbar