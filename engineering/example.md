---
layout: default
title: "This will show at the title bar of browser"
description: "A minimal, fast GitHub Pages starter."
hero_title: "Welcome to My GitHub Page 🚀"
hero_subtitle: "This is a minimal example using Jekyll + CSS hosted on GitHub Pages."
---

# Example H1

## Completed Tasks
- [x] Implement **authentication system**
- [x] Setup *CI/CD* pipeline
- [ ] Write unit tests for backend
- [ ] Create API documentation

## Numbered Listing (with links)
1. Closely monitor quarterly performance. [Sprint 01](sprint-01.md)
2. Adjust budgets dynamically based on real-time financial data.
3. Invest in risk mitigation strategies for supply chain. [Sprint 02](sprint-02.md)

## Others (relative links)
[Finance Reports](../finance/)

## Using Emojis
Budget reviewed by Finance Dept. ✅

### Using Tables (H3)
| Feature | Status |
|---------|--------|
| Content | Placeholder |

## Using Quoted Blocks
> “Budgeting is about predicting the future with the best information available today.”  
> – Finance Team Lead

## Visuals
![Campaign Banner](https://via.placeholder.com/400x150.png?text=Q1+Campaign+Banner)
![Campaign Logo]({{ site.baseurl }}/images/logo.png){: .small-logo }

## Video
<video controls width="600">
  <source src="../media/promo.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

## Audio
<audio controls>
  <source src="../media/meow.mp3" type="audio/mpeg">
  Your browser does not support the audio element.
</audio>

## Code Snippet Example
```javascript
// Authentication check
function isLoggedIn(user) {
  return user && user.token && user.token.length > 0;
}
```

### JS Test
<p>Click the button below to test JavaScript:</p>
<button id="helloBtn">Click Me</button>
<button id="resetBtn">Reset Count</button>
<p id="output"></p>

<hr>

### HTTP Fetch
<button id="fetchBtn">Fetch Data</button>
<pre id="fetchOutput"></pre>

<hr>

<p>Take a short personality quiz:</p>
<div id="quiz">
  <p>Q1: Which best describes you?</p>
  <button data-question="q1" data-answer="gadget">🔧 I like tinkering with gadgets</button>
  <button data-question="q1" data-answer="idea">💡 I like coming up with ideas</button>
</div>

<p id="quiz-output"></p>

<!-- Hidden field to hold JSON answers -->
<input type="hidden" id="quizData" value="{}">