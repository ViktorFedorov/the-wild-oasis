import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar.jsx'
import Header from './Header.jsx'
import styled from 'styled-components'

const Main = styled.main`
  background-color: var(--color-grey-50);
  padding: 4rem;
  overflow: scroll;
`

const StyledAppLayout = styled.div`
  display: grid;
  height: 100vh;
  grid-template-columns: 26rem 1fr;
  grid-template-rows: auto 1fr;
`

const AppLayout = () => {
  return (
    <StyledAppLayout>
      <Header />
      <Sidebar />

      <Main>
        <Outlet />
      </Main>
    </StyledAppLayout>
  )
}

export default AppLayout
