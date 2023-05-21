import React from 'react'
import { BrowserRouter, Routes, Route, } from 'react-router-dom'
import HomeLayout from './layout/HomeLayout'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import About from './pages/About'
import { ContextProvider } from './context/context'
import UserDetails from './components/UserDetails'

function App() {
    return (
        <ContextProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomeLayout />}>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/users/:login" element={<UserDetails />} />
                    </Route>
                    <Route path="/notfound" element={<NotFound />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </ContextProvider>
    )
}

export default App