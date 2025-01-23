import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Flex,
  Show,
} from "@chakra-ui/react";
import { FaAngleDown } from "react-icons/fa";
import { Link } from "react-router-dom";

const NavBar = ({}) => {
  return (
    <>
      <Flex
        className="containerNavbar"
        height={"40px"}
        width={"100%"}
        justify={"space-between"}
      >
        <h3 className="logo">
          <Link to={`/`}>ClothingStore</Link>
        </h3>
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
              <Link to="categorias/Remera">
                <MenuItem
                  _hover={{ filter: "brightness(1.5)" }}
                  bg="rgb(49, 42, 42)"
                >
                  Remera
                </MenuItem>
              </Link>
              <Link to="/categorias/Pantalon">
                <MenuItem
                  _hover={{ filter: "brightness(1.5)" }}
                  bg="rgb(49, 42, 42)"
                >
                  Pantalon
                </MenuItem>
              </Link>
              <Link to="/categorias/Campera">
                <MenuItem
                  _hover={{ filter: "brightness(1.5)" }}
                  bg="rgb(49, 42, 42)"
                >
                  Campera
                </MenuItem>
              </Link>
              <Link to="/categorias/Zapatilla">
                <MenuItem
                  _hover={{ filter: "brightness(1.5)" }}
                  bg="rgb(49, 42, 42)"
                >
                  Zapatilla
                </MenuItem>
              </Link>
            </MenuList>
          </Menu>
        </Show>
        <CartWidget />
      </Flex>
    </>
  );
};

export default NavBar;
