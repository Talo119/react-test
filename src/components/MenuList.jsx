import { useContext } from "react"
import { MenuContext } from "../context/MenuContext"
import { ListItem } from "./ListItem"

export const MenuList = () => {
    const { menuList } = useContext( MenuContext )
  return (    
    <ul className="list-group">
        {
            menuList.map( menu => (
                <ListItem key={ menu.id } menu={ menu }/>
            ) )
        }            
    </ul>
    
  )
}
