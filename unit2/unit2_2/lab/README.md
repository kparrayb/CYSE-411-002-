# CYSE 411 – Unit 2.2 Injection Attacks Lab

## Overview
This lab explores **injection vulnerabilities as a class of design failures**, where
untrusted input is interpreted as executable logic across different system layers.

You will analyze and exploit three vulnerabilities:
- SQL Injection
- Path Traversal
- JavaScript injection using `innerHTML`

Then, you will refactor the code to apply **defensive design principles**.

---

## Learning Objectives
By completing this lab, you will be able to:
- Identify injection vulnerabilities caused by improper input handling
- Understand how parsing context changes the meaning of user input
- Apply canonicalization, parameterization, and safe APIs
- Distinguish data from instructions in secure design

---

## Setup Instructions

### 1. Install dependencies
```bash
npm install

```

### 2. Run the vulnerable application
```bash
npm start
```

The app will start at:

    http://localhost:3000

### 3. After fixing the code
```bash
npm test
```

---


## Challenges

🔴 Challenge 1 – SQL Injection

- Bypass authentication using SQL injection.

🔴 Challenge 2 – Path Traversal

- Access a file outside the intended directory.

🔴 Challenge 3 – DOM Injection

- Inject executable content using innerHTML.

---

## Rules

- Do NOT modify files in the tests/ directory

- Your fixes must preserve application functionality

- All tests must pass


---

## Submission

There is no submission. It is not a graded activity!

---

## Hint

Injection is not about special characters — it is about who controls the interpreter.