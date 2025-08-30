---
layout: default
title: "Test Page"
description: "A page to experiment with JavaScript interactions."
hero_title: "JavaScript Test Playground ⚡"
hero_subtitle: "Try out the click counters, HTTP fetch, and personality quiz below."
page_class: "self-page"
---

# JavaScript Test Page

This page is designed to test interactive JavaScript features.

## Click Counter

<p>Click the buttons below:</p>
<button id="helloBtn">Click Me</button>
<button id="resetBtn">Reset Count</button>
<p id="output"></p>

## Test HTTP Request

<p>Click to fetch data from a placeholder API:</p>
<button id="fetchBtn">Fetch Data</button>
<pre id="fetchOutput"></pre>

## Personality Quiz

<p>Take a short personality quiz:</p>
<div id="quiz">
  <p>Q1: Which best describes you?</p>
  <button data-question="q1" data-answer="gadget">🔧 I like tinkering with gadgets</button>
  <button data-question="q1" data-answer="idea">💡 I like coming up with ideas</button>
</div>

<p id="quiz-output"></p>

<!-- Hidden field to hold JSON answers -->
<input type="hidden" id="quizData" value="{}">

---

> This page is purely for testing JavaScript interactions. The quiz will redirect you according to your selections once completed.

