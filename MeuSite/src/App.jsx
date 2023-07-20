import {Avatar} from "./components/avatar"
import { Toggle } from "./components/toggle"
import { Links } from "./components/links"
import {Footer } from "./components/footer"
import './App.css'
import { SocialLinks } from "./components/socialLinks"

function App() {

  return (
    <div id="container">
      <Avatar/>
      <Toggle/>
      <Links/>
      <SocialLinks/>
      <Footer/>
    </div>
  )
}

export default App
