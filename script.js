document.addEventListener("DOMContentLoaded", function () {
  setTeamInformation();
  linkPreviousSeasonData();
  setHeroSlideshow();
  displayNextMatch();
  displaySchedule();
  displayResults();
  displayStatsRanking();
  displayPlayers();
  setMenu();
  setScrollHeader();
});


// ==============================
// 過去シーズンのデータ連携
// ==============================

function linkPreviousSeasonData() {

  if (
    !Array.isArray(siteData.players) ||
    !Array.isArray(siteData.previousMatches)
  ) {
    return;
  }


  const playerNumbers =
    new Map();


  siteData.players.forEach(function (player) {

    playerNumbers.set(
      normalizePlayerName(player.name),
      player.number
    );

  });


  // 高木選手の表記揺れ

  playerNumbers.set(
    "高木崚汰",
    11
  );

  playerNumbers.set(
    "高木凌汰",
    11
  );


  siteData.previousMatches.forEach(function (match) {

    // 得点者・アシスト者の背番号

    if (Array.isArray(match.goals)) {

      match.goals.forEach(function (goal) {

        goal.scorerNumber =
          playerNumbers.get(
            normalizePlayerName(goal.scorer)
          ) ?? null;


        goal.assistNumber =
          goal.assist

            ? playerNumbers.get(
                normalizePlayerName(goal.assist)
              ) ?? null

            : null;

      });

    }


    // 試合写真を3枚分自動設定

    if (
      !Array.isArray(match.photos) ||
      match.photos.length === 0
    ) {

      const dateCode =
        match.date
          .slice(5)
          .replace("-", "");


      match.photos =
        [1, 2, 3].map(function (number) {

          const photoNumber =
            String(number)
              .padStart(2, "0");


          return {

            image:
              `./matches/${dateCode}${photoNumber}.jpg`,

            alt:
              `${match.awayTeam}戦 試合写真${number}`

          };

        });

    }

  });

}


// ==============================
// 名前の空白を削除
// ==============================

function normalizePlayerName(name) {

  return String(name || "")
    .replace(/[\s　]/g, "");

}


// ==============================
// チーム情報
// ==============================

function setTeamInformation() {

  const headerEmblem =
    document.querySelector(
      ".header .emblem-image"
    );

  const footerEmblem =
    document.querySelector(
      ".footer .emblem-image"
    );

  const instagramLink =
    document.getElementById(
      "instagramLink"
    );

  const xLink =
    document.getElementById(
      "xLink"
    );


  if (headerEmblem) {

    headerEmblem.src =
      siteData.team.emblemImage;

  }


  if (footerEmblem) {

    footerEmblem.src =
      siteData.team.emblemImage;

  }


  if (instagramLink) {

    instagramLink.href =
      siteData.team.instagram;

  }


  if (xLink) {

    xLink.href =
      siteData.team.x;

  }

}


// ==============================
// ヘッダー写真スライド
// ==============================

