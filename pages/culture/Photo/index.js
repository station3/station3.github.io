import React from 'react'
import Fade from 'react-reveal/Fade'
import { Photo, PhotoList, Wrap } from './styled'
import { PHOTOS } from 'utils/config'

const PhotoComponent = () => {
  return (
    <Wrap>
      <PhotoList>
        <Fade right cascade distance="60px">
          <div>
            {
              PHOTOS.map((photo) => (
                <Photo key={photo.src}>
                  <img src={photo.src} alt={photo.alt} />
                </Photo>
              ))
            }
          </div>
        </Fade>
      </PhotoList>
    </Wrap>
  )
}

export default PhotoComponent