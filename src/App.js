import { library } from "@fortawesome/fontawesome-svg-core"
import { faCircle, faCog, faRotateRight, faRobot } from "@fortawesome/free-solid-svg-icons"

import Content from "./content"

library.add(faCircle, faCog, faRotateRight, faRobot)

const App = () => (
    <Content />
)

export default App