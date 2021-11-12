import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from 'react';
import ItemCount from "./ItemCount";

const Card = (props) => {
    const [data, setData] = useState([]);

  useEffect(() => {
    setData(props.product);
  },[]);
  
    return(
        <div className="card">
            <div className="card-body">
                {data.map(dato => (
                    <div key={dato.id}>
                        <p>{dato.id}</p>
                        <h3>{dato.name}</h3>
                        <p>{dato.stock}</p>
                        <p>${dato.price}</p>
                        <p><ItemCount/></p>
                    </div>
        
            ))}
            </div>
        </div>
                
    );
};

export default Card;
