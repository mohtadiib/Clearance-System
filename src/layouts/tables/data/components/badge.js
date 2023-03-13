import React from "react";
import MDBadge from "../../../../components/MDBadge";

// eslint-disable-next-line react/prop-types
function BadgeElement({ actualValue, value, status, normal }) {
  // eslint-disable-next-line react/prop-types
  const on = status.itemOn;
  // eslint-disable-next-line react/prop-types
  const off = status.itemOff;
  return (
    // eslint-disable-next-line react/prop-types
    <MDBadge
      color={normal? actualValue === 1 ? "info":"secondary":value === 1 ? "info" : "secondary"}
      badgeContent={normal?value:value === 1 ? on : off}
      size="xs"
      container
    />
  );
}
export default BadgeElement;
