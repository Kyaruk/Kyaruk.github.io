---
title: "PEAFOWL: Private Entity Alignment in Multi-Party Privacy-Preserving Machine Learning"
authors: "Ying Gao, Huanghao Deng, **Zukun Zhu**, Xiaofeng Chen, Yuxin Xie, Pei Duan, Peixuan Chen"
venue: "IEEE Transactions on Information Forensics and Security (TIFS), 2025, 20: 2706–2720. (CCF A)"
weight: 1
pdf: "https://ieeexplore.ieee.org/abstract/document/10887259"
code: "https://github.com/HangeTeng/Peafowl"
image: "/assets/pubs/peafowl.png"
keywordList: "Secure multi-party computation, entity alignment, machine learning"
---

In privacy-preserving machine learning with vertically distributed data, private entity alignment methods are used to securely match and utilize features of the same samples. However, existing methods not only risk exposing sample intersections and introducing unnecessary samples but also face a gap in adapting to multi-party scenarios. To address these limitations, we propose PEAFOWL, a novel multi-party private entity alignment protocol. PEAFOWL achieves entity alignment among multiple parties through a mapping from original datasets to intersections, termed permutation. This method mitigates intersection disclosure and sample redundancy concerns by avoiding direct use of the intersection. The proposed protocol leverages a cloud server that utilizes secret-shared shuﬄe to protect the privacy of the permutation, in case of colluding data providers reconstructing intersections. Further, by integrating a seed homomorphic pseudorandom generator, PEAFOWL avoids the intensive communication of secret sharing and achieves superior runtime performance. Additionally, an oﬄine/online variant is introduced to ensure a linear growth in communication and computation complexity relative to the dataset size by precomputing permutation calculations. Implemented on a real PPML framework, the protocol demonstrates practical eﬃciency in various multi-party settings. Experimental results indicate that Peafowl’s overhead is less than 1% of the total training cost, while the oﬄine/online variant achieves approximately a 50% reduction in online runtime. Overall, PEAFOWL oﬀers an eﬃcient and straightforward solution for multi-party PPML, making it an attractive option for implementation and future improvements.
