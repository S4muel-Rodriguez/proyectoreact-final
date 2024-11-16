// components/Product.tsx
import React from 'react';
import { Box, Button, Text } from '@chakra-ui/react';
import { useCart } from '../Cart';

interface ProductProps {
  id: number;
  name: string;
  price: number;
}

const Product: React.FC<ProductProps> = ({ id, name, price }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({ id, name, price, quantity: 1 });
  };

  return (
    <Box p={4} borderWidth="1px" borderRadius="md">
      <Text fontWeight="bold">{name}</Text>
      <Text>Precio: ${price.toFixed(2)}</Text>
      <Button mt={2} colorScheme="teal" onClick={handleAddToCart}>
        Agregar al Carrito
      </Button>
    </Box>
  );
};

export default Product;
