import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import './styles/style.css'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Content from './components/Content'

function App() {
  const [isToggled, setIsToggled] = useState(false);

  const toggleState = () => {
      setIsToggled(prevState => !prevState);
      console.log(isToggled)
  };

  return (
    <>
      <Navbar setSidebar={toggleState} />
      <div class="flex m-0">
        <Sidebar setSidebar={isToggled} />
        <Content setSidebar={isToggled} />
      </div>
    </>
  )
}

export default App
