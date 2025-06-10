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
                story: `무엇이 문제였을까.`,
                gameStatus: "Read",
              },
              {
                story: `내가 하던 모든 일은 항상 수포로 돌아갔다.`,
                gameStatus: "Read",
              },
              {
                story: `능력은 있다고 생각하는데,
나는 항상 뭔가가 부족했다.`,
                gameStatus: "Read",
              },
              {
                story: `나는 하는 수 없이 최후의 수단을 쓰기로 했다.`,
                gameStatus: "Read",
              },
              {
                story: `내 능력 하나만 믿고 혼자서
밥벌이하기로 다짐했다.`,
                gameStatus: "Read",
              },
              {
                story: [`Urban Zakapa`, "Error!"],
                gameStatus: "Read",
                itemCondition: ["!"],
                event: ["집"],
                isAllowBackPage: false,
              },
            ],
          },
          집: {
            scene: [
              {
                story: `우선 창업을 위해선 어떤 분류의
창업을 할지 골라야 한다.`,
                gameStatus: "Read",
              },
              {
                story: `내가 할 수 있는 분야는
[getEvent]
이렇게 있다. 무엇을 고를까?`,
                gameStatus: "Select",
                event: ["작곡", "프로그래밍", "연기", "디자인", "호텔 서비스"],
                isAllowBackPage: false,
              },
            ],
          },
          작곡: {
            scene: [
              {
                story: `나는 작곡을 하기로 결정했다.`,
                gameStatus: "Read",
              },
              {
                story: `흠, 일단 작곡 프로그램이
필요한데 돈이 없다...`,
                gameStatus: "Read",
              },
              {
                story: `역시 돈이 최고다.
돈이 없으면 아무것도 못해.`,
                gameStatus: "Read",
              },
              {
                story: `...! 생각해 보니
무료 작곡 프로그램이 있었다.`,
                gameStatus: "Read",
              },
              {
                story: `이걸로라도 작업해야겠다.`,
                gameStatus: "Read",
              },
              {
                story: `기본 툴도 나쁘지만은 않네!`,
                gameStatus: "Read",
              },
              {
                story: `내 첫 곡이 완성되었다.
어디다 올릴까?
[getEvent]`,
                gameStatus: "Select",
                event: ["유튜브", "SoundCloud", "블로그", "카페"],
                isAllowBackPage: false,
              },
            ],
          },
          유튜브: {
            scene: [
              {
                story: `... 유튜브 시장이 너무 커서 그런지
몇 주가 흘러도 조회 수가 나오지 않았다.
이후로도 아무것도 되지 않았다.
그냥 다 관두자...
(Game Over.)`,
                gameStatus: "Read",
                event: ["begin"],
                isAllowBackPage: false,
              },
            ],
          },
          SoundCloud: {
            scene: [
              {
                story: `오호... 사운드 클라우드로 하니까
조회 수 잘 나온다. 좋은데? 계속 해 보자!`,
                gameStatus: "Read",
              },
              {
                story: `... 근데 떠오르는 영감이 없다. 큰일 났네.
어느 곳에서 영감을 찾을까?
[getEvent]`,
                gameStatus: "Select",
                event: ["친구", "부모님", "인터넷"],
                isAllowBackPage: false,
              },
            ],
          },
          친구: {
            scene: [
              {
                story: `너 같은 애가 무슨 작곡이넀다...
그래... 난 가망이 없어.
(Game Over.)`,
                gameStatus: "Read",
                isAllowBackPage: false,
                event: ["begin"],
              },
            ],
          },
          부모님: {
            scene: [
              {
                story: `작곡으로는 생계를 유지하기 힘들 거라고 말씀하셨다.
하지만 네 한 번의 협업 문제로 협업을 포기해선 안 된다고 말씀하셨다.
... 맞는 말이다. 나는 다시 다른 산업에 뛰어들어 협업해 성공하였다.
무려 100억이나 벌었다고! 으하하!
역시 부모님 말이 다 옳았구나.
(Happy Ending.)`,
                gameStatus: "Read",
                isAllowBackPage: false,
                event: ["begin"],
              },
            ],
          },
          인터넷: {
            scene: [
              {
                story: `인터넷에 검색해 보니 마땅한 해결책이 없었다.
난 이제 망했어... 하나 만들어 봤자 뭐 해 다음이 없잖아!
(5년 뒤...)
음, 그래도 이거 하나로 2억은 벌었네. 이대로 만족하자.
(Happy Ending...? 더 좋은 방법이 있었을지도 모른다.)`,
                gameStatus: "Read",
                isAllowBackPage: false,
                event: ["begin"],
              },
            ],
          },
          블로그: {
            scene: [
              {
                story: `맞다. 내 블로그를 볼 사람이 없다.
이건 아닌 거 같아. 다른 방법을 찾아보자.`,
                gameStatus: "Read",
                event: ["작곡"],
              },
            ],
          },
          카페: {
            scene: [
              {
                story: `카페라 그런지 잘 찾아오긴 했다.
그러나... 내 작품을 다들 불법으로 퍼 가서
자기 거인양 밝혔다... 내가 애써 만든 걸... 크흑.
아으, 아무것도 하지 마 그냥!
(Game Over.)`,
                gameStatus: "Read",
                event: ["begin"],
                isAllowBackPage: false,
              },
            ],
          },
          프로그래밍: {
            scene: [
              {
                story: `나는 개발자가 되기로 결정했다.`,
                gameStatus: "Read",
              },
              {
                story: `개발자... 뭔가 할 일이 많다.`,
                gameStatus: "Read",
              },
              {
                story: `일단 뭘 만들지도 정해야 하고...
사업 계획서도 써야 하고...
머리가 아프다.`,
                gameStatus: "Read",
              },
              {
                story: `내가 결정할 방법은
[getEvent]
이렇게 있다. 무엇을 고를까?`,
                gameStatus: "Select",
                event: ["즉흥적 개발", "순차적 개발", "만능 ChatGPT"],
                isAllowBackPage: false,
              },
            ],
          },
          "즉흥적 개발": {
            scene: [
              {
                story: `나는 즉흥적으로 개발하고 있었다.
... 이거 좀 쎄한데?`,
                gameStatus: "Read",
              },
              {
                story: `아아아아아악!`,
                gameStatus: "Read",
              },
              {
                story: `기초 설계 오류, 유지 보수 어려움,
해당 제품의 경쟁 시장의 확대 등의 문제가 발생해서
만들긴 글렀다... 흐극.
절망에 빠져 이후로 아무 일도 하지 못하게 되었다.
(Game Over.)`,
                gameStatus: "Read",
                isAllowBackPage: false,
                event: ["begin"],
              },
            ],
          },
          "순차적 개발": {
            scene: [
              {
                story: `순차적으로 개발하기로 하였다.
하아... 일일이 다 해야 한다는 게
문제긴 하지만 사전 조사하고
그러다 보면 문제는 없겠네.`,
                gameStatus: "Read",
              },
              {
                story: `나름 좋은 아이디어를 찾았다.
이거라면...!`,
                gameStatus: "Read",
              },
              {
                story: `... 혼자 만들어서 그런지
시간이 너무 많이 걸린다.
그 와중에 내 아이디어를 어떤 회사가 떠올려서
이미 글렀다. 잘나가는 XX 회사를 이길 순 없다.
... 포기하자.
(Game Over.)`,
                gameStatus: "Read",
                isAllowBackPage: false,
                event: ["begin"],
              },
            ],
          },
          "만능 ChatGPT": {
            scene: [
              {
                story: `그냥 내 생각대로
ChatGPT를 돌려서 알아서
하라고 하면 되지 않을까?`,
                gameStatus: "Read",
              },
              {
                story: `... 요즘 기술력 미쳤네. GPT만 딸깍하면 모든 게 만들어지잖아?`,
                gameStatus: "Read",
              },
              {
                story: `근데 내가 이번에 뉴스를 안 봤네. 볼까...
??? GPT 때문에 개발자는 이제 다 망했다고? 아악! 너 때문이야...
내가 너를 파괴시켜 버리겠어...`,
                gameStatus: "Read",
              },
              {
                story: `근데 내가 이번에 뉴스를 안 봤네. 볼까...
??? GPT 때문에 개발자는 이제 다 망했다고? 아악! 너 때문이야...
내가 너를 파괴시켜 버리겠어...
뭘로 파괴시킬까?
[getEvent]`,
                gameStatus: "Select",
                event: ["핵", "미사일", "해킹"],
                isAllowBackPage: false,
              },
            ],
          },
          핵: {
            scene: [
              {
                story: `상식적으로 우리나라는 핵 보유국이 아닌데 어떻게 발사해?`,
                gameStatus: "Read",
                event: ["만능 ChatGPT"],
              },
            ],
          },
          미사일: {
            scene: [
              {
                story: `미사일? 민간인은 미사일을 가지고 있지 않아!`,
                gameStatus: "Read",
                event: ["만능 ChatGPT"],
              },
            ],
          },
          해킹: {
            scene: [
              {
                story: `웬일인지 모든 AI의 해킹에 성공했다. 으하하, 인간 승리다!
모조리 해킹해 버려 내가 모든 주도권을 가져갔다.
AI 기술은 법적으로 금지시켜 어떤 직업을 선택하든 성공할 수 있게 되었다.
나는 사람들의 생계를 살린 영웅으로 불려 만수르에 버금가는 부자가 되었다.
캬~ 이제 나는 아무것도 안 해도 돼!
(Happy Happy Happy Ending.)`,
                gameStatus: "Read",
                event: ["begin"],
                isAllowBackPage: false,
              },
            ],
          },
          연기: {
            scene: [
              {
                story: `나는 연극 배우를 하기로 결정했다.`,
                gameStatus: "Read",
              },
              {
                story: `...? 나 연기 못하는데.
일단 배워 보자...`,
                gameStatus: "Read",
              },
              {
                story: `어렸을 때의 학습량과 비교가 안 될 만큼
학습 능력이 떨어져서 점점 의욕이 떨어졌다.
... 그냥 아무것도 하지 말자.
(Game Over.)`,
                gameStatus: "Read",
                event: ["begin"],
                isAllowBackPage: false,
              },
            ],
          },
          디자인: {
            scene: [
              {
                story: `나는 디자이너 일을 하기로 결정했다.`,
                gameStatus: "Read",
              },
              {
                story: `혼자 디자이너 일이라니, 외주라도 해야 하나?`,
                gameStatus: "Read",
              },
              {
                story: `이걸 말하는 이유는...
나는 다른 서비스에 빌붙지 않으면
아무것도 할 수 없는 웹 피그마 디자이너다.`,
                gameStatus: "Read",
              },
              {
                story: `아니야!!!
난 이제 다른 사람에 의존하지 않기로 했다고!!!
꼭 남이랑 있을 때 서비스가 망했었다고!
선택에 대한 후회로 그냥 집안에서 짱박히기로 했다.
(Game Over.)`,
                gameStatus: "Read",
                event: ["begin"],
                isAllowBackPage: false,
              },
            ],
          },
          "호텔 서비스": {
            scene: [
              {
                story: `나는 호텔 서비스 일을 하기로 결정했다.`,
                gameStatus: "Read",
              },
              {
                story: `... 처음부터 망했다.
나는 돈이 없어서 건물이 없다.
이건 창업이 아니잖아!!!!!
기껏 다 계획해 놨더니...
나는 모든 것을 내려놓고 그냥 인생을 접기로 하였다.
(Game Over.)`,
                gameStatus: "Read",
                event: ["begin"],
                isAllowBackPage: false,
              },
            ],
          },
        },
      ],
    },
  ],
};
