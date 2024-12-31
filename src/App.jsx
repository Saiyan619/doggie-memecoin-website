import './App.css'
import Header from './header/Header'
import Navbar from './navbar/Navbar'
import SectionOne from './section1/SectionOne'
import SectionTwo from './section2/SectionTwo'
import SectionThree from './section3/SectionThree'
import SectionFour from './section4/SectionFour'
import SectionFive from './sectionfive/SectionFive'

function App() {

  return (
    <div>
              <div className='test_Navi'>
      <Navbar />
      </div>
      <Header />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
    </div>
  )
}

export default App
