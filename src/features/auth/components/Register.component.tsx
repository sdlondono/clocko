import React from 'react'
import { Box, Button, Icon, Text } from 'native-base'
import Clocko from '../../../../assets/svgs/clocko.svg'
import GmailIcon from '../../../../assets/svgs/gmail.svg'
import PhoneIcon from '../../../../assets/svgs/phone.svg'
interface RegisterComponentProps {
  onGoogle: () => void
}
const RegisterComponent: React.FC<RegisterComponentProps> = ({ onGoogle }) => {
  return (
    <Box flex="1">
      <Box flex="1.5" alignItems="center" justifyContent="center">
        <Icon as={Clocko} />
      </Box>
      <Box flex="1" px="16">
        <Button rounded="full" backgroundColor="#7E34F5">
          <Text color="white" fontWeight={600}>
            Registrate Gratis
          </Text>
        </Button>
        <Button
          startIcon={<Icon as={GmailIcon} />}
          _icon={{
            marginRight: '3'
          }}
          mt={25}
          variant="outline"
          rounded="full"
          onPress={onGoogle}
        >
          <Text>Inicia con Google</Text>
        </Button>
        <Button
          startIcon={<Icon as={PhoneIcon} />}
          _icon={{
            marginRight: '3'
          }}
          mt={25}
          variant="outline"
          rounded="full"
        >
          <Text>Inicia con Número Celular</Text>
        </Button>
      </Box>
      <Box flex=".3" justifyContent="center" flexDir="row">
        <Text>¿Ya tienes cuenta?</Text>
        <Text marginLeft="2" color="#7755D8" fontWeight={600}>
          Inicia Sesión
        </Text>
      </Box>
    </Box>
  )
}

export default RegisterComponent
