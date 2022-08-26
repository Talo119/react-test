import { ListItem } from "./ListItem"

export const MenuList = ({ menuList = [] }) => {
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
