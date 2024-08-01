import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import './styles/style.css'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Content from './components/Content'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <div class="grid grid-cols-10 gap-0 h-screen">
        <Sidebar />
        <Content />
      </div>
      {/* <div className="relative min-h-screen w-52 bg-primary">
        <div className="absolute inset-y-0 left-0 w-16 bg-primary">04</div>
      </div>
      <div class="relative h-32 w-32 bg-blue">
        <div class="absolute inset-0">05</div>
      </div> */}
    </>
  )
}

export default App