function setHeroSlideshow() {

  const heroImage =
    document.querySelector(
      ".hero-image"
    );

  const dotsContainer =
    document.querySelector(
      ".hero-dots"
    );


  if (!heroImage) {
    return;
  }


  const images =
    siteData.team.heroImages;


  if (
    !Array.isArray(images) ||
    images.length === 0
  ) {
    return;
  }


  let currentIndex = 0;
  let isChanging = false;
  let slideTimer = null;

  const DISPLAY_TIME = 5000;
  const FADE_TIME = 2000;


  images.forEach(function (src) {

    const image =
      new Image();

    image.src =
      src;

  });


  heroImage.style.backgroundImage =
    `url("${images[0]}")`;


  const nextLayer =
    document.createElement("div");

  nextLayer.className =
    "hero-image hero-image-next";

  heroImage.insertAdjacentElement(
    "afterend",
    nextLayer
  );


  const dots =
    images.map(function (_, index) {

      const dot =
        document.createElement("button");

      dot.type =
        "button";

      dot.className =
        "hero-dot";

      dot.setAttribute(
        "aria-label",
        `${index + 1}枚目の写真を表示`
      );


      dot.addEventListener(
        "click",
        function () {

          changeImage(index);
          restartTimer();

        }
      );


      if (dotsContainer) {

        dotsContainer.appendChild(
          dot
        );

      }


      return dot;

    });


  function updateDots() {

    dots.forEach(function (dot, index) {

      const isActive =
        index === currentIndex;


      dot.classList.toggle(
        "is-active",
        isActive
      );


      if (isActive) {

        dot.setAttribute(
          "aria-current",
          "true"
        );

      } else {

        dot.removeAttribute(
          "aria-current"
        );

      }

    });

  }


  function changeImage(nextIndex) {

    if (
      isChanging ||
      nextIndex === currentIndex
    ) {
      return;
    }


    isChanging = true;


    nextLayer.style.backgroundImage =
      `url("${images[nextIndex]}")`;


    requestAnimationFrame(function () {

      requestAnimationFrame(function () {

        nextLayer.classList.add(
          "is-visible"
        );

      });

    });


    window.setTimeout(function () {

      heroImage.style.backgroundImage =
        `url("${images[nextIndex]}")`;


      currentIndex =
        nextIndex;


      updateDots();


      nextLayer.classList.remove(
        "is-visible"
      );


      isChanging = false;

    }, FADE_TIME);

  }


  function showNextImage() {

    const nextIndex =
      (currentIndex + 1) %
      images.length;


    changeImage(
      nextIndex
    );

  }


  function restartTimer() {

    if (slideTimer) {

      window.clearInterval(
        slideTimer
      );

    }


    slideTimer =
      window.setInterval(
        showNextImage,
        DISPLAY_TIME
      );

  }


  updateDots();
  restartTimer();

}


// ==============================
// 次の試合
// ==============================

function displayNextMatch() {

  const container =
    document.getElementById(
      "nextMatchContainer"
    );


  if (!container) {
    return;
  }


  const matches =
    siteData.matches
      .filter(function (match) {

        return (
          match.status ===
          "upcoming"
        );

      })
      .sort(function (a, b) {

        return (
          new Date(a.date) -
          new Date(b.date)
        );

      });


  const match =
    matches[0];


  if (!match) {

    container.innerHTML = `
      <div class="empty-message">
        現在、予定されている試合はありません。
      </div>
    `;

    return;

  }


  const date =
    getDateInformation(
      match.date
    );


  container.innerHTML = `

    <article class="next-match-card">

      <div class="large-date">

        <span>
          ${date.month}
        </span>

        <strong>
          ${date.day}
        </strong>

        <small>
          ${date.week}
        </small>

      </div>


      <div class="next-match-information">

        <span class="competition">
          ${match.competition}
        </span>


        <div class="next-team-area">

          ${createTeam(
            match.homeTeam,
            match.homeEmblem
          )}

          <span class="vs-text">
            VS
          </span>

          ${createTeam(
            match.awayTeam,
            match.awayEmblem
          )}

        </div>


        <p>

          ${match.place}

          ${
            match.kickoff

              ? `
                <br>
                ${match.kickoff}
                KICK OFF
              `

              : ""
          }

        </p>

      </div>

    </article>
  `;

}


// ==============================
// 試合予定
// ==============================

function displaySchedule() {

  const container =
    document.getElementById(
      "scheduleContainer"
    );


  if (!container) {
    return;
  }


  const matches =
    siteData.matches
      .filter(function (match) {

        return (
          match.status ===
          "upcoming"
        );

      })
      .sort(function (a, b) {

        return (
          new Date(a.date) -
          new Date(b.date)
        );

      });


  if (matches.length === 0) {

    container.innerHTML = `
      <div class="empty-message">
        現在、予定されている試合はありません。
      </div>
    `;

    return;

  }


  container.innerHTML =
    matches
      .map(function (match) {

        const date =
          getDateInformation(
            match.date
          );


        return `

          <article class="match-card">

            ${createDateHtml(
              match.date,
              date
            )}


            <div class="match-details">

              <span class="competition">
                ${match.competition}
              </span>


              <div class="schedule-teams">

                ${createMiniTeam(
                  match.homeTeam,
                  match.homeEmblem
                )}

                <strong class="schedule-vs">
                  VS
                </strong>

                ${createMiniTeam(
                  match.awayTeam,
                  match.awayEmblem
                )}

              </div>


              <p>

                ${match.place}

                ${
                  match.kickoff

                    ? `
                      /
                      ${match.kickoff}
                      KICK OFF
                    `

                    : ""
                }

              </p>

            </div>


            <span class="match-status">
              MATCH
            </span>

          </article>
        `;

      })
      .join("");

}


