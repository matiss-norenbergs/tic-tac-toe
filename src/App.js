import { library } from "@fortawesome/fontawesome-svg-core"
import { faCircle, faCog, faMoon, faRotateRight, faSun } from "@fortawesome/free-solid-svg-icons"

import Content from "./content"

library.add(faCircle, faCog, faMoon, faRotateRight, faSun)

const App = () => (
    <Content />
)

export default App