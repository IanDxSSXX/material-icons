import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class ApiRound {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M13 13c-.56.56-1.45.56-2 .01V13c-.55-.55-.55-1.44 0-1.99V11c.55-.55 1.44-.55 1.99 0H13c.55.55.55 1.45 0 2zm-1-7 2.12 2.12 2.5-2.5-3.2-3.2c-.78-.78-2.05-.78-2.83 0l-3.2 3.2 2.5 2.5L12 6zm-6 6 2.12-2.12-2.5-2.5-3.2 3.2c-.78.78-.78 2.05 0 2.83l3.2 3.2 2.5-2.5L6 12zm12 0-2.12 2.12 2.5 2.5 3.2-3.2c.78-.78.78-2.05 0-2.83l-3.2-3.2-2.5 2.5L18 12zm-6 6-2.12-2.12-2.5 2.5 3.2 3.2c.78.78 2.05.78 2.83 0l3.2-3.2-2.5-2.5L12 18z\"/>")
      .name("ApiRound")
  }
}

export default ApiRound as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
