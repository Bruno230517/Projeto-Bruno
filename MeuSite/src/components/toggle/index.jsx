import { toggleMode } from "../../utils/ToggleMode"
import "./toggle.css"

export const Toggle = () => {
    
    return (
        <div id="switch" onClick={toggleMode}>
        <button></button>
        <span></span>
    </div>
    )
}