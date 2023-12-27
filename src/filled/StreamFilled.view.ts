import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class StreamFilled {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<circle cx=\"20\" cy=\"12\" r=\"2\"/><circle cx=\"4\" cy=\"12\" r=\"2\"/><circle cx=\"12\" cy=\"20\" r=\"2\"/><path d=\"M10.05 8.59 6.03 4.55h-.01l-.31-.32-1.42 1.41 4.02 4.05.01-.01.31.32zm3.893.027 4.405-4.392L19.76 5.64l-4.405 4.393zM10.01 15.36l-1.42-1.41-4.03 4.01-.32.33 1.41 1.41 4.03-4.02zm9.75 2.94-3.99-4.01-.36-.35L14 15.35l3.99 4.01.35.35z\"/><circle cx=\"12\" cy=\"4\" r=\"2\"/>")
      .name("StreamFilled")
  }
}

export default StreamFilled as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
