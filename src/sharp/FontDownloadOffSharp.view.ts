import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class FontDownloadOffSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"m12.58 9.75-.87-.87.23-.66h.1l.54 1.53zm7.91 13.56L19.17 22H2V4.83L.69 3.51 2.1 2.1l19.8 19.8-1.41 1.41zm-8.39-8.38-3.3-3.3L6.41 18h2.08l1.09-3.07h2.52zm-1.75-7.41L10.92 6h2.14l2.55 6.79L22 19.17V2H4.83l5.52 5.52z\"/>")
      .name("FontDownloadOffSharp")
  }
}

export default FontDownloadOffSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
