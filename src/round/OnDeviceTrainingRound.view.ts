import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import { ForwardProp } from "@dlightjs/decorators"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProp
class OnDeviceTrainingRound {
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M11.5 17h1c.28 0 .5-.22.5-.5s-.22-.5-.5-.5h-1c-.28 0-.5.22-.5.5s.22.5.5.5zm.02-5.94c-.71.16-1.29.74-1.46 1.44-.23.94.21 1.8.94 2.22v.53c0 .14.11.25.25.25h1.5c.14 0 .25-.11.25-.25v-.53c.6-.35 1-.98 1-1.72a2 2 0 0 0-2.48-1.94z\"/><path d=\"M18 1.01 6 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM18 18H6V6h12v12z\"/><path d=\"M15.33 15.27c.36.36.99.26 1.21-.2.29-.63.46-1.33.46-2.07s-.17-1.44-.46-2.07a.748.748 0 0 0-1.21-.2.75.75 0 0 0-.15.84c.2.44.31.92.31 1.43s-.11.99-.31 1.43c-.12.29-.07.62.15.84zm-6.66 0a.75.75 0 0 0 .15-.84c-.21-.44-.32-.92-.32-1.43 0-1.93 1.57-3.5 3.5-3.5v.69c0 .22.25.33.42.19l1.62-1.44c.11-.1.11-.27 0-.37l-1.62-1.44c-.17-.15-.42-.04-.42.18V8c-2.76 0-5 2.24-5 5 0 .74.17 1.44.46 2.07.22.47.84.57 1.21.2z\"/>")
      .name("OnDeviceTrainingRound")
  }
}

export default OnDeviceTrainingRound as Pretty as Typed<DLightIconType, HTMLSpanElement>