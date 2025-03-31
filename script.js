// script.js
let bugCount = 0;

function addBug() {
  const bugTypes = ["bug1", "bug2", "bug3"];
  const randomBugType = bugTypes[Math.floor(Math.random() * bugTypes.length)];

  const bugContainer = document.getElementById("bug-container");
  const bugDiv = document.createElement("div");
  bugDiv.className = `bug walking ${randomBugType}`;
  bugDiv.id = `bug${bugCount}`;

  const bugImg = document.createElement("img");
  bugImg.className = "bug-sprite pixelart";
  bugImg.src = "BugSprite.png";

  bugDiv.appendChild(bugImg);
  bugContainer.appendChild(bugDiv);

  bugCount++;
}

function killRandomBug() {
  const bugs = document.querySelectorAll(".bug.walking");
  if (bugs.length === 0) return;

  const randomIndex = Math.floor(Math.random() * bugs.length);
  const bugToKill = bugs[randomIndex];
  bugToKill.classList.remove("walking");
  bugToKill.classList.add("dead");

  // Removing the bug after 1 second (to allow the death animation to play)
  setTimeout(() => {
    bugToKill.remove();
  }, 1000);
}
