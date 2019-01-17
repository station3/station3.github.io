import React from 'react'
import Fade from 'react-reveal/Fade'
import data from './data.json'

import { 
  Wrap, Content, Label, List,
  History, Table,
} from './styled'

const HistroyComponent = () => {
  return (
    <Wrap>
      <Content>
        <Label>history</Label>

        <List>
          {data.map((item, key) => {
            const delay = (key + 1) * 100
            return (
              <History key={item.year} color={item.color}>
                <Fade right delay={delay} distance="30px">
                  <h1>{item.year}</h1>
                  <table>
                    <tbody>
                      {item.lists.map(h => {
                        return (
                          <tr key={h.month}>
                            <th>{h.month}월</th>
                            <td>{h.history}</td>
                          </tr>
                        )
                      })}
                    </tbody>
                  </table>
                </Fade>
              </History>
            )
          })}
        </List>
      </Content>
    </Wrap>
  )
}

export default HistroyComponent
