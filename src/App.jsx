import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import ReadingList from './Pages/ReadingList'
import Footer from './Components/Footer'

function App() {
    return (
        <BrowserRouter>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/reading-list" element={<ReadingList />} />
            </Routes>

            <Footer />

        </BrowserRouter>
    )
}

export default App