// ==============================
// 試合結果
// ==============================

function displayResults() {

  const seasonButtons =
    document.querySelectorAll(
      ".season-tab"
    );


  seasonButtons.forEach(function (button) {

    button.addEventListener(
      "click",
      function () {

        seasonButtons.forEach(function (item) {

          const isActive =
            item === button;


          item.classList.toggle(
            "is-active",
            isActive
          );


          item.setAttribute(
            "aria-pressed",
            String(isActive)
          );

        });


        renderResults(
          button.dataset.season
        );

      }
    );

  });


  renderResults(
    "2026"
  );

}


// ==============================
// 選択したシーズンの結果
// ==============================

function renderResults(
  selectedSeason
) {

  const container =
    document.getElementById(
      "resultsContainer"
    );


  if (!container) {
    return;
  }


  const summary =
    document.getElementById(
      "seasonResultSummary"
    );


  const sourceMatches =
    selectedSeason === "2025"

      ? (
          siteData.previousMatches ||
          []
        )

      : siteData.matches;


  if (summary) {

    summary.innerHTML =
      selectedSeason === "2025"

        ? `
          <span>
            2025 SEASON RESULT
          </span>

          <strong>
            神奈川県社会人サッカー2部リーグ
            Aブロック 3位
          </strong>
        `

        : `
          <span>
            2026 SEASON
          </span>

          <strong>
            神奈川県社会人サッカー2部リーグ
          </strong>
        `;

  }


  const matches =
    sourceMatches
      .filter(function (match) {

        return (
          match.status ===
          "finished"
        );

      })
      .sort(function (a, b) {

        return (
          new Date(b.date) -
          new Date(a.date)
        );

      });


  if (matches.length === 0) {

    container.innerHTML = `
      <div class="empty-message">
        まだ試合結果はありません。
      </div>
    `;

    return;

  }


  container.innerHTML =
    matches
      .map(function (match) {

        const date =
          getDateInformation(
            match.date
          );

        const result =
          getResultInformation(
            match
          );


        const goalsHtml =
          createGoalsHtml(
            match.goals
          );


        const photosHtml =
          createMatchPhotosHtml(
            match.photos
          );


        return `

          <article class="result-card">

            <button
              class="result-summary"
              type="button"
              aria-expanded="false"
            >

              ${createDateHtml(
                match.date,
                date
              )}


              <div class="match-details">

                <span class="competition">
                  ${match.competition}
                </span>


                <div class="result-teams">

                  ${createMiniTeam(
                    match.homeTeam,
                    match.homeEmblem
                  )}


                  <strong class="score">

                    ${match.homeScore}

                    <i>
                      -
                    </i>

                    ${match.awayScore}

                  </strong>


                  ${createMiniTeam(
                    match.awayTeam,
                    match.awayEmblem
                  )}

                </div>


                <p>
                  ${match.place}
                </p>

              </div>


              <div class="result-side">

                <span
                  class="result-label ${result.className}"
                >
                  ${result.text}
                </span>


                <span class="result-arrow">
                  ＋
                </span>

              </div>

            </button>


            <div class="match-detail-panel">

              <div class="match-detail-inner">

                <div class="detail-heading">

                  <span>
                    MATCH DETAILS
                  </span>

                  <strong>
                    試合詳細
                  </strong>

                </div>


                <div class="goal-details">
                  ${goalsHtml}
                </div>


                ${photosHtml}

              </div>

            </div>

          </article>
        `;

      })
      .join("");


  setResultAccordion(
    container
  );

}


