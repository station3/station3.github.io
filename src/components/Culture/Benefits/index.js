import React from 'react'
import Fade from 'react-reveal/Fade'
import { BenefitList, Benefit, Wrap, Label } from './styled'
import { BENEFITS } from 'utils/config'

const BenefitsComponent = () => {
  return (
    <Wrap>
      <Label>business benefits</Label>
      <BenefitList>
        {
          BENEFITS.map((benefit) => (
            <Benefit key={benefit.label}>
              <p>{benefit.label}</p>
              <Fade right cascade distance="60px">
                <ul>
                  {
                    benefit.list.map((item) => (
                      <li key={item}>
                        {item}
                      </li>
                    ))
                  }
                </ul>
              </Fade>
            </Benefit>
          ))
        }
      </BenefitList>
    </Wrap>
  )
}

export default BenefitsComponent