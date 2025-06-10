interface Scene {
  story: string | string[];
  gameStatus: string;
  event?: string[];
  isAllowBackPage?: boolean;
  itemCondition?: string[];
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
                story: `개발자가 되기 위해선
몇 가지의 도구가 필요하다.`,
                gameStatus: "Read",
              },
              {
                story: `그래서 나는 도구를 챙기기로
해서 상점에 왔다.`,
                gameStatus: "Read",
              },
              {
                story: `하하, 여기 도구 다 있네! 뭘 사겠는가?
본체, 모니터, 키보드, 마우스가 있네!
(근데 저기에 있는 물건 다 필요한데...)`,
                gameStatus: "Select",
                event: ["본체", "모니터", "키보드", "마우스"],
                isAllowBackPage: false,
              },
            ],
          },
          본체: {
            scene: [
              {
                story: ["본체를 얻었다.", "이미 받았다."],
                gameStatus: "Read",
                itemCondition: ["!본체"],
                event: ["집"],
                isAllowBackPage: false,
                giveItem: "본체",
              },
            ],
          },
          모니터: {
            scene: [
              {
                story: ["모니터를 얻었다.", "이미 받았다."],
                gameStatus: "Read",
                itemCondition: ["!모니터"],
                event: ["집"],
                isAllowBackPage: false,
                giveItem: "모니터",
              },
            ],
          },
          키보드: {
            scene: [
              {
                story: ["키보드를 얻었다.", "이미 받았다."],
                gameStatus: "Read",
                itemCondition: ["!키보드"],
                event: ["집"],
                isAllowBackPage: false,
                giveItem: "키보드",
              },
            ],
          },
          마우스: {
            scene: [
              {
                story: ["마우스를 얻었다.", "이미 받았다."],
                gameStatus: "Read",
                itemCondition: ["!마우스"],
                event: ["집"],
                isAllowBackPage: false,
                giveItem: "마우스",
              },
            ],
          },
          집: {
            scene: [
              {
                story: [
                  "아직 모든 재료를 모으지 않았다.",
                  `모든 재료를 모았다.
이제 즐겁게 코딩할 준비만 남았다.`,
                ],
                gameStatus: "Read",
                itemCondition: ["키보드", "모니터", "본체"],
                event: ["begin"],
                endPoint: true,
                endingType: "happy",
                isAllowBackPage: false,
              },
            ],
          },
        },
      ],
    },
  ],
};
