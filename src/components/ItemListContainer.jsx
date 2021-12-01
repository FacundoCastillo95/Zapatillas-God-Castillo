import ItemCount from './ItemCount';
import ItemList from './ItemList';
import { Wrapper } from './styledComponents';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { firestoreFetch } from '../utils/firestoreFetch';
import reactDom from 'react-dom';


const ItemListContainer = () => {
    const [datos, setDatos] = useState([]);
    const { idCategory } = useParams();

    console.log(idCategory);

    //componentDidUpdate
    useEffect(() => {
        firestoreFetch(idCategory)
            .then(result => setDatos(result))
            .catch(err=>console.log(err));
    }, [idCategory]);

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