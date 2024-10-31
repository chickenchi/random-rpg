interface Scene {
  story: string | string[];
  gameStatus: string;
  event?: string[];
  isAllowBackPage?: boolean;
  itemCondition?: string;
  giveItem?: string;
  endPoint?: boolean;
  endingType?: string;
}

interface Phase {
  [key: string]: {
    scene: Scene[];
  };
}

interface Stage {
  phase: Phase[];
}

interface GameDataSettings {
  stage: Stage[];
}

export const gameData: GameDataSettings = {
  stage: [
    {
      phase: [
        {
          begin: {
            scene: [
              {
                story: "나는 이곳에 왔다.",
                gameStatus: "Read",
              },
              {
                story: "어디로 갈까?",
                gameStatus: "Select",
                event: ["왼쪽 길", "오른쪽 길"],
                isAllowBackPage: false,
              },
            ],
          },
          "왼쪽 길": {
            scene: [
              {
                story: "왼쪽 길로 들어섰다.",
                gameStatus: "Read",
              },
              {
                story: ["잠겨 있다.", "탈출 성공!"],
                gameStatus: "Read",
                event: ["begin"],
                itemCondition: "열쇠",
                isAllowBackPage: false,
                endPoint: true,
                endingType: "happy",
              },
            ],
          },
          "오른쪽 길": {
            scene: [
              {
                story: ["열쇠를 발견했다.", "아무것도 없는 것 같다."],
                gameStatus: "Read",
                event: ["begin"],
                itemCondition: "!열쇠",
                isAllowBackPage: false,
                giveItem: "열쇠",
              },
            ],
          },
        },
      ],
    },
  ],
};
