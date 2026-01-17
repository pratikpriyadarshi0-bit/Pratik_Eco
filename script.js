
// Initialize user data
if (!localStorage.getItem("user")) {
  localStorage.setItem("user", JSON.stringify({
    name: "Green User",
    age: "",
    college: "",
    city: "",
    ecoScore: 0,
    co2: 0,
    trees: 0,
    balance: 0
  }));
}

function loadProfile() {
  const user = JSON.parse(localStorage.getItem("user"));

  document.getElementById("name").value = user.name;
  document.getElementById("age").value = user.age;
  document.getElementById("college").value = user.college;
  document.getElementById("city").value = user.city;

  document.getElementById("pScore").innerText = user.ecoScore;
  document.getElementById("pCO2").innerText = user.co2 + " kg";
  document.getElementById("pTrees").innerText = user.trees;
}

function saveProfile() {
  let user = JSON.parse(localStorage.getItem("user"));

  user.name = document.getElementById("name").value;
  user.age = document.getElementById("age").value;
  user.college = document.getElementById("college").value;
  user.city = document.getElementById("city").value;

  localStorage.setItem("user", JSON.stringify(user));
  alert("Profile updated successfully ✅");
}



/* ---------------- LOGIN ---------------- */
function loginUser() {
  localStorage.setItem("loggedIn", "true");
  window.location.href = "dashboard.html";
}

/* ---------------- DASHBOARD ---------------- */
function loadDashboard() {
  const user = JSON.parse(localStorage.getItem("user"));

  document.getElementById("ecoScore").innerText = user.ecoScore;
  document.getElementById("co2").innerText = user.co2 + " kg";
  document.getElementById("trees").innerText = user.trees;
}

/* ---------------- ACTION SUBMISSION ---------------- */
function submitAction() {
  const action = document.getElementById("actionType").value;
  let user = JSON.parse(localStorage.getItem("user"));

  let points = 0;
  let co2 = 0;
  let trees = 0;

  switch (action) {
    case "transport":
      points = 10;
      co2 = 2;
      break;
    case "waste":
      points = 8;
      co2 = 1;
      break;
    case "energy":
      points = 12;
      co2 = 3;
      break;
    case "tree":
      points = 20;
      trees = 1;
      break;
  }

  user.ecoScore += points;
  user.co2 += co2;
  user.trees += trees;
  user.balance += points * 2;

  localStorage.setItem("user", JSON.stringify(user));
  alert("Eco action submitted successfully! 🌱");
}

/* ---------------- LEADERBOARD ---------------- */
function loadLeaderboard() {
  const user = JSON.parse(localStorage.getItem("user"));

  document.getElementById("userScore").innerText =
    user.ecoScore + " Points";
}

/* ---------------- REWARDS ---------------- */
function loadRewards() {
  const user = JSON.parse(localStorage.getItem("user"));
  if(user.ecoScore>=100){
     document.getElementById("balance").innerText = "₹" + user.balance;
  }
 
}

function redeemReward() {
  let user = JSON.parse(localStorage.getItem("user"));

  if (user.balance >= 100) {
    user.balance -= user.balance;
    alert("Reward redeemed successfully 🎉");
  } else {
    alert("Not enough balance ❌,Must have atleast ₹100 to redeem");
  }

  localStorage.setItem("user", JSON.stringify(user));
  loadRewards();
}
