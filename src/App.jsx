/* eslint-disable react/prop-types */
import './components/Nav'
import Nav from './components/Nav'
import HeroSection from './components/Hero'

function App() {
  return (
    <>
      <div className="relative bg-black text-white max-w-fit">
        
        <Nav />
        <HeroSection />

        <div className='relative w-full h-screen bg-red-500 bg-opacity-25'>
          
        </div>
      
      </div>
    </>
  )
}

export default App
