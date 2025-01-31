'use client';

import Link from 'next/link';
import './NavBar.css';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import DropDown from '../DropDown/DropDown';
import ButtonCommon from '../ButtonCommon/ButtonCommon';
import RegisterComponent from '../RegisterComponent/RegisterComponent';

import { IoClose } from "react-icons/io5";
import { FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const NavBar = ({ logo, altlogo, children, items, btnSign, icon, btnLog, btnDrop }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeLink, setActiveLink] = useState('');
    const [showLogin, setShowLogin] = useState(true);
    const [showLogout, setShowLogout] = useState(true);
    const nav = useRef();

    const handleLinkClick = (id) => {
        setActiveLink(id);
        setMenuOpen(false);
    };

    // استخدام useEffect لتسجيل حدث التمرير
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                nav.current.style.background = '#333333';
            } else {
                nav.current.style.background = '#FFFFFF33';
            }
        };

        window.addEventListener("scroll", handleScroll);

        // تنظيف الحدث عند إلغاء تركيب المكون
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    function showPopUplogin() {
        setShowLogin(prev => !prev);
    }

    function showPopUplogout() {
        setShowLogout(prev => !prev);
    }

    return (
        <>
            <nav ref={nav} className={'Navbar padding-main bigScreen'}>
                <Image src={logo} alt={altlogo} className='logo' />
                <div className='Bars' onClick={() => { setMenuOpen(!menuOpen); }}>
                    {children}
                </div>
                <div className={`${menuOpen ? "open" : ""} AllItem`}>
                    <ul onClick={() => { setMenuOpen(!menuOpen); }}>
                        {items?.map((element, index) => (
                            <li key={index} onClick={() => handleLinkClick(element.id)}>
                                <Link href={`${element.link}`} className={activeLink === element.id ? 'active' : ''}>
                                    {element.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <div className='btns'>
                        <DropDown btnDrop={btnDrop} icon={icon} />
                        <button className='btn2' onClick={showPopUplogin}>{btnLog}</button>
                        <div onClick={showPopUplogout}>
                            <ButtonCommon btnSign={btnSign} />
                        </div>
                    </div>
                </div>
            </nav>

            <RegisterComponent 
                show={showLogout} 
                hide={setShowLogout} 
                maintitle='Create Account' 
                iconExit={<IoClose className="exitbtn" />}  
                label1='Name and Surname' 
                holdername='Enter your name and surname' 
                label2='Email Address' 
                holderemail='Enter your email address' 
                label3='Password' 
                holderpassworld='Enter your password' 
                iconeye={<FaEyeSlash className="icon-eye" />} 
                radiovalue='I agree with ' 
                term='Terms ' 
                privacy='Privacy'  
                btnSign='Sign Up' 
                or='or'  
                btngoogle='Sign Up with Google' 
                icongoogle={<FcGoogle className="google-icon" />} 
                account='Already have an account?' 
                linkregister=' Log In' 
                nonein='nonein' 
            />

            <RegisterComponent 
                show={showLogin} 
                hide={setShowLogin} 
                maintitle='Login' 
                iconExit={<IoClose className="exitbtn" />}  
                label2='Email Address' 
                holderemail='Enter your email address' 
                label3='Password' 
                holderpassworld='Enter your password' 
                iconeye={<FaEyeSlash className="icon-eye" />}  
                btnSign='Sign In' 
                or='or'  
                btngoogle='Sign Up with Google' 
                icongoogle={<FcGoogle className="google-icon" />} 
                questionForget='Forgot your password?' 
                account='Already have an account?' 
                linkregister='Sign Up' 
                noneup='noneup' 
            />
        </>
    );
}

export default NavBar;
