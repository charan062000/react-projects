import MenuList from "./menuList";



export default function TreeMenu({menus=[]}) {
    return (
        <div>
            <MenuList list={menus} />
         </div>
     )
}