import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class NightShelterFilled {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M12 3 4 9v12h16V9l-8-6zm-2.25 9.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5zM17 18h-1v-1.5H8V18H7v-7h1v4.5h3.5V12H15c1.1 0 2 .9 2 2v4z\"/>")
      .name("NightShelterFilled")
  }
}

export default NightShelterFilled as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
