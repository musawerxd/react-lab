## Virtual DOM & Fiber in React

### Virtual DOM
- React keeps a **copy of the real DOM** in memory.
- When something changes (state or props), React **creates a new virtual DOM**.
- It **diffs the new virtual DOM with the old one** to figure out what actually changed.
- Only the changed parts are updated in the real DOM.

### Fiber
- Fiber is React’s **new engine** that makes reconciliation smarter.
- Each **Fiber represents a unit of work**.
- React can **pause, resume, abort, or prioritize fibers** based on importance.
- This allows **smoother updates and animations** without blocking the browser.

### Reconciliation
- Reconciliation = React’s **diffing algorithm**.
- Compares the **old virtual DOM vs new virtual DOM** to see what changed.
- Rules:
  - If the component type changed → replace the whole tree.
  - Lists use **keys** to track items.
  - Props that didn’t change → skip updates.
- Ensures **minimal DOM updates** for better performance.