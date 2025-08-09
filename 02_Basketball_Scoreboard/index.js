let homeScoreEl = document.getElementById("home-score-el");
let guestScoreEl = document.getElementById("guest-score-el");

function increment_points(points, team) {
  if (team === "home") {
    homeScoreEl.textContent = parseInt(homeScoreEl.textContent) + points;
  } else if (team === "guest") {
    guestScoreEl.textContent = parseInt(guestScoreEl.textContent) + points;
  }
}

function reset_score() {
  homeScoreEl.textContent = 0;
  guestScoreEl.textContent = 0;
}
