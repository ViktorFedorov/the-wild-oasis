import React from 'react'
import styled from 'styled-components'

const Row = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction || 'row'};
`
export default Row
