import AvatarImageLight from "../assets/avatar-light.png"
import AvatarImageDark from "../assets/avatar.png"

export function toggleMode() {
    const html = document.documentElement
    html.classList.toggle("light")
   
    const img = document.querySelector("#profile img")

    if (html.classList.contains("light")) {
        img.setAttribute("src", AvatarImageLight);
      } else {
        img.setAttribute("src", AvatarImageDark);
      }
}
