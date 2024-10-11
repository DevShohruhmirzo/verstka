import React, { useState } from 'react';
import {
    FaTh,
    FaTable,
    FaTasks,
    FaRedRiver,
    FaBook,
    FaPaperclip,
    FaViber,
    FaJoomla,
    FaLanguage,
    FaAngleRight
}from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import "./Sidebar.css"


const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/",
            name:"Dashboard",
            icon:<FaTh/>
        },
        {
            path:"/jadval",
            name:"Jadval",
            icon:<FaTable/>
        },
        {
            path:"/kurslar",
            name:"Kurslar",
            icon:<FaTasks/>
        },
        {
            path:"/report",
            name:"Report",
            icon:<FaRedRiver/>
        },
        {
            path:"/darslar",
            name:"Darslar",
            icon:<FaBook/>
        },
        {
            path:"/email",
            name:"Email",
            icon:<FaPaperclip/>
        },
        {
            path:"/chat",
            name:"Chat",
            icon:<FaViber/>
        },
        {
            path:"/sozlamalar",
            name:"Sozlamalar",
            icon:<FaJoomla/>
        },
        {
            path:"/language",
            name:"Uz",
            icon:<FaLanguage/>
        }
    ]
    return (
        <div className="container">
           <div style={{width: isOpen ? "200px" : "70px"}} className="sidebar">
               <div className="top_section">
                   <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                       <div onClick={toggle}>
                       <img className="logos" src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/cool-letter-s-logo-design-template-9b68481a664573bf31bb753de4511ae0_screen.jpg?ts=1598870354" alt="" />
                       </div>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
               <div className="accaunt"  style={{width: isOpen ? "170px" : "70px"}}>
                <img src="https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=2311" alt="" />
                <span style={{display: isOpen ? "block" : "none"}}>
                    <h3>Bobur</h3>
                    <p>Student</p>
                </span>
                  <span style={{display: isOpen ? "block" : "none"}}>
                    <FaAngleRight/>
                  </span>
               </div>
           </div>
           <main>{children}</main>
           


        </div>
    );
};

export default Sidebar;