// ==============================
// 得点・アシストHTML
// ==============================

function createGoalsHtml(goals) {

  if (
    !Array.isArray(goals) ||
    goals.length === 0
  ) {

    return `
      <p class="no-goal-data">
        得点情報はありません。
      </p>
    `;

  }


  return goals
    .map(function (goal) {

      const scorerNumberHtml =
        goal.scorerNumber

          ? `
            <strong class="detail-number">
              #${goal.scorerNumber}
            </strong>
          `

          : "";


      const assistNumberHtml =
        goal.assistNumber

          ? `
            <strong class="detail-number">
              #${goal.assistNumber}
            </strong>
          `

          : "";


      const assistHtml =
        goal.assist

          ? `
            <div class="assist-player">

              <span class="detail-type">
                ASSIST
              </span>

              ${assistNumberHtml}

              <span>
                ${goal.assist}
              </span>

            </div>
          `

          : `
            <div class="assist-player no-assist">

              <span class="detail-type">
                ASSIST
              </span>

              <span>
                -
              </span>

            </div>
          `;


      return `

        <div class="goal-detail">

          <div class="goal-player">

            <span class="detail-type">
              GOAL
            </span>

            ${scorerNumberHtml}

            <span>
              ${goal.scorer}
            </span>

          </div>

          ${assistHtml}

        </div>
      `;

    })
    .join("");

}


// ==============================
// 試合写真HTML
// ==============================

function createMatchPhotosHtml(photos) {

  if (
    !Array.isArray(photos) ||
    photos.length === 0
  ) {
    return "";
  }


  return `

    <div class="detail-photo-title">
      MATCH PHOTOS
    </div>


    <div class="detail-photos">

      ${photos
        .map(function (photo) {

          return `

            <div class="match-photo-item">

              <img
                src="${photo.image}"
                alt="${photo.alt}"
                loading="lazy"
                onerror="showMatchNoImage(this)"
              >

              <span class="match-no-image">
                NO IMAGE
              </span>

            </div>
          `;

        })
        .join("")}

    </div>
  `;

}


// ==============================
// 試合詳細の開閉
// ==============================

function setResultAccordion(container) {

  const resultButtons =
    container.querySelectorAll(
      ".result-summary"
    );


  resultButtons.forEach(function (button) {

    button.addEventListener(
      "click",
      function () {

        const card =
          button.closest(
            ".result-card"
          );


        if (!card) {
          return;
        }


        const isOpen =
          card.classList.toggle(
            "detail-open"
          );


        button.setAttribute(
          "aria-expanded",
          String(isOpen)
        );


        const arrow =
          button.querySelector(
            ".result-arrow"
          );


        if (arrow) {

          arrow.textContent =
            isOpen
              ? "−"
              : "＋";

        }

      }
    );

  });

}


// ==============================
// スタッツランキング
// ==============================

function displayStatsRanking() {

  const seasonButtons =
    document.querySelectorAll(
      ".stats-season-tab"
    );


  if (seasonButtons.length === 0) {
    return;
  }


  seasonButtons.forEach(function (button) {

    button.addEventListener(
      "click",
      function () {

        seasonButtons.forEach(function (item) {

          const isActive =
            item === button;


          item.classList.toggle(
            "is-active",
            isActive
          );


          item.setAttribute(
            "aria-pressed",
            String(isActive)
          );

        });


        renderStatsRanking(
          button.dataset.statsSeason
        );

      }
    );

  });


  renderStatsRanking(
    "2026"
  );

}


// ==============================
// ランキングを集計・表示
// ==============================

