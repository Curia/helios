import React from 'react';

// Components
import { Box, Center, useColorModeValue } from '@chakra-ui/react';

export const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <Center py={6}>
      <Box
        w={`full`}
        bg={useColorModeValue(`white`, `gray.800`)}
        boxShadow={`2xl`}
        rounded={`md`}
        overflow={`hidden`}
        borderWidth="1px"
      >
        <Box p={6}>{children}</Box>
      </Box>
    </Center>
  );
};
