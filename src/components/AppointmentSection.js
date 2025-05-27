import './AppointmentSection.css'; 

const ApointmentSection = ({appointmentData}) => {
    const { profession, icon, time, consultant, cardColor, textColor } = appointmentData
  return (
    <section className="appointment-card" style={{ backgroundColor: cardColor ? cardColor: '#dde2f9'}}>
        <div className="profession-section">
            <p className="profession-header" style={{ color: textColor ? textColor : undefined}}>{profession}</p>
            <img src={icon} alt={`${profession} icon`} className={`${profession}-icon`}/>
        </div>
        <p style={{ color: textColor ? textColor : undefined}}>{time}</p>
        <p style={{ color: textColor ? textColor : undefined}}>{consultant}</p>
    </section>
  )
}

export default ApointmentSection