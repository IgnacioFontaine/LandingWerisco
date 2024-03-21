import './App.css'
import Header from './assets/Components/Header/header'
import NavBar from './assets/Components/NavBar/navbar'
import Description from './assets/Components/Description/description'
import Locations from './assets/Components/Locations/locations'
import Products from './assets/Components/Products/products'
import Footer from './assets/Components/Footer/footer'
import ViewDescription from './assets/Views/description&products'

function App() {
  
  return (
    <>
      <Header />
      <NavBar />
      <ViewDescription />
      <Locations />
      <Footer />
    </>
  )
}

export default App
