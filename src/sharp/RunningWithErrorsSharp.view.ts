import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import { ForwardProp } from "@dlightjs/decorators"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProp
class RunningWithErrorsSharp {
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M22 10v8h-2v-8h2zm-2 10v2h2v-2h-2zm-2-2.71A7.99 7.99 0 0 1 12 20c-4.41 0-8-3.59-8-8s3.59-8 8-8v9l7.55-7.55A9.965 9.965 0 0 0 12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c2.25 0 4.33-.74 6-2v-2.71z\"/>")
      .name("RunningWithErrorsSharp")
  }
}

export default RunningWithErrorsSharp as Pretty as Typed<DLightIconType, HTMLSpanElement>
