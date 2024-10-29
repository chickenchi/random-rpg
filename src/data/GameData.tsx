type GameData = {
  stage: {
    phase: {
      begin: { scene: SceneType[] };
      [key: string]: { scene: SceneType[] }; // "왼쪽 길", "오른쪽 길" 등
    }[];
  }[];
};

type SceneType = {
  story: string | string[];
  gameStatus: string;
  event?: string | string[];
  condition?: string;
};

export const gameData = {
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
              },
            ],
          },
          "왼쪽 길": {
            scene: [
              {
                story: ["잠겨 있다.", "탈출 성공!"],
                gameStatus: "Read",
                event: "도입",
                condition: "열쇠",
              },
            ],
          },
          "오른쪽 길": {
            scene: [
              {
                story: "열쇠를 발견했다.",
                gameStatus: "Read",
              },
            ],
          },
        },
      ],
    },
  ],
};
