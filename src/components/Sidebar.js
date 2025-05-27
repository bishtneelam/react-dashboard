import "./Sidebar.css";

const Sidebar = ({ items }) => {
  console.log(items);
  return (
    <div className="sidebar">
      <div className="sidebar-top">
        {items.slice(0, 2).map((section, sectionIndex) => (
          <div key={sectionIndex} className="sidebar-section">
            <div
              className="sidebar-section-header"
              style={{ paddingTop: sectionIndex === 1 ? "48px" : "0px" }}
            >
              {section.section}
            </div>
            {section.items.map((item, itemIndex) => {
              const isActive = sectionIndex === 0 && itemIndex === 0;
              return (
                <div
                  key={itemIndex}
                  className="sidebar-items"
                  style={{
                    color: isActive ? "#34316d" : "#cdd2da",
                    fontWeight: isActive ? "bold" : undefined,
                  }}
                >
                  <img
                    src={item.icon}
                    alt={`${item.label} icon`}
                    className="sidebar-icon"
                  />
                  <span>{item.label}</span>
                </div>
              );
            })}
          </div>
        ))}
      </div>

      <div className="sidebar-bottom">
        {items[2].items.map((item, i) => (
          <div key={i} className="sidebar-items" style={{ color: "#cdd2da" }}>
            <img
              src={item.icon}
              alt={`${item.label} icon`}
              className="sidebar-icon"
            />
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
