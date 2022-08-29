
import { MenuList } from "./MenuList"

export const MenuDetails = () => {
    
  return (
    <>
        <div className="row">
            <div className="col-md-5">
                <span className="d-flex justify-content-between align-items-center">
                    <h5>Menu Details</h5>    
                    <button className="btn btn-sm btn-success">
                        Add
                    </button>
                </span>                
                <hr />
                <MenuList />
            </div>
            <div className="col-md-7">
                <h5>Formularios</h5>
                <hr />
            </div>
        </div>
    </>
  )
}
