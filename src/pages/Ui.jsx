import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchData } from '../store/Data';
import './ui.css'
import User from './user/User';
import Status from './status/Status';
import Priority from './priority/Priority';
import {RiArrowDropDownLine} from 'react-icons/ri'
import { setStatus } from '../store/StatusSlice';
import display_filter from "../assets/images/display_filter.png"

function Ui() {
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(fetchData());
    },[])
    const [display,setDisplay]=useState(false);
    const handleClick=()=>{
        setDisplay(prev=>!prev);
    }
    const [checkSort,setCheckSort]=useState("Priority")
    const handleChange=(e)=>{
        dispatch(setStatus(e.target.value));
        setDisplay(false);
    }
    const handlesort=(e)=>{
        setCheckSort(e.target.value);
    }
    const status=useSelector(state=>state.status)
  return (
    <div>
        <div className='display'>
            <button onClick={()=>handleClick()} className='display-btn'>
                <img src={display_filter} className='filter'/>
                <div>Display</div>
                <RiArrowDropDownLine className='drop_style'/>
            </button> 
        </div>
        {display && (
        <div className='main-display'>
            <div className='dis'>
                <label >Grouping</label>
                <select onChange={(e) =>handleChange(e) } value={status} className='stats_style'>
                    <option >Status</option>
                    <option >User</option>
                    <option >Priority</option>
                </select>
            </div>
            <div className='dis dis2'>
                <label >Ordering</label>
                <select onChange={(e) =>handlesort(e)} value={checkSort} className='stats_style'>
                    <option >Priority</option>
                    <option >Title</option>
                </select>
            </div>
            <div></div>
        </div>)}
        {status === 'Status' && <Status checkSort={checkSort}/>}
        {status === 'User' && <User checkSort={checkSort}/>}
        {status === 'Priority' && <Priority checkSort={checkSort}/>}
    </div>
  )
}

export default Ui