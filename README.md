# Frontend Mentor - Interactive pricing component solution

This is a solution to the [Interactive pricing component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-pricing-component-t0m8PIyY8).

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Use the slider and toggle to see prices for different page view numbers

### Screenshot

![](/design/active-states.jpg.jpg);

### Links

- Live Site URL: [https://mariam-mantidze.github.io/Interactive-pricing-component/]

## Features

- **Custom Range Input**: A slider that allows users to select a range of page views, with the price updating dynamically based on the selected value.
- **Toggle Switch**: A checkbox that, when checked, applies a discount to the monthly price. This is useful for switching between monthly and yearly billing, for example.
- **Dynamic Price Updates**: The price and page views displayed update in real-time as the user interacts with the range input and toggle switch.

## Implementation Details

The core functionality is implemented in JavaScript:

- `updateProgress`: Updates the progress of the custom range input's track based on its value.
- `countPercentage`: Updates the displayed page views and monthly price based on the range input's value and the toggle switch's state.

Event listeners are added to the range input and toggle switch to trigger these updates dynamically as the user interacts with the component.

## Usage

To use this component, include the provided HTML, CSS, and JavaScript files in your project. The component will be initialized automatically.

## Customization

You can customize the appearance of the range input and toggle switch by modifying the CSS. The pricing structure can be adjusted by modifying the `countPercentage` function in the JavaScript file.
