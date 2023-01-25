import React from "react";
import SidenavCollapse from "../../../../examples/Sidenav/SidenavCollapse";

// eslint-disable-next-line react/prop-types
function SettingsButtons({ title, details, call }) {
  // eslint-disable-next-line react/prop-types
  const renderRoutes = details.map((item) => (
    <div style={{ alignSelf: "initial" }}>
      <SidenavCollapse
        onClick={() => {
          call(item);
        }}
        style={{ width: 200 }}
        name={item.name}
        icon={item.icon}
        active
      />
      <br />
    </div>
  ));

  return (
    <div>
      <h3>{title}</h3>
      {renderRoutes}
    </div>
  );
}

export default SettingsButtons;