function renderStatsRanking(
  selectedSeason
) {

  const goalContainer =
    document.getElementById(
      "goalRankingContainer"
    );

  const assistContainer =
    document.getElementById(
      "assistRankingContainer"
    );


  if (
    !goalContainer ||
    !assistContainer
  ) {
    return;
  }


  const currentMatches =
    Array.isArray(siteData.matches)

      ? siteData.matches

      : [];


  const previousMatches =
    Array.isArray(siteData.previousMatches)

      ? siteData.previousMatches

      : [];


  let targetMatches;


  if (selectedSeason === "2025") {

    targetMatches =
      previousMatches;

  } else if (selectedSeason === "all") {

    targetMatches = [
      ...currentMatches,
      ...previousMatches
    ];

  } else {

    targetMatches =
      currentMatches;

  }


  targetMatches =
    targetMatches.filter(function (match) {

      return (
        match.status ===
        "finished"
      );

    });


  const rosterMap =
    createStatsRosterMap();

  const goalCounts =
    new Map();

  const assistCounts =
    new Map();


  targetMatches.forEach(function (match) {

    if (!Array.isArray(match.goals)) {
      return;
    }


    match.goals.forEach(function (goal) {

      addStatsCount(
        goalCounts,
        goal.scorer,
        rosterMap
      );


      if (goal.assist) {

        addStatsCount(
          assistCounts,
          goal.assist,
          rosterMap
        );

      }

    });

  });


  goalContainer.innerHTML =
    createStatsRankingHtml(
      goalCounts,
      "goal"
    );


  assistContainer.innerHTML =
    createStatsRankingHtml(
      assistCounts,
      "assist"
    );

}


// ==============================
// ランキング用の名前統一
// ==============================

function normalizeStatsName(name) {

  const normalized =
    normalizePlayerName(name);


  if (
    normalized === "高木崚汰" ||
    normalized === "高木凌汰"
  ) {

    return "高木峻汰";

  }


  return normalized;

}


// ==============================
// 選手情報とランキングを連携
// ==============================

function createStatsRosterMap() {

  const rosterMap =
    new Map();


  if (!Array.isArray(siteData.players)) {
    return rosterMap;
  }


  siteData.players.forEach(function (player) {

    rosterMap.set(
      normalizeStatsName(player.name),
      player
    );

  });


  return rosterMap;

}


// ==============================
// 得点・アシスト数を加算
// ==============================

function addStatsCount(
  statsMap,
  playerName,
  rosterMap
) {

  const normalizedName =
    normalizeStatsName(
      playerName
    );

  const player =
    rosterMap.get(
      normalizedName
    );

  const key =
    player

      ? `number-${player.number}`

      : `name-${normalizedName}`;


  if (!statsMap.has(key)) {

    statsMap.set(key, {

      name:
        player
          ? player.name
          : playerName,

      number:
        player
          ? player.number
          : null,

      image:
        player
          ? player.faceImage
          : "",

      count: 0

    });

  }


  statsMap.get(key).count += 1;

}


// ==============================
// ランキングHTML
// ==============================

