import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import { ForwardProp } from "@dlightjs/decorators"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProp
class Face4Filled {
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M12 2c-.96 0-1.88.14-2.75.39A4.986 4.986 0 0 0 5 0C2.24 0 0 2.24 0 5c0 1.8.96 3.37 2.39 4.25C2.14 10.12 2 11.04 2 12c0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8 0-.05.01-.1.01-.15 2.6-.98 4.68-2.99 5.74-5.55a9.942 9.942 0 0 0 9.92 3.46c.21.71.33 1.46.33 2.24 0 4.41-3.59 8-8 8z\"/><circle cx=\"9\" cy=\"13\" r=\"1.25\"/><circle cx=\"15\" cy=\"13\" r=\"1.25\"/>")
      .name("Face4Filled")
  }
}

export default Face4Filled as Pretty as Typed<DLightIconType, HTMLSpanElement>
