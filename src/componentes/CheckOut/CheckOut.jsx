import {
  Flex,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Heading,
  Button,
} from "@chakra-ui/react";
import { useContext, useState } from "react";
import Context from "../../context/CartContext";
import { collection, Timestamp, addDoc, doc, updateDoc, getDoc } from "firebase/firestore";
import { db } from "../../config/firebase";
import { useToast } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const CheckOut = () => {
  const { cart, getTotalPrice, cleanCart } = useContext(Context);
  const toast = useToast();
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    repeatEmail: "",
  });

  const [error, setError] = useState({});

  // Actualiza los datos del cliente
  const updateUser = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  };

  // Obtiene la orden de compra del cliente
  const getOrder = async () => {
    if (!validateForm()) {
      return;
    }

    const ordersCollection = collection(db, "orders");

    cart.forEach(async (prod) => {
        const docRef = doc(db, "productos", prod.id)
        const response = await getDoc(docRef)
        const newStock = response.data().stock - prod.quantity
        await updateDoc(docRef, {stock: newStock})
    })
    
    try {
      const order = {
        buyer: user,
        cart: cart,
        total: getTotalPrice(),
        date: Timestamp.now(),
      };

      const orderRef = await addDoc(ordersCollection, order);

      cleanCart()

      setUser({
        name: "",
        email: "",
        phone: "",
        repeatEmail: "",
      })

      toast({
        title: "Orden creada",
        description: `Gracias por tu compra, número de id ${orderRef.id}`,
        status: 'success',
        duration: '10000',
        isClosable: true,
        position: 'top-right',
      })
    } catch (error) {
      console.log(error);
    }
  };

  // Válida los distintos campos del formulario
  const validateForm = () => {
    const errors = {};

    if (!user.name) {
      errors.name = "El nombre es requerido";
    } else if (user.name.length < 3 || user.name.length > 15) {
      errors.name = "El nombre debe tener entre 3 y 15 caracteres";
    }

    if (!user.email) {
      errors.email = "El email es requerido";
    } else if (!/\S+@\S+\.\S+/.test(user.email)) {
      errors.email = "Ingresa un email válido";
    }

    if (!user.repeatEmail) {
      errors.repeatEmail = "Debe proporcionar el email de nuevo";
    } else if (!(user.email === user.repeatEmail)) {
      errors.repeatEmail = "Los emails no coinciden";
    }

    if (!user.phone) {
      errors.phone = "El teléfono es requerido";
    } else if (!/^\d+$/.test(user.phone) || user.phone.length !== 10) {
      errors.phone = "Teléfono invalido";
    }

    setError(errors);

    return Object.keys(errors).length === 0;
  };

  return (
    <Flex
      width="100%"
      height="100%"
      flexDirection="column"
      boxSizing="border-box"
      align="center"
      justify="center"
    >
      <Heading mt="10px">Datos de Facturación</Heading>
      <FormControl
        width={{ lg: "50%", sm: "70%", base: "100%" }}
        p={{ base: "5%", sm: "0" }}
        mt="10px"
      >
        <FormLabel>Nombre: </FormLabel>
        <Input type="text" name="name" onChange={updateUser} value={user.name}/>
        <FormHelperText color="red">{error.name}</FormHelperText>

        <FormLabel>email: </FormLabel>
        <Input type="email" name="email" onChange={updateUser} value={user.email}/>
        <FormHelperText color="red">{error.email}.</FormHelperText>

        <FormLabel>Repetir email: </FormLabel>
        <Input type="email" name="repeatEmail" onChange={updateUser} value={user.repeatEmail}/>
        <FormHelperText color="red">{error.repeatEmail}</FormHelperText>

        <FormLabel>Teléfono: </FormLabel>
        <Input type="phone" name="phone" onChange={updateUser} value={user.phone}/>
        <FormHelperText color="red">{error.phone}</FormHelperText>
      </FormControl>
      <Flex
        width={{ lg: "50%", sm: "70%", base: "100%" }}
        p={{ base: "5%", sm: "0" }}
        mt="10px"
        mb='10px'
      >
        <Button
          color="white"
          bg="rgb(49, 42, 42);"
          onClick={() => {
            if(!cart.length){
                toast({
                    title: "No hay productos en el carrito",
                    status: "error",
                    duration: 3000,
                    isClosable: true,
                    description: "Debe agregar un producto a la tienda"
                })
            } else {
                getOrder()
            }
          }}
          mr="10px"
        >
          Terminar Compra
        </Button>
        <Button color="white" bg="rgb(49, 42, 42);">
          <Link to="/">Volver a la tienda</Link>
        </Button>
      </Flex>
    </Flex>
  );
};

export default CheckOut;
