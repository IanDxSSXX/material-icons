import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class UmbrellaTwoTone {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"m13.28 8.5.76.58.92-.23L13 14.8V8.29l.28.21zm-4.25.36L11 14.8V8.29l-.28.21-.76.59-.93-.23z\" opacity=\".3\"/><path d=\"M14.5 6.92 13 5.77V3.4c0-.26.22-.48.5-.48s.5.21.5.48V4h2v-.6C16 2.07 14.88 1 13.5 1S11 2.07 11 3.4v2.37L9.5 6.92 6 6.07l5.05 15.25c.15.45.55.68.95.68s.8-.23.95-.69L18 6.07l-3.5.85zM13.28 8.5l.76.58.92-.23L13 14.8V8.29l.28.21zm-3.32.59.76-.58.28-.22v6.51L9.03 8.86l.93.23z\"/>")
      .name("UmbrellaTwoTone")
  }
}

export default UmbrellaTwoTone as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
