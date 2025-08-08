# Day 6-7 - React Password Generator App

In this mini-project, I built a **Password Generator App** using React. This project helped me solidify core React concepts and understand the power of Hooks for performance and behavior management.

---

##  Features

-  Choose password length
-  Option to include numbers
-  Option to include special characters
-  Generate secure, random passwords
-  Copy to clipboard functionality

----

##  What I Learned

### `useCallback` Hook  
- Used for **memoizing** the password generation function.
- Helps prevent unnecessary re-renders.

###  `useEffect` Hook  
- Managed the triggering of password regeneration when settings (length, options) change.
- Demonstrated how **side effects** and reactivity work in React.

###  `useRef` Hook  
- Used to **reference the password input field** for easy copy-to-clipboard functionality.

---

##  Tech Stack

- React (Functional Components)
- HTML + TailwindCss
- Hooks: `useState`, `useEffect`, `useCallback`, `useRef`

---

##  Preview

![Password Generator Screenshot](./public/Screenshot%20.png)

---



