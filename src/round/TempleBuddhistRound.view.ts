import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class TempleBuddhistRound {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M21.85 9.01c-.41 0-.82.24-.95.63-.26.79-1.01 1.36-1.88 1.36H4.98c-.87 0-1.62-.57-1.88-1.36-.13-.39-.53-.62-.94-.62-.66 0-1.16.64-.95 1.26A4 4 0 0 0 4 12.86V20c0 1.1.9 2 2 2h4v-2.89c0-1 .68-1.92 1.66-2.08A2 2 0 0 1 14 19v3h4c1.1 0 2-.9 2-2v-7.14c.46-.12 2.22-.76 2.81-2.58.2-.63-.3-1.28-.96-1.27z\"/><path d=\"M6 8.86V10h12V8.86c.46-.12 2.22-.76 2.81-2.58.2-.63-.3-1.27-.96-1.27-.41 0-.82.24-.95.63-.26.79-1.01 1.36-1.88 1.36H6.98c-.87 0-1.62-.57-1.88-1.36-.13-.39-.53-.62-.94-.62-.66 0-1.16.64-.95 1.26A3.98 3.98 0 0 0 6 8.86z\"/><path d=\"M11.2 2.07 8.25 6h7.5L12.8 2.07a.993.993 0 0 0-1.6 0z\"/>")
      .name("TempleBuddhistRound")
  }
}

export default TempleBuddhistRound as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
