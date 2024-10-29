// atoms.ts
import { atom } from "recoil";

export const currentStageState = atom({
  key: "currentStageState",
  default: 0,
});

export const currentPhaseState = atom({
  key: "currentPhaseState",
  default: 0,
});

export const currentRouteState = atom({
  key: "currentRouteState",
  default: "begin",
});

export const currentJunctionState = atom({
  key: "currentJunctionState",
  default: 1,
});

export const currentPageState = atom({
  key: "currentPageState",
  default: 1,
});

export const gameStatusState = atom({
  key: "gameStatusState",
  default: "Read",
});

export const pageScriptState = atom({
  key: "pageScriptState",
  default: "Read",
});

export const currentItemState = atom({
  key: "currentItemState",
  default: [],
});
