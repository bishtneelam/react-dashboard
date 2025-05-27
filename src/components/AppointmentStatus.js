import ApointmentSection from "./AppointmentSection";
import appointmentData from "../assets/data/appointmentData";
import LeftArrow from '../assets/images/leftArror.png';
import RightArrow from '../assets/images/rightArror.png';
import "./AppointmentStatus.css";

const AppointmentStatus = () => {
  return (
    <main className="appointment-status">
        <section>
            <div className="header-section">
                <h3>October 2021</h3>
                <div className="arrow-icon">
                    <img src={LeftArrow} alt="left-arrow" className="left-arrow" />
                    <img src={RightArrow} alt="right-arrow"  className="right-arrow" />
                </div>
            </div>
            <div className="grid-container">
                <div className="grid-item" style={{ fontWeight: 'bold', fontSize: '12px'}}>Mon</div>
                <div className="grid-item" style={{ fontWeight: 'bold', fontSize: '12px'}}>Tues</div>
                <div className="grid-item" style={{ fontWeight: 'bold', fontSize: '12px'}}>Wed</div>
                <div className="grid-item" style={{ fontWeight: 'bold', fontSize: '12px'}}>Thurs</div>
                <div className="grid-item" style={{ fontWeight: 'bold', fontSize: '12px'}}>Fri</div>
                <div className="grid-item" style={{ fontWeight: 'bold', fontSize: '12px'}}>Sat</div>
                <div className="grid-item" style={{  fontSize: '12px'}}>Sun</div>

                <div className="grid-item" style={{ fontWeight: 'bold', fontSize: '24px'}}>25</div>
                <div className="grid-item" style={{ fontWeight: 'bold', fontSize: '24px'}}>26</div>
                <div className="grid-item" style={{ fontWeight: 'bold', fontSize: '24px'}}>27</div>
                <div className="grid-item" style={{ fontWeight: 'bold', fontSize: '24px'}}>28</div>
                <div className="grid-item" style={{ fontWeight: 'bold', fontSize: '24px'}}>29</div>
                <div className="grid-item" style={{ fontWeight: 'bold', fontSize: '24px'}}>30</div>
                <div className="grid-item" style={{ fontWeight: 'bold', fontSize: '24px'}}>31</div>

                <div className="grid-item">10:00</div>
                <div className="grid-item">8:00</div>
                <div className="grid-item">12:00</div>
                <div className="grid-item">10:00</div>
                <div className="grid-item">----</div>
                <div className="grid-item" style={{ backgroundColor:' #b1bae5' , borderRadius: '8px', color: '#fff'}}>12:00</div>
                <div className="grid-item" style={{ backgroundColor:' #b1bae5' , borderRadius: '8px', color: '#fff'}}>9:00</div>

                 <div className="grid-item">11:00</div>
                <div className="grid-item" style={{ backgroundColor:'#3634a8' , borderRadius: '8px', color: '#fff'}}>9:00</div>
                <div className="grid-item">----</div>
                <div className="grid-item" style={{ backgroundColor:' #b1bae5' , borderRadius: '8px', color: '#fff'}}>11:00</div>
                <div className="grid-item">14:00</div>
                <div className="grid-item">14:00</div>
                <div className="grid-item">10:00</div>

                <div className="grid-item">12:00</div>
                <div className="grid-item">10:00</div>
                <div className="grid-item">13:00</div>
                <div className="grid-item">----</div>
                <div className="grid-item">16:00</div>
                <div className="grid-item">15:00</div>
                <div className="grid-item">11:00</div>

            </div>
        </section>
      <div className="appointment-slots-container">
        {appointmentData.slice(0, 2).map((appointment, index) => (
          <div className="appointment-slot" key={index}>
            <ApointmentSection appointmentData={appointment} />
          </div>
        ))}
      </div>
      <section className="upcoming-appointment">
        <h2>The Upcoming Schedule</h2>
      <p className="appointment-day">on Thursday</p> 
      <div className="appointment-slots-container">
        {appointmentData.slice(2, 4).map((appointment, index) => (
          <div className="appointment-slot" key={index}>
            <ApointmentSection appointmentData={appointment} />
          </div>
        ))}
      </div>
      <p className="appointment-day">on Saturday</p>
      <div className="appointment-slots-container">
        {appointmentData.slice(4, 6).map((appointment, index) => (
          <div className="appointment-slot" key={index}>
            <ApointmentSection appointmentData={appointment} />
          </div>
        ))}
      </div>
      </section>
    </main>
  );
};

export default AppointmentStatus;
