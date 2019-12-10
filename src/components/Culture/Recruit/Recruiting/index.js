import React from 'react'

import Controller from './Controller'
import { RecruitSite, Select, SelectBtn, Wrap } from './styled'
import { RECRUITS } from 'utils/config';

const Recruiting = ({
  wrapRef, isOpen,
  selectHandler,
}) => {
  return (
    <Wrap>
      <Select tabIndex="0" ref={wrapRef}>
        <SelectBtn role="button" onClick={selectHandler}>
          <span>진행중인 채용공고</span>
          <svg width="13" height="7" viewBox="0 0 13 7">
            <path
              fill="#fff"
              fillRule="evenodd"
              d={isOpen ? (
                "M12.086 7L6.492 1.743l-.597.56.003-.003-4.97 4.671L0 6.101C1.373 4.808 5.21 1.204 6.492 0L13 6.115 12.086 7z"
              ) : (
                "M13 .885L12.086 0 6.492 5.257l-.597-.56.003.003L.928.029 0 .899C1.373 2.192 5.21 5.796 6.492 7L13 .885"
              )}/>
          </svg>
        </SelectBtn>
        
        {isOpen && <RecruitSite onClick={() => alert('서비스 준비중 입니다.')} role="button">
          {RECRUITS.map((rec) => (
            <li key={rec.id}>
              {/*<a href={rec.href} target="_blank" rel="noopener noreferrer">{rec.label}</a>*/}
              <div style={{cursor: 'pointer'}}>{rec.label}</div>
            </li>
          ))}
        </RecruitSite>}
      </Select>
    </Wrap>
  )
}

export default Controller(Recruiting)