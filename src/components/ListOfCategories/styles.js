import styled, { css } from 'styled-components'
import { fadeIn } from '../../styles/animation'

export const List = styled.ul`
  display: flex;
  overflow-y: hidden;
  width: 100%;
  ${props => props.fixed && css`
      background-color: #fff;
      border-radius: 60px;
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
      margin: 0 auto;
      max-width: 600px;
      padding: 5px;
      position: fixed;
      left: 0;
      right: 0;
      top: -5px;
      transform: scale(0.8);
      z-index: 1;
      ${fadeIn('.5s')}
  `}
`

export const Item = styled.li`
  padding: 0 8px;
  
`
