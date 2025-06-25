import MenuItem from "./menuItem";


export default function MenuList({ list = [] }) {
    
  return (
    <div className="flex flex-col bg-blue-500 text-white w-[500px] justify-center items-center rounded-2xl">
      <ul className="felx justify-center items-center">
        {list && list.length
          ? list.map((listItem, index) => (
              <MenuItem key={index} item={listItem} />
            ))
          : null}
      </ul>
    </div>
  );
    
}