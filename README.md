# LightPeptide-Gen: A Lightweight Graph-based Framework for De Novo Peptide Design

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Python Version](https://img.shields.io/badge/python-3.8+-blue.svg)](https://www.python.org/downloads/)
[![PyTorch](https://img.shields.io/badge/PyTorch-1.10+-red.svg)](https://pytorch.org/)
[![PyG](https://img.shields.io/badge/PyTorch%20Geometric-2.0+-orange.svg)](https://pytorch-geometric.readthedocs.io/en/latest/)

A lightweight, efficient framework using Graph Neural Networks (GNNs) and Graph Transformers for the *de novo* generation of novel peptide structures.

## 📖 Table of Contents

* [About The Project](#about-the-project)
* [Architecture](#architecture)
* [Key Features](#key-features)
* [Getting Started](#getting-started)
    * [Prerequisites](#prerequisites)
    * [Installation](#installation)
* [Usage](#usage)
    * [Training](#training)
    * [Inference (Generating Peptides)](#inference-generating-peptides)
* [Roadmap](#roadmap)
* [License](#license)
* [Contact](#contact)
* [Citation](#citation)

## 🌟 About The Project

Traditional peptide discovery is a costly and time-consuming process. While deep learning has shown promise in accelerating this, many generative models are computationally heavy, making them difficult to train and deploy.

**LightPeptide-Gen** addresses this challenge by providing a framework built on lightweight Graph Neural Networks (GNNs) and optimized Graph Transformers. By representing peptides as molecular graphs, our model learns the underlying chemical and structural rules to generate novel, valid, and diverse peptide candidates efficiently.

This project focuses on optimizing the trade-off between **model size**, **inference speed**, and **generation quality**.

## 🏗️ Architecture

The core of our framework is a generative model (e.g., VAE, Autoregressive Model) that operates directly on graph-structured data.

1.  **Input Representation:** Peptides are converted from SMILES or FASTA strings into molecular graphs using `RDKit`. Each atom becomes a node (with features like atom type, charge) and each bond becomes an edge (with features like bond type).
2.  **Graph Encoder:** A stack of lightweight GNN layers (e.g., GCN, GAT) or an optimized Graph Transformer (e.g., a variant with linear attention) learns a compressed latent representation (embedding) of the molecular graph.
3.  **Generative Decoder:** A decoder (e.g., Autoregressive or VAE-based) reconstructs or "grows" a new molecular graph from a point sampled in the latent space.
4.  **Optimization Techniques:** The "lightweight" nature is achieved through:
    * **Architectural Slimming:** Using fewer layers/hidden dimensions.
    * **Optimized Blocks:** Replacing standard attention with more efficient variants.
    * **Knowledge Distillation:** (Optional) Training the small "student" model to mimic a larger "teacher" model.
    * **Quantization & Pruning:** Applying post-training optimization.

## ✨ Key Features

* **Graph-based Generation:** Natively understands molecular structure, leading to higher chemical validity.
* **Lightweight & Fast:** Designed for low-latency inference and reduced training costs.
* **Modular:** Easily swap different GNN encoders or generative decoders.
* **Extensible:** Can be adapted for conditional generation (e.g., "generate peptides with high antibacterial activity").

## 🚀 Getting Started

Follow these steps to set up the project locally.

### Prerequisites

Ensure you have the following installed:
* Python (>= 3.8)
* Conda (Recommended for managing environments)
* PyTorch (>= 1.10)

Key Python libraries:
* `torch`
* `torch-geometric` (PyG)
* `rdkit-pypi`
* `numpy`
* `tqdm`

### Installation

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/quangmytam/Peptide-Design-Lightweight-Model.git
    cd Peptide-Design-Lightweight-Model
    ```

2.  **Set up the Conda Environment:**
    We use a unified Conda environment named `Thesis` for both the backend model and the frontend utilities.
    ```sh
    conda env create -f system/environment.yml
    conda activate Thesis
    ```

3.  **Install Frontend Dependencies:**
    Navigate to the frontend directory and install the required Node.js packages (Requires Node.js >= 18).
    ```sh
    cd frontend
    npm install
    ```

## 🏃 Usage

To run the complete LightPeptide-Gen system with the graphical user interface, you need to start both the Backend API server and the Frontend Development server.

### 1. Start the Backend API Server

The backend uses FastAPI to serve the `LightweightPeptideGen` model predictions to the frontend.

Open a terminal, activate the environment, and start the server:
```sh
conda activate Thesis
cd Model/LightweightPeptideGen
python api_server.py
```
*The API server will start on `http://localhost:8000`.*

### 2. Start the React Frontend

Open a **new** terminal, activate the environment, and start the Vite development server:
```sh
conda activate Thesis
cd Model/Peptide-Lightweight-FE/frontend
npm run dev
```

*The frontend application will run on `http://localhost:5173/Peptide-Design-Lightweight-Model/`.*

### 3. Generate Peptides via UI
1. Open your browser and navigate to the local frontend link provided in the terminal.
2. Go to the **Generation** tab.
3. Configure your desired parameters (e.g., peptide length, stability filter).
4. Click **Generate Peptides** to view the results returned interactively from the AI model!

### Inference (CLI Mode)

If you prefer to generate peptides using the command line instead of the UI:

```sh
cd Model/LightweightPeptideGen
python generate.py \
    --checkpoint checkpoints/best_model.pt \
    --num 100 \
    --output results/generated_peptides.fasta
```
