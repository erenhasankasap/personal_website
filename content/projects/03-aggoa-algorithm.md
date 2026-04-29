---
id: 3
title: "TÜBİTAK 2209-A: AGGOA Algorithm"
description: "A government-funded research project engineering a hybrid optimization algorithm that dynamically bridges NAG's speed with SGD's stability. Tested on CIFAR-10 with 1,000,000+ parameters, targeting measurable improvements in convergence rate and divergence mitigation."
techStack:
  - "Python"
  - "PyTorch"
  - "Mathematical Modeling"
  - "Data Analysis"
status: "Processing"
link: "#"
generalPurpose: >
  To solve the speed-vs-stability trade-off in deep learning optimization. NAG converges fast but oscillates violently in noisy mini-batch environments. SGD is stable but painfully slow. AGGOA introduces a dynamic transition coefficient that monitors cost oscillation in real-time — using NAG's momentum when training is smooth, switching to SGD's stability when noise spikes. The algorithm is tested on CNNs with 1,000,000+ trainable parameters using the CIFAR-10 dataset (60,000 images, 10 classes).
myRole: >
  Project lead and core researcher. Formulated the mathematical foundation of AGGOA — defining the dynamic transition coefficient based on gradient magnitude and cost oscillation. Prototyped the algorithm in Python with PyTorch and ran comparative experiments (AGGOA vs. Adam vs. NAG) on Convolutional Neural Networks. Currently analyzing convergence curves across 3 optimizer configurations to quantify improvements in training stability and speed.
---
