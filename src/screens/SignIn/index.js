import * as React from 'react';
import {StyleSheet} from 'react-native';
import {
  Box,
  Text,
  Heading,
  VStack,
  FormControl,
  Input,
  Link,
  Button,
  HStack,
  Center,
  IconButton,
} from 'native-base';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const SignIn = () => {
  return (
    <Center w="100%" style={styles.flexOne}>
      <Box safeArea p="2" py="8" w="90%" style={styles.flexOne}>
        <VStack space={1} alignItems="center">
          <Heading size="lg" fontWeight="600" fontSize={32} color="muted.900">
            Sign In
          </Heading>
        </VStack>

        <VStack space={3} mt="5">
          <FormControl>
            <FormControl.Label color="muted.900">
              Your Email ID
            </FormControl.Label>
            <Input variant="underlined" color="muted.900" />
          </FormControl>
          <FormControl>
            <FormControl.Label color="muted.900">Password</FormControl.Label>
            <Input variant="underlined" type="password" color="muted.900" />
            <Link
              _text={{
                fontSize: 'xs',
                fontWeight: '500',
                color: 'warning.500',
              }}
              alignSelf="flex-end"
              mt="1">
              Forget Password?
            </Link>
          </FormControl>
          <Button mt="2" colorScheme="warning">
            Sign in
          </Button>
        </VStack>

        <VStack space={3} mt="5" alignItems="center">
          <Text color="muted.400" mb="2">
            Or Sign In with
          </Text>
          <HStack space={10} justifyContent="center">
            <IconButton
              colorScheme="warning"
              variant="outline"
              borderRadius="10"
              _icon={{
                as: FontAwesome,
                name: 'google',
                textAlign: 'center',
              }}
            />
            <IconButton
              colorScheme="warning"
              variant="outline"
              borderRadius="10"
              _icon={{
                as: FontAwesome,
                name: 'apple',
                textAlign: 'center',
              }}
            />
            <IconButton
              colorScheme="warning"
              variant="outline"
              borderRadius="10"
              _icon={{
                as: FontAwesome,
                name: 'facebook',
                textAlign: 'center',
              }}
            />
          </HStack>
        </VStack>
      </Box>
      <Box safeArea p="2" py="8" w="90%">
        <HStack mt="6" justifyContent="center">
          <Text
            fontSize="sm"
            color="coolGray.600"
            _dark={{
              color: 'warmGray.200',
            }}>
            Not have an Account?
          </Text>
          <Link
            _text={{
              color: 'warning.600',
              fontWeight: 'medium',
              fontSize: 'sm',
            }}
            href="#">
            Create an Account
          </Link>
        </HStack>
      </Box>
    </Center>
  );
};

const styles = StyleSheet.create({
  flexOne: {
    flex: 1,
  },
});

export default SignIn;
