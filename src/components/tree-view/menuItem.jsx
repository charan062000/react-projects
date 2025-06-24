import { useState } from "react";
import MenuList from "./menuList";

export default function MenuItem({ item = [] }) {
  const [displayCurrentChildren, setDisplayCurrentClidren] = useState({});


  function handleToggleChildren(getCurrentLabel) {
    setDisplayCurrentClidren(
      {
        ...displayCurrentChildren,
        [getCurrentLabel]:!displayCurrentChildren[getCurrentLabel]
      }
    )

  }
  console.log(displayCurrentChildren);
  return (
    <li>
      <div className="flex gap-[20px]">
        <p> {item.label}</p>
        {item && item.children && item.children.length > 0 ? (
          <span onClick={() => { handleToggleChildren(item.label) }}>{
          displayCurrentChildren[item.label]?"-":"+"
          }</span>
        ) : null}
      </div>
      {item && item.children && item.children.length > 0 && displayCurrentChildren[item.label]? (
        <MenuList list={item.children} />
      ) : null}
    </li>
  );
}
