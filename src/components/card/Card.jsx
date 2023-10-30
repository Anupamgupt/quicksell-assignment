import React from 'react'
import './card.css'
import {TbDots} from 'react-icons/tb'
import in_progress from "../../assets/images/in_progress.png"
import dashed_circle from "../../assets/images/dashed_circle.png"
import user1 from "../../assets/images/usr-1.avif"
import user2 from "../../assets/images/usr-2.jpg"
import user3 from "../../assets/images/usr-3.avif"
import user4 from "../../assets/images/usr-4.jpg"
import user5 from "../../assets/images/usr-5.jpg"

function Card({cam,title,status,user}) {
  return (
    <div className='card'>
        <div className='card-head'>
            <p className='cam-text'>{cam}</p>
            {user && ( <span className='circle'>
             {user==="usr-1" && <img src={user1} className='user-card'/>}
             {user==="usr-2" && <img src={user2} className='user-card'/>}
             {user==="usr-3" && <img src={user3} className='user-card'/>}
             {user==="usr-4" && <img src={user4} className='user-card'/>}
             {user==="usr-5" && <img src={user5} className='user-card'/>}
              <span className='cir' style={{
                backgroundColor:(user==="usr-2" || user==="usr-3"|| user==="usr-4" || user==="usr-5")?"green":"gray"
              }}></span>
            </span>)}
           
        </div>
       <div className='title'>
          {status==="In progress" &&<img className="cir-stat" src={in_progress}></img> }
          {status==="Backlog" &&<img className="cir-stat" src={dashed_circle}></img> }
          {status==="Todo" &&<div className='cir_todo'></div> }
        <p className='card-title'>{title}</p>
      </div> 
        <div className='feature'>
            <div className='dots'><TbDots/></div>
            <p className='feature-para'>
              <span className='cc'></span>
              feature Request
            </p>
        </div>
    </div>
  )
}

export default Card