import { Box } from 'native-base'
import ProfileContainer from '../containers/Profile.container'

const ProfileScreen = () => {
  return (
    <Box safeArea flex="1">
      <ProfileContainer />
    </Box>
  )
}

export default ProfileScreen
