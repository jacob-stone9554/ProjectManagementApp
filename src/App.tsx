//import { useState } from 'react'
import './App.css'
import Navbar from "./components/NavBar.tsx";
import ProjectArea from "./components/ProjectArea.tsx";

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
        <Navbar />
        <main className="pt-20">
            <ProjectArea />
        </main>
    </>
  )
}

export default App
