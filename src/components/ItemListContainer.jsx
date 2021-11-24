import ItemCount from './ItemCount';
import ItemList from './ItemList';
import { Wrapper } from './styledComponents';
import customFetch from "../utils/customFetch";
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
const { products } = require('../utils/products');

const ItemListContainer = () => {
    const [datos, setDatos] = useState([]);
    const { idCategory } = useParams();

    console.log(idCategory);

    //componentDidUpdate
    useEffect(() => {
        customFetch(1000, products.filter(item => {
            if (idCategory === undefined) return item;
            return item.categoryId === parseInt(idCategory)
        }))
            .then(result => setDatos(result))
            .catch(err => console.log(err))
    }, [datos]);

    //componentWillUnmount
    useEffect(() => {
        return (() => {
            setDatos([]);
        })
    }, []);

    return (
        <>  
            <ItemList items={datos} />
        </>
    );
}

export default ItemListContainer;