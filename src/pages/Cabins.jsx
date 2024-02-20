import Heading from '../ui/Heading'
import Row from '../ui/Row'
import { useEffect } from 'react'
import { getCabins } from '../services/apiCabins.js'

function Cabins() {
  useEffect(() => {
    getCabins().then(console.log)
  }, [])

  return (
    <Row type='horizontal'>
      <Heading as='h1'>All cabins</Heading>
      <p>TEST</p>
      <img
        src='https://xglnuhkuzrmzqluxoerq.supabase.co/storage/v1/object/public/cabin-images/cabin-001.jpg?t=2024-02-20T05%3A17%3A05.907Z'
        alt=''
      />
    </Row>
  )
}

export default Cabins
