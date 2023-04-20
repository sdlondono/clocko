import React from 'react'
import { Box, Button, Text } from 'native-base'
interface ProfileHeaderComponentProps {
  userName: string
  onAdd: () => void
  onLogout: () => void
}
const ProfileHeaderComponent: React.FC<ProfileHeaderComponentProps> = ({
  userName,
  onAdd,
  onLogout
}) => {
  return (
    <Box flexDir="row">
      <Text>{userName}</Text>
      <Box>
        <Button.Group variant="outline">
          <Button onPress={onAdd}>
            <Text>Agregar</Text>
          </Button>
          <Button onPress={onLogout}>
            <Text>Salir</Text>
          </Button>
        </Button.Group>
      </Box>
    </Box>
  )
}

export default ProfileHeaderComponent
