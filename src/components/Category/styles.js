import styled from 'styled-components'
import { Link as LinkRouter } from '@reach/router'

export const Link = styled(LinkRouter)`
  display: flex;
  flex-direction: column;
  text-align: center;
  text-decoration: none;
  width: 100px;
`
export const Image = styled.img`
  border: solid 1px #ddd;
  box-shadow: 0px 10px 14px rgba(0,0,0,0.2);
  border-radius: 50%;
  height: 100px;
  width: 100px;
  overflow: hidden;
  object-fit: cover;
`
