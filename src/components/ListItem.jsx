
export const ListItem = ( { menu ={} } ) => {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-start">
        <div className="ms-2 me-auto">
            <div className="fw-bold">                                
                { menu.name }
            </div>
            <span className="d-block">
              <strong>Cost: </strong>  { menu.cost }
            </span>
            <span className="d-block">
              <strong>Amount: </strong>  { menu.amount }
            </span>
            
        </div>
        <span>
          <button className="btn btn-primary btn-sm">
            Edit
          </button>
          <button className="btn btn-danger btn-sm ms-2">
            Delete
          </button>
        </span>
    </li>
  )
}
