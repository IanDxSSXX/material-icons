import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class FaceRetouchingNaturalOutlined {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M19.89 10.75c.07.41.11.82.11 1.25 0 4.41-3.59 8-8 8s-8-3.59-8-8c0-.05.01-.1 0-.14 2.6-.98 4.69-2.99 5.74-5.55 3.38 4.14 7.97 3.73 8.99 3.61l-.89-1.93c-.13.01-4.62.38-7.18-3.86 1.01-.16 1.71-.15 2.59-.01 2.52-1.15 1.93-.89 2.76-1.26A9.62 9.62 0 0 0 12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10c0-1.43-.3-2.78-.84-4.01l-1.27 2.76zM8.08 5.03a8.046 8.046 0 0 1-3.66 4.44 8.046 8.046 0 0 1 3.66-4.44z\"/><circle cx=\"15\" cy=\"13\" r=\"1.25\"/><circle cx=\"9\" cy=\"13\" r=\"1.25\"/><path d=\"m23 4.5-2.4-1.1L19.5 1l-1.1 2.4L16 4.5l2.4 1.1L19.5 8l1.1-2.4z\"/>")
      .name("FaceRetouchingNaturalOutlined")
  }
}

export default FaceRetouchingNaturalOutlined as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
