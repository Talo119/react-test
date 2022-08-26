
export const ListItem = ( { menu ={} } ) => {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-start">
        <div className="ms-2 me-auto">
            <div className="fw-bold">                                
                { menu.name } { menu.id }
            </div>                            
            { menu.cost }
        </div>
        <span className="badge bg-primary rounded-pill">{ menu.amount }</span>
    </li>
  )
}
