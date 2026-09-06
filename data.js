const siteData = {

  // ==============================
  // チーム情報
  // ==============================

  team: {
    name: "Develoop Yamato FC",
    shortName: "DEVELOOP",
    location: "神奈川県大和市",

    instagram:
      "https://www.instagram.com/develoopyamatofootballclub/",

    x:
      "https://x.com/Develoop_Y_FC",

    emblemImage:
      "./images/emblem.jpg",

    heroImages: [
      "./images/header1.jpg",
      "./images/header2.jpg",
      "./images/header3.jpg",
      "./images/header4.jpg",
      "./images/header5.jpg"
    ]
  },


  // ==============================
  // 2026シーズン
  // ==============================

  matches: [

    // 次の試合

    {
      id: 1,
      date: "2026-09-13",
      competition: "神奈川県社会人2部リーグ",
      homeTeam: "Develoop Yamato FC",
      awayTeam: "クラブテアトロ",
      homeEmblem: "./images/emblem.jpg",
      awayEmblem: "./images/opponents/teatoro.jpg",
      place: "及川球技場",
      kickoff: "17:05",
      status: "upcoming",
      homeScore: null,
      awayScore: null,
      goals: [],
      photos: []
    },

     {
      id: 1,
      date: "2026-10-11",
      competition: "神奈川県社会人2部リーグ",
      homeTeam: "Develoop Yamato FC",
      awayTeam: "FC GRANSUMA",
      homeEmblem: "./images/emblem.jpg",
      awayEmblem: "./images/opponents/gransuma.jpg",
      place: "大和ゆとりの森",
      kickoff: "19:05",
      status: "upcoming",
      homeScore: null,
      awayScore: null,
      goals: [],
      photos: []
    },


    // 第1節

    {
      id: 2,
      date: "2026-04-12",
      competition: "県社会人リーグ 第1節",
      homeTeam: "Develoop Yamato FC",
      awayTeam: "TsujidoFC",
      homeEmblem: "./images/emblem.jpg",
      awayEmblem: "./images/opponents/tsujido-fc.jpg",
      place: "ゴールドクレストスタジアム鎌倉",
      kickoff: "",
      status: "finished",
      homeScore: 2,
      awayScore: 1,

      goals: [
        {
          scorer: "高木崚汰",
          scorerNumber: 11,
          assist: null,
          assistNumber: null
        },
        {
          scorer: "杉崎勇哉",
          scorerNumber: 5,
          assist: null,
          assistNumber: null
        }
      ],

      photos: [
        {
          image: "./matches/041201.jpg",
          alt: "TsujidoFC戦 試合写真1"
        },
        {
          image: "./matches/041202.jpg",
          alt: "TsujidoFC戦 試合写真2"
        },
        {
          image: "./matches/041203.jpg",
          alt: "TsujidoFC戦 試合写真3"
        }
      ]
    },


    // 第2節

    {
      id: 3,
      date: "2026-04-19",
      competition: "県社会人リーグ 第2節",
      homeTeam: "Develoop Yamato FC",
      awayTeam: "CLUBMARADO",
      homeEmblem: "./images/emblem.jpg",
      awayEmblem: "./images/opponents/clubmarado.jpg",
      place: "谷本公園",
      kickoff: "",
      status: "finished",
      homeScore: 2,
      awayScore: 1,

      goals: [
        {
          scorer: "吉川然",
          scorerNumber: 15,
          assist: "前田マイケル純",
          assistNumber: 4
        },
        {
          scorer: "前田マイケル純",
          scorerNumber: 4,
          assist: "吉川然",
          assistNumber: 15
        }
      ],

      photos: [
        {
          image: "./matches/041901.jpg",
          alt: "CLUBMARADO戦 試合写真1"
        },
        {
          image: "./matches/041902.jpg",
          alt: "CLUBMARADO戦 試合写真2"
        },
        {
          image: "./matches/041903.jpg",
          alt: "CLUBMARADO戦 試合写真3"
        }
      ]
    },


    // 第3節

    {
      id: 4,
      date: "2026-05-10",
      competition: "県社会人リーグ 第3節",
      homeTeam: "Develoop Yamato FC",
      awayTeam: "FC REBIRTH",
      homeEmblem: "./images/emblem.jpg",
      awayEmblem: "./images/opponents/fc-rebirth.jpg",
      place: "谷本公園",
      kickoff: "",
      status: "finished",
      homeScore: 2,
      awayScore: 1,

      goals: [
        {
          scorer: "前田マイケル純",
          scorerNumber: 4,
          assist: "圓大二郎",
          assistNumber: 14
        },
        {
          scorer: "秋山健",
          scorerNumber: 20,
          assist: "今井裕太",
          assistNumber: 10
        }
      ],

      photos: [
        {
          image: "./matches/051001.jpg",
          alt: "FC REBIRTH戦 試合写真1"
        },
        {
          image: "./matches/051002.jpg",
          alt: "FC REBIRTH戦 試合写真2"
        },
        {
          image: "./matches/051003.jpg",
          alt: "FC REBIRTH戦 試合写真3"
        }
      ]
    },


    // 第4節

    {
      id: 5,
      date: "2026-05-24",
      competition: "県社会人リーグ 第4節",
      homeTeam: "Develoop Yamato FC",
      awayTeam: "瀬谷インターナショナル",
      homeEmblem: "./images/emblem.jpg",
      awayEmblem: "./images/opponents/seya-international.jpg",
      place: "大和ゆとりの森",
      kickoff: "",
      status: "finished",
      homeScore: 4,
      awayScore: 1,

      goals: [
        {
          scorer: "大森駿",
          scorerNumber: 77,
          assist: "吉川然",
          assistNumber: 15
        },
        {
          scorer: "圓大二郎",
          scorerNumber: 14,
          assist: "高木崚汰",
          assistNumber: 11
        },
        {
          scorer: "大森駿",
          scorerNumber: 77,
          assist: "吉川然",
          assistNumber: 15
        },
        {
          scorer: "田中恭汰",
          scorerNumber: 12,
          assist: "吉川然",
          assistNumber: 15
        }
      ],

      photos: [
        {
          image: "./matches/052401.jpg",
          alt: "瀬谷インターナショナル戦 試合写真1"
        },
        {
          image: "./matches/052402.jpg",
          alt: "瀬谷インターナショナル戦 試合写真2"
        },
        {
          image: "./matches/052403.jpg",
          alt: "瀬谷インターナショナル戦 試合写真3"
        }
      ]
    },


    // 第5節

    {
      id: 6,
      date: "2026-06-07",
      competition: "県社会人リーグ 第5節",
      homeTeam: "Develoop Yamato FC",
      awayTeam: "JFC FUTURO",
      homeEmblem: "./images/emblem.jpg",
      awayEmblem: "./images/opponents/jfc-futuro.jpg",
      place: "星槎箱根仙石原",
      kickoff: "",
      status: "finished",
      homeScore: 2,
      awayScore: 3,

      goals: [
        {
          scorer: "大森駿",
          scorerNumber: 77,
          assist: null,
          assistNumber: null
        },
        {
          scorer: "大木健海",
          scorerNumber: 27,
          assist: "秋山健",
          assistNumber: 20
        }
      ],

      photos: [
        {
          image: "./matches/060701.jpg",
          alt: "JFC FUTURO戦 試合写真1"
        },
        {
          image: "./matches/060702.jpg",
          alt: "JFC FUTURO戦 試合写真2"
        },
        {
          image: "./matches/060703.jpg",
          alt: "JFC FUTURO戦 試合写真3"
        }
      ]
    },


    // 第6節

    {
      id: 7,
      date: "2026-06-21",
      competition: "県社会人リーグ 第6節",
      homeTeam: "Develoop Yamato FC",
      awayTeam: "FC SOCIOS",
      homeEmblem: "./images/emblem.jpg",
      awayEmblem: "./images/opponents/fc-socios.jpg",
      place: "大和ゆとりの森",
      kickoff: "",
      status: "finished",
      homeScore: 2,
      awayScore: 3,

      goals: [
        {
          scorer: "秋山健",
          scorerNumber: 20,
          assist: null,
          assistNumber: null
        },
        {
          scorer: "秋山健",
          scorerNumber: 20,
          assist: "大森駿",
          assistNumber: 77
        }
      ],

      photos: [
        {
          image: "./matches/062101.jpg",
          alt: "FC SOCIOS戦 試合写真1"
        },
        {
          image: "./matches/062102.jpg",
          alt: "FC SOCIOS戦 試合写真2"
        },
        {
          image: "./matches/062103.jpg",
          alt: "FC SOCIOS戦 試合写真3"
        }
      ]
    },


    // 第7節

    {
      id: 8,
      date: "2026-07-05",
      competition: "県社会人リーグ 第7節",
      homeTeam: "Develoop Yamato FC",
      awayTeam: "横須賀高校OB",
      homeEmblem: "./images/emblem.jpg",
      awayEmblem: "./images/opponents/yokosuka-ob.jpg",
      place: "横須賀リーフ",
      kickoff: "",
      status: "finished",
      homeScore: 3,
      awayScore: 4,

      goals: [
        {
          scorer: "今井裕太",
          scorerNumber: 10,
          assist: null,
          assistNumber: null
        },
        {
          scorer: "圓大二郎",
          scorerNumber: 14,
          assist: "高木崚汰",
          assistNumber: 11
        },
        {
          scorer: "田中恭汰",
          scorerNumber: 12,
          assist: "秋山健",
          assistNumber: 20
        }
      ],

      photos: [
        {
          image: "./matches/070501.jpg",
          alt: "横須賀高校OB戦 試合写真1"
        },
        {
          image: "./matches/070502.jpg",
          alt: "横須賀高校OB戦 試合写真2"
        },
        {
          image: "./matches/070503.jpg",
          alt: "横須賀高校OB戦 試合写真3"
        }
      ]
    },


    // 第8節

    {
      id: 9,
      date: "2026-07-19",
      competition: "県社会人リーグ 第8節",
      homeTeam: "Develoop Yamato FC",
      awayTeam: "PAYASO",
      homeEmblem: "./images/emblem.jpg",
      awayEmblem: "./images/opponents/payaso.jpg",
      place: "大和ゆとりの森",
      kickoff: "",
      status: "finished",
      homeScore: 5,
      awayScore: 3,

      goals: [
        {
          scorer: "前田マイケル純",
          scorerNumber: 4,
          assist: null,
          assistNumber: null
        },
        {
          scorer: "秋山健",
          scorerNumber: 20,
          assist: null,
          assistNumber: null
        },
        {
          scorer: "大森駿",
          scorerNumber: 77,
          assist: "吉川然",
          assistNumber: 15
        },
        {
          scorer: "秋山健",
          scorerNumber: 20,
          assist: null,
          assistNumber: null
        },
        {
          scorer: "川口ケン",
          scorerNumber: 8,
          assist: "今井裕太",
          assistNumber: 10
        }
      ],

      photos: [
        {
          image: "./matches/071901.jpg",
          alt: "PAYASO戦 試合写真1"
        },
        {
          image: "./matches/071902.jpg",
          alt: "PAYASO戦 試合写真2"
        },
        {
          image: "./matches/071903.jpg",
          alt: "PAYASO戦 試合写真3"
        }
      ]
    },


    // 第10節

    {
      id: 10,
      date: "2026-08-30",
      competition: "県社会人リーグ 第10節",
      homeTeam: "Develoop Yamato FC",
      awayTeam: "かながわクラブ",
      homeEmblem: "./images/emblem.jpg",
      awayEmblem: "./images/opponents/kanagawa-club.jpg",
      place: "大和ゆとりの森",
      kickoff: "",
      status: "finished",
      homeScore: 2,
      awayScore: 1,

      goals: [
        {
          scorer: "田中恭汰",
          scorerNumber: 12,
          assist: "加藤恵太",
          assistNumber: 29
        },
        {
          scorer: "高木凌汰",
          scorerNumber: 11,
          assist: "川口ケン",
          assistNumber: 8
        }
      ],

      photos: [
        {
          image: "./matches/083001.jpg",
          alt: "かながわクラブ戦 試合写真1"
        },
        {
          image: "./matches/083002.jpg",
          alt: "かながわクラブ戦 試合写真2"
        },
        {
          image: "./matches/083003.jpg",
          alt: "かながわクラブ戦 試合写真3"
        }
      ]
    }
  ],


  // ==============================
  // 2025シーズン
  // 神奈川県社会人サッカー2部リーグ
  // Aブロック3位
  // ==============================

  previousMatches: [

    // 第1節

    {
      id: 202501,
      date: "2025-04-13",
      competition:
        "神奈川県社会人2部リーグ Aブロック 第1節",

      homeTeam:
        "Develoop Yamato FC",

      awayTeam:
        "デスペルーホ藤沢",

      homeEmblem:
        "./images/emblem.jpg",

      awayEmblem:
        "./images/opponents/desperujo-fujisawa.jpg",

      place:
        "かもめパーク",

      kickoff: "",
      status: "finished",

      homeScore: 2,
      awayScore: 0,

      goals: [
        {
          scorer: "圓大二郎",
          scorerNumber: null,
          assist: null,
          assistNumber: null
        },
        {
          scorer: "川口ケン",
          scorerNumber: null,
          assist: "吉川然",
          assistNumber: null
        }
      ],

      photos: []
    },


    // 第2節

    {
      id: 202502,
      date: "2025-04-27",
      competition:
        "神奈川県社会人2部リーグ Aブロック 第2節",

      homeTeam:
        "Develoop Yamato FC",

      awayTeam:
        "FC Girasole",

      homeEmblem:
        "./images/emblem.jpg",

  
      

      place:
        "ツユキ及川球戯場",

      kickoff: "",
      status: "finished",

      homeScore: 4,
      awayScore: 2,

      goals: [
        {
          scorer: "圓大二郎",
          scorerNumber: null,
          assist: null,
          assistNumber: null
        },
        {
          scorer: "大木健海",
          scorerNumber: null,
          assist: "今井裕太",
          assistNumber: null
        },
        {
          scorer: "吉川然",
          scorerNumber: null,
          assist: "圓大二郎",
          assistNumber: null
        },
        {
          scorer: "高木凌汰",
          scorerNumber: null,
          assist: "吉川然",
          assistNumber: null
        }
      ],

      photos: []
    },


    // 第3節

    {
      id: 202503,
      date: "2025-05-11",
      competition:
        "神奈川県社会人2部リーグ Aブロック 第3節",

      homeTeam:
        "Develoop Yamato FC",

      awayTeam:
        "横須賀高校OB",

      homeEmblem:
        "./images/emblem.jpg",

      awayEmblem:
        "./images/opponents/yokosuka-ob.jpg",

      place:
        "横須賀リーフスタジアム",

      kickoff: "",
      status: "finished",

      homeScore: 3,
      awayScore: 0,

      goals: [
        {
          scorer: "今井裕太",
          scorerNumber: null,
          assist: null,
          assistNumber: null
        },
        {
          scorer: "高木崚汰",
          scorerNumber: null,
          assist: "吉川然",
          assistNumber: null
        },
        {
          scorer: "杉崎勇哉",
          scorerNumber: null,
          assist: null,
          assistNumber: null
        }
      ],

      photos: []
    },


    // 第4節

    {
      id: 202504,
      date: "2025-05-25",
      competition:
        "神奈川県社会人2部リーグ Aブロック 第4節",

      homeTeam:
        "Develoop Yamato FC",

      awayTeam:
        "江の島フリッパーズ",

      homeEmblem:
        "./images/emblem.jpg",

      awayEmblem:
        "./images/opponents/enoshima-flippers.jpg",

      place:
        "大和ゆとりの森",

      kickoff: "",
      status: "finished",

      homeScore: 3,
      awayScore: 2,

      goals: [
        {
          scorer: "川口ケン",
          scorerNumber: null,
          assist: "吉川然",
          assistNumber: null
        },
        {
          scorer: "大森駿",
          scorerNumber: null,
          assist: null,
          assistNumber: null
        },
        {
          scorer: "大木健海",
          scorerNumber: null,
          assist: "久保田拓海",
          assistNumber: null
        }
      ],

      photos: []
    },


    // 第5節

    {
      id: 202505,
      date: "2025-06-01",
      competition:
        "神奈川県社会人2部リーグ Aブロック 第5節",

      homeTeam:
        "Develoop Yamato FC",

      awayTeam:
        "Yokohama Puente",

      homeEmblem:
        "./images/emblem.jpg",

      awayEmblem:
        "./images/opponents/yokohama-puente.jpg",

      place:
        "かもめパーク",

      kickoff: "",
      status: "finished",

      homeScore: 4,
      awayScore: 0,

      goals: [
        {
          scorer: "圓大二郎",
          scorerNumber: null,
          assist: "吉川然",
          assistNumber: null
        },
        {
          scorer: "圓大二郎",
          scorerNumber: null,
          assist: null,
          assistNumber: null
        },
        {
          scorer: "川口ケン",
          scorerNumber: null,
          assist: "吉川然",
          assistNumber: null
        },
        {
          scorer: "平林航祐",
          scorerNumber: null,
          assist: "秋山健",
          assistNumber: null
        }
      ],

      photos: []
    },


    // 第6節

    {
      id: 202506,
      date: "2025-06-15",
      competition:
        "神奈川県社会人2部リーグ Aブロック 第6節",

      homeTeam:
        "Develoop Yamato FC",

      awayTeam:
        "PAYASO",

      homeEmblem:
        "./images/emblem.jpg",

      awayEmblem:
        "./images/opponents/payaso.jpg",

      place:
        "大和ゆとりの森",

      kickoff: "",
      status: "finished",

      homeScore: 1,
      awayScore: 2,

      goals: [
        {
          scorer: "吉川然",
          scorerNumber: null,
          assist: "秋山健",
          assistNumber: null
        }
      ],

      photos: []
    },


    // 第7節

    {
      id: 202507,
      date: "2025-07-06",
      competition:
        "神奈川県社会人2部リーグ Aブロック 第7節",

      homeTeam:
        "Develoop Yamato FC",

      awayTeam:
        "FCSOCIOS",

      homeEmblem:
        "./images/emblem.jpg",

      awayEmblem:
        "./images/opponents/fc-socios.jpg",

      place:
        "寄みやまグラウンド",

      kickoff: "",
      status: "finished",

      homeScore: 3,
      awayScore: 2,

      goals: [
        {
          scorer: "秋山健",
          scorerNumber: null,
          assist: "圓大二郎",
          assistNumber: null
        },
        {
          scorer: "大木健海",
          scorerNumber: null,
          assist: "吉川然",
          assistNumber: null
        },
        {
          scorer: "大森駿",
          scorerNumber: null,
          assist: null,
          assistNumber: null
        }
      ],

      photos: []
    },


    // 第8節

    {
      id: 202508,
      date: "2025-07-13",
      competition:
        "神奈川県社会人2部リーグ Aブロック 第8節",

      homeTeam:
        "Develoop Yamato FC",

      awayTeam:
        "Ringhio",

      homeEmblem:
        "./images/emblem.jpg",

      awayEmblem:
        "./images/opponents/ringhio.jpg",

      place:
        "大和ゆとりの森",

      kickoff: "",
      status: "finished",

      homeScore: 0,
      awayScore: 1,

      goals: [],
      photos: []
    },


    // 第9節

    {
      id: 202509,
      date: "2025-09-07",
      competition:
        "神奈川県社会人2部リーグ Aブロック 第9節",

      homeTeam:
        "Develoop Yamato FC",

      awayTeam:
        "久野FC",

      homeEmblem:
        "./images/emblem.jpg",

      awayEmblem:
        "./images/opponents/kuno-fc.jpg",

      place:
        "星槎箱根仙石原",

      kickoff: "",
      status: "finished",

      homeScore: 0,
      awayScore: 1,

      goals: [],
      photos: []
    },


    // 第10節

    {
      id: 202510,
      date: "2025-09-14",
      competition:
        "神奈川県社会人2部リーグ Aブロック 第10節",

      homeTeam:
        "Develoop Yamato FC",

      awayTeam:
        "FCSC",

      homeEmblem:
        "./images/emblem.jpg",

      awayEmblem:
        "./images/opponents/fcsc.jpg",

      place:
        "大和ゆとりの森",

      kickoff: "",
      status: "finished",

      homeScore: 4,
      awayScore: 1,

      goals: [
        {
          scorer: "田中恭汰",
          scorerNumber: null,
          assist: "高木崚汰",
          assistNumber: null
        },
        {
          scorer: "吉川然",
          scorerNumber: null,
          assist: "平林航祐",
          assistNumber: null
        },
        {
          scorer: "川口ケン",
          scorerNumber: null,
          assist: null,
          assistNumber: null
        },
        {
          scorer: "川口ケン",
          scorerNumber: null,
          assist: "吉川然",
          assistNumber: null
        }
      ],

      photos: []
    },


    // 第11節

    {
      id: 202511,
      date: "2025-09-28",
      competition:
        "神奈川県社会人2部リーグ Aブロック 第11節",

      homeTeam:
        "Develoop Yamato FC",

      awayTeam:
        "Saltista橋本",

      homeEmblem:
        "./images/emblem.jpg",

      awayEmblem:
        "./images/opponents/saltista-hashimoto.jpg",

      place:
        "横山公園",

      kickoff: "",
      status: "finished",

      homeScore: 1,
      awayScore: 2,

      goals: [
        {
          scorer: "吉川然",
          scorerNumber: null,
          assist: "秋山健",
          assistNumber: null
        }
      ],

      photos: []
    },


    // 第12節

    {
      id: 202512,
      date: "2025-10-26",
      competition:
        "神奈川県社会人2部リーグ Aブロック 第12節",

      homeTeam:
        "Develoop Yamato FC",

      awayTeam:
        "瀬谷インターナショナル",

      homeEmblem:
        "./images/emblem.jpg",

      awayEmblem:
        "./images/opponents/seya-international.jpg",

      place:
        "大和ゆとりの森",

      kickoff: "",
      status: "finished",

      homeScore: 2,
      awayScore: 1,

      goals: [
        {
          scorer: "田中恭汰",
          scorerNumber: null,
          assist: "高木崚汰",
          assistNumber: null
        },
        {
          scorer: "田中恭汰",
          scorerNumber: null,
          assist: "高木凌汰",
          assistNumber: null
        }
      ],

      photos: []
    },


    // 第13節

    {
      id: 202513,
      date: "2025-11-09",
      competition:
        "神奈川県社会人2部リーグ Aブロック 第13節",

      homeTeam:
        "Develoop Yamato FC",

      awayTeam:
        "かながわクラブ",

      homeEmblem:
        "./images/emblem.jpg",

      awayEmblem:
        "./images/opponents/kanagawa-club.jpg",

      place:
        "大和ゆとりの森",

      kickoff: "",
      status: "finished",

      homeScore: 5,
      awayScore: 0,

      goals: [
        {
          scorer: "田中恭汰",
          scorerNumber: null,
          assist: "大森駿",
          assistNumber: null
        },
        {
          scorer: "吉川然",
          scorerNumber: null,
          assist: "大森駿",
          assistNumber: null
        },
        {
          scorer: "大森駿",
          scorerNumber: null,
          assist: "秋山健",
          assistNumber: null
        },
        {
          scorer: "大木健海",
          scorerNumber: null,
          assist: "川口ケン",
          assistNumber: null
        },
        {
          scorer: "川口ケン",
          scorerNumber: null,
          assist: null,
          assistNumber: null
        }
      ],

      photos: []
    }
  ],


  // ==============================
  // 選手情報
  // ==============================

  players: [

    {
      number: 2,
      name: "金子 将馬",
      englishName: "SHOMA KANEKO",
      position: "DF",
      comment: "クレバーディフェンダー",
      faceImage: "./images/players/2a.jpg",
      playImage: "./images/players/2b.jpg",
      details: {
        heatmap: [
          { area: "C4", intensity: 1 },
          { area: "R3", intensity: 1 }
        ]
      }
    },

    {
      number: 4,
      name: "前田マイケル 純",
      englishName: "JUN MAEDA MICHAEL",
      position: "FW",
      comment: "新加入ストライカー",
      faceImage: "./images/players/4a.jpg",
      playImage: "./images/players/4b.jpg",
      details: {
        heatmap: [
          { area: "C1", intensity: 1 }
        ]
      }
    },

    {
      number: 5,
      name: "杉崎 勇哉",
      englishName: "YUYA SUGISAKI",
      position: "DF",
      comment: "DFリーダー",
      faceImage: "./images/players/5a.jpg",
      playImage: "./images/players/5b.jpg",
      details: {
        heatmap: [
          { area: "C4", intensity: 1 }
        ]
      }
    },

    {
      number: 6,
      name: "久保田 拓海",
      englishName: "TAKUMI KUBOTA",
      position: "MF",
      comment: "正確無比な右足",
      faceImage: "./images/players/6a.jpg",
      playImage: "./images/players/6b.jpg",
      details: {
        heatmap: [
          { area: "R3", intensity: 1 },
          { area: "L3", intensity: 1 },
          { area: "R2", intensity: 1 },
          { area: "L2", intensity: 1 }
        ]
      }
    },

    {
      number: 7,
      name: "沖山 祐人",
      englishName: "YUTO OKIYAMA",
      position: "MF",
      comment: "無尽蔵潰し屋",
      faceImage: "./images/players/7a.jpg",
      playImage: "./images/players/7b.jpg",
      details: {
        heatmap: [
          { area: "C3", intensity: 1 }
        ]
      }
    },

    {
      number: 8,
      name: "川口 ケン",
      englishName: "KEN KAWAGUCHI",
      position: "FW",
      comment: "重量級ジョーカー",
      faceImage: "./images/players/8a.jpg",
      playImage: "./images/players/8b.jpg",
      details: {
        heatmap: [
          { area: "C1", intensity: 1 },
          { area: "R1", intensity: 1 },
          { area: "L1", intensity: 1 }
        ]
      }
    },

    {
      number: 9,
      name: "内柴 将汰",
      englishName: "SHOTA UCHISHIBA",
      position: "MF",
      comment: "新加入ゲームメーカー",
      faceImage: "./images/players/9a.jpg",
      playImage: "./images/players/9b.jpg",
      details: {
        heatmap: [
          { area: "C3", intensity: 1 }
        ]
      }
    },

    {
      number: 10,
      name: "今井 裕太",
      englishName: "YUTA IMAI",
      position: "MF",
      comment: "圧倒的技術",
      faceImage: "./images/players/10a.jpg",
      playImage: "./images/players/10b.jpg",
      details: {
        heatmap: [
          { area: "C2", intensity: 1 },
          { area: "C3", intensity: 1 },
          { area: "R2", intensity: 1 }
        ]
      }
    },

    {
      number: 11,
      name: "高木 峻汰",
      englishName: "RYOTA TAKAGI",
      position: "MF",
      comment: "俊足ドリブラー",
      faceImage: "./images/players/11a.jpg",
      playImage: "./images/players/11b.jpg",
      details: {
        heatmap: [
          { area: "R3", intensity: 1 },
          { area: "R2", intensity: 1 },
          { area: "R1", intensity: 1 },
          { area: "C3", intensity: 1 },
          { area: "C2", intensity: 1 }
        ]
      }
    },

    {
      number: 12,
      name: "田中 恭汰",
      englishName: "KYOTA TANAKA",
      position: "FW",
      comment: "対パワンタッチゴーラー",
      faceImage: "./images/players/12a.jpg",
      playImage: "./images/players/12b.jpg",
      details: {
        heatmap: [
          { area: "C1", intensity: 1 },
          { area: "L1", intensity: 1 },
          { area: "R1", intensity: 1 }
        ]
      }
    },

    {
      number: 14,
      name: "圓 大二郎",
      englishName: "DAIJIRO MATOME",
      position: "MF",
      comment: "ベテランゲームメイカー",
      faceImage: "./images/players/14a.jpg",
      playImage: "./images/players/14b.jpg",
      details: {
        heatmap: [
          { area: "C1", intensity: 1 },
          { area: "C2", intensity: 1 },
          { area: "R1", intensity: 1 },
          { area: "L1", intensity: 1 }
        ]
      }
    },

    {
      number: 15,
      name: "吉川 然",
      englishName: "ZEN KICHIKAWA",
      position: "MF",
      comment: "アシスト王",
      faceImage: "./images/players/15a.jpg",
      playImage: "./images/players/15b.jpg",
      details: {
        heatmap: [
          { area: "L1", intensity: 1 },
          { area: "L2", intensity: 1 },
          { area: "L3", intensity: 1 }
        ]
      }
    },

    {
      number: 17,
      name: "龍野 雅貴",
      englishName: "MASATAKA TATSUNO",
      position: "DF",
      comment: "攻撃的DF",
      faceImage: "./images/players/17a.jpg",
      playImage: "./images/players/17b.jpg",
      details: {
        heatmap: [
          { area: "L3", intensity: 1 },
          { area: "C4", intensity: 1 },
          { area: "R3", intensity: 1 },
          { area: "L2", intensity: 1 }
        ]
      }
    },

    {
      number: 19,
      name: "八ツ橋 賢",
      englishName: "SATOSHI YATSUHASHI",
      position: "MF",
      comment: "影武者",
      faceImage: "./images/players/19a.jpg",
      playImage: "./images/players/19b.jpg",
      details: {
        heatmap: [
          { area: "L1", intensity: 1 },
          { area: "L2", intensity: 1 },
          { area: "L3", intensity: 1 }
        ]
      }
    },

    {
      number: 20,
      name: "秋山 健",
      englishName: "KEN AKIYAMA",
      position: "MF",
      comment: "オールラウンダー",
      faceImage: "./images/players/20a.jpg",
      playImage: "./images/players/20b.jpg",
      details: {
        heatmap: [
          { area: "C4", intensity: 1 },
          { area: "C3", intensity: 1 },
          { area: "C2", intensity: 1 },
          { area: "C1", intensity: 1 },
          { area: "R2", intensity: 1 },
          { area: "L2", intensity: 1 }
        ]
      }
    },

    {
      number: 21,
      name: "小玉 晃弘",
      englishName: "AKIHIRO KODAMA",
      position: "GK",
      comment: "FPもこなす重量級GK",
      faceImage: "./images/players/21a.jpg",
      playImage: "./images/players/21b.jpg",
      details: {
        heatmap: [
          { area: "C5", intensity: 1 }
        ]
      }
    },

    {
      number: 23,
      name: "吉野 敬",
      englishName: "KEI YOSHINO",
      position: "DF",
      comment: "正確無比な左足",
      faceImage: "./images/players/23a.jpg",
      playImage: "./images/players/23b.jpg",
      details: {
        heatmap: [
          { area: "C5", intensity: 1 },
          { area: "L3", intensity: 1 },
          { area: "L2", intensity: 1 }
        ]
      }
    },

    {
      number: 26,
      name: "青木 優杏",
      englishName: "YUAN AOKI",
      position: "MF",
      comment: "最年少プレイヤー",
      faceImage: "./images/players/26a.jpg",
      playImage: "./images/players/26b.jpg",
      details: {
        heatmap: [
          { area: "C4", intensity: 1 },
          { area: "R3", intensity: 1 },
          { area: "L2", intensity: 1 },
          { area: "R2", intensity: 1 },
          { area: "C3", intensity: 1 }
        ]
      }
    },

    {
      number: 27,
      name: "大木 健海",
      englishName: "TAKUMI OOKI",
      position: "DF",
      comment: "空中戦マスター",
      faceImage: "./images/players/27a.jpg",
      playImage: "./images/players/27b.jpg",
      details: {
        heatmap: [
          { area: "C4", intensity: 1 },
          { area: "R3", intensity: 1 },
          { area: "C1", intensity: 1 }
        ]
      }
    },

    {
      number: 28,
      name: "平林 航祐",
      englishName: "KOSUKE HIRABAYASHI",
      position: "MF",
      comment: "両利きドリブラー",
      faceImage: "./images/players/28a.jpg",
      playImage: "./images/players/28b.jpg",
      details: {
        heatmap: [
          { area: "C2", intensity: 1 },
          { area: "C1", intensity: 1 },
          { area: "R1", intensity: 1 }
        ]
      }
    },

    {
      number: 29,
      name: "加藤 恵太",
      englishName: "KEITA KATO",
      position: "DF",
      comment: "対人専門家",
      faceImage: "./images/players/29a.jpg",
      playImage: "./images/players/29b.jpg",
      details: {
        heatmap: [
          { area: "C4", intensity: 1 }
        ]
      }
    },

    {
      number: 31,
      name: "柄澤 健太",
      englishName: "KENTA KARASAWA",
      position: "GK",
      comment: "セービングマスター",
      faceImage: "./images/players/31a.jpg",
      playImage: "./images/players/31b.jpg",
      details: {
        heatmap: [
          { area: "C5", intensity: 1 }
        ]
      }
    },

    {
      number: 44,
      name: "井上 陽平",
      englishName: "YOHEI INOUE",
      position: "MF",
      comment: "技巧派ボランチ",
      faceImage: "./images/players/44a.jpg",
      playImage: "./images/players/44b.jpg",
      details: {
        heatmap: [
          { area: "C3", intensity: 1 }
        ]
      }
    },

    {
      number: 77,
      name: "大森 駿",
      englishName: "SHUN OMORI",
      position: "FW",
      comment: "長身ストライカー",
      faceImage: "./images/players/77a.jpg",
      playImage: "./images/players/77b.jpg",
      details: {
        heatmap: [
          { area: "C1", intensity: 1 },
          { area: "R1", intensity: 1 }
        ]
      }
    }
  ]
};
