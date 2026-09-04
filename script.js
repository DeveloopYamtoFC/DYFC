document.addEventListener("DOMContentLoaded", function () {
  setTeamInformation();
  setHeroSlideshow();
  displayNextMatch();
  displaySchedule();
  displayResults();
  displayPlayers();
  setMenu();
});


// ==============================
// チーム情報
// ==============================

function setTeamInformation() {

  const headerEmblem =
    document.querySelector(".header .emblem-image");

  const footerEmblem =
    document.querySelector(".footer .emblem-image");

  const instagramLink =
    document.getElementById("instagramLink");

  const xLink =
    document.getElementById("xLink");


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
// HERO SLIDESHOW
// ふわっとクロスフェード
// ==============================

function setHeroSlideshow() {

  const heroImage =
    document.querySelector(".hero-image");

  if (!heroImage) return;


  const images =
    siteData.team.heroImages;

  if (
    !Array.isArray(images) ||
    images.length === 0
  ) {
    return;
  }


  let currentIndex = 0;

  const FADE_TIME = 2000;
  const DISPLAY_TIME = 3500;


  // ==============================
  // 画像を先読み
  // ==============================

  images.forEach(function (src) {

    const image =
      new Image();

    image.src = src;

  });


  // ==============================
  // 1枚目を表示
  // ==============================

  heroImage.style.backgroundImage =
    `url("${images[currentIndex]}")`;


  // ==============================
  // 次の画像用レイヤーを作成
  // ==============================

  const nextLayer =
    document.createElement("div");

  nextLayer.className =
    "hero-image hero-image-next";


  heroImage.insertAdjacentElement(
    "afterend",
    nextLayer
  );


  // ==============================
  // 写真切り替え
  // ==============================

  function changeHeroImage() {

    const nextIndex =
      (currentIndex + 1) %
      images.length;


    // 次の写真を準備
    nextLayer.style.backgroundImage =
      `url("${images[nextIndex]}")`;


    // 次のフレームでふわっと表示
    requestAnimationFrame(function () {

      requestAnimationFrame(function () {

        nextLayer.classList.add(
          "is-visible"
        );

      });

    });


    // フェード終了後
    setTimeout(function () {

      // 下のレイヤーも次の画像へ
      heroImage.style.backgroundImage =
        `url("${images[nextIndex]}")`;


      currentIndex =
        nextIndex;


      // 上のレイヤーを透明に戻す
      nextLayer.classList.remove(
        "is-visible"
      );


      // 次の切り替え
      setTimeout(
        changeHeroImage,
        DISPLAY_TIME
      );

    }, FADE_TIME);

  }


  // 最初の写真を少し見せてから開始
  setTimeout(
    changeHeroImage,
    DISPLAY_TIME
  );
}


// ==============================
// NEXT MATCH
// ==============================

function displayNextMatch() {

  const container =
    document.getElementById(
      "nextMatchContainer"
    );

  if (!container) return;


  const matches =
    siteData.matches
      .filter(function (match) {
        return match.status === "upcoming";
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
    getDateInformation(match.date);


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
              ? `<br>${match.kickoff} KICK OFF`
              : ""
          }

        </p>

      </div>

    </article>
  `;
}


// ==============================
// SCHEDULE
// ==============================

function displaySchedule() {

  const container =
    document.getElementById(
      "scheduleContainer"
    );

  if (!container) return;


  const matches =
    siteData.matches
      .filter(function (match) {
        return match.status === "upcoming";
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
          getDateInformation(match.date);


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
                    ? ` / ${match.kickoff} KICK OFF`
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
// RESULTS
// ==============================

function displayResults() {

  const container =
    document.getElementById(
      "resultsContainer"
    );

  if (!container) return;


  const matches =
    siteData.matches
      .filter(function (match) {
        return match.status === "finished";
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
          getDateInformation(match.date);

        const result =
          getResultInformation(match);


        // ==============================
        // 得点・アシスト
        // ==============================

        const goalsHtml =
          Array.isArray(match.goals) &&
          match.goals.length > 0

            ? match.goals
                .map(function (goal) {

                  const assistHtml =
                    goal.assist

                      ? `
                        <div class="assist-player">

                          <span class="detail-type">
                            ASSIST
                          </span>

                          <strong class="detail-number">
                            #${goal.assistNumber}
                          </strong>

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

                        <strong class="detail-number">
                          #${goal.scorerNumber}
                        </strong>

                        <span>
                          ${goal.scorer}
                        </span>

                      </div>

                      ${assistHtml}

                    </div>
                  `;

                })
                .join("")

            : `
              <p class="no-goal-data">
                得点情報はありません。
              </p>
            `;


        // ==============================
        // 写真
        // ==============================

        const photosHtml =
          Array.isArray(match.photos) &&
          match.photos.length > 0

            ? `
              <div class="detail-photo-title">
                MATCH PHOTOS
              </div>

              <div class="detail-photos">

                ${match.photos
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
            `

            : "";


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

                    <i>-</i>

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


  // ==============================
  // 試合詳細 開閉
  // ==============================

  const resultButtons =
    container.querySelectorAll(
      ".result-summary"
    );


  resultButtons.forEach(
    function (button) {

      button.addEventListener(
        "click",
        function () {

          const card =
            button.closest(
              ".result-card"
            );

          if (!card) return;


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

    }
  );
}


// ==============================
// TEAM
// ==============================

function createTeam(
  name,
  emblem
) {

  return `

    <div class="next-team">

      <img
        src="${emblem}"
        alt="${name} エンブレム"
      >

      <strong>
        ${name}
      </strong>

    </div>
  `;
}


// ==============================
// MINI TEAM
// ==============================

function createMiniTeam(
  name,
  emblem
) {

  return `

    <div class="mini-team">

      <img
        src="${emblem}"
        alt="${name} エンブレム"
        loading="lazy"
      >

      <span>
        ${name}
      </span>

    </div>
  `;
}


// ==============================
// DATE
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
// DATE INFORMATION
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
// WIN / LOSE / DRAW
// ==============================

function getResultInformation(
  match
) {

  const teamName =
    siteData.team.name;


  let teamScore;
  let opponentScore;


  if (
    match.homeTeam === teamName
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
// PLAYERS
// ==============================

function displayPlayers() {

  const container =
    document.getElementById(
      "playersContainer"
    );

  if (!container) return;


  if (
    !siteData.players ||
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
    .forEach(
      function (button) {

        button.addEventListener(
          "click",
          function () {

            const card =
              button.closest(
                ".player-card"
              );

            if (!card) return;


            card.classList.toggle(
              "show-play-photo"
            );

          }
        );

      }
    );
}


// ==============================
// PLAYER NO IMAGE
// ==============================

function showPlayerNoImage(
  image
) {

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
// MATCH NO IMAGE
// ==============================

function showMatchNoImage(
  image
) {

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
// MENU
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

    }
  );


  navigation
    .querySelectorAll("a")
    .forEach(
      function (link) {

        link.addEventListener(
          "click",
          function () {

            navigation.classList.remove(
              "open"
            );

            document.body.classList.remove(
              "menu-open"
            );

            button.textContent =
              "MENU";

            button.setAttribute(
              "aria-expanded",
              "false"
            );

          }
        );

      }
    );
}