import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class EggAltOutlined {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M19 9c-2-2-3.01-7-9.03-7C4.95 2 1.94 6 2 11.52 2.06 17.04 6.96 19 9.97 19c2.01 0 2.01 3 6.02 3C19 22 22 19 22 15.02 22 12 21.01 11 19 9zm-3.01 11c-1.49 0-1.96-.5-2.68-1.26-.65-.69-1.65-1.74-3.34-1.74-1.64 0-5.92-.99-5.97-5.5-.03-2.51.68-4.62 1.99-5.95C7.01 4.52 8.35 4 9.97 4c3.34 0 4.51 1.86 5.86 4.02.55.88 1.07 1.71 1.76 2.39 1.9 1.89 2.41 2.4 2.41 4.61 0 2.85-2.12 4.98-4.01 4.98z\"/><circle cx=\"12\" cy=\"12\" r=\"3.5\"/>")
      .name("EggAltOutlined")
  }
}

export default EggAltOutlined as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
