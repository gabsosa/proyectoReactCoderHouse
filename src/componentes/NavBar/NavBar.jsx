import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Button,
  Flex,
  Show
} from "@chakra-ui/react";
import { FaAngleDown } from "react-icons/fa";
import { Link } from 'react-router-dom'

const NavBar = ({}) => {

  return (
    <>
      <Flex
        className="containerNavbar"
        height={"40px"}
        width={"100%"}
        justify={"space-between"}
      >
        <h3 className="logo"><Link to={`/`}>ClothingStore</Link></h3>
        <Show breakpoint="(min-width: 550px)" className="menuContainer">
          <Menu>
            <MenuButton
              color="white"
              bg="rgb(49, 42, 42)"
              _active={{ backgroundColor: "none" }}
              _hover={{ backgroundColor: "none", filter: "brightness(1.5)" }}
              as={Button}
              rightIcon={<FaAngleDown />}
            >
              Productos
            </MenuButton>
            <MenuList color="white" bg="rgb(49, 42, 42)">
              <MenuItem
                _hover={{ filter: "brightness(1.5)" }}
                bg="rgb(49, 42, 42)"
              >
                <Link to="categorias/Remera">Remera</Link>
              </MenuItem>
              <MenuItem
                _hover={{ filter: "brightness(1.5)" }}
                bg="rgb(49, 42, 42)"
              >
                <Link to="/categorias/Pantalon">Pantalon</Link>
              </MenuItem>
              <MenuItem
                _hover={{ filter: "brightness(1.5)" }}
                bg="rgb(49, 42, 42)"
              >
                <Link to="/categorias/Campera">Campera</Link>
              </MenuItem>
              <MenuItem
                _hover={{ filter: "brightness(1.5)" }}
                bg="rgb(49, 42, 42)"
              >
                <Link to="/categorias/Zapatilla">Zapatilla</Link>
              </MenuItem>
            </MenuList>
          </Menu>
        </Show>
        <CartWidget />
      </Flex>
    </>
  );
};

export default NavBar;
