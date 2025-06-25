import MenuList from "./menuList";



export default function TreeMenu({menus=[]}) {
    return (
        <div className="flex justify-center items-center mt-10 ">
            <MenuList  list={menus} />
         </div>
     )
}