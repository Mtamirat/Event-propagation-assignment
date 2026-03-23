Overview
This project shows how event bubbling works in React and how to stop it using event.stopPropagation().

Objective
Understand how DOM events propagate (bubble up)
Prevent unwanted parent event triggers
Use event.stopPropagation() in React
Test and validate expected behavior

Test Cases:

Normal Test Cases
1. Click Outer Container
Action: Click outside the button but inside the container
Expected: Only outer message appears
2. Click Inner Button
Action: Click the button
Expected: Only inner message appears
Outer event should NOT trigger
3. Multiple Button Clicks
Action: Click the button multiple times
Expected: Only inner handler runs each time

Edge Test Cases
1. Click Near Button
Action: Click close to the button but not on it
Expected: Only outer handler runs

2. Remove stopPropagation
Action: Comment out e.stopPropagation()
Expected: Both inner and outer handlers fire
Confirms default bubbling behavior

3. Rapid Clicking
Action: Click button quickly multiple times
Expected: Only inner handler triggers consistently

Conclusion
This project shows how React handles event propagation and how developers can control it to avoid unintended behavior in nested components. This concept is important in real-world UI scenarios like modals, dropdowns, and interactive elements.