function createStatsRankingHtml(
  statsMap,
  type
) {

  const sortedPlayers =
    Array.from(
      statsMap.values()
    )
      .sort(function (a, b) {

        if (b.count !== a.count) {

          return (
            b.count -
            a.count
          );

        }


        return String(a.name)
          .localeCompare(
            String(b.name),
            "ja"
          );

      });


  let previousCount = null;
  let currentRank = 0;


  const rankedPlayers =
    sortedPlayers
      .map(function (player, index) {

        if (
          player.count !==
          previousCount
        ) {

          currentRank =
            index + 1;

          previousCount =
            player.count;

        }


        return {
          ...player,
          rank: currentRank
        };

      })
      .filter(function (player) {

        return (
          player.rank <= 3
        );

      });


  if (rankedPlayers.length === 0) {

    return `
      <div class="stats-empty">
        記録はまだありません。
      </div>
    `;

  }


  const icon =
    type === "goal"

      ? "⚽"

      : "👟";


  const unit =
    type === "goal"

      ? "GOALS"

      : "ASSISTS";


  return rankedPlayers
    .map(function (player) {

      const imageHtml =
        player.image

          ? `
            <img
              src="${player.image}"
              alt="${player.name}の写真"
              loading="lazy"
              onerror="showStatsNoImage(this)"
            >
          `

          : "";


      return `

        <article
          class="stats-card stats-rank-${player.rank}"
        >

          <div class="stats-rank-number">
            ${player.rank}
          </div>


          <div class="stats-player-photo">

            ${imageHtml}

            <span>
              NO IMAGE
            </span>

          </div>


          <div class="stats-player-information">

            <span class="stats-player-number">

              ${
                player.number

                  ? `#${player.number}`

                  : "PLAYER"
              }

            </span>


            <strong>
              ${player.name}
            </strong>

          </div>


          <div class="stats-count">

            <span aria-hidden="true">
              ${icon}
            </span>

            <strong>
              ${player.count}
            </strong>

            <small>
              ${unit}
            </small>

          </div>

        </article>
      `;

    })
    .join("");

}


// ==============================
// ランキング写真がない場合
// ==============================

function showStatsNoImage(image) {

  image.style.display =
    "none";


  const box =
    image.closest(
      ".stats-player-photo"
    );


  if (box) {

    box.classList.add(
      "no-image-active"
    );

  }

}


// ==============================
// チーム表示
// ==============================

function createTeam(
  name,
  emblem
) {

  const emblemHtml =
    emblem

      ? `
        <img
          src="${emblem}"
          alt="${name} エンブレム"
        >
      `

      : "";


  return `

    <div class="next-team">

      ${emblemHtml}

      <strong>
        ${name}
      </strong>

    </div>
  `;

}


// ==============================
// 小さいチーム表示
// ==============================

function createMiniTeam(
  name,
  emblem
) {

  const emblemHtml =
    emblem

      ? `
        <img
          src="${emblem}"
          alt="${name} エンブレム"
          loading="lazy"
        >
      `

      : "";


  return `

    <div class="mini-team">

      ${emblemHtml}

      <span>
        ${name}
      </span>

    </div>
  `;

}


// ==============================
// 日付HTML
// ==============================

function createDateHtml(
  dateText,
  date
) {

  return `

    <time datetime="${dateText}">

      <span>
        ${date.month}
      </span>

      <strong>
        ${date.day}
      </strong>

      <small>
        ${date.week}
      </small>

    </time>
  `;

}


// ==============================
// 日付情報
// ==============================

function getDateInformation(
  dateText
) {

  const date =
    new Date(
      `${dateText}T00:00:00`
    );


  const months = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC"
  ];


  const weeks = [
    "SUN",
    "MON",
    "TUE",
    "WED",
    "THU",
    "FRI",
    "SAT"
  ];


  return {

    month:
      months[
        date.getMonth()
      ],

    day:
      String(
        date.getDate()
      ).padStart(
        2,
        "0"
      ),

    week:
      weeks[
        date.getDay()
      ]

  };

}


// ==============================
// 勝敗判定
// ==============================

function getResultInformation(
  match
) {

  const teamName =
    siteData.team.name;


  let teamScore;
  let opponentScore;


  if (
    match.homeTeam ===
    teamName
  ) {

    teamScore =
      match.homeScore;

    opponentScore =
      match.awayScore;

  } else {

    teamScore =
      match.awayScore;

    opponentScore =
      match.homeScore;

  }


  if (
    teamScore >
    opponentScore
  ) {

    return {
      text: "WIN",
      className: "win"
    };

  }


  if (
    teamScore <
    opponentScore
  ) {

    return {
      text: "LOSE",
      className: "lose"
    };

  }


  return {
    text: "DRAW",
    className: "draw"
  };

}


// ==============================
// 選手表示
// ==============================

function displayPlayers() {

  const container =
    document.getElementById(
      "playersContainer"
    );


  if (!container) {
    return;
  }


  if (
    !Array.isArray(siteData.players) ||
    siteData.players.length === 0
  ) {

    container.innerHTML = `
      <div class="empty-message dark-empty">
        選手情報は準備中です。
      </div>
    `;

    return;

  }


  container.innerHTML =
    siteData.players
      .map(function (player) {

        return `

          <article class="player-card">

            <button
              class="player-photo"
              type="button"
              aria-label="${player.name}の写真を切り替える"
            >

              <div class="player-image-box face-photo">

                <img
                  src="${player.faceImage}"
                  alt="${player.name}の顔写真"
                  onerror="showPlayerNoImage(this)"
                >

                <span class="player-no-image">
                  NO IMAGE
                </span>

              </div>


              <div class="player-image-box play-photo">

                <img
                  src="${player.playImage}"
                  alt="${player.name}のプレー写真"
                  onerror="showPlayerNoImage(this)"
                >

                <span class="player-no-image">
                  NO IMAGE
                </span>

              </div>


              <span class="photo-label">
                FACE / PLAY
              </span>

            </button>


            <div class="player-info">

              <strong class="player-number">
                ${player.number}
              </strong>


              <div>

                <h3>
                  ${player.name}
                </h3>

                <span>

                  ${player.englishName}

                  /

                  ${player.position}

                </span>


                ${
                  player.comment

                    ? `
                      <p>
                        ${player.comment}
                      </p>
                    `

                    : ""
                }

              </div>

            </div>

          </article>
        `;

      })
      .join("");


  container
    .querySelectorAll(
      ".player-photo"
    )
    .forEach(function (button) {

      button.addEventListener(
        "click",
        function () {

          const card =
            button.closest(
              ".player-card"
            );


          if (!card) {
            return;
          }


          card.classList.toggle(
            "show-play-photo"
          );

        }
      );

    });

}


// ==============================
// 選手画像がない場合
// ==============================

function showPlayerNoImage(image) {

  image.style.display =
    "none";


  const box =
    image.closest(
      ".player-image-box"
    );


  if (box) {

    box.classList.add(
      "no-image-active"
    );

  }

}


// ==============================
// 試合画像がない場合
// ==============================

function showMatchNoImage(image) {

  image.style.display =
    "none";


  const box =
    image.closest(
      ".match-photo-item"
    );


  if (box) {

    box.classList.add(
      "no-image-active"
    );

  }

}


// ==============================
// スクロール後のヘッダー
// ==============================

function setScrollHeader() {

  const header =
    document.querySelector(
      ".header"
    );

  const navigation =
    document.getElementById(
      "navigation"
    );

  const button =
    document.getElementById(
      "menuButton"
    );


  if (!header) {
    return;
  }


  function updateHeader() {

    const isScrolled =
      window.scrollY > 80;


    header.classList.toggle(
      "scrolled",
      isScrolled
    );


    if (
      !isScrolled &&
      navigation &&
      navigation.classList.contains(
        "open"
      )
    ) {

      navigation.classList.remove(
        "open"
      );

      header.classList.remove(
        "menu-active"
      );

      document.body.classList.remove(
        "menu-open"
      );


      if (button) {

        button.textContent =
          "MENU";

        button.setAttribute(
          "aria-expanded",
          "false"
        );

      }

    }

  }


  updateHeader();


  window.addEventListener(
    "scroll",
    updateHeader,
    {
      passive: true
    }
  );

}


// ==============================
// スマホメニュー
// ==============================

function setMenu() {

  const button =
    document.getElementById(
      "menuButton"
    );

  const navigation =
    document.getElementById(
      "navigation"
    );


  if (
    !button ||
    !navigation
  ) {
    return;
  }


  button.addEventListener(
    "click",
    function () {

      const open =
        navigation.classList.toggle(
          "open"
        );


      button.textContent =
        open
          ? "CLOSE"
          : "MENU";


      button.setAttribute(
        "aria-expanded",
        String(open)
      );


      document.body.classList.toggle(
        "menu-open",
        open
      );


      const header =
        document.querySelector(
          ".header"
        );


      if (header) {

        header.classList.toggle(
          "menu-active",
          open
        );

      }

    }
  );


  navigation
    .querySelectorAll("a")
    .forEach(function (link) {

      link.addEventListener(
        "click",
        function () {

          navigation.classList.remove(
            "open"
          );

          document.body.classList.remove(
            "menu-open"
          );


          const header =
            document.querySelector(
              ".header"
            );


          if (header) {

            header.classList.remove(
              "menu-active"
            );

          }


          button.textContent =
            "MENU";


          button.setAttribute(
            "aria-expanded",
            "false"
          );

        }
      );

    });

}