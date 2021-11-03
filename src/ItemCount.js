import React, { useState } from 'react'  


 const ItemCount = (props) => {

    const [count, setCount] = useState(1); 

    const sumar = () => {
      if (count < props.stock) setCount(count + 1);
      }

      const restar = () => {
        if (count > 0) setCount(count - 1);
        }
      
      const onAddToCart = () => {
        console.log('Add to cart');
      }
 
        return (      
        <div className="card">  
          <div className="card-body">   
            <h3 className="card-title">{count}<br/></h3>
            <button clasName="btn btn-primary" onClick={sumar}> + </button>      
            <button clasName="btn btn-primary" onClick={restar}>  -  </button>
            <button clasName="btn btn-primary" onClick={onAddToCart}> Add to cart </button>      
          </div>        
        </div>      
    );
}
export default ItemCount;