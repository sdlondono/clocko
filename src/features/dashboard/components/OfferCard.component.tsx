import { Box, Text, Image } from 'native-base'

const OfferCardComponent = () => {
  return (
    <Box py="5" px="2" flexDir="row" bg="green.200">
      <Box pr="3">
        <Image
          source={{
            uri: 'https://lh3.googleusercontent.com/a-/AFdZucojOolDBd6pYjUX-oKW1RiT7MwMJsiRNlMb9t5mqQ'
          }}
          size="24"
          alt="User Image"
        />
      </Box>
      <Box>
        <Text>Samuel David Londono</Text>
        <Text>Programador</Text>
      </Box>
    </Box>
  )
}

export default OfferCardComponent
