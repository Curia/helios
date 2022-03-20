import { useContext } from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';

// Context
import { UserContext } from '@/context/UserContext';

// Types
import { AthleteResponse } from 'strava-v3';

// Components
import {
  Box,
  Flex,
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  Text,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

export const LoggedInMenu = ({ user }: { user: AthleteResponse }) => {
  return (
    <Menu>
      <MenuButton
        as={Button}
        rounded={`full`}
        variant={`link`}
        cursor={`pointer`}
        minW={0}
      >
        <Avatar size={`sm`} src={user.profile_medium} />
      </MenuButton>
      <MenuList alignItems={`center`}>
        <br />
        <Center>
          <Avatar size={`2xl`} src={user.profile_medium} />
        </Center>
        <br />
        <Center>
          <p>{`${user.firstname} ${user.lastname}`}</p>
        </Center>
        <br />
        <MenuDivider />
        <MenuItem onClick={() => signOut()}>Logout</MenuItem>
      </MenuList>
    </Menu>
  );
};

export const Header = () => {
  const { data: session } = useSession();
  const { colorMode, toggleColorMode } = useColorMode();
  const { loading, user } = useContext(UserContext);

  return (
    <>
      <Box bg={useColorModeValue(`white`, `gray.900`)} px={4}>
        <Flex h={16} alignItems={`center`} justifyContent={`space-between`}>
          <Box>Helios</Box>

          <Flex alignItems={`center`}>
            <Stack direction={`row`} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === `light` ? <MoonIcon /> : <SunIcon />}
              </Button>
              {!session && <Button onClick={() => signIn()}>Sign in</Button>}
              {session && loading && !user && <Text>...loading</Text>}
              {session && user && <LoggedInMenu user={user} />}
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};
