// - 10K pageviews / $8 per month
// - 50K pageviews / $12 per month
// - 100K pageviews / $16 per month
// - 500k pageviews / $24 per month
// - 1M pageviews / $36 per month

const range = document.getElementById("range");

const updateProgress = () => {
  const percentage =
    ((range.value - range.min) / (range.max - range.min)) * 100;
  range.style.setProperty("--progress-width", `${percentage}%`);
};

range.addEventListener("input", updateProgress);

range.addEventListener("mousedown", () => {
  range.style.cursor = "grabbing";
});

range.addEventListener("mouseup", () => {
  range.style.cursor = "pointer";
});

updateProgress();

const checkbox = document.getElementById("check");

// checkbox.addEventListener("change", function () {
//   if (checkbox.checked) {
//     checkbox.style.backgroundColor = rgba(122, 234, 223, 1);
//   }
// });
