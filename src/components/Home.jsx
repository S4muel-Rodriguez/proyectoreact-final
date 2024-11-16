// components/Home.tsx
import React from 'react';
import { Grid, GridItem } from '@chakra-ui/react';
import Product from './Product';

const Home: React.FC = () => {
  const products = [
    { id: 1, name: 'Producto A', price: 100 },
    { id: 2, name: 'Producto B', price: 200 },
    { id: 3, name: 'Producto C', price: 300 },
  ];

  return (
    <Grid templateColumns="repeat(auto-fit, minmax(200px, 1fr))" gap={4} p={4}>
      {products.map((product) => (
        <GridItem key={product.id}>
          <Product {...product} />
        </GridItem>
      ))}
    </Grid>
  );
};

export default Home;
