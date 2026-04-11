# 🍰 Responsive Dessert Menu & Cart App

A responsive dessert menu application built with **React** and modern **CSS (Grid & Flexbox)** that allows users to add items to a cart, manage quantities, and complete an order via an animated confirmation modal.

This project focuses heavily on **state management, conditional UI rendering, responsive layout architecture, animation control, and debugging real-world frontend issues** rather than just visual styling.

---

## 🚀 Live Demo

[View the live app here](http://desserts-menu.osmanhersi.co.uk/)

---

## ✨ Features

### 📱 Responsive Menu Layout
- Mobile-first design
- Grid-based layout on tablet/desktop (3 cards per row)
- Adaptive layout behaviour across breakpoints

### 🛒 Interactive Cart System
- Add to Cart → Increment / Decrement controls
- Real-time cart item count updates
- Dynamic order total calculation
- Cart reset functionality on new order

### 🧾 Order Confirmation Modal
- Mobile: Bottom-sheet slide-up animation
- Tablet/Desktop: Centered modal dialog
- Slide-in animation on open
- Fade-out animation on close
- Background scroll locking while modal is active

---

## 🛠️ Tech Stack

- **React** (State management & component architecture)
- **CSS Grid & Flexbox**
- **Responsive Design (Media Queries)**
- **SVG Integration**
- **Git (version control & workflow discipline)**

---

## 🧠 Technical Challenges & Solutions

This project involved solving several real-world frontend engineering problems.

---

### 1️⃣ Managing Shared Cart State Across Components

**Challenge:**  
Each product card needed to update the cart while keeping the cart summary and totals in sync.

**Solution:**  
- Centralised cart state in the parent component as an object keyed by product ID.
- Passed `increment` and `decrement` handlers down via props.
- Derived total item count and order total from state instead of storing redundant values.

---

### 2️⃣ Conditional UI: Add to Cart → Quantity Controls

**Challenge:**  
Switching between a single “Add to Cart” button and increment/decrement controls without breaking layout consistency.

**Solution:**  
- Used conditional rendering based on item count.
- Ensured both states shared consistent dimensions to avoid visual shifts.

---

### 3️⃣ Layout Shift Caused by Dynamic Content Width

**Challenge:**  
When the cart quantity reached double digits (10+), the `+` button shifted position due to `justify-content: space-between`. The growing number caused the layout to recalculate spacing.

**Solution:**  
- Assigned a fixed width to the quantity span using `3ch` (character units).
- Centered the text using `text-align: center`.
- Ensured stable button positioning regardless of content width.

This eliminated UI jitter and improved layout stability.

---

### 4️⃣ CSS Grid Row Stretching

**Challenge:**  
The cart section stretched grid rows unexpectedly when spanning multiple rows.

**Solution:**  
- Used intentional `grid-row` placement.
- Disabled default stretching with `align-self: start`.
- Allowed content height to define layout naturally.

---

### 5️⃣ Custom Font Not Rendering

**Challenge:**  
A locally stored custom font was not applying correctly.

**Solution:**  
- Properly loaded the font using `@font-face`.
- Verified font sources and weights.
- Applied the custom `font-family` globally.
- Confirmed successful loading via browser DevTools.

This reinforced understanding of how the browser handles locally hosted assets.

---

### 6️⃣ Transform Conflicts in Modal Animation

**Challenge:**  
Centering the modal using `transform` conflicted with slide animations, since only one transform can apply per element.

**Solution:**  
- Split the modal into two structural layers:
  - `.modal` (positioning shell)
  - `.modal-panel` (animated panel)
- Separated layout logic from animation logic to prevent transform overrides.

---

### 7️⃣ Modal Animation Not Triggering Due to Mounting

**Challenge:**  
The modal animation failed because the component was conditionally rendered and did not exist in the DOM before state changed.

**Solution:**  
- Refactored to keep the modal mounted.
- Replaced conditional rendering with conditional class application.
- Allowed CSS transitions to interpolate between states properly.

This improved understanding of how React mounting interacts with CSS animations.

---

### 8️⃣ Breakpoint-Specific Animation Behaviour

**Challenge:**  
- Mobile required a bottom-sheet slide-up animation.
- Tablet required a centered dialog that slides in but fades out on close.

**Solution:**  
- Implemented breakpoint-specific layout overrides.
- Applied different transition properties depending on state.
- Controlled animation direction by switching transition rules between base and modifier classes.

---

### 9️⃣ Preventing Background Scroll When Modal Opens

**Challenge:**  
The page remained scrollable behind the modal.

**Solution:**  
- Used `useEffect` to toggle `document.body.style.overflow`.
- Implemented proper cleanup to avoid persistent scroll locking.

---

### 🔟 Version Control Discipline During Refactors

**Challenge:**  
UI refactors introduced breaking changes during development.

**Solution:**  
- Used Git to reset to stable commits when necessary.
- Rebuilt features cleanly rather than stacking temporary fixes.
- Maintained consistent commit history throughout development.

---

## 🔜 Future Improvements

- Improve accessibility (keyboard navigation & focus management)
- Add unit tests for cart logic
- Extract reusable modal component
- Optimise image loading strategy

---

## 👤 Author

**Osman Hersi**

- 🌐 Portfolio: https://www.osmanhersi.co.uk
- 💻 GitHub: https://www.github.com/ohersi1
