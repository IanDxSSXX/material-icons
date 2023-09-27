import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import { ForwardProp } from "@dlightjs/decorators"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProp
class MedicalInformationSharp {
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M22 7h-7V2H9v5H2v15h20V7zM11 4h2v5h-2V4zm0 12H9v2H7v-2H5v-2h2v-2h2v2h2v2zm2-1.5V13h6v1.5h-6zm0 3V16h4v1.5h-4z\"/>")
      .name("MedicalInformationSharp")
  }
}

export default MedicalInformationSharp as Pretty as Typed<DLightIconType, HTMLSpanElement>
