const taskCountEl = document.getElementById("task-count");
const totalTaskEl = document.getElementById("total-task");
const activityEl = document.getElementById("activity");
const clearBtn = document.getElementById("clearActivity");
const bgBtn = document.getElementById("bg-btn");
const bodyEl = document.getElementById("bg-color");
const dateEl = document.getElementById("date");
const taskCards = document.querySelectorAll(".task-card");

function pad(n) {
    return String(n).padStart(2, "0");
}

function currentTime() {
    return new Date().toLocaleTimeString("en-US");
}

function showDate() {
    const now = new Date();
    const weekday = now.toLocaleDateString("en-US", { weekday: "short" });
    const rest = now.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
    });
    dateEl.innerHTML = `<p class="text-sm text-slate-500">${weekday}</p><p class="font-bold">${rest}</p>`;
}

function addActivity(taskTitle) {
    const item = document.createElement("p");
    item.className = "text-sm text-slate-600";
    item.textContent = `You have completed the task "${taskTitle}" at ${currentTime()}`;
    activityEl.appendChild(item);
}

taskCards.forEach(function (card) {
    const btn = card.querySelector(".task-btn");
    const title = card.querySelector("h3").innerText;

    btn.addEventListener("click", function () {
        alert("Board updated successfully");

        taskCountEl.innerText = pad(Number(taskCountEl.innerText) - 1);
        totalTaskEl.innerText = Number(totalTaskEl.innerText) + 1;

        btn.disabled = true;
        addActivity(title);

        if (Number(taskCountEl.innerText) === 0) {
            alert("Congrats!! You have completed all the current tasks");
        }
    });
});

clearBtn.addEventListener("click", function () {
    activityEl.innerHTML = "";
});

bgBtn.addEventListener("click", function () {
    const hue = Math.floor(Math.random() * 360);
    bodyEl.style.backgroundColor = `hsl(${hue}, 60%, 94%)`;
});

showDate();
