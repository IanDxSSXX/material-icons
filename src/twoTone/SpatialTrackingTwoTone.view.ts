import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class SpatialTrackingTwoTone {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M20.05 2.41 18.64 1c-3.51 3.51-3.51 9.21 0 12.73l1.41-1.41c-2.73-2.74-2.73-7.18 0-9.91z\"/><path d=\"m22.88 5.24-1.41-1.41a5.003 5.003 0 0 0 0 7.07l1.41-1.41a3.012 3.012 0 0 1 0-4.25z\"/><path d=\"M15.48 17.34C14.29 16.73 12.37 16 10 16c-2.37 0-4.29.73-5.48 1.34-.32.16-.52.5-.52.88V19h12v-.78c0-.38-.2-.72-.52-.88z\" opacity=\".3\"/><circle cx=\"10\" cy=\"9\" r=\"2\" opacity=\".3\"/><path d=\"M10 13c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm6.39 8.56C14.71 14.7 12.53 14 10 14s-4.71.7-6.39 1.56A2.97 2.97 0 0 0 2 18.22V21h16v-2.78c0-1.12-.61-2.15-1.61-2.66zM16 19H4v-.78c0-.38.2-.72.52-.88C5.71 16.73 7.63 16 10 16c2.37 0 4.29.73 5.48 1.34.32.16.52.5.52.88V19z\"/>")
      .name("SpatialTrackingTwoTone")
  }
}

export default SpatialTrackingTwoTone as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>