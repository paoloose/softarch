import React, { useState, type ReactNode } from "react";

const openedIcon = '/softarch/icons/dropdown_opened_icon.svg';
const closedIcon = '/softarch/icons/dropdown_closed_icon.svg';

export function Dropdown({ children }: { children: ReactNode }) {
  const [opened, setOpened] = useState(false);

  const childrens = React.Children.toArray(children);

  return (
    <div>
      <div
        onClick={() => setOpened(!opened)}
        style={{
          display: 'flex',
          cursor: 'pointer',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: 12,
          backgroundColor: '#eeeeee',
          color: 'black',
        }}
      >
        <img width={30} src={opened ? openedIcon : closedIcon} alt="Dropdown icon" />
        <div
          style={{
            flex: 1,
          }}
        >
          {childrens[0]}
        </div>
      </div>
      {opened && childrens[1]}
    </div>
  );
}
