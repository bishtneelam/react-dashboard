import React from "react";
import "./OrganStatusCard.css";

const STATUS_COLORS = {
  ok: "#15deec",
  danger: "#b14a49",
  good: "#7cd1c2",
};

const OrganStatusCard = ({ organData }) => {
  const { organ, icon, date, status = "ok" } = organData;
  const barColor = STATUS_COLORS[status] || "#ccc";

  return (
    <section className="organ-card">
      <div className="organ-info">
        <img src={icon} alt={`${organ} icon`} className="organ-icon" />
        <div className="organ-name">{organ}</div>
      </div>
      <div className="organ-date">{`Date: ${date}`}</div>
      <div className="progress-bar-container">
        <div
          className="progress-bar-fill"
          style={{
            width: "75%",
            backgroundColor: barColor,
          }}
        ></div>
      </div>
    </section>
  );
};

export default OrganStatusCard;
