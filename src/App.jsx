import { Flex } from "@chakra-ui/react"
import HeroSection from "./components/HeroSection"
import Header from "./components/header"
import WhoAreWe from "./components/WhoAreWe"
import Steps from "./components/Steps"
import Products from "./components/Products"


function App() {

  return (
    <>
    <Header />
    <Flex direction={'column'} m={42}>
      <HeroSection />
      <WhoAreWe />
      <Steps />
      <Products />
    </Flex>
    </>
  )
}

export default App
