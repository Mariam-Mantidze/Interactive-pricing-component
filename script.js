const range = document.getElementById("range");
const thumb = document.querySelector("#range::-webkit-slider-thumb");

const updateProgress = () => {
  const percentage =
    ((range.value - range.min) / (range.max - range.min)) * 100;

  range.style.setProperty("--progress-width", `${percentage}%`);
};

range.addEventListener("input", updateProgress);
updateProgress();

// ==================

range.addEventListener("mousedown", () => {
  range.style.cursor = "grabbing";
});

range.addEventListener("mouseup", () => {
  range.style.cursor = "pointer";
});

// ============

const pageViews = document.getElementById("page-reviews");
const monthlyPrice = document.getElementById("price");
const checkbox = document.getElementById("check");

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

// checkbox.addEventListener("change", () => {
//   if (checkbox.checked) {
//     const text = monthlyPrice.innerHTML;
//     let monthly = text.replace(/^\D*/, "");
//     console.log(monthly);

//     let yearlyDiscount = Math.floor(monthly - monthly / 4) * 12;
//     monthlyPrice.innerText = yearlyDiscount;
//   }
// });

range.addEventListener("input", countPercentage);

countPercentage();
