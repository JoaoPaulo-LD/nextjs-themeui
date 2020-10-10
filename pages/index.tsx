// import Head from 'next/head'
import React from 'react'

import { Button, Flex, Grid, Heading, Input, Link, Text } from '@chakra-ui/core'
import Divider from '../components/Divider'

export default function Home() {
  return (
    <Grid
      as="main"
      height="100vh"
      templateColumns="1fr 480px 480px 1fr"
      templateRows="1fr 480px 1fr"
      templateAreas="
        '. . . .'
        '. logo form .'
        '. . . .'
      "
      justifyContent="center"
      alignItems="center"
    >
      <Flex
        gridArea="logo"
        flexDir="column"
        alignItems="flex-start"
      >
        <img src="https://rocketseat.com.br/logo.svg" alt="Rocketseat"/>

        <Heading size="2xl" lineHeight="shorter" margin-top={16}>
          Faça seu login na plataforma
        </Heading>
      </Flex>

      <Flex
        gridArea="form"
        height="100%"
        backgroundColor="gray.300"
        borderRadius="md"
        flexDir="column"
        alignItems="stretch"
        padding={16}
      >
        <Input
          height="50px"
          backgroundColor="white"
          focusBorderColor="purple.500"
          borderRadius="sm"
          placeholder="Email"
        />
        <Input
          height="50px"
          backgroundColor="white"
          focusBorderColor="purple.500"
          borderRadius="sm"
          placeholder="Senha"
          marginTop={2}
        />

        <Link
          alignSelf="flex-start"
          marginTop={2}
          fontSize='sm'
          color='purple.600'
          _hover={{ opacity: 0.8 }}
        >
          Esqueci minha senha
        </Link>

        <Button
          marginTop={6}
          backgroundColor='purple.500'
          height="50px"
          borderRadius="sm"
          color="white"
          _focus={{ border: 'none', outline: 'none' }}
          _hover={{ backgroundColor: 'purple.600' }}
        >
          ENTRAR
        </Button>

        <Text
          textAlign="center"
          fontSize="sm"
          color="gray.700"
          marginTop={6}
        >
          Não tem uma conta? {" "}
          <Link
            fontSize='sm'
            color='purple.600'
            _hover={{ opacity: 0.8 }}
          >
            Registre-se
          </Link>

          <Divider />

          <Flex
            alignItems="center"
          >
            <Text>Ou entre com</Text>
            <Button 
              height="50px"
              flex="1"
              backgroundColor="white"
              marginLeft={6}
              color="gray.600"
              borderRadius="sm"
              _hover={{ backgroundColor: 'purple.500', color: "white" }}
            >GITHUB</Button>
          </Flex>
        </Text>
      </Flex>
    </Grid>
  )
}
