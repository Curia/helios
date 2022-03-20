import React from 'react';

// Components
import NextLink from 'next/link';
import { Box, Link } from '@chakra-ui/react';

interface GlobalHeaderProps {
  user?: Record<string, unknown>;
  onLogin: () => void;
  onLogout: () => void;
  onCreateAccount: () => void;
}

export const GlobalHeader = ({
  user,
  onLogin,
  onLogout,
  onCreateAccount,
}: GlobalHeaderProps) => (
  <Box
    as="header"
    sx={{ boxShadow: `rgb(90 114 123 / 11%) 0px 7px 30px 0px` }}
    bg="white"
  >
    <Box minH="5rem" display="flex" alignItems="center" paddingX="2rem">
      <NextLink href="/" passHref>
        <Link fontWeight="bold">Helios</Link>
      </NextLink>
    </Box>
  </Box>
);
