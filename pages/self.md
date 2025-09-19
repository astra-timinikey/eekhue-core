---
layout: self
title: "Self Analysis"
permalink: /self/
description: "A space to explore your own personality."
hero_title: "Self Analysis 🪞"
hero_subtitle: "Reflect on your personality, strengths, and fit for career path."
hero_style: "text-heavy" 
hero_image: "self-hero-tree.jpg"
# pill: ""
closing_note: ""
css:
  - "self-cards.css"
  - "self.css"
js:
  - ""
---
## 🪞 The Self Layer – *Roots Beneath the Armor*

<br><br>
## Why the Self?
If Persona is armor, then the Self is the **root system** beneath it all.  
It’s not performance or protection, but the **living structure** of how we think, process, and grow.  

The Self is what remains when the mask drops and the armor is set aside.  
It’s the compass that guides Shadow work and the foundation that allows Personas to shift without losing center.  

Understanding the Self is the starting point for maturity. Without strong roots, any armor feels unstable.

<!-- --- -->

<br><br>
## The Backbone of the Model
This framework emphasizes three primary voices in the study of Self:

- **Carl Jung** → Originator of cognitive function theory (introversion, extraversion, thinking, feeling, sensing, intuition). His work remains the philosophical and psychological root.  
- **John Beebe** → Expanded Jung’s work into the *8-function archetype model*, mapping both conscious and shadow functions.  
- **Dario Nardi** → Neuroscientist whose EEG research provides biological evidence of cognitive functions in real-time brain activity.  

Together, they form a **tested, flexible backbone** for Self analysis — psychological depth, archetypal framing, and neuroscientific support.

<!-- --- -->



---

## 🌐 The Grid of Selves
Below is the **MBTI Personality Grid** — 16 entry points into the Self.  
Each card links to deeper analysis of functions, shadow expressions, and growth paths.

<div class="grid">
  {% assign mbti_types = "INTJ,INTP,ENTJ,ENTP,INFJ,INFP,ENFJ,ENFP,ISTJ,ISFJ,ESTJ,ESFJ,ISTP,ISFP,ESTP,ESFP" | split: "," %}

  {% for type in mbti_types %}
    {% assign info = site.data.mbti[type] %}
    {% assign desc = site.data.self[type] %}
    <a href="{{ site.baseurl }}/self/{{ type | downcase }}.html" class="card-link">
    {% include card-self.html %}
    </a>
  {% endfor %}
</div>

---

## What About Other Models?
Personality theory has spawned countless systems. While valuable, many:  
- **Oversimplify** Jung’s insights into static stereotypes.  
- **Overcomplicate** without clarity, creating endless labels.  
- **Stay surface-level**, focusing on traits rather than *processes*.  

This space doesn’t reject those models — but it anchors in Jung, Beebe, and Nardi as the most fertile ground for Self exploration.  
Other systems are like side-paths: interesting to visit, but not the core map.

<br><br>
## Citations
- Jung, C. G. (1968). *The Archetypes and the Collective Unconscious* (Collected Works, Vol. 9, Part 1). Princeton University Press.  
- Jung, C. G. (1963). *Memories, Dreams, Reflections*. Vintage Books.  
- Beebe, J. (1994). *Integrity in Depth: Archetypal Explorations of the Persona, Shadow, and Complexes*. Routledge.  
- Nardi, D. (2011). *Neuroscience of Personality: Brain-Savvy Insights for All Types of People*. Radiance House.  
