import { MenuList } from "./MenuList"
import { TipsForm } from "./TipsForm"

const menu = [
    { id: 1, name: 'Hamburguesa', cost: 34.222, amount: 2 },
    { id: 2, name: 'Papas Fritas', cost: 15, amount: 4 },
]

const menu2 = [
    { id: 1, name: 'Hamburguesa', cost: 34.222, amount: 2 },
    { id: 2, name: 'Papas Fritas', cost: 15, amount: 4 },
]

export const TipsApp = () => {
  return (
    
    <div className="container min-vh-100 d-flex justify-content-center align-items-center">
        <div className="row">
            <div className="col">
                <div className="card shadow">                        
                    <div className="card-body">
                    <h5 className="card-title">Tips!</h5>
                    <hr />
                        <div className="row">                                
                            <div className="col-md-7">
                                <MenuList menuList={ menu }/>
                            </div>
                            <div className="col-md-5">
                                <TipsForm listMenu={ menu2 }/>
                            </div>
                        </div>                            
                    </div>
                </div>
            </div>
        </div>    
    </div>
    
  )
}
