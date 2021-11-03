import React, { useState } from 'react'  


 const ItemCount = () => {      
    const initial = 1;      
    const [stock, onAdd] = useState(initial)      
    return (      
        <div className="card">  
          <div className="card-body">   
            <h3 className="card-title">{stock}<br /></h3>
            <button clasName="btn btn-primary" onClick={() => onAdd(stock - 1)}> - </button>      
            <button clasName="btn btn-primary" onClick={() => onAdd(stock + 1)}>  +  </button>      
          </div>        
        </div>      
    )      
}      
export default ItemCount;