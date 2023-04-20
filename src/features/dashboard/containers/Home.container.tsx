import { FlatList } from 'native-base'
import HeaderComponent from '../components/Header.component'
import OfferCardComponent from '../components/OfferCard.component'
const mock = new Array(20).fill(0)
const HomeContainer = () => {
  return (
    <FlatList
      stickyHeaderHiddenOnScroll
      showsVerticalScrollIndicator={false}
      data={mock}
      renderItem={({ index }) => <OfferCardComponent key={index} />}
    />
  )
}

export default HomeContainer
