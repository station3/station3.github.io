import React from 'react'

import Title from './Title'

import { Wrap, ProCard, PayCard, RoomOwnerCard } from './styled'

const DabangServicesComponent = () => {
  return (
    <>
      <Wrap>
        <ProCard>
          <Title type="pro" showLink={true} />
        </ProCard>
        <PayCard>
          <Title type="pay" />
        </PayCard>
      </Wrap>

      <div>
        <RoomOwnerCard>
          <Title type="room" showLink={true} owner={true} />
        </RoomOwnerCard>
      </div>
    </>
  )
}

export default DabangServicesComponent
