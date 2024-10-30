import { useRecoilState } from "recoil";
import {
  currentStageState,
  currentPhaseState,
  currentRouteState,
  currentPageState,
  storyState,
  gameStatusState,
  isAllowBackPageState,
  currentEventState,
  currentItemState,
  giveItemState,
} from "../../../Atom";
import { useEffect } from "react";
import { gameData } from "../../../data/GameData";

const GameManager = () => {
  const [currentStage] = useRecoilState(currentStageState);
  const [currentPhase] = useRecoilState(currentPhaseState);
  const [currentRoute] = useRecoilState(currentRouteState);
  const [currentPage, setCurrentPage] = useRecoilState(currentPageState);
  const [currentItem] = useRecoilState(currentItemState);

  const [, setStory] = useRecoilState(storyState);
  const [, setGameStatus] = useRecoilState(gameStatusState);
  const [, setIsAllowBackPage] = useRecoilState(isAllowBackPageState);
  const [, setEvent] = useRecoilState(currentEventState);
  const [, setGiveItem] = useRecoilState(giveItemState);

  const nextSetting = () => {
    const stage = gameData.stage[currentStage];
    const phase = stage.phase[currentPhase];

    const direction = currentRoute as keyof typeof phase;

    const selectedScene = phase[direction].scene[currentPage];

    const story = selectedScene.story;
    if (typeof story === "string") setStory(story);
    else {
      const itemCondition = selectedScene.itemCondition ?? "";

      if (itemCondition.includes("!")) {
        const iteCd = itemCondition.split("!")[1];

        if (!currentItem.includes(iteCd)) {
          setStory(story[0]);
        } else {
          setStory(story[1]);
        }
      } else {
        if (currentItem.includes(itemCondition)) {
          setStory(story[1]);
        } else {
          setStory(story[0]);
        }
      }
    }

    const giveItem = selectedScene.giveItem ?? "";
    setGiveItem(giveItem);

    const gameStatus = selectedScene.gameStatus;
    setGameStatus(gameStatus);

    const isAllowBackPage = selectedScene.isAllowBackPage ?? true;
    setIsAllowBackPage(isAllowBackPage);

    const event: string[] = selectedScene.event ?? [];
    if (event.length) setEvent(event);
  };

  useEffect(() => {
    nextSetting();
  }, [currentPage, currentStage, currentPhase, currentRoute]);

  return null;
};

export default GameManager;
