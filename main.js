const gridAxes = 3;
const gridSize = Math.pow(gridAxes, 2);
const clickedQueue = [];

const queueEmpty = q => q.length === 0;
const queueFull = q => q.length === gridSize;

const buildGrid = () => {
  const wrapper = document.getElementsByClassName("wrapper")[0];
  for (let i = 0; i < gridAxes; i++) {
    const row = document.createElement("div")
    wrapper.appendChild(row);

    for (let i = 0; i < gridAxes; i++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      cell.addEventListener("click", e => handleClick(e))
      row.appendChild(cell);
    }
  }
};

const clearGrid = () => {
  const handleClear = setInterval(() => {
    const cell = clickedQueue.shift();
    cell.classList.remove("clickedCell");
    if (queueEmpty(clickedQueue)) clearInterval(handleClear);
  }, 400);
};

handleClick = e => {
  if (clickedQueue.includes(e.target)) return;

  e.target.classList.add("clickedCell");
  clickedQueue.push(e.target);

  if (queueFull(clickedQueue)) clearGrid();
}

buildGrid();
