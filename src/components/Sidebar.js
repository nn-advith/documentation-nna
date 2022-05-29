import React,{ useEffect} from 'react'
import { NavLink} from 'react-router-dom';
import {BiBook} from 'react-icons/bi';
import {AiFillCloud} from 'react-icons/ai';
import {FaGraduationCap} from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { setScroll } from '../redux/slice/scrollSlice';

const Sidebar = () => {
  const dark = useSelector((state) => state.dark.dark);
  const scroll = useSelector((state) => state.scroll.scroll)
  const dispatch = useDispatch();

  useEffect(() => {
  window.addEventListener("scroll", () => {
      dispatch(setScroll(window.scrollY > 30))
  });
  }, [dispatch]);
  return (
    <>
      <div className={scroll? `sidebar sidesticky ${dark? 'dark' : 'light'}`: 'sidebar'}>
        <div className='section'>
          <div className='section-header'>
            <div className='sh-icon red'>
              <BiBook />
            </div>
            <div className='sh-title'>
                <NavLink to='/one' className='link' style={({isActive}) => {return {color:isActive? '#ff2133': dark? '#fff' :'#111', textDecoration: 'none'}}} >Section One</NavLink>
            </div>
          </div>
          <div className='section-items'>
            <NavLink to='/one/1.1' className={({isActive}) => isActive?`link slink slink-active-r ${dark? 'text-white' : 'text-black'}`: `link slink ${dark? 'text-white' : 'text-black'}`}>Section 1.1</NavLink>
            <NavLink to='/one/1.2' className={({isActive}) => isActive?`link slink slink-active-r ${dark? 'text-white' : 'text-black'}`: `link slink ${dark? 'text-white' : 'text-black'}`}>Section 1.2</NavLink>
            <NavLink to='/one/1.3' className={({isActive}) => isActive?`link slink slink-active-r ${dark? 'text-white' : 'text-black'}`: `link slink ${dark? 'text-white' : 'text-black'}`}>Section 1.3</NavLink>
            <NavLink to='/one/1.4' className={({isActive}) => isActive?`link slink slink-active-r ${dark? 'text-white' : 'text-black'}`: `link slink ${dark? 'text-white' : 'text-black'}`}>Section 1.4</NavLink>
          </div>
        </div>
        <div className='section'>
          <div className='section-header'>
            <div className='sh-icon purple'>
              <AiFillCloud />
            </div>
            <div className='sh-title'>
            <NavLink to='/two' clasName='link' style={({isActive}) => {return {color:isActive? '#6702e4': dark? '#fff' :'#111', textDecoration: 'none'}}}>Section Two</NavLink>
            </div>
          </div>
          <div className='section-items'>
            <NavLink to='/two/2.1' className={({isActive}) => isActive?`link slink slink-active-p ${dark? 'text-white' : 'text-black'}`: `link slink ${dark? 'text-white' : 'text-black'}`}>Section 2.1</NavLink>
            <NavLink to='/two/2.2' className={({isActive}) => isActive?`link slink slink-active-p ${dark? 'text-white' : 'text-black'}`: `link slink ${dark? 'text-white' : 'text-black'}`}>Section 2.2</NavLink>
            <NavLink to='/two/2.3' className={({isActive}) => isActive?`link slink slink-active-p ${dark? 'text-white' : 'text-black'}`: `link slink ${dark? 'text-white' : 'text-black'}`}>Section 2.3</NavLink>
            <NavLink to='/two/2.4' className={({isActive}) => isActive?`link slink slink-active-p ${dark? 'text-white' : 'text-black'}`: `link slink ${dark? 'text-white' : 'text-black'}`}>Section 2.4</NavLink>
          </div>
        </div>
        <div className='section'>
          <div className='section-header'>
            <div className='sh-icon blue'>
              <FaGraduationCap />
            </div>
            <div className='sh-title'>
            <NavLink to='/three' clasName='link' style={({isActive}) => {return {color:isActive? '#0099ff': dark? '#fff' :'#111', textDecoration: 'none'}}}>Section Three</NavLink>
            </div>
          </div>
          <div className='section-items'>
            <NavLink to='/three/3.1' className={({isActive}) => isActive?`link slink slink-active-b ${dark? 'text-white' : 'text-black'}`: `link slink ${dark? 'text-white' : 'text-black'}`}>Section 3.1</NavLink>
            <NavLink to='/three/3.2' className={({isActive}) => isActive?`link slink slink-active-b ${dark? 'text-white' : 'text-black'}`: `link slink ${dark? 'text-white' : 'text-black'}`}>Section 3.2</NavLink>
            <NavLink to='/three/3.3' className={({isActive}) => isActive?`link slink slink-active-b ${dark? 'text-white' : 'text-black'}`: `link slink ${dark? 'text-white' : 'text-black'}`}>Section 3.3</NavLink>
            <NavLink to='/three/3.4' className={({isActive}) => isActive?`link slink slink-active-b ${dark? 'text-white' : 'text-black'}`: `link slink ${dark? 'text-white' : 'text-black'}`}>Section 3.4</NavLink>
          </div>
        </div>
      </div>
    </>
  )
}

export default Sidebar