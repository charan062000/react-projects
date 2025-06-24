import MenuItem from "./menuItem";


export default function MenuList({ list = [] }) {
    
    return (
      
        <ul className="flex flex-col bg-blue-500 text-white w-[500px] justify-center items-center">
          {list && list.length
            ? list.map((listItem, index) => (
                <MenuItem key={index} item={listItem} />
              ))
            : null}
        </ul>
    );
    
}