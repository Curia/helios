import React, { useContext } from 'react';

// Context
import { UserContext } from '@/context/UserContext';

// Components
import { Card } from '@/components/Card';
import { Box, Image, Skeleton, SkeletonText, Flex } from '@chakra-ui/react';

export const ProfileHeader = () => {
  const { loading, user } = useContext(UserContext);

  return (
    <Card>
      <Box
        display="flex"
        flex="1"
        marginRight="3"
        position="relative"
        alignItems="center"
      >
        <Box>
          <Skeleton width={`128px`} height={`128px`} isLoaded={!loading}>
            <Image
              width={`128px`}
              borderRadius="lg"
              src={user?.profile}
              alt="some good alt text"
              objectFit="contain"
            />
          </Skeleton>
        </Box>
        <Box p="6">
          <Flex mt="1" justifyContent="space-between" alignContent="center">
            <SkeletonText isLoaded={!loading}>
              <Box
                fontSize="2xl"
                fontWeight="semibold"
                as="h2"
                lineHeight="tight"
                isTruncated
              >
                {`${user?.firstname} ${user?.lastname}`}
              </Box>
            </SkeletonText>
            <SkeletonText isLoaded={!loading}>
              <Box
                fontSize="2xl"
                fontWeight="semibold"
                as="h2"
                lineHeight="tight"
                isTruncated
              >
                {`${user?.firstname} ${user?.lastname}`}
              </Box>
            </SkeletonText>
          </Flex>
        </Box>
      </Box>
    </Card>
  );
};
