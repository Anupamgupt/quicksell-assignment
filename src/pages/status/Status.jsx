import React, { useEffect, useState } from "react";
import "./status.css";
import Card from "../../components/card/Card";
import {  useSelector } from "react-redux";
import {BsPlus} from 'react-icons/bs'
import {TbDots} from 'react-icons/tb'
import in_progress from "../../assets/images/in_progress.png"
import dashed_circle from "../../assets/images/dashed_circle.png"
import done from "../../assets/images/done.png"
import cancel from "../../assets/images/cancel.png"

function Status({checkSort}) {
  const data = useSelector((state) => state.data.data);
  const uniqueStatuses = {
    Cancelled: null,
    Done: null,
  };
  const [status, setStatus] = useState({});
  useEffect(() => {
    if (data && data.tickets) {
        const statusData=data.tickets;
        const newStatus = {};
        if(checkSort==="Priority"){
            const sortedStatusData = [...statusData].sort((a, b) => a.priority - b.priority);
            sortedStatusData.forEach((ticket) => {
              if (!newStatus[ticket.status]) {
                newStatus[ticket.status] = [ticket];
              } else {
                newStatus[ticket.status].push(ticket);
              }
            });
        }else if(checkSort==="Title"){
            const sortedStatusDataTitle = [...statusData].sort((a, b) => a.title.localeCompare(b.title));
            sortedStatusDataTitle.forEach((ticket) => {
              if (!newStatus[ticket.status]) {
                newStatus[ticket.status] = [ticket];
              } else {
                newStatus[ticket.status].push(ticket);
              }
            });
        }
     
      for (const key in uniqueStatuses) {
        if (!newStatus[key]) {
          newStatus[key] = [];
        }
      }
      setStatus(newStatus); 
    }
  }, [data,checkSort]);

  return (
    <div className="status">
      {Object.keys(status).map((key) => (
        <div className="main-status" key={key}>
          <div className="main-status-head">
            <div className="stat-head-content">
              <div className="icon-status">
                {key==="In progress" && <img className="stat_icon_desc" src={in_progress}/>}
                {key==="Backlog" && <img className="stat_icon_desc" src={dashed_circle}/>}
                {key==="Todo" && <div className="td_cir"></div>}
                {key==="Cancelled" && <img className="stat_icon_desc" src={cancel}/>}
                {key==="Done" && <img className="stat_icon_desc" src={done}/>}
              </div>
              <p>{key}</p>
              <div>{status[key].length}</div>
            </div>
            <div className="ic">
              <BsPlus/>
              <TbDots/>
            </div>
          </div>
          <div className="status-card">
            {status[key].map((item,ind)=>(
                 <Card key={ind} cam={item.id}  title={item.title} user={item.userId}/>
            ))}
           
          </div>
        </div>
      ))}   
    </div>
  );
}

export default Status;
