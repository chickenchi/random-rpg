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
  default: 0,
});

export const itemConditionState = atom({
  key: "itemConditionState",
  default: "",
});

// -------

export const storyState = atom({
  key: "storyState",
  default: "",
});

export const gameStatusState = atom({
  key: "gameStatusState",
  default: "Read",
});

export const currentItemState = atom<string[]>({
  key: "currentItemState",
  default: [],
});

export const giveItemState = atom({
  key: "giveItemState",
  default: "",
});

export const currentRoutePointState = atom<string[]>({
  key: "currentRoutePointState",
  default: [],
});

export const currentEventState = atom<string[]>({
  key: "currentEventState",
  default: [],
});

export const isAllowBackPageState = atom({
  key: "isAllowBackPageState",
  default: true,
});
