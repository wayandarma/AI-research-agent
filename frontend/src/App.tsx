import { Routes, Route } from "react-router-dom"
import ResearchPage from "./pages/ResearchPage"

function App() {
  return (
    <Routes>
      <Route path="/" element={<ResearchPage />} />
    </Routes>
  )
}

export default App
