import * as EventsTypes from "./events";

export type HandleStepsFunction = (e: EventsTypes.ButtonMouseEvent) => void;
export type HandleInputsFunction = (
  inputName: string
) => (e: EventsTypes.InputChangeEvent) => void;
