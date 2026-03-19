# DOM Projects

This repository is a collection of projects built to practice DOM (Document Object Model) manipulation using JavaScript.

## What is DOM?

DOM stands for Document Object Model.

When a browser loads an HTML page, it creates a tree-like structure of all elements (input, button, div, ul, li, etc.). JavaScript can access and change this structure.

Using DOM methods, we can:
- Read values from inputs
- Listen for user actions (click, typing)
- Create or remove elements
- Update what appears on the page without reloading

## Project 01 - Todo App (01-todo)

Files:
- 01-todo/todo.html
- 01-todo/style.css

### Goal

Create a simple todo app where:
- User types a task
- Clicks Create
- Task appears in a list
- Clicking a task removes it
- Input box is cleared after adding

## DOM Methods and Why They Are Used

### 1) document.getElementById(...)

Used to take references of important elements:
- createButtonRef
- todoInputRef
- todoContainerRef

Why used:
- We need direct access to these HTML elements in JavaScript.
- Without references, we cannot read input value, detect button click, or append list items.

### 2) addEventListener('click', ...)

Used in two places:
- On Create button: to run logic when user clicks Create.
- On each created li item: to remove that specific task when clicked.

Why used:
- DOM apps are event-driven.
- We want actions to happen only when user clicks.

### 3) Reading input value (todoInputRef.value)

Code behavior:
- Reads what user typed and stores it in value.

Why used:
- The app needs user text before creating a task item.

### 4) document.createElement('li')

Creates a new list item each time Create is clicked.

Why used:
- We need multiple tasks, so a new li must be generated for every new input.

### 5) li.innerText = value

Puts the input text inside the newly created li.

Why used:
- This displays the user's task in the list.

### 6) todoContainerRef.appendChild(li)

Appends the new li to the ul container.

Why used:
- This adds each new task visually to the todo list.

### 7) li.remove() inside li click listener

Removes the clicked list item.

Why used:
- Provides simple delete functionality.
- User can remove completed or unwanted tasks by clicking them.

### 8) todoInputRef.value = ''

Clears the input after task creation.

Why this is important:
- Better user experience: user can immediately type next task.
- Prevents confusion from old text staying in the input box.

Note:
- In your current code, input is cleared with an empty string ('').
- This is the correct and common approach for text inputs.
- Many people say "set to null," but for input fields, setting to '' is preferred.

## Current Flow Summary

1. User types a task in input.
2. User clicks Create.
3. JavaScript reads input value.
4. JavaScript creates li and sets its text.
5. JavaScript appends li to ul.
6. JavaScript clears input.
7. Clicking any li removes that task.

## Project 02 - Quote Fetch App (02-quote-fetch)

Files:
- 02-quote-fetch/quote.html
- 02-quote-fetch/style.css
- 02-quote-fetch/app.js

### Goal

Create a DOM project focused on API integration using Fetch GET request.

### Core Concepts Used

1. getElementById references:
- loadQuotesBtnRef
- quoteListRef
- statusTextRef

2. addEventListener('click', ...):
- Starts the quote loading flow only when user clicks the button.

3. fetch(..., { method: 'GET' }):
- Calls the public quotes API.

4. response.json():
- Converts JSON response to JavaScript object.

5. createElement('li') and appendChild(li):
- Creates quote items and appends them to the list.

6. Basic loading and error status:
- Shows loading text while fetching and an error message if request fails.

## Project 03 - Dark Mode Toggle (03-dark-mode-toggle)

Files:
- 03-dark-mode-toggle/index.html
- 03-dark-mode-toggle/style.css
- 03-dark-mode-toggle/main.js

### Goal

Create a simple dark/light theme toggle using DOM class manipulation.

### Core Concepts Used

1. getElementById reference:
- toggle button is selected using `document.getElementById("toggle")`.

2. addEventListener('click', ...):
- Runs toggle logic when user clicks the button.

3. classList.toggle('dark'):
- Adds/removes the `dark` class on `body` to switch theme styles.

4. classList.contains('dark'):
- Checks the current mode to update button text dynamically.

5. textContent update:
- Shows `Toggle to Dark Mode` in light mode.
- Shows `Toggle to Light Mode` in dark mode.

### Current Flow Summary

1. Page loads and button is selected.
2. Label is set based on current body class.
3. User clicks toggle button.
4. JavaScript toggles `dark` class on body.
5. Button text updates to the opposite mode label.
