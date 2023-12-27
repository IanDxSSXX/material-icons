import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class DrawSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"m18.85 10.39 2.48-2.48-4.24-4.24-2.48 2.48 4.24 4.24zm-5.66-2.83L4 16.76V21h4.24l9.19-9.19-4.24-4.25zM19 17.5c0 2.19-2.54 3.5-5 3.5-.48 0-1-.07-1-.07V18.9s.46.1 1 .1c1.54 0 3-.73 3-1.5 0-.47-.48-.87-1.23-1.2l1.48-1.48c1.07.63 1.75 1.47 1.75 2.68zM4.58 13.35C3.61 12.79 3 12.06 3 11c0-1.8 1.89-2.63 3.56-3.36C7.59 7.18 9 6.56 9 6c0-.41-.78-1-2-1-1.24 0-2 .61-2 1H3c0-1.65 1.7-3 4-3 2.24 0 4 1.32 4 3 0 1.87-1.93 2.72-3.64 3.47C6.42 9.88 5 10.5 5 11c0 .31.43.6 1.07.86l-1.49 1.49z\"/>")
      .name("DrawSharp")
  }
}

export default DrawSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
