---
title: "Gradient Inversion Attack in Federated Learning: Exposing Text Data through Discrete Optimization"
authors: "Ying Gao, Yuxin Xie, Huanghao Deng, **Zukun Zhu**"
venue: "Proceedings of the 31st International Conference on Computational Linguistics (COLING), 2025: 2582–2591. (CCF B)"
weight: 2
pdf: "https://aclanthology.org/2025.coling-main.176/"
code: ""
image: "/assets/pubs/gia-fl.png"
---

Federated learning has emerged as a potential solution to overcome the bottleneck posed by the near exhaustion of public text data in training large language models. There are claims that the strategy of exchanging gradients allows using text data including private information. Although recent studies demonstrate that data can be reconstructed from gradients, the threat for text data seems relatively small due to its sensitivity to even a few token errors. However, we propose a novel attack method FET, indicating that it is possible to Fully Expose Text data from gradients. Unlike previous methods that optimize continuous embedding vectors, we directly search for a text sequence with gradients that match the known gradients. First, we infer the total number of tokens and the unique tokens in the target text data from the gradients of the embedding layer. Then we develop a discrete optimization algorithm, which globally explores the solution space and precisely refines the obtained solution, incorporating both global and local search strategies. We also find that gradients of the fully connected layer are dominant, providing sufficient guidance for the optimization process. Our experiments show a significant improvement in attack performance, with an average increase of 39% for TinyBERT-6, 20% for BERT-base and 15% for BERT-large in exact match rates across three datasets. These findings highlight serious privacy risks in text data, suggesting that using smaller models is not an effective privacy-preserving strategy.
