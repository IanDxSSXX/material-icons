import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class OilBarrelTwoTone {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M7 11c.55 0 1 .45 1 1s-.45 1-1 1v6h10v-6c-.55 0-1-.45-1-1s.45-1 1-1V5H7v6zm5-2.5c2.47 2.86 3 3.24 3 4.55 0 1.63-1.34 2.95-3 2.95s-3-1.32-3-2.95c0-1.3.52-1.67 3-4.55z\" opacity=\".3\"/><path d=\"M12 16c1.66 0 3-1.32 3-2.95 0-1.31-.53-1.69-3-4.55-2.48 2.88-3 3.25-3 4.55C9 14.68 10.34 16 12 16z\"/><path d=\"M20 13c.55 0 1-.45 1-1s-.45-1-1-1h-1V5h1c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1h1v6H4c-.55 0-1 .45-1 1s.45 1 1 1h1v6H4c-.55 0-1 .45-1 1s.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1h-1v-6h1zm-3-2c-.55 0-1 .45-1 1s.45 1 1 1v6H7v-6c.55 0 1-.45 1-1s-.45-1-1-1V5h10v6z\"/>")
      .name("OilBarrelTwoTone")
  }
}

export default OilBarrelTwoTone as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
