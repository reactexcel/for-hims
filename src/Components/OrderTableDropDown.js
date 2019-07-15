import React, { useState } from "react";
import { DropdownButton, Dropdown } from "react-bootstrap";
export default function OrderTableDropDown({ usaStates,handleParent }) {
  const [selected, setSelected] = useState("");

  const handleSelect = e => {
    setSelected(e.target.value)
    handleParent(e.target.value)
  };

  return (
    <div>
      <DropdownButton id="dropdown-item-button" title="Filter User">
        {usaStates.map((value, i) => (
          <Dropdown.Item as="button" onClick={handleSelect} value= {value.name+", "+value.abbreviation}>
            {value.name}
          </Dropdown.Item>
        ))}
      </DropdownButton>
    </div>
  );
}
