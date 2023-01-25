import React from "react";
import MDBadge from "../../../../components/MDBadge";

// eslint-disable-next-line react/prop-types
function BadgeElement({ value, status }) {
  // eslint-disable-next-line react/prop-types
  const on = status.itemOn;
  // eslint-disable-next-line react/prop-types
  const off = status.itemOff;
  return (
    // eslint-disable-next-line react/prop-types
    <MDBadge
      color={value === "1" || value === 1 ? "info" : "secondary"}
      badgeContent={value === "1" || value === 1 ? on : off}
      size="xs"
      container
    />
  );
}
export default BadgeElement;
