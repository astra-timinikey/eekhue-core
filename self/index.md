---
layout: default
title: "Self Analysis"
description: "A space to explore your own personality."
hero_title: "Self Analysis 🪞"
hero_subtitle: "Reflect on your personality, strengths, and fit for career path."
page_class: "self-page"
---

# 🪞 The Self Layer – *Roots Beneath the Armor*

## Why the Self?
If Persona is armor, then the Self is the **root system** beneath it all.  
It’s not a performance, not a shield — but the underlying structure of how we think, process, and grow.  

The Self is what remains when the armor comes off. It’s the foundation for personality maturity, and the compass for Shadow work.  
Understanding the Self gives you the stability to adapt your Persona without losing your center.

---

## Why Jung, Beebe, and Dario?
This section references many models, but I place emphasis on three primary sources:  

- **Carl Jung** → Origin of the cognitive function theory (introversion, extraversion, thinking, feeling, sensing, intuition). His work is the philosophical and psychological root.  
- **John Beebe** → Expanded Jung’s framework into the *8-function archetype model*, introducing shadow functions in a coherent way.  
- **Dario Nardi** → Neuroscientist whose EEG research provides biological evidence of Jungian cognitive functions in real-time brain activity.  

Together, they form a **practical + tested + flexible** backbone for Self analysis.

---

## Why not the others?
There are many other models and systems that explore personality. While valuable, I don’t directly integrate them here because they either:  
- Over-simplify Jung’s original insights (e.g. popular MBTI content that treats “type” as static stereotypes).  
- Complicate the model without adding clarity (e.g. overly rigid or commercialized systems).  
- Focus on behavior and surface traits, rather than cognitive *processes*.  

That said, you’ll still find **links to explore** these systems if you’re curious. My stance is simple: *study widely, but anchor in Jung, Beebe, and Dario for depth*.  

---

## The Grid of Selves
Below is the **MBTI Personality Grid** — 16 starting points for exploring Self.  
Each card links to a deeper dive into the functions, shadow expressions, and growth path for that type.  

<div class="grid">
  {% assign mbti_types = "INTJ,INTP,ENTJ,ENTP,INFJ,INFP,ENFJ,ENFP,ISTJ,ISFJ,ESTJ,ESFJ,ISTP,ISFP,ESTP,ESFP" | split: "," %}

  {% for type in mbti_types %}
    {% assign info = site.data.mbti[type] %}
    {% assign desc = site.data.self[type] %}
    <a href="{{ site.baseurl }}/self/{{ type | downcase }}.html" class="card-link">
    <div class="card" style="--header-color: {{ desc.header_color }}; --body-color: {{ desc.body_color }}">
  
      
      <!-- Header (like TCG) -->
      <div class="card-header" style="background: var(--header-color)">
        <h3>{{ info.archetype }} ({{ type }}) ⚡{{ info.energy }}</h3>
      </div>
      
      <!-- Artwork zone -->
      <img src="{{ site.baseurl }}/images/{{ info.image }}" alt="{{ type }} image" />
      
      <div class="card-stats">
        <p> 🔮 {{ info.intuition }} 👣 {{ info.sensing }} 🧠 {{ info.thinking }} 💖 {{ info.feeling }} </p>
      </div>

      <!-- Text zone -->
      <div class="card-body" style="background: var(--body-color)">

        <ul class="card-hooks">
          <li><strong>Battle Gift:</strong> {{ info.battle_gift }}</li>
          <li><strong>Armor Reflex:</strong> {{ info.armor_reflex }}</li>
        </ul>

        <div class="card-flavor">
          <p>“{{ info.tagline }}”</p>
        </div>
      </div>
    </div>
    </a>
  {% endfor %}
</div>


---

## Disclaimer
This Self Analysis is a **personal synthesis** that prioritizes Jungian cognitive functions, Beebe’s archetypal framing, and Dario’s neuroscience validation.  
It is not an official or peer-reviewed system, but a structured lens for reflection, growth, and Shadow work.
