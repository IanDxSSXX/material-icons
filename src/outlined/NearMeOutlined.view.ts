import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class NearMeOutlined {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"m17.27 6.73-4.24 10.13-1.32-3.42-.32-.83-.82-.32-3.43-1.33 10.13-4.23M21 3 3 10.53v.98l6.84 2.65L12.48 21h.98L21 3z\"/>")
      .name("NearMeOutlined")
  }
}

export default NearMeOutlined as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
