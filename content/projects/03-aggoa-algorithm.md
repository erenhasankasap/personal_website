---
id: 3
title: "TÜBİTAK 2209-A: AGGOA Algorithm"
description: "An academic research and application project funded by the TÜBİTAK 2209-A program. It focuses on developing a novel, hybrid mathematical optimization algorithm (AGGOA) designed to dynamically balance speed and stability when training Deep Learning models."
techStack:
  - "Python"
  - "PyTorch"
  - "Mathematical Modeling"
  - "Data Analysis"
status: "Processing"
link: "#"
generalPurpose: "The primary objective is to solve the critical trade-off between speed and stability in machine learning optimization. While Nesterov Accelerated Gradient (NAG) provides rapid convergence, its momentum mechanism causes severe instability and overshooting in high-noise mini-batch environments. Conversely, Stochastic Gradient Descent (SGD) is highly stable but notoriously slow. This project aims to mathematically formulate a dynamic transition rule that bridges these two methods, monitoring cost oscillation to optimize neural network training."
myRole: "Project Lead and Core Researcher. I formulated the theoretical mathematical foundation of the AGGOA algorithm, defining the dynamic transition coefficient based on gradient magnitude and cost oscillation. I then transitioned this theory into practice by prototyping the algorithm in Python using PyTorch, and conducting rigorous comparative experiments (AGGOA vs. Adam vs. NAG) on Convolutional Neural Networks (CNNs) using the CIFAR-10 dataset to quantitatively prove improvements in convergence speed and divergence mitigation."
---
