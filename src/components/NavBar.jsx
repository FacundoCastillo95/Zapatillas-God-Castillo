import { AppBar } from "@material-ui/core";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
import { Wrapper, Logo, MenuItem, Left, Center, Right } from '../utils/styledComponents';

const NavBar = () => {
    return (
        <AppBar position="static" style={{ borderRadius: "80px", }}>
            <Wrapper>
                <Left>
                    <Link to='/' style={{textDecoration: "none", color: "white"}}><Logo>ZAPATILLAS GOD</Logo></Link>
                </Left>
                <Center>
                    <Link to='/category/Basket' style={{textDecoration: "none", color: "white"}}><MenuItem>Basket</MenuItem></Link>
                    <Link to='/category/Casual' style={{textDecoration: "none", color: "white"}}><MenuItem>Casual</MenuItem></Link>
                    <Link to='/category/Classic' style={{textDecoration: "none", color: "white"}}><MenuItem>Classic</MenuItem></Link>                    
                </Center>
                <Right>
                    <MenuItem>REGISTER</MenuItem>
                    <MenuItem>SIGN IN</MenuItem>
                    <MenuItem><Link to='/cart' style={{textDecoration: "none", color: "white"}}><CartWidget /></Link></MenuItem>
                </Right>
            </Wrapper>
        </AppBar>
    );
}

export default NavBar;