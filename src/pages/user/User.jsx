import React, { useEffect, useState } from 'react'
import './user.css'
import { useDispatch, useSelector } from 'react-redux';
import Card from '../../components/card/Card';
import {BsPlus} from 'react-icons/bs'
import {TbDots} from 'react-icons/tb'
import user1 from "../../assets/images/usr-1.avif"
import user2 from "../../assets/images/usr-2.jpg"
import user3 from "../../assets/images/usr-3.avif"
import user4 from "../../assets/images/usr-4.jpg"
import user5 from "../../assets/images/usr-5.jpg"
import { setUserBased } from '../../store/UserSlice';

function User({checkSort}) {
    const data = useSelector((state) => state.data.data);
    const [user,setUser]=useState({});
    const dispatch=useDispatch();
    useEffect(()=>{
       const userList={};
        if(data && data.users){
            data.users.forEach((item)=>{
                if(!userList[item.id]){
                    userList[item.id]={ userinfo: item, tickets: [] };
                }
            })
        }
        if(data && data.tickets){
            const userData=data.tickets;
            if(checkSort==="Priority"){
                const sortedUserData=[...userData].sort((a, b) => a.priority - b.priority);
                sortedUserData.forEach((item)=>{
                    if(userList[item.userId]){
                        userList[item.userId].tickets.push(item);
                    }
                })
            }else if(checkSort==="Title"){
                const sortedUserData=[...userData].sort((a, b) => a.title.localeCompare(b.title));
                sortedUserData.forEach((item)=>{
                    if(userList[item.userId]){
                        userList[item.userId].tickets.push(item);
                    }
                })
            }
        }
        setUser(userList)
        dispatch(setUserBased(userList))
    },[data,checkSort,dispatch]);

  return (
    <div className="status">
      {Object.keys(user).map((key,ind) => (
        <div className="main-status"  key={key}>
          <div className="main-status-head">
          <div className="stat-head-content">
              <div className="icon-user">
                {key==="usr-1" && <img className="user_icon_desc" src={user1}/>}
                {key==="usr-2" && <img className="user_icon_desc" src={user2}/>}
                {key==="usr-3" && <img className="user_icon_desc" src={user3}/>}
                {key==="usr-4" && <img className="user_icon_desc" src={user4}/>}
                {key==="usr-5" && <img className="user_icon_desc" src={user5}/>}
                <div className='dis_cir' style={{backgroundColor:user[key].userinfo.available? `green`:`grey`}}></div>
              </div>
              <p>{user[key].userinfo.name}</p>
              <div>{user[key].tickets.length}</div>
            </div>
            <div>
              <BsPlus/>
              <TbDots/>
            </div>
          </div>
          <div className="status-card">
            {user[key].tickets.map((item,ind)=>(
                 <Card key={ind} cam={item.id}  title={item.title} user={null} status={item.status}/>
            ))}
           
          </div>
        </div>
      ))}   
    </div>
  )
}

export default User