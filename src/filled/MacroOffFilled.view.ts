import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class MacroOffFilled {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M19.98 17.15A8.909 8.909 0 0 0 21 13c-1.5 0-2.91.37-4.15 1.02l3.13 3.13zM3 13a9 9 0 0 0 9 9 9 9 0 0 0-9-9zm9-7.5A2.5 2.5 0 0 1 14.5 8c0 .99-.58 1.84-1.42 2.25l2.48 2.48c.11.02.23.03.35.03a2.5 2.5 0 0 0 2.5-2.5c0-1-.59-1.85-1.43-2.25.84-.4 1.43-1.25 1.43-2.25a2.5 2.5 0 0 0-3.92-2.06l.01-.2a2.5 2.5 0 0 0-5 0l.02.19a2.485 2.485 0 0 0-2.93.08l3.16 3.16c.41-.85 1.26-1.43 2.25-1.43z\"/><path d=\"M2.81 2.81 1.39 4.22l4.64 4.64c-.27.4-.43.87-.43 1.39a2.5 2.5 0 0 0 2.5 2.5c.52 0 .99-.16 1.4-.43l.02.02-.02.16A2.5 2.5 0 0 0 12 15c.05 0 .1-.01.16-.02l1.64 1.64A8.905 8.905 0 0 0 12 22c2.02 0 3.88-.67 5.38-1.8l2.4 2.4 1.41-1.41L2.81 2.81z\"/>")
      .name("MacroOffFilled")
  }
}

export default MacroOffFilled as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
