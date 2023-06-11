import { Routes, Route, Navigate } from 'react-router-dom'
import React, { useContext } from 'react'
import { observer } from 'mobx-react-lite';
import { MAIN_ROUTER } from '../shared/consts/routerconsts';
import { adminRoutes, notAuthRoutes, publicRoutes } from './routes';

const AppRouter = observer(() => {
  const isAuth = false
  const isAdmin = false
  return (
    <Routes>
      {publicRoutes.map(({ path, Component }) =>
        <Route path={path} element={<Component />} exact key={path} />
      )}

      {!isAuth
        &&
        notAuthRoutes.map(({ path, Component }) =>
          <Route path={path} element={<Component />} exact key={path} />
        )}

      {isAdmin
        &&
        adminRoutes.map(({ path, Component }) =>
          <Route path={path} element={<Component />} exact key={path} />
        )}


      <Route path="*" element={<Navigate to={MAIN_ROUTER} />} />
    </Routes>
  )
})

export default AppRouter