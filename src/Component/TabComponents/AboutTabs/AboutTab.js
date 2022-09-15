import React from 'react'
import IGNDetails from './IGNDetails'
import TeamDetails from './TeamDetails'
import styled from 'styled-components'

export default function AboutTab() {
  return (
    <About>
      <IGNDetails/>
      <TeamDetails/>
    </About>
  )
}

const About = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  color: white;
  background-color: #000000;

`;