# LightPeptide-Gen: Một Framework gọn nhẹ dựa trên Đồ thị cho Thiết kế Peptide De Novo

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Python Version](https://img.shields.io/badge/python-3.8+-blue.svg)](https://www.python.org/downloads/)
[![PyTorch](https://img.shields.io/badge/PyTorch-1.10+-red.svg)](https://pytorch.org/)
[![PyG](https://img.shields.io/badge/PyTorch%20Geometric-2.0+-orange.svg)](https://pytorch-geometric.readthedocs.io/en/latest/)

Một framework gọn nhẹ, hiệu quả sử dụng Mạng nơ-ron Đồ thị (GNNs) và Graph Transformers cho việc sinh *de novo* các cấu trúc peptide mới.

## 📖 Mục lục

* [Về dự án](#vế-dự-án)
* [Kiến trúc](#kiến-trúc)
* [Tính năng chính](#tính-năng-chính)
* [Bắt đầu](#bắt-đầu)
    * [Điều kiện tiên quyết](#điều-kiện-tiên-quyết)
    * [Cài đặt](#cài-đặt)
* [Sử dụng](#sử-dụng)
    * [Huấn luyện](#huấn-luyện)
    * [Suy luận (Sinh Peptide)](#suy-luận-sinh-peptide)
* [Lộ trình](#lộ-trình)
* [Giấy phép](#giấy-phép)
* [Liên hệ](#liên-hệ)
* [Trích dẫn](#trích-dẫn)

## 🌟 Về dự án

Khám phá peptide truyền thống là một quá trình tốn kém và mất thời gian. Trong khi học sâu đã cho thấy triển vọng trong việc tăng tốc quá trình này, nhiều mô hình tạo sinh quá nặng về tính toán, khiến chúng khó huấn luyện và triển khai.

**LightPeptide-Gen** giải quyết thách thức này bằng cách cung cấp một framework được xây dựng trên Mạng nơ-ron Đồ thị (GNNs) gọn nhẹ và Graph Transformers tối ưu. Bằng cách biểu diễn các peptide dưới dạng đồ thị phân tử, mô hình của chúng tôi học các quy tắc hóa học và cấu trúc cơ bản để sinh ra các ứng cử viên peptide mới, hợp lệ và đa dạng một cách hiệu quả.

Dự án này tập trung ưu tiên sự cân bằng giữa **kích thước mô hình**, **tốc độ suy luận**, và **chất lượng sinh**.

## 🏗️ Kiến trúc

Cốt lõi của framework là một mô hình tạo sinh (ví dụ: VAE, Autoregressive Model) hoạt động trực tiếp trên dữ liệu cấu trúc đồ thị.

1.  **Biểu diễn đầu vào:** Peptide được chuyển đổi từ chuỗi SMILES hoặc FASTA thành đồ thị phân tử sử dụng `RDKit`. Mỗi nguyên tử trở thành một nút (với các đặc trưng như loại nguyên tử, điện tích) và mỗi liên kết trở thành một cạnh (với đặc trưng như loại liên kết).
2.  **Bộ mã hóa Đồ thị (Graph Encoder):** Một ngăn xếp các lớp GNN gọn nhẹ (ví dụ: GCN, GAT) hoặc một Graph Transformer tối ưu (ví dụ: một biến thể với cơ chế chú ý tuyến tính) học một biểu diễn ẩn nén của đồ thị phân tử.
3.  **Bộ giải mã Tạo sinh (Generative Decoder):** Một bộ giải mã (ví dụ: Autoregressive hoặc dựa trên VAE) tái cấu trúc hoặc "phát triển" một đồ thị phân tử mới từ một điểm được lấy mẫu trong không gian ẩn.
4.  **Kỹ thuật Tối ưu hóa:** Bản chất "gọn nhẹ" đạt được thông qua:
    * **Kiến trúc tinh giản:** Sử dụng ít lớp/chiều ẩn hơn.
    * **Khối tối ưu:** Thay thế cơ chế chú ý (attention) tiêu chuẩn bằng các biến thể hiệu quả hơn.
    * **Chưng cất tri thức:** (Tùy chọn) Huấn luyện mô hình "student" nhỏ để bắt chước mô hình "teacher" lớn.
    * **Lượng tử hóa & Cắt tỉa (Quantization & Pruning):** Áp dụng tối ưu hóa sau huấn luyện.

## ✨ Tính năng chính

* **Tạo sinh Dựa trên Đồ thị:** Hiểu tự nhiên về cấu trúc phân tử, dẫn đến tính hợp lệ hóa học cao hơn.
* **Gọn nhẹ & Nhanh chóng:** Thiết kế cho độ trễ suy luận thấp và giảm chi phí huấn luyện.
* **Mô-đun hóa:** Dễ dàng hoán đổi các bộ mã hóa GNN hoặc bộ giải mã tạo sinh khác nhau.
* **Mở rộng:** Có thể điều chỉnh cho việc tạo sinh có điều kiện (ví dụ: "sinh peptide có hoạt tính kháng khuẩn cao").

## 🚀 Bắt đầu

Làm theo các bước sau để cài đặt dự án trên máy của bạn.

### Điều kiện tiên quyết

Đảm bảo bạn đã cài đặt các phần mềm sau:
* Python (>= 3.8)
* Conda (Khuyến nghị để quản lý môi trường)
* PyTorch (>= 1.10)

Các thư viện Python chính:
* `torch`
* `torch-geometric` (PyG)
* `rdkit-pypi`
* `numpy`
* `tqdm`

### Cài đặt

1.  **Sao chép kho lưu trữ:**
    ```sh
    git clone https://github.com/quangmytam/Peptide-Design-Lightweight-Model.git
    cd Peptide-Design-Lightweight-Model
    ```

2.  **Cài đặt Môi trường Conda:**
    Chúng tôi sử dụng một môi trường Conda thống nhất có tên `Thesis` cho cả mô hình backend và tiện ích frontend.
    ```sh
    conda env create -f system/environment.yml
    conda activate Thesis
    ```

3.  **Cài đặt Dependency của Frontend:**
    Đi đến thư mục frontend và cài đặt các gói Node.js cần thiết (Yêu cầu Node.js >= 18).
    ```sh
    cd frontend
    npm install
    ```

## 🏃 Sử dụng

Để chạy toàn bộ hệ thống LightPeptide-Gen với giao diện người dùng độ họa, bạn cần khởi động cả Backend API server và Frontend Development server.

### 1. Khởi động Backend API Server

Backend sử dụng FastAPI để phục vụ mô hình `LightweightPeptideGen` cho giao diện frontend.

Mở một terminal, kích hoạt môi trường và khởi động server:
```sh
conda activate Thesis
cd Model/LightweightPeptideGen
python api_server.py
```
*API server sẽ khởi chạy tại `http://localhost:8000`.*

### 2. Khởi động React Frontend

Mở một terminal **mới**, kích hoạt môi trường và khởi động Vite development server:
```sh
conda activate Thesis
cd Model/Peptide-Lightweight-FE/frontend
npm run dev
```

*Ứng dụng frontend sẽ chạy tại `http://localhost:5173/Peptide-Design-Lightweight-Model/`.*

### 3. Sinh Peptide qua UI
1. Mở trình duyệt và truy cập vào liên kết frontend cục bộ được cung cấp trong terminal.
2. Đi đến tab **Generation** (Sinh mẫu).
3. Cấu hình các tham số mong muốn (ví dụ: độ dài peptide, bộ lọc tính ổn định).
4. Nhấn **Generate Peptides** (Sinh Peptide) để xem kết quả trả về tương tác từ mô hình AI!

### Suy luận (Chế độ dòng lệnh CLI)

Nếu bạn muốn sinh peptide thông qua dòng lệnh thay vì UI:

```sh
cd Model/LightweightPeptideGen
python generate.py \
    --checkpoint checkpoints/best_model.pt \
    --num 100 \
    --output results/generated_peptides.fasta
```
