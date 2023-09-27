import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import { ForwardProp } from "@dlightjs/decorators"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProp
class RocketOutlined {
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M14 11c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2zm-6.02 7.25c-.29-.9-.57-1.94-.76-3L6 16.07v2.98l1.98-.8zM12 2s5 2 5 11l2.11 1.41c.56.37.89 1 .89 1.66V22l-5-2H9l-5 2v-5.93c0-.67.33-1.29.89-1.66L7 13c0-9 5-11 5-11zm0 2.36S9 6.38 9 13c0 2.25 1 5 1 5h4s1-2.75 1-5c0-6.62-3-8.64-3-8.64zm6 14.69v-2.98l-1.22-.81c-.19 1.05-.47 2.1-.76 3l1.98.79z\"/>")
      .name("RocketOutlined")
  }
}

export default RocketOutlined as Pretty as Typed<DLightIconType, HTMLSpanElement>