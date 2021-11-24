import ItemCount from './ItemCount';
import { DetailContainer, WrapperDetail, ImgContainer, ImageDetail, InfoContainer, Title, Desc, Price } from './styledComponents';
import { Link } from "react-router-dom";
import { Button } from '@material-ui/core';
import {useState,useContext} from 'react';
import { CartContext } from './CartContext';

import styled from "styled-components";

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const ItemDetail = ({ item }) => {
    const [itemCount, setItemCount] = useState(0);
    const test = useContext(CartContext);

    const onAdd = (qty) => {
        alert("You have selected " + qty + " items.");
        setItemCount(qty);
        test.addToCart(item, qty);
    }

    return (
        <>
        {
            item && item.image
            ? 
            <DetailContainer>
                <WrapperDetail>
                <Link to='/'><TopButton>CONTINUE SHOPPING</TopButton></Link>
                    <ImgContainer>
                        <ImageDetail src={item.image[0]} />
                    </ImgContainer>
                    <InfoContainer>
                        <Title>{item.name}</Title>
                        <Desc>{item.description}</Desc>
                        <Price>$ {item.cost}</Price>
                        <Desc>{item.stock} unidades en stock</Desc>
                    </InfoContainer>
                    {
                    itemCount ===0
                    ?<ItemCount stock={item.stock} initial={1} onAdd={onAdd} />
                    : <Link to= '/cart' style ={{texDecortion:"none"}}><Button variant="contained" color="secondary" >Agregar al carrito</Button></Link>
                    }
                </WrapperDetail>
            </DetailContainer>
            : <p>Cargando...</p>
        }
        </>
    );
}

export default ItemDetail;