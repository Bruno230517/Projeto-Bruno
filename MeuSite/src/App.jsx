import {Avatar} from "./components/Avatar"
import { Toggle } from "./components/toggle"
import { Links } from "./components/links"
import { Footer } from "./components/Footer"

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
