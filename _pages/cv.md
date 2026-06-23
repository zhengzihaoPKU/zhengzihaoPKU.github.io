---
layout: archive
title: "Personal CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

<style>
  .cv-section { margin-bottom: 2em; }
  .cv-section h2 { 
    border-bottom: 2px solid #52adc8; 
    padding-bottom: 0.3em; 
    margin-bottom: 1em;
    display: flex;
    align-items: center;
    gap: 0.5em;
  }
  .cv-section h2 i { color: #52adc8; }
  .cv-item { 
    margin-bottom: 1.2em; 
    padding-left: 1.2em;
    border-left: 3px solid #e8e8e8;
  }
  .cv-item-title { 
    font-weight: 600; 
    font-size: 1.05em;
    color: #333;
  }
  .cv-item-sub { 
    color: #666; 
    font-size: 0.92em; 
    margin-top: 0.2em;
  }
  .cv-item-desc {
    font-size: 0.88em;
    color: #777;
    margin-top: 0.15em;
    padding-left: 0.5em;
  }
  .cv-tag {
    display: inline-block;
    background: #52adc8;
    color: #fff;
    font-size: 0.75em;
    padding: 0.15em 0.6em;
    border-radius: 3px;
    margin-right: 0.5em;
  }
  .cv-badge {
    display: inline-block;
    background: #f0f0f0;
    color: #555;
    font-size: 0.78em;
    padding: 0.1em 0.5em;
    border-radius: 3px;
    margin-left: 0.5em;
  }
  .cv-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 0.5em;
    padding-left: 0;
  }
  .cv-grid li {
    list-style: none;
    background: #f9f9f9;
    padding: 0.4em 0.8em;
    border-radius: 4px;
    font-size: 0.9em;
  }
  .cv-honor {
    padding: 0.6em 1em;
    margin-bottom: 0.5em;
    background: #fafafa;
    border-radius: 4px;
    border-left: 3px solid #f0ad4e;
    font-size: 0.92em;
  }

</style>

<div class="cv-section">
  <h2><i class="fa-solid fa-graduation-cap"></i> Education</h2>

  <div class="cv-item">
    <div class="cv-item-title">Ph.D in Computer Science <span class="cv-badge">2025 – 2029 (expected)</span></div>
    <div class="cv-item-sub">School of Computer Science, Peking University</div>
    <div class="cv-item-desc">Major: Computer Architecture &nbsp;|&nbsp; Advisor: Prof. Xiang Chen, Prof. Hong Mei</div>
  </div>

  <div class="cv-item">
    <div class="cv-item-title">M.S. in Electronic Information <span class="cv-badge">2022 – 2025</span></div>
    <div class="cv-item-sub">School of Software and Microelectronics, Peking University</div>
    <div class="cv-item-desc">Advisor: Prof. Ling Liang, Prof. Yimao Cai</div>
  </div>

  <div class="cv-item">
    <div class="cv-item-title">B.S. in Electrical Engineering and Automation <span class="cv-badge">2018 – 2022</span></div>
    <div class="cv-item-sub">School of Electrical Engineering, Beijing Jiaotong University</div>
  </div>
</div>

