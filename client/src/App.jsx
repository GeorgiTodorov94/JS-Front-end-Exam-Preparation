import { Route, Routes } from 'react-router-dom'
import Header from "./Components/header/Header"
import Home from './Components/home-page/Home'
import Login from './Components/login-page/LoginPage'
import Register from './Components/register/Register'
import GamesList from './Components/game-list/GameList'
import GameCreate from './Components/game-create/GameCreate'

function App() {

    return (
        <div id="box">
            <Header />


            <main id="main-content">
                <Routes>

                    <Route path='/' element={<Home />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/games' element={<GamesList />} />
                    <Route path='/games/create' element={<GameCreate />} />

                </Routes>

            </main>


        </div>
    )
}

export default App
