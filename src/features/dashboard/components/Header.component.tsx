import React from 'react'
import { Box, Button, Text } from 'native-base'

const HeaderComponent = () => {
  return (
    <Box
      bg="red.300"
      p="3"
      flexDir="row"
      justifyContent="space-between"
      alignItems="center"
    >
      <Text>Inicio</Text>
      <Button.Group variant="outline">
        <Button>
          <Text>Perfil</Text>
        </Button>
        <Button>
          <Text>Salir</Text>
        </Button>
      </Button.Group>
    </Box>
  )
}

export default HeaderComponent
