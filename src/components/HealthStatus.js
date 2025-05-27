import HumanAnatomy from "../assets/images/HumanAnatomy-removebg-preview.png";
import ZoomIn from "../assets/images/zoomIn.png";
import HeartIcon from "../assets/images/heart.png";
import ChevronDownIcon from "../assets/images/ChevronDown.svg";
import RightArrowIcon from "../assets/images/rightArror.png";
import LegIcon from "../assets/images/leg.png";
import ScannerIcon from "../assets/images/scanner.png";
import organItems from "../assets/data/organItems";
import OrganStatusCard from "./OrganStatusCard";
import "./HealthStatus.css";
const HealthStatus = () => {
  return (
    <main className="health-vitals-container">
      <section className="top-section">
        <h2 style={{ color: "#34316d", paddingLeft: "12px" }}>Dashboard</h2>
        <div className="week-section">
          <p>This Week</p>
          <img
            src={ChevronDownIcon}
            alt="Chevron Down Icon"
            className="chevron-down-icon"
          />
        </div>
      </section>
    <section className="main-content">
            <section className="anatomy-organ-status-section">
        <div className="human-anatomy">
          <img
            src={HumanAnatomy}
            alt="Human Anatomy"
            className="human-anatomy-image"
          />
          <img src={ZoomIn} alt="Zoom In" className="zoom-in-image" />
          <div className="healthy-heart-content">
            <img src={HeartIcon} alt="Heart Icon" className="healthy-icon" />
            <span>Healthy Heart</span>
          </div>
          <div className="healthy-leg-content">
            <img src={LegIcon} alt="Leg Icon" className="healthy-icon" />
            <span>Healthy leg</span>
          </div>
          <img
            src={ScannerIcon}
            alt="scanner-image"
            className="scanner-image-heart"
          />
          <img
            src={ScannerIcon}
            alt="scanner-image"
            className="scanner-image-leg"
          />
        </div>
        <div className="organ-status-container">
          {organItems.map((organ, index) => (
            <div className="organ-status-content">
              <OrganStatusCard key={index} organData={organ} />
            </div>
          ))}
          <section className="details-section">
            <p>Details</p>
            <img
              alt="Deatils Section"
              src={RightArrowIcon}
              className="right-arrow-icon"
            />
          </section>
        </div>
      </section>
      <section class="activity-container">
        <div className="activity">
          <p className="activity-title">Activity</p>
          <p className="activity-subtitle">3 appointments on this week</p>
        </div>
        <div class="chart">
          <div class="day">
            <div class="bars">
              <div class="bar gray h70"></div>
              <div
                class="bar cyan h40"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              ></div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  justifyContent: "center",
                }}
              >
                <div class="bar gray h20"></div>
                <div class="bar gray h20"></div>
              </div>
              <div class="bar gray h20"></div>
            </div>
            <div class="day-label">Mon</div>
          </div>

          <div class="day">
            <div class="bars">
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  justifyContent: "center",
                }}
              >
                <div class="bar cyan h40"></div>
                <div class="bar purple h40"></div>
              </div>
              <div class="bar purple h60"></div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  justifyContent: "center",
                }}
              >
                <div class="bar gray h20"></div>
                <div class="bar gray h20"></div>
              </div>
              <div class="bar cyan h30"></div>
            </div>
            <div class="day-label">Tues</div>
          </div>

          <div class="day">
            <div class="bars">
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  justifyContent: "center",
                }}
              >
                <div class="bar cyan h20"></div>
                <div class="bar purple h20"></div>
              </div>
              <div class="bar purple h30"></div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  justifyContent: "center",
                }}
              >
                <div class="bar gray h40"></div>
                <div class="bar gray h40"></div>
              </div>

              <div class="bar cyan h60"></div>
            </div>
            <div class="day-label">Wed</div>
          </div>

          <div class="day">
            <div class="bars">
              <div class="bar purple h40"></div>
              <div class="bar cyan h30"></div>
              <div class="bar gray h20"></div>
            </div>
            <div class="day-label">Thurs</div>
          </div>

          <div class="day">
            <div class="bars">
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  justifyContent: "center",
                }}
              >
                <div class="bar cyan h40"></div>
                <div class="bar purple h40"></div>
              </div>
              <div class="bar cyan h60"></div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  justifyContent: "center",
                }}
              >
                <div class="bar gray h20"></div>
                <div class="bar gray h20"></div>
              </div>
              <div class="bar purple h30"></div>
            </div>
            <div class="day-label">Fri</div>
          </div>

          <div class="day">
            <div class="bars">
              <div class="bar gray h70"></div>
              <div
                class="bar cyan h40"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              ></div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  justifyContent: "center",
                }}
              >
                <div class="bar cyan h20"></div>
                <div class="bar purple h20"></div>
              </div>
              <div class="bar purple h20"></div>
            </div>
            <div class="day-label">Sat</div>
          </div>

          <div class="day">
            <div class="bars">
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  justifyContent: "center",
                }}
              >
                <div class="bar gray h40"></div>
                <div class="bar gray h40"></div>
              </div>

              <div class="bar cyan h30"></div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  justifyContent: "center",
                }}
              >
                <div class="bar gray h20"></div>
                <div class="bar gray h20"></div>
              </div>

              <div class="bar purple h60"></div>
            </div>
            <div class="day-label">Sun</div>
          </div>
        </div>
      </section>
    </section>
    </main>
  );
};

export default HealthStatus;