<div class="cv-section">
  <h2><i class="fa-solid fa-flask"></i> Research Projects</h2>

  <div class="cv-item">
    <div class="cv-item-title">Post-training Strategy and Cluster Service Architecture of Composable Generalizable Embodied AI Models</div>
    <div class="cv-item-sub"><span class="cv-tag">Partner</span> Beijing Municipal Science and Technology Commission</div>
  </div>

  <div class="cv-item">
    <div class="cv-item-title">High-Performance Collaborative Optimization of Edge Heterogeneous Computing Systems for Multimodal Intelligence</div>
    <div class="cv-item-sub"><span class="cv-tag">Partner</span> Beijing Municipal Science and Technology Commission, BAAI</div>
  </div>

  <div class="cv-item">
    <div class="cv-item-title">Major Project of Beijing High-end and Cutting-edge Industry Development Fund — Intelligent Ubiquitous Operating System</div>
    <div class="cv-item-sub"><span class="cv-tag">Partner</span> Beijing Municipal Science and Technology Commission, Beijing Tongminghu Research Institute</div>
  </div>

  <div class="cv-item">
    <div class="cv-item-title">Research on Embodied Intelligence Inference Acceleration Technology Based on Feature Cache</div>
    <div class="cv-item-sub"><span class="cv-tag">Partner</span> ZTE Corporation</div>
  </div>

  <div class="cv-item">
    <div class="cv-item-title">Innovations in Computing Systems for Quantized Deployment of MoE Mixture-of-Experts Architectures</div>
    <div class="cv-item-sub"><span class="cv-tag">Partner</span> Huawei Computing Center</div>
  </div>

  <div class="cv-item">
    <div class="cv-item-title">Research on Acceleration Methods and Systems for Multimodal Reasoning</div>
    <div class="cv-item-sub"><span class="cv-tag">Partner</span> Huawei Nova Labs</div>
  </div>
</div>

<div class="cv-section">
  <h2><i class="fa-solid fa-briefcase"></i> Work Experience</h2>

  <div class="cv-item">
    <div class="cv-item-title">Research Intern — AIoT <span class="cv-badge">2024.01 – 2024.07</span></div>
    <div class="cv-item-sub">Institute for AI Industry Research (AIR), Tsinghua University</div>
    <div class="cv-item-desc">Advisor: Prof. Yuanchun Li, Prof. Yunxin Liu</div>
    <div class="cv-item-desc">Topics: Hardware-Friendly Neural Networks, LLM Inference Optimization on Device</div>
  </div>
</div>

<div class="cv-section">
  <h2><i class="fa-solid fa-trophy"></i> Honors & Awards</h2>

  <div class="cv-honor">🏆 President's Scholarship of Peking University <span style="color:#999;font-size:0.85em;">(Top university scholarship, only 2 recipients in the grade)</span></div>
  <div class="cv-honor">🏆 Hongcai Scholarship of Peking University</div>
  <div class="cv-honor">🏆 Excellent Graduate of Beijing Municipality <span style="color:#999;font-size:0.85em;">(Top 2%)</span></div>
  <div class="cv-honor">🏆 Peking University Outstanding Graduate <span style="color:#999;font-size:0.85em;">(Top 3%)</span></div>
  <div class="cv-honor">🏆 Peking University May Fourth Scholarship <span style="color:#999;font-size:0.85em;">(Only 2 students in the entire school)</span></div>
  <div class="cv-honor">🏆 Model Student of Peking University <span style="color:#999;font-size:0.85em;">(Top 5%)</span></div>
</div>

<div class="cv-section">
  <h2><i class="fa-solid fa-file-alt"></i> Publications</h2>

  <ul>{% assign sorted_publications = site.publications | sort: 'title' | reverse %}{% for post in sorted_publications %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>
</div>

<div class="cv-section">
  <h2><i class="fa-solid fa-handshake"></i> Academic Service</h2>

  <div class="cv-item">
    <div class="cv-item-sub">Reviewer of IROS 2026</div>
  </div>
  <div class="cv-item">
    <div class="cv-item-sub">Reviewer of IJCNN 2026</div>
  </div>
</div>

<div class="cv-section">
  <h2><i class="fa-solid fa-cogs"></i> Skills</h2>

  <ul class="cv-grid">
    <li><strong>Languages:</strong> Python, C/C++, CUDA, Triton, Shell, HTML, Matlab, Verilog, Assembly </li>
    <li><strong>Tools:</strong> Latex, Overleaf, Markdown, SPSS, VCS, Verdi, Virtuoso, DC </li>
    <li><strong>Spoken:</strong> English (Fluent) </li>
  </ul>
</div>
