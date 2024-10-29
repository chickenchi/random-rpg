import { useRecoilState } from "recoil";
import {
  currentStageState,
  currentPhaseState,
  currentRouteState,
} from "../../../Atom";
import { useEffect } from "react";
import { gameData } from "../../../data/GameData";

const GameManager = () => {
  const [currentStage] = useRecoilState(currentStageState); // 현재 스테이지 인덱스
  const [currentPhase] = useRecoilState(currentPhaseState); // 현재 단계 인덱스
  const [currentRoute] = useRecoilState(currentRouteState); // 현재 선택 경로

  const beginGameSetting = () => {
    const firstStage = gameData.stage[currentStage]; // currentStage가 유효한지 확인 필요
    const firstPhase = firstStage.phase[currentPhase]; // currentPhase가 유효한지 확인 필요

    const direction = currentRoute as keyof typeof firstPhase; // direction의 타입을 키 타입으로 단언

    // 선택한 방향의 씬에 접근
    if (firstPhase[direction]) {
      // direction이 유효한지 확인
      const selectedScene = firstPhase[direction].scene;
      console.log(selectedScene); // 선택한 씬 출력
    } else {
      console.error("Invalid direction:", direction);
    }
  };

  useEffect(() => {
    beginGameSetting();
  }, [currentStage, currentPhase, currentRoute]); // 상태가 바뀔 때마다 호출

  return null; // 필요에 따라 다른 UI 컴포넌트를 반환할 수 있습니다.
};

export default GameManager;
