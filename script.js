const range = document.getElementById("range");

// როგორ შევცვალოთ grabbing-ის დროს ჰოვერის სტილი რომ არ ხდებოდეს thumb-ზე?
// const thumb = document.querySelector("#range::-webkit-slider-thumb");

// function for updating range input's track based on it's progress
const updateProgress = () => {
  const percentage =
    ((range.value - range.min) / (range.max - range.min)) * 100;

  range.style.setProperty("--progress-width", `${percentage}%`);
};

range.addEventListener("input", updateProgress);
updateProgress(); // რატომ გვჭირდება გამოძახება?

// function for styling pointer on dragging
range.addEventListener("mousedown", () => {
  range.style.cursor = "grabbing";
});
// function to go back to pointer when grabbing stops
range.addEventListener("mouseup", () => {
  range.style.cursor = "";
});

// ============ updating pricing ==========
const pageViews = document.getElementById("page-reviews");
const monthlyPrice = document.getElementById("price");
const checkbox = document.getElementById("check");

// updating prices/views based on tracker's percentage
const countPercentage = () => {
  const percentage =
    ((range.value - range.min) / (range.max - range.min)) * 100;

  switch (percentage) {
    case 0:
      pageViews.innerText = "10K PAGEVIEWS";
      price = 8;
      break;
    case 25:
      pageViews.innerText = "50K PAGEVIEWS";
      price = 12;
      break;
    case 50:
      pageViews.innerText = "100K PAGEVIEWS";
      price = 16;
      break;
    case 75:
      pageViews.innerText = "500K PAGEVIEWS";
      price = 24;
      break;
    case 100:
      pageViews.innerText = "1M PAGEVIEWS";
      price = 36;
      break;
  }
  if (checkbox.checked) {
    price *= 0.75 * 12;
  }

  monthlyPrice.innerText = `$${price.toFixed(2)}`;
};

// dynamically updating pricing on chechbox change
checkbox.addEventListener("change", countPercentage);
// dynamically updating pricing on range input
range.addEventListener("input", countPercentage);
