---
layout: default
title: "Self Analysis"
description: "A space to explore your own personality, growth, and maturity."
hero_title: "Self Analysis 🪞"
hero_subtitle: "Reflect on your personality, strengths, and areas for growth."
page_class: "self-page"
---

# Self Analysis

This section is dedicated to your personality insights, growth potential, and reflections.

## MBTI Personality Grid (16 Types)

<div class="grid">

  {% assign mbti_types = "ISTJ,ISFJ,INFJ,INTJ,ISTP,ISFP,INFP,INTP,ESTP,ESFP,ENFP,ENTP,ESTJ,ESFJ,ENFJ,ENTJ" | split: "," %}

  {% for type in mbti_types %}
  <div class="card">
    <h3>{{ type }}</h3>
    <p><strong>Primary Function:</strong> Placeholder</p>
    <p><strong>Auxiliary Function:</strong> Placeholder</p>
    <p><strong>Shadow Notes:</strong> Placeholder</p>
    <p><em>Cognitive functions confirmed by Dario EEG results</em></p>
    <a href="{{ site.baseurl }}/self/{{ type | downcase }}.html" class="cta">View Details</a>
  </div>
  {% endfor %}

</div>

---

> Each card represents a Jungian MBTI type with placeholders for cognitive functions, shadow states, and growth/maturity notes. Clicking a card can take the user to the detailed page for that type.
