import { library } from "@fortawesome/fontawesome-svg-core"
import { faCircle, faCog, faRotateRight } from "@fortawesome/free-solid-svg-icons"

import Content from "./content"

library.add(faCircle, faCog, faRotateRight)

const App = () => (
    <Content />
)

export default App