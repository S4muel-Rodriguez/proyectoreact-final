// components/Cart.tsx
import React from 'react';
import { Box, Button, Heading, Text, VStack } from '@chakra-ui/react';
import { useCart } from '../context/CartProvider';

const Cart: React.FC = () => {
  const { cart, clearCart } = useCart();

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleCheckout = () => {
    alert(`Compra realizada con éxito. Total: $${total}`);
    clearCart();
  };

  return (
    <Box p={4} maxW="600px" mx="auto" mt={8} borderWidth="1px" borderRadius="lg">
      <Heading as="h2" size="lg" mb={4}>
        Carrito de Compras
      </Heading>
      {cart.length > 0 ? (
        <VStack spacing={4} align="stretch">
          {cart.map((item) => (
            <Box key={item.id} p={4} borderWidth="1px" borderRadius="md">
              <Text fontWeight="bold">{item.name}</Text>
              <Text>Cantidad: {item.quantity}</Text>
              <Text>Precio: ${item.price.toFixed(2)}</Text>
            </Box>
          ))}
          <Text fontWeight="bold" mt={4}>
            Total: ${total.toFixed(2)}
          </Text>
          <Button colorScheme="teal" onClick={handleCheckout}>
            Finalizar Compra
          </Button>
        </VStack>
      ) : (
        <Text>No hay productos en el carrito.</Text>
      )}
    </Box>
  );
};

export default Cart;
