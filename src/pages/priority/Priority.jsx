import React, { useEffect, useState } from "react";
import "./priority.css";
import Card from "../../components/card/Card";
import { useSelector } from "react-redux";
import { BsPlus } from "react-icons/bs";
import { TbDots } from "react-icons/tb";
import urgent from "../../assets/images/urgent.png";
import low from "../../assets/images/low.png";
import medium from "../../assets/images/medium.png";
import high from "../../assets/images/high.png";
import three_dash from "../../assets/images/three_dash.png";

function Priority({ checkSort }) {
  const data = useSelector((state) => state.data.data);

  const [priority, setPriority] = useState({});
  useEffect(() => {
    if (data && data.tickets) {
      const priorityData = data.tickets;
      const newPriority = {};
      if (checkSort === "Priority") {
        const sortedPriorityData = [...priorityData].sort(
          (a, b) => a.priority - b.priority
        );
        sortedPriorityData.reverse().forEach((ticket) => {
          const ind = `priority-${ticket.priority}`;
          if (!newPriority[ind]) {
            newPriority[ind] = [ticket];
          } else {
            newPriority[ind].push(ticket);
          }
        });
      } else {
        const sortedPriorityDataTitle = [...priorityData].sort((a, b) =>
          a.title.localeCompare(b.title)
        );
        sortedPriorityDataTitle.forEach((ticket) => {
          const ind = `priority-${ticket.priority}`;
          if (!newPriority[ind]) {
            newPriority[ind] = [ticket];
          } else {
            newPriority[ind].push(ticket);
          }
        });
      }

      setPriority(newPriority);
    }
  }, [data]);
  return (
    <div className="status">
      {Object.keys(priority).map((key) => {
        let pri;
        if (key === "priority-0") {
          pri = "No-priority";
        } else if (key === "priority-1") {
          pri = "Low";
        } else if (key === "priority-2") {
          pri = "Medium";
        } else if (key === "priority-3") {
          pri = "High";
        } else if (key === "priority-4") {
          pri = "Urgent";
        }

        return (
          <div className="main-status" key={key}>
            <div className="main-status-head">
              <div className="pri-head-content">
                <div className="icon-pri">
                  {key === "priority-4" && (
                    <img className="pri_icon_desc" src={urgent} />
                  )}
                  {key === "priority-3" && (
                    <img className="pri_icon_desc" src={high} />
                  )}
                  {key === "priority-2" && (
                    <img className="pri_icon_desc" src={medium} />
                  )}
                  {key === "priority-1" && (
                    <img className="pri_icon_desc" src={low} />
                  )}
                  {key === "priority-0" && (
                    <img className="pri_icon_desc special" src={three_dash} />
                  )}
                </div>
                <p>{pri}</p>
                <div>{priority[key].length}</div>
              </div>
              <div>
                <BsPlus />
                <TbDots />
              </div>
            </div>
            <div className="status-card">
              {priority[key].map((item, ind) => (
                <Card
                  key={ind}
                  cam={item.id}
                  title={item.title}
                  user={item.userId}
                  status={item.status}
                />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Priority;
