import { MenuList } from "./MenuList"

export const MenuDetails = ({ menuItems = [] }) => {
  return (
    <>
        <div className="row">
            <div className="col-md-5">
                <h5>Menu Details</h5>
                <hr />
                <MenuList menuList={ menuItems }/>
            </div>
            <div className="col-md-7">
                <h5>Formularios</h5>
                <hr />
            </div>
        </div>
    </>
  )
}
