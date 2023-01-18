import { Route, Routes } from 'react-router-dom'
import BoardGame from '../pages/BoardGame'

const MainRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="" element={<BoardGame />} />
      </Routes>
    </>
  )
}

export default MainRoutes
