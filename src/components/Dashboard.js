import React from 'react'
import '../styles/Dashboard.css';
import { FiSearch } from 'react-icons/fi';
import { AiFillPieChart,AiFillSetting,AiFillSchedule,AiOutlineLike } from 'react-icons/ai';
import {ImPriceTags} from 'react-icons/im';
import {MdOutlineNotificationsNone} from 'react-icons/md';
import {BiUserCircle} from 'react-icons/bi';
import fireDb from '../firebase.js';
import {Graph} from './Graph';
import {PieChart} from './PieChart.js';
import Profile from '../assets/pp.jpeg';
import Vone from '../assets/Vector.svg';
import Vtwo from '../assets/v2.svg';

function Dashboard() {

  return (
    <div className='mainn'>
      <div className='side'>
        <h1>Board.</h1>
       <div className='sub'>
       <p className='subCat'>
            <AiFillPieChart/> Dashboard</p>
       <p className='subCat'>
        <ImPriceTags/> Transactions</p>
       <p className='subCat'>
        <AiFillSchedule/> Schedules</p>
       <p className='subCat'>
        <BiUserCircle/> Users</p>
       <p className='subCat'>
        <AiFillSetting/> Settings</p>
       </div>
       <div className='helpDesk'>
        <p>Help</p>
        <p>Contact Us</p>
       </div>
      </div>
     <div className='rightSide'>
     <div className='titleBar'>
        <p className='dashh'>Dashboard</p>
        <div className='sear'>
        <input className='search' placeholder='Search'>
        </input>
        <FiSearch className='searr'/>
        </div>
        <MdOutlineNotificationsNone className='notifyy'/>
        <img src={Profile} className="profile"></img>
     </div>
      <div className='numbers'>
        <div className='div1 divv'>
            <img src={Vone} className='icon'></img>
            <p >Total Revenues</p>
            <h3>$2,129,30</h3>
        </div>
        <div className='div2 divv'>
             <ImPriceTags className='icon'/>
             <p>Total Transactions</p>
             <h3>1,520</h3>
             </div>
        <div className='div3 divv'>
            <AiOutlineLike className='icon'/>
             <p>Total Likes</p>
             <h3>9,721</h3>
        </div>
        <div className='div4 divv'>
        <img src={Vtwo} className='icon'></img>
            <p>Total Users</p>
            <h3>892</h3>
        </div>
      </div>
      <Graph className="graph"/>
      <div className='bottom'>
        <div className='topPro'>
            <PieChart/>
        </div>
        <div className='schedule'>
        <div style={{display: "flex",marginLeft:"2vw",marginRight:"2vw"}}>
   <h3>Today's Schedule</h3>
   <select style={{border:0, color:"grey",marginLeft:"auto"}}>
   <option >
        <p style={{fontSize:"smallest"}}>See All</p>
    </option>
   </select>
   </div>
            <div style={{fontSize:"smaller",marginLeft:"2vw"}}>
            <div className='sche1'>
                <p>
                    Meeting with suppliers from Kuta Bali
                </p>
                <p style={{color:"grey"}}>14.00-15.00</p>
                <p style={{color:"grey"}}>at Sunset Road, Kuta, Bali</p>
            </div>
            <div className='sche2'>
                <p>
                    Check operation at Giga Factory 1
                </p>
                <p style={{color:"grey"}}>18.00-20.00</p>
                <p style={{color:"grey"}}>at Central Jakarta</p>
            </div>
            </div>
        </div>
      </div>
     </div>
    </div>
  )
}

export default Dashboard
