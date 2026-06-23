---
layout: archive
title: "Research"
permalink: /research/
author_profile: true
---

<style>
  .research-intro {
    font-size: 1.05em;
    line-height: 1.7;
    margin-bottom: 2em;
    padding: 1.2em 1.5em;
    background: #f8fafc;
    border-radius: 8px;
    border-left: 4px solid #52adc8;
  }
  .research-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
    gap: 1.2em;
    margin-top: 0.5em;
  }
  .research-card {
    padding: 1.5em;
    border-radius: 8px;
    background: #fafafa;
    border: 1px solid #eee;
    transition: box-shadow 0.2s, transform 0.15s;
  }
  .research-card:hover {
    box-shadow: 0 4px 16px rgba(0,0,0,0.06);
    transform: translateY(-2px);
  }
  .research-card h3 {
    font-size: 1.1em;
    margin: 0 0 0.8em;
    display: flex;
    align-items: center;
    gap: 0.5em;
  }
  .research-card h3 i {
    color: #52adc8;
    font-size: 1.1em;
    width: 1.4em;
    text-align: center;
  }
  .research-card p {
    font-size: 0.92em;
    line-height: 1.65;
    color: #555;
    margin: 0;
  }
  .research-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.4em;
    margin-top: 1em;
  }
  .research-tags span {
    font-size: 0.75em;
    padding: 0.2em 0.6em;
    border-radius: 3px;
    background: #e8f4fd;
    color: #2b7ec1;
  }

  @media (prefers-color-scheme: dark) {
    .research-intro {
      background: #1a1a1a;
      border-left-color: #52adc8;
    }
    .research-card { background: #1e1e1e; border-color: #333; }
    .research-card:hover { box-shadow: 0 4px 16px rgba(0,0,0,0.3); }
    .research-card p { color: #aaa; }
    .research-tags span { background: #1a2a3a; color: #70b0e0; }
  }
</style>

<div class="research-intro">
  My research interests lie at the intersection of <strong>Physical Intelligence</strong>, <strong>AI Systems</strong>, and <strong>System Design Automation</strong> — spanning from fundamental model architectures to large-scale deployment and automated optimization.
</div>

<div class="research-grid">

  <div class="research-card">
    <h3><i class="fa-solid fa-robot"></i> Physical Intelligence</h3>
    <p>Physical intelligence represents a future research trend. This work focuses on its latest advances from three perspectives: (1) more powerful and intelligent foundational models integrated with real physical information; (2) training and inference systems tailored for physical intelligence; (3) dedicated operating systems and functional modules for physical intelligence.</p>
    <div class="research-tags">
      <span>VLA Models</span>
      <span>Embodied AI</span>
      <span>Edge-Cloud Deployment</span>
    </div>
  </div>

  <div class="research-card">
    <h3><i class="fa-solid fa-microchip"></i> AI System</h3>
    <p>Enhancing AI operational efficiency remains my primary research focus. I concentrate on computations of AI systems, covering cloud training infrastructure optimization and large-cluster inference acceleration. Meanwhile, I investigate on-device inference paradigms to develop efficient edge-side inference frameworks.</p>
    <div class="research-tags">
      <span>LLM Inference</span>
      <span>Quantization</span>
      <span>Speculative Decoding</span>
      <span>On-Device AI</span>
    </div>
  </div>

  <div class="research-card">
    <h3><i class="fa-solid fa-cogs"></i> System Design Automation</h3>
    <p>The design of AI systems is generally highly complex, involving extensive parameter tuning, engineering experience and practical costs that constitute a vast design space and rely heavily on engineers' expertise. A core research problem lies in developing automated optimization approaches within such enormous design spaces. This work explores the automated design of energy-efficient computing systems.</p>
    <div class="research-tags">
      <span>AutoML</span>
      <span>Design Space Exploration</span>
      <span>Energy-Efficient Computing</span>
    </div>
  </div>

</div>
