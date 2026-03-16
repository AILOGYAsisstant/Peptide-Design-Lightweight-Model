import React, { useRef } from 'react';

const slidestyle = "bg-white/50 dark:bg-background-dark/50 backdrop-blur-lg rounded-3xl px-4 md:px-8 lg:px-14 py-8 md:py-10 lg:py-12 shadow-lg border border-gray-200/80 dark:border-gray-700/80 relative transition-all duration-300 hover:shadow-xl w-[98%] max-w-[1900px] mx-auto flex flex-col min-h-[92vh] my-[4vh] group cursor-pointer";

const slidesData = [
  {
    id: 1,
    title: "",
    content: (
      <div className="text-center mt-10 space-y-6">
        <p className="text-xl text-gray-500 dark:text-gray-400 font-bold uppercase tracking-widest mb-2">BÁO CÁO ĐỒ ÁN TỐT NGHIỆP</p>
        <p className="text-lg font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-6 border-b-2 border-blue-200 dark:border-blue-900 inline-block pb-2">Khoa Công Nghệ Thông Tin - Chuyên ngành Trí Tuệ Nhân Tạo</p>
        <h2 className="text-5xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mb-8 leading-tight">
          NGHIÊN CỨU VÀ PHÁT TRIỂN MÔ HÌNH LIGHTWEIGHT CHO SINH TẠO CHUỖI PEPTIDE NGẮN CÓ ĐỘ ỔN ĐỊNH CẤU TRÚC CAO
        </h2>
        <div className="text-xl font-medium text-slate-800 dark:text-gray-200 space-y-4 max-w-xl mx-auto bg-white/60 dark:bg-slate-800/60 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
          <p className="flex justify-between border-b border-gray-200 dark:border-gray-700 pb-2"><strong>Sinh viên:</strong> <span>Quang Mỹ Tâm - 2274802010784</span></p>
          <p className="flex justify-between border-b border-gray-200 dark:border-gray-700 pb-2"><strong>Giảng viên hướng dẫn:</strong> <span className="text-primary font-bold">ThS. Nguyễn Thị Mỹ Linh</span></p>
        </div>
      </div>
    )
  },
  {
    id: 2,
    title: "Tổng quan đề tài",
    content: (
      <div className="space-y-6 text-xl">
        <ul className="list-disc pl-8 space-y-5 text-slate-800 dark:text-slate-200">
          <li>Sự phát triển mạnh mẽ của Deep Learning và Generative AI từ 2022 (AlphaFold2, ESM-2) mang lại độ chính xác cao nhưng đòi hỏi <strong>tài nguyên khổng lồ</strong> (hàng tỷ tham số, GPU clusters).</li>
          <li>Điều này tạo rào cản lớn cho các phòng thí nghiệm quy mô nhỏ và các nước đang phát triển.</li>
          <li>
            Mô hình tạo sinh tuần túy dựa trên chuỗi (sequence-only) thường gặp hiện tượng <strong>“ảo giác cấu trúc” (Structural Hallucination):</strong>
            <ul className="list-[circle] pl-8 mt-3 space-y-2 text-rose-600 dark:text-rose-400 font-medium">
              <li>Sinh ra peptide có điểm số lý thuyết in-silico cao</li>
              <li>Thiếu giới hạn hình học không gian (khoảng cách Cα, góc liên kết)</li>
              <li>Thất bại khi gấp cuộn 3D trong thực nghiệm (wet lab)</li>
            </ul>
          </li>
        </ul>
        <div className="mt-8 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-2xl border border-blue-200 dark:border-blue-800 text-center font-bold text-2xl text-blue-700 dark:text-blue-300 shadow-inner">
          ➡️ Cần nghiên cứu kiến trúc mô hình tinh gọn (Lightweight) tối ưu hiệu năng và tài nguyên trên GPU đơn.
        </div>
      </div>
    )
  },
  {
    id: 3,
    title: "Tính cấp thiết",
    content: (
      <div className="grid md:grid-cols-2 gap-8 text-xl">
        <div className="space-y-6">
          <ul className="list-disc pl-8 space-y-6 text-slate-800 dark:text-slate-200">
            <li>Nhu cầu thiết kế peptide kháng khuẩn (AMPs) mới để <strong>đối phó kháng kháng sinh.</strong></li>
            <li>Hạn chế về GPU/VRAM tại các trung tâm nghiên cứu làm chậm trễ tiến trình in-silico.</li>
            <li>Hơn 70% peptide AI-designed thất bại do không có ràng buộc tính chất hóa-lý và thiếu khối mô hình hóa đa nhiệm.</li>
          </ul>
        </div>
        <div className="bg-emerald-50 dark:bg-emerald-900/10 p-8 rounded-3xl border border-emerald-200 dark:border-emerald-800 flex flex-col justify-center">
          <h3 className="font-bold text-2xl text-emerald-700 dark:text-emerald-400 mb-6 border-b-2 border-emerald-200 dark:border-emerald-800 pb-3">Xu hướng giải quyết:</h3>
          <ul className="list-[circle] pl-8 space-y-4 font-semibold text-emerald-800 dark:text-emerald-300">
            <li>Lightweight Model (Tối giản tham số)</li>
            <li>Hybrid CNN-Transformer & RNN</li>
            <li>Tích hợp Mạng Nơ-ron Đồ thị (GNN)</li>
            <li>Học Tăng Cường (Reinforcement Learning) để tối ưu trực tiếp đặc tính sinh học.</li>
          </ul>
        </div>
      </div>
    )
  },
  {
    id: 4,
    title: "Mục tiêu nghiên cứu",
    content: (
      <div className="grid md:grid-cols-2 gap-10 text-xl">
        <div className="space-y-4 bg-white/60 dark:bg-slate-800/60 p-8 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm">
          <h3 className="font-bold text-2xl text-blue-600 dark:text-blue-400 border-b-2 border-blue-200 dark:border-blue-800 pb-3 flex items-center gap-2">
            <span className="material-symbols-outlined">flag</span> Mục tiêu tổng quát
          </h3>
          <p className="font-medium text-slate-700 dark:text-slate-300 leading-relaxed">
            Thiết kế kiến trúc mô hình học sâu sinh học gọn nhẹ (LightweightPeptideGen) dựa trên GRU Generator kết hợp GAN, có khả năng:
          </p>
          <ul className="list-disc pl-8 space-y-3 font-semibold text-slate-800 dark:text-slate-200">
            <li>Sinh tạo de novo peptide ngắn (&lt;50 aa) đạt độ ổn định 3D.</li>
            <li>Kiểm soát đặc tính hóa-lý (kỵ nước, độc tính).</li>
            <li>Vận hành siêu tốc và bảo đảm khả năng mở rộng.</li>
          </ul>
        </div>
        <div className="space-y-4 bg-white/60 dark:bg-slate-800/60 p-8 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm">
          <h3 className="font-bold text-2xl text-purple-600 dark:text-purple-400 border-b-2 border-purple-200 dark:border-purple-800 pb-3 flex items-center gap-2">
            <span className="material-symbols-outlined">track_changes</span> Mục tiêu cụ thể
          </h3>
          <ul className="list-decimal pl-8 space-y-4 font-medium text-slate-800 dark:text-slate-200">
            <li>Xây dựng pipeline dữ liệu từ 3 nguồn (DBAASP, APD3, RNN-Hem).</li>
            <li>Tích hợp cơ chế sinh có điều kiện thông qua 18 đặc trưng hóa lý.</li>
            <li>Huấn luyện đa giai đoạn: MLE → GAN → RL (SCST).</li>
            <li>Đánh giá chỉ số sinh học so với baseline chuyên ngành.</li>
          </ul>
        </div>
      </div>
    )
  },
  {
    id: 5,
    title: "Phạm vi và Đối tượng nghiên cứu",
    content: (
      <div className="grid md:grid-cols-2 gap-8 text-xl">
        <div className="bg-emerald-50 dark:bg-emerald-900/10 p-8 rounded-3xl border border-emerald-200 dark:border-emerald-800 shadow-sm">
          <h3 className="font-bold text-2xl text-emerald-700 dark:text-emerald-400 mb-6 flex items-center gap-2">
            <span className="material-symbols-outlined">center_focus_strong</span> Phạm vi cốt lõi
          </h3>
          <ul className="list-disc pl-8 space-y-4 text-emerald-900 dark:text-emerald-100 font-medium">
            <li><strong>Dữ liệu:</strong> ~150.000 chuỗi peptide.</li>
            <li><strong>Giới hạn chiều dài:</strong> Peptide ngắn dưới 50 amino acid.</li>
            <li><strong>Hạ tầng:</strong> Triển khai trên GPU đơn phổ thông (RAM 24GB).</li>
            <li><strong>Phương pháp:</strong> GRU, GAN, RL, GNN (GATv2) và Knowledge Distillation.</li>
          </ul>
        </div>
        <div className="bg-red-50 dark:bg-red-900/10 p-8 rounded-3xl border border-red-200 dark:border-red-800 shadow-sm relative overflow-hidden">
          <span className="material-symbols-outlined absolute -bottom-10 -right-10 text-9xl text-red-500/10">do_not_disturb</span>
          <h3 className="font-bold text-2xl text-red-700 dark:text-red-400 mb-6 flex items-center gap-2 relative z-10">
            <span className="material-symbols-outlined">block</span> Không tập trung
          </h3>
          <ul className="list-disc pl-8 space-y-4 text-red-900 dark:text-red-100 font-medium relative z-10">
            <li>Dự đoán cấu trúc tinh thể Protein 3D phức tạp đầy đủ.</li>
            <li>Productization thương mại hóa doanh nghiệp lớn.</li>
            <li>Kiểm chứng thực nghiệm ướt (Wet lab validation) - chỉ áp dụng <strong>In-silico evaluation</strong>.</li>
          </ul>
        </div>
      </div>
    )
  },
  {
    id: 6,
    title: "Phương pháp nghiên cứu",
    content: (
      <div className="space-y-8 text-xl">
        <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm">
          <h3 className="font-bold text-2xl text-indigo-600 dark:text-indigo-400 mb-4 flex items-center gap-2 border-b-2 border-indigo-100 dark:border-indigo-900 pb-2">
            <span className="material-symbols-outlined">account_tree</span> Tiếp cận Phương pháp luận
          </h3>
          <ul className="list-disc pl-8 space-y-4 text-slate-700 dark:text-slate-300">
            <li><strong>Phương pháp mô hình hóa:</strong> Chuyển đổi chuỗi thành 23 token số hóa. Biểu diễn 18 đặc trưng lý hóa thành Vector liên tục phục vụ Cross-Attention.</li>
            <li><strong>Huấn luyện đa giai đoạn:</strong> Kết hợp Maximum Likelihood Estimation (Teacher Forcing) mô phỏng phân phối, sau đó áp dụng GAN đối kháng (CNN Discriminator) giảm thiểu mode collapse, và tinh chỉnh thuật toán SCST.</li>
            <li><strong>Phương pháp đánh giá:</strong> Entropy, N-gram Diversity, Instability Index, GRAVY, Hemolytic Score so sánh với 4 mô hình tham chiếu.</li>
          </ul>
        </div>
      </div>
    )
  },
  {
    id: 7,
    title: "Pipeline Tổng thể Hệ thống",
    content: (
      <div className="space-y-6 text-xl">
        <div className="p-6 bg-slate-100 dark:bg-slate-800 rounded-3xl text-center font-bold lg:text-2xl tracking-wide text-slate-800 dark:text-slate-200 shadow-inner break-words border-2 border-dashed border-slate-300 dark:border-slate-600 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-cyan-500/5"></div>
          Dữ liệu (DBAASP/APD3) ➔ Tiền Xử Lý (20 Amino Acids) ➔ <br className="hidden md:block" /><br className="hidden md:block" />
          Trích Xuất Đặc Trưng (ESM-2 + 18 Lý hóa + GATv2) ➔ <br className="hidden md:block" /><br className="hidden md:block" />
          GAN Generator (GRU) / Discriminator (CNN) ➔ Hậu Xử Lý (Filter)
        </div>
        <div className="grid grid-cols-2 gap-6 mt-8">
          <div className="bg-white/50 dark:bg-slate-800/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-700">
            <h4 className="font-bold text-blue-600 dark:text-blue-400 mb-3">Đầu vào (Input)</h4>
            <ul className="list-disc pl-6 text-base space-y-2">
              <li>Chuỗi từ 5 - 50 axit amin.</li>
              <li>Padding về độ dài L_max = 50.</li>
              <li>Cấu trúc Cα ước tính.</li>
            </ul>
          </div>
          <div className="bg-white/50 dark:bg-slate-800/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-700">
            <h4 className="font-bold text-emerald-600 dark:text-emerald-400 mb-3">Đầu ra (Output)</h4>
            <ul className="list-disc pl-6 text-base space-y-2">
              <li>Peptide tái tổ hợp ổn định 3D.</li>
              <li>Hệ số AMP Probability dự đoán.</li>
              <li>Dữ liệu 18 tham số hóa lý thực.</li>
            </ul>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 8,
    title: "Kiến trúc mô hình lai tinh gọn",
    content: (
      <div className="grid md:grid-cols-2 gap-8 h-full items-center text-xl">
        <div className="space-y-6">
          <h3 className="font-bold text-3xl text-blue-600 dark:text-blue-400 mb-4 flex items-center gap-2">
            <span className="material-symbols-outlined">hub</span> ESM-GATv2 Fusion + GAN
          </h3>
          <ul className="list-disc pl-8 space-y-4 text-slate-700 dark:text-slate-300">
            <li><strong>Nhánh Chuỗi (1D):</strong> Trích xuất ngữ cảnh tiến hóa (Evolutionary) bằng ESM-2 Backbone rút gọn.</li>
            <li><strong>Nhánh Không Gian (3D):</strong> Mã hóa đặc trưng hình học Cα qua mạng nơ-ron đồ thị GATv2 động.</li>
            <li><strong>Tích hợp:</strong> Cross-Attention trộn lẫn biểu diễn chuỗi + biểu đồ + 18 ma trận lý hóa tuyến tính.</li>
            <li><strong>Tạo sinh (Generator):</strong> GRU tuần tự lấy không gian tiềm ẩn sinh token Peptide.</li>
            <li><strong>Phân biệt (Discriminator):</strong> CNN đối kháng phân loại thật/giả.</li>
          </ul>
        </div>
        <div className="flex justify-center items-center h-full p-4">
          {/* Hình ảnh Kiến trúc Mạng GNN */}
          <div className="relative group w-full">
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
            <img src="/Peptide-Design-Lightweight-Model/peptide%20GNN.png" alt="Kiến trúc GNN" className="relative rounded-xl border border-slate-300 dark:border-slate-600 shadow-lg object-contain bg-white dark:bg-slate-800 max-h-[400px] w-full" />
          </div>
        </div>
      </div>
    )
  },
  {
    id: 8.5,
    title: "Sơ đồ Tổng thể Kiến trúc ESM-2 & GATv2",
    content: (
      <div className="flex flex-col items-center justify-center gap-6 h-full">
        <p className="text-lg font-medium text-slate-600 dark:text-slate-400 text-center max-w-3xl">
          Sơ đồ minh họa luồng xử lý từ chuỗi Peptide đầu vào qua hai nhánh ESM-2 (1D) và GATv2 (3D), hợp nhất qua Cross-Attention và xuất qua GRU Generator.
        </p>
        <div className="relative group w-full max-w-5xl">
          <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 via-cyan-400 to-emerald-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-700"></div>
          <img
            src="/Peptide-Design-Lightweight-Model/ESM2-GAT.png"
            alt="ESM2-GAT Architecture Overview"
            className="relative w-full rounded-2xl border border-slate-200 dark:border-slate-700 shadow-2xl object-contain bg-white dark:bg-slate-900"
          />
        </div>
      </div>
    )
  },
  {
    id: 9,
    title: "Thành phần Backbone (ESM-2)",
    content: (
      <div className="grid md:grid-cols-2 gap-10 items-center text-xl">
        <div className="flex justify-center p-4">
          <img src="/Peptide-Design-Lightweight-Model/esm2.png" alt="ESM-2 Architecture" className="rounded-2xl border-4 border-white dark:border-slate-800 shadow-xl object-contain bg-white max-h-[350px] w-full" />
        </div>
        <div className="space-y-6 bg-white/40 dark:bg-slate-800/40 p-8 rounded-3xl border border-slate-200 dark:border-slate-700">
          <h3 className="font-bold text-2xl text-blue-600 dark:text-blue-400 pb-2 border-b border-blue-200 dark:border-blue-800 mb-4">Chiến lược: Selective Freezing</h3>
          <p className="font-medium text-slate-800 dark:text-slate-200 leading-relaxed mb-4">
            Mô hình ngôn ngữ protein ESM-2 650M tham số được chọn vì duy trì được sức mạnh tiến hóa nhưng đủ nhẹ cho bộ nhớ 24GB.
          </p>
          <ul className="list-disc pl-8 space-y-4 text-base font-semibold text-slate-700 dark:text-slate-300">
            <li><strong>Đóng băng 90-95% trọng số (Layer 1 đến N-2):</strong> Giữ nguyên tri thức tiến hóa học từ 250 triệu chuỗi UniRef. Tiết kiệm lượng lớn VRAM tính toán Gradient.</li>
            <li><strong>Fine-tune 2 lớp Transformer cuối cùng:</strong> Giúp mô hình linh hoạt thích nghi với "ngữ pháp sinh học" đặc thù của Peptide ngắn kháng khuẩn thay vì phân tử khổng lồ.</li>
          </ul>
        </div>
      </div>
    )
  },
  {
    id: 10,
    title: "Attention Đồ thị Không gian (GATv2)",
    content: (
      <div className="grid md:grid-cols-2 gap-8 text-xl items-center">
        <div className="space-y-6">
          <ul className="list-disc pl-8 space-y-4 text-slate-800 dark:text-slate-200">
            <li><strong>Đồ thị Peptide:</strong> Node là ký tự axit amin mang one-hot vector 20 chiều, Edge là liên kết không gian bán kính <code>&lt; 8Å</code>.</li>
            <li><strong>Tại sao lại 8Å?</strong> Phần lớn các tương tác phi liên kết có ý nghĩa sinh học (van der Waals, kỵ nước, tĩnh điện) xảy ra ở cự ly này.</li>
          </ul>
          <div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-2xl border border-amber-200 dark:border-amber-800 shadow-sm mt-4">
            <h3 className="font-bold text-xl text-amber-700 dark:text-amber-400 mb-2 flex items-center gap-2">
              <span className="material-symbols-outlined">network_node</span> Đổi mới ở GATv2
            </h3>
            <p className="text-base text-amber-900 dark:text-amber-100">
              GAT gốc mắc lỗi "Static attention". Nhờ GATv2, trọng số lan truyền Attention động α_ij nhận diện mức độ quan trọng giữa Node Nguồn và Node Đích, kết hợp 4 Heads tăng cường độ phân giải chi tiết.
            </p>
          </div>
        </div>
        <div className="flex justify-center">
          <img src="/Peptide-Design-Lightweight-Model/gatarchi.png" alt="GAT Architecture" className="rounded-2xl border-2 border-slate-300 dark:border-slate-600 shadow-lg object-contain bg-white dark:bg-slate-200 p-2 max-h-[400px] w-full" />
        </div>
      </div>
    )
  },
  {
    id: 11,
    title: "Tích hợp 18 Đặc trưng Sinh-Hóa",
    content: (
      <div className="space-y-8 text-xl">
        <p className="font-medium text-slate-700 dark:text-slate-300 leading-relaxed max-w-4xl">
          Giải quyết bài toán "Ảo giác cấu trúc": Buộc mô hình sinh học phải tuân theo giới hạn vật lý. Quá trình này chuẩn hóa Z-Score 18 tham số đo bằng Modlamp và Biopython.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-2xl border border-blue-200 dark:border-blue-800 shadow-sm">
            <h4 className="font-bold text-blue-700 dark:text-blue-400 mb-3 border-b border-blue-200 dark:border-blue-700 pb-2">Độ ổn định & An toàn</h4>
            <ul className="list-disc pl-6 text-base space-y-2 font-medium">
              <li>Instability Index (II)</li>
              <li>Aliphatic Index</li>
              <li>Hemolytic Score & Boman Index</li>
            </ul>
          </div>
          <div className="bg-emerald-50 dark:bg-emerald-900/20 p-6 rounded-2xl border border-emerald-200 dark:border-emerald-800 shadow-sm">
            <h4 className="font-bold text-emerald-700 dark:text-emerald-400 mb-3 border-b border-emerald-200 dark:border-emerald-700 pb-2">Tính kỵ nước</h4>
            <ul className="list-disc pl-6 text-base space-y-2 font-medium">
              <li>GRAVY</li>
              <li>Hydrophobic Moment</li>
              <li>Hydrophobicity profile</li>
            </ul>
          </div>
          <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-2xl border border-purple-200 dark:border-purple-800 shadow-sm">
            <h4 className="font-bold text-purple-700 dark:text-purple-400 mb-3 border-b border-purple-200 dark:border-purple-700 pb-2">Điện tích & Cấu trúc</h4>
            <ul className="list-disc pl-6 text-base space-y-2 font-medium">
              <li>Tổng điện tích (+/-) & pI</li>
              <li>Aromaticity</li>
              <li>Tỉ lệ phân nhóm Amino Acid</li>
            </ul>
          </div>
        </div>
        <div className="text-center font-bold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/10 py-3 rounded-lg border border-indigo-200 dark:border-indigo-800 border-dashed">
          Linear Projection (WX + B) ➔ Cross-Attention Hợp Nhất Đa Chiều (1D + 3D + Lý hóa).
        </div>
      </div>
    )
  },
  {
    id: 12,
    title: "Chiến lược Huấn luyện 3 Giai đoạn",
    content: (
      <div className="space-y-6 text-xl">
        <div className="grid grid-cols-1 gap-5 relative">
          <div className="absolute left-6 top-10 bottom-10 w-1 bg-slate-200 dark:bg-slate-700 z-0 hidden md:block"></div>

          <div className="bg-white dark:bg-slate-800 p-6 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-700 flex flex-col md:flex-row gap-6 relative z-10">
            <div className="bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 font-black text-2xl h-14 w-14 rounded-full flex items-center justify-center shrink-0 border-4 border-white dark:border-background-dark shadow-md">1</div>
            <div>
              <h3 className="font-black text-2xl text-blue-600 dark:text-blue-400 mb-2">MLE Pretraining <span className="text-base font-normal opacity-75">(20 Epochs)</span></h3>
              <p className="text-base text-gray-600 dark:text-gray-300">Khởi động. Mô hình học phân bố thống kê trình tự cơ bản bằng Maximum Likelihood Estimation với kỹ thuật Teacher Forcing (Dùng Cross-Entropy Loss).</p>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800 p-6 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-700 flex flex-col md:flex-row gap-6 relative z-10">
            <div className="bg-purple-100 dark:bg-purple-900/50 text-purple-600 dark:text-purple-400 font-black text-2xl h-14 w-14 rounded-full flex items-center justify-center shrink-0 border-4 border-white dark:border-background-dark shadow-md">2</div>
            <div>
              <h3 className="font-black text-2xl text-purple-600 dark:text-purple-400 mb-2">GAN Training <span className="text-base font-normal opacity-75">(30 Epochs)</span></h3>
              <p className="text-base text-gray-600 dark:text-gray-300">Huấn luyện Đối kháng. GRU Generator đấu với CNN Discriminator. Sử dụng Wasserstein GAN + Gradient Penalty. Kỹ thuật <strong className="text-purple-500">Gumbel-Softmax</strong> giải quyết bài toán gradient đứt gãy do không gian rời rạc của token chữ cái.</p>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800 p-6 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-700 flex flex-col md:flex-row gap-6 relative z-10">
            <div className="bg-emerald-100 dark:bg-emerald-900/50 text-emerald-600 dark:text-emerald-400 font-black text-2xl h-14 w-14 rounded-full flex items-center justify-center shrink-0 border-4 border-white dark:border-background-dark shadow-md">3</div>
            <div>
              <h3 className="font-black text-2xl text-emerald-600 dark:text-emerald-400 mb-2">RL / SCST Fine-tuning <span className="text-base font-normal opacity-75">(15 Epochs)</span></h3>
              <p className="text-base text-gray-600 dark:text-gray-300">Tối ưu trực tiếp đặc điểm sinh học. Dùng Self-Critical Sequence Training (Policy Gradient) để tối ưu chỉ số phi tuyến/không khả vi như Instability Index, Hemolytic Score và Thermodynamic Properties đóng vai trò như Reward.</p>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 13,
    title: "Thiết lập Thực nghiệm",
    content: (
      <div className="grid md:grid-cols-2 gap-10 text-xl font-medium">
        <div className="space-y-6 bg-slate-100 dark:bg-slate-800/80 p-8 rounded-3xl border border-slate-200 dark:border-slate-700">
          <h3 className="font-bold text-2xl text-slate-800 dark:text-slate-100 border-b-2 border-slate-200 dark:border-slate-600 pb-3 flex items-center gap-2"><span className="material-symbols-outlined text-blue-500">database</span> Cấu hình Dữ liệu</h3>
          <ul className="list-none space-y-4 text-base">
            <li className="flex justify-between border-b border-gray-200 dark:border-gray-700 pb-2"><span>Tổng mẫu Data:</span> <strong>~150.000 Chuỗi</strong></li>
            <li className="flex justify-between border-b border-gray-200 dark:border-gray-700 pb-2"><span>Phân chia (Train/Val/Test):</span> <strong>80 / 10 / 10</strong></li>
            <li className="flex flex-col mt-4">
              <span className="text-sm opacity-70 mb-2">Tập dữ liệu nền cứng học phân phối tự nhiên:</span>
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-lg">DBAASP</span>
                <span className="bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300 px-3 py-1 rounded-lg">APD3</span>
                <span className="bg-rose-100 dark:bg-rose-900/50 text-rose-700 dark:text-rose-300 px-3 py-1 rounded-lg">RNN-Hem</span>
              </div>
            </li>
          </ul>
        </div>
        <div className="bg-cyan-50 dark:bg-cyan-900/10 p-8 rounded-3xl border border-cyan-200 dark:border-cyan-800">
          <h3 className="font-bold text-2xl text-cyan-600 dark:text-cyan-400 mb-6 border-b-2 border-cyan-200 dark:border-cyan-800 pb-3 flex items-center gap-2"><span className="material-symbols-outlined">developer_board</span> Hạ tầng / Hyperparameters</h3>
          <ul className="list-none space-y-4 text-base text-slate-800 dark:text-slate-200">
            <li className="flex justify-between border-b border-cyan-100 dark:border-cyan-800/50 pb-2"><span>GPU:</span> <strong>Quadro RTX 6000 (24GB)</strong></li>
            <li className="flex justify-between border-b border-cyan-100 dark:border-cyan-800/50 pb-2"><span>Framework:</span> <strong>PyTorch 2.x, PyG</strong></li>
            <li className="flex justify-between border-b border-cyan-100 dark:border-cyan-800/50 pb-2"><span>Batch Size (Grad. Acc x4):</span> <strong>16 / 8</strong></li>
            <li className="flex justify-between pb-2"><span>Tối ưu hóa tài nguyên:</span> <strong>AMP (Mixed Precision)</strong></li>
          </ul>
        </div>
      </div>
    )
  },
  {
    id: 14,
    title: "Kết quả Thực nghiệm: Cấu trúc & Hóa-Lý",
    content: (
      <div className="space-y-6 pb-4">
        <p className="text-xl font-medium text-slate-700 dark:text-slate-300 mb-6">
          Pha Reinforcement Learning đã định hướng hoàn hảo phân bố thống kê của peptide, bảo đảm tính ổn định và an toàn in-silico:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-4 bg-white/50 dark:bg-slate-800/50 rounded-2xl border border-slate-200 dark:border-slate-700 text-center">
            <h4 className="font-bold text-emerald-600 dark:text-emerald-400 mb-2">Độ ổn định (Instability Index)</h4>
            <img src="/Peptide-Design-Lightweight-Model/instability_hist.png" alt="Instability Index" className="w-full h-auto rounded-lg mb-2 border border-slate-200 dark:border-slate-600 aspect-video object-cover" />
            <p className="text-sm font-medium">Đa số tập trung &lt; 40 (Ngưỡng bền vững), phản ánh sinh học thực tế.</p>
          </div>

          <div className="p-4 bg-white/50 dark:bg-slate-800/50 rounded-2xl border border-slate-200 dark:border-slate-700 text-center">
            <h4 className="font-bold text-blue-600 dark:text-blue-400 mb-2">Độc tính (Hemolytic Score)</h4>
            <img src="/Peptide-Design-Lightweight-Model/hemolytic_score_hist.png" alt="Hemolytic" className="w-full h-auto rounded-lg mb-2 border border-slate-200 dark:border-slate-600 aspect-video object-cover" />
            <p className="text-sm font-medium">Tập trung vùng điểm số an toàn (2.5 - 3.5) với xác suất AMP cao.</p>
          </div>

          <div className="p-4 bg-white/50 dark:bg-slate-800/50 rounded-2xl border border-slate-200 dark:border-slate-700 text-center">
            <h4 className="font-bold text-purple-600 dark:text-purple-400 mb-2">Kỵ nước (GRAVY)</h4>
            <img src="/Peptide-Design-Lightweight-Model/gravy_hist.png" alt="GRAVY Distribution" className="w-full h-auto rounded-lg mb-2 border border-slate-200 dark:border-slate-600 aspect-video object-cover" />
            <p className="text-sm font-medium">Phân bố [-1.0, 0.5] cực chuẩn của AMP tự nhiên xuyên màng.</p>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 15,
    title: "Đánh giá Mức độ Đa dạng",
    content: (
      <div className="space-y-8 text-xl">
        <h3 className="font-bold text-2xl text-slate-800 dark:text-slate-200 mb-4 border-l-4 border-indigo-500 pl-4">Khắc phục 100% rủi ro Mode Collapse</h3>

        <div className="grid md:grid-cols-2 gap-8">
          <ul className="list-none space-y-6">
            <li className="bg-slate-100 dark:bg-slate-800 p-5 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 flex justify-between items-center">
              <span className="font-semibold text-slate-700 dark:text-slate-300">Uniqueness Ratio:</span>
              <strong className="text-2xl text-emerald-600 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-900/30 px-4 py-1 rounded-xl">1.0 (100%)</strong>
            </li>
            <li className="bg-slate-100 dark:bg-slate-800 p-5 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 flex justify-between items-center">
              <span className="font-semibold text-slate-700 dark:text-slate-300">Diversity Score tổng hợp:</span>
              <strong className="text-2xl text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30 px-4 py-1 rounded-xl">0.65</strong>
            </li>
            <li className="bg-slate-100 dark:bg-slate-800 p-5 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 flex justify-between items-center">
              <span className="font-semibold text-slate-700 dark:text-slate-300">Entropy Chuỗi:</span>
              <strong className="text-2xl text-purple-600 dark:text-purple-400 bg-purple-100 dark:bg-purple-900/30 px-4 py-1 rounded-xl">2.892</strong>
            </li>
          </ul>

          <div className="bg-amber-50 dark:bg-amber-900/10 p-6 rounded-2xl border border-amber-200 dark:border-amber-800 flex flex-col justify-center shadow-sm">
            <h4 className="font-bold text-amber-700 dark:text-amber-400 mb-4 flex items-center gap-2"><span className="material-symbols-outlined">emoji_events</span> So sánh BaseLine (N-Gram)</h4>
            <p className="text-base font-medium text-slate-700 dark:text-slate-300 mb-4">
              <strong>LightweightPeptideGen</strong> đạt Bigram Diversity <strong className="text-amber-600 dark:text-amber-400">0.037</strong> so với ~0.016 của các baseline khủng như ESM2Gen hay Pep-Graphormer.
            </p>
            <p className="text-sm font-medium text-slate-600 dark:text-slate-400">
              Trigram đạt 0.84, mô hình tái tạo được phần lớn "ngữ pháp sinh học" N-mer của AMP tự nhiên nhờ Nucleus Sampling (Top-p 0.9) và Entropy Regularization.
            </p>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 16,
    title: "Độ phức tạp Đo lường Tính toán",
    content: (
      <div className="grid md:grid-cols-2 gap-10 text-xl">
        <div className="space-y-6 bg-white/50 dark:bg-slate-800/50 p-8 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm relative overflow-hidden">
          <div className="absolute right-0 top-0 text-9xl text-slate-200 dark:text-slate-700/50 opacity-20 pointer-events-none material-symbols-outlined">memory</div>
          <h3 className="font-bold text-3xl border-b-2 border-slate-200 dark:border-slate-700 pb-4 relative z-10 text-slate-800 dark:text-slate-100">VRAM Usage</h3>
          <ul className="list-disc pl-8 space-y-6 relative z-10 font-medium">
            <li><strong>Môi trường Training:</strong> Vận hành trơn tru ở mức <span className="text-rose-500 font-bold">18 - 22 GB</span>. Không gặp lỗi tràn bộ nhớ (OOM).</li>
            <li><strong>Môi trường Inference:</strong> Bộ nhớ tiêu thụ thu hẹp chỉ còn <span className="text-emerald-500 font-bold">~12 GB</span> phù hợp Card độ hoạ laptop tầm trung.</li>
          </ul>
        </div>
        <div className="bg-cyan-50 dark:bg-cyan-900/10 p-8 rounded-3xl border border-cyan-200 dark:border-cyan-800 shadow-sm flex flex-col justify-center">
          <h3 className="font-bold text-2xl text-cyan-700 dark:text-cyan-400 mb-6">Tối ưu Trade-off (Đánh đổi)</h3>
          <p className="font-medium text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
            Các mô hình khác sử dụng hàng Tỉ tham số đánh đổi hiệu năng xử lí. Bằng thiết kế <strong>Selective Freezing</strong>, <strong>Gradient Checkpointing</strong> và <strong>Mixed Precision</strong>:
          </p>
          <div className="p-4 bg-white/70 dark:bg-slate-900/60 rounded-xl font-bold flex flex-col gap-2 text-center border dashed border-cyan-300 dark:border-cyan-700">
            <span className="text-indigo-600 dark:text-indigo-400">Khối lượng tham số Nhỏ</span>
            <span className="material-symbols-outlined text-center rotate-90 text-slate-400">sync_alt</span>
            <span className="text-emerald-600 dark:text-emerald-400">Tốc độ sinh 1000 Peptide &lt; 2 Giây</span>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 17,
    title: "Hạn chế của nghiên cứu",
    content: (
      <div className="bg-red-50 dark:bg-red-900/10 p-10 rounded-3xl border border-red-200 dark:border-red-900 shadow-sm">
        <div className="text-center font-bold text-red-500 dark:text-red-400 mb-8 max-w-2xl mx-auto">
          Mặc dù mô hình mang lại tiềm năng to lớn ở không gian "In-silico" (Mô phỏng bằng Máy tính), bài nghiên cứu cũng nhận diện những mặt giới hạn hiển nhiên.
        </div>
        <ul className="space-y-6 text-xl text-slate-800 dark:text-slate-200 font-medium">
          <li className="flex gap-4 items-center bg-white/60 dark:bg-slate-800/60 p-5 rounded-2xl border border-red-100 dark:border-red-900/50">
            <span className="material-symbols-outlined text-4xl text-red-500 shrink-0">biotech</span>
            <div>
              <strong className="block text-red-700 dark:text-red-400 mb-1">Chưa có xác nhận Thực nghiệm Ướt (Wet lab):</strong>
              Mô hình chỉ được tối ưu bằng các chỉ số lý thuyết, thiếu báo cáo lâm sàng thử trên vi khuẩn thật.
            </div>
          </li>
          <li className="flex gap-4 items-center bg-white/60 dark:bg-slate-800/60 p-5 rounded-2xl border border-red-100 dark:border-red-900/50">
            <span className="material-symbols-outlined text-4xl text-red-500 shrink-0">view_in_ar</span>
            <div>
              <strong className="block text-red-700 dark:text-red-400 mb-1">Thiếu kiểm định động lực học phân tử cấu trúc 3D đầy đủ:</strong>
              GATv2 chỉ xấp xỉ liên kết tĩnh, không phản ánh năng lượng tự do động (Molecular Dynamics).
            </div>
          </li>
          <li className="flex gap-4 items-center bg-white/60 dark:bg-slate-800/60 p-5 rounded-2xl border border-red-100 dark:border-red-900/50">
            <span className="material-symbols-outlined text-4xl text-red-500 shrink-0">warning</span>
            <div>
              <strong className="block text-red-700 dark:text-red-400 mb-1">Phụ thuộc Data Bias:</strong>
              Chất lượng đầu ra mang âm hưởng của bộ APD3 và DBAASP.
            </div>
          </li>
        </ul>
      </div>
    )
  },
  {
    id: 18,
    title: "Hướng phát triển",
    content: (
      <div className="space-y-8 text-xl">
        <h3 className="font-bold text-2xl text-amber-600 dark:text-amber-400 mb-2 border-b-2 border-amber-200 dark:border-amber-800 pb-2">Hướng đi tiếp theo</h3>
        <ul className="list-disc pl-6 space-y-5 font-medium text-slate-800 dark:text-slate-200 text-lg">
          <li><strong className="text-emerald-600 dark:text-emerald-400">Tích hợp AlphaFold/ESMFold Runtime:</strong> Ghép mô hình dự đoán cấu trúc trực tiếp vào Loss Function để Reward mô hình chuẩn 3D thời gian thực.</li>
          <li>Phát triển Multi-objective optimization RL tối ưu sinh học.</li>
          <li>Xây dựng Hệ sinh thái Web Application SaaS phục vụ giáo dục / y tế.</li>
        </ul>
      </div>
    )
  },
  {
    id: 19,
    title: "Đóng góp khoa học",
    content: (
      <div className="bg-blue-50 dark:bg-blue-900/10 p-10 rounded-3xl border border-blue-200 dark:border-blue-900 shadow-sm h-full flex flex-col justify-center">
        <div className="text-center mb-8 bg-white/60 dark:bg-slate-800/60 p-4 rounded-2xl border border-blue-100 dark:border-blue-900 font-bold text-blue-900 dark:text-blue-200 text-xl">
          Thành quả mang lại ý nghĩa to lớn, giảm phụ thuộc vào các máy chủ High Performance Computing:
        </div>
        <ul className="space-y-6 text-xl font-bold text-slate-800 dark:text-slate-100">
          <li className="flex gap-4 items-center bg-white/70 dark:bg-slate-800/80 p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-blue-100 dark:bg-blue-900/50 p-3 rounded-full shrink-0">
              <span className="material-symbols-outlined text-blue-600 dark:text-blue-400 text-3xl block">memory</span>
            </div>
            <div>Đề xuất kiến trúc lai ghép <span className="text-blue-600 dark:text-blue-400">ESM-GATv2</span> tinh gọn nhất với khả năng cân bằng biểu diễn Không gian, Trình tự và Hóa lý.</div>
          </li>
          <li className="flex gap-4 items-center bg-white/70 dark:bg-slate-800/80 p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-emerald-100 dark:bg-emerald-900/50 p-3 rounded-full shrink-0">
              <span className="material-symbols-outlined text-emerald-600 dark:text-emerald-400 text-3xl block">integration_instructions</span>
            </div>
            <div>Xây dựng hoàn thiện <span className="text-emerald-600 dark:text-emerald-400">Pipeline Ba Pha (MLE ➔ GAN ➔ RL/SCST)</span> giải quyết triệt để gradient đứt gãy trong sinh chuỗi rời rạc.</div>
          </li>
          <li className="flex gap-4 items-center bg-white/70 dark:bg-slate-800/80 p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-purple-100 dark:bg-purple-900/50 p-3 rounded-full shrink-0">
              <span className="material-symbols-outlined text-purple-600 dark:text-purple-400 text-3xl block">group</span>
            </div>
            <div><span className="text-purple-600 dark:text-purple-400">Dân chủ hóa nền tảng:</span> Cho phép các phòng thí nghiệm nguồn lực hẹp có thể sáng tạo in-silico tốc độ cao.</div>
          </li>
        </ul>
      </div>
    )
  },
  {
    id: 20,
    title: "Tài liệu tham khảo",
    content: (
      <div className="bg-white/40 dark:bg-slate-800/40 p-10 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden relative">
        <span className="material-symbols-outlined absolute top-10 right-10 text-9xl text-slate-100 dark:text-slate-700/30">auto_stories</span>
        <ul className="list-decimal pl-8 space-y-6 text-xl font-medium text-slate-700 dark:text-slate-300 relative z-10">
          <li className="p-3 hover:bg-slate-100 dark:hover:bg-slate-700/50 rounded-lg transition-colors border-b border-dashed border-slate-300 dark:border-slate-600">
            Guruprasad et al. (1990) — <em className="text-primary font-bold">Correlation between stability of a protein and its dipeptide composition: a novel approach for predicting in vivo stability of a protein from its primary sequence.</em>
          </li>
          <li className="p-3 hover:bg-slate-100 dark:hover:bg-slate-700/50 rounded-lg transition-colors border-b border-dashed border-slate-300 dark:border-slate-600">
            Kyte, J., & Doolittle, R. F. (1982) — <em className="text-primary font-bold">A simple method for displaying the hydropathic character of a protein.</em>
          </li>
          <li className="p-3 hover:bg-slate-100 dark:hover:bg-slate-700/50 rounded-lg transition-colors border-b border-dashed border-slate-300 dark:border-slate-600">
            Lin, Z., et al. (Meta AI, 2022) — <em className="text-primary font-bold">Evolutionary-scale prediction of atomic-level protein structure with a language model (ESM-2).</em>
          </li>
          <li className="p-3 hover:bg-slate-100 dark:hover:bg-slate-700/50 rounded-lg transition-colors border-b border-dashed border-slate-300 dark:border-slate-600">
            Brody, S., et al. (2021) — <em className="text-primary font-bold">How Attentive are Graph Attention Networks? (GATv2).</em>
          </li>
          <li className="p-3 hover:bg-slate-100 dark:hover:bg-slate-700/50 rounded-lg transition-colors">
            Jumper, J., et al. (DeepMind, 2021) — <em className="text-primary font-bold">Highly accurate protein structure prediction with AlphaFold.</em>
          </li>
        </ul>
      </div>
    )
  },
  {
    id: 21,
    title: "Bài học kinh nghiệm",
    content: (
      <div className="grid md:grid-cols-2 gap-6 text-lg font-medium relative z-10 w-full">
        <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm flex items-start gap-4 transition-transform hover:-translate-y-1 hover:shadow-md">
          <span className="material-symbols-outlined text-indigo-500 text-4xl shrink-0 mt-1">architecture</span>
          <div>
            <h4 className="font-bold text-slate-800 dark:text-slate-100 mb-2">Chỉ số sinh học ≠ Đặc tính thực</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400">Mô hình dễ học mẹo để Hack chỉ số tính toán. Phải kết hợp ràng buộc hóa lý để ngăn "ảo giác sinh học".</p>
          </div>
        </div>
        <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm flex items-start gap-4 transition-transform hover:-translate-y-1 hover:shadow-md">
          <span className="material-symbols-outlined text-emerald-500 text-4xl shrink-0 mt-1">science</span>
          <div>
            <h4 className="font-bold text-slate-800 dark:text-slate-100 mb-2">Ablation Study (Đánh giá tách biệt)</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400">Luôn phân tích tách rời ESM-2 ra sao, GNN ra sao. Đây là nền tảng sống còn để khẳng định sức mạnh Module đề xuất.</p>
          </div>
        </div>
        <div className="bg-red-50 dark:bg-red-900/10 p-6 rounded-2xl border border-red-200 dark:border-red-800 shadow-sm flex items-start gap-4 text-red-700 dark:text-red-400 hover:shadow-md transition-shadow md:col-span-2 mx-auto w-full max-w-2xl">
          <span className="material-symbols-outlined text-red-500 text-4xl shrink-0 mt-1">warning</span>
          <div>
            <h4 className="font-bold mb-2">GAN Mode Collapse</h4>
            <p className="text-sm opacity-90">Sinh chuỗi Text (Token) tuần tự trên GAN khiến Generator khó truyền Gradient. Giải thuật thay thế Gumbel-Softmax cứu vãn mô hình khỏi lặp lại vô nghĩa.</p>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 22,
    title: "Kết luận",
    content: (
      <div className="space-y-6 text-2xl text-center font-bold mt-4">
        <div className="max-w-4xl mx-auto mb-10 text-xl font-medium text-slate-700 dark:text-slate-300 border-b border-slate-300 dark:border-slate-600 pb-8">
          Đề tài đã hoàn thành xuất sắc việc xây dựng và thiết lập môi trường <strong className="text-primary font-bold">LightweightPeptideGen</strong>: Giải pháp Hybrid GNN/PLM đột phá chi phí linh hoạt, mở lối cho kỉ nguyên mới tối ưu máy học cấu trúc Sinh-Hóa.
        </div>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="p-8 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300 rounded-3xl border border-emerald-200 dark:border-emerald-700 shadow-sm flex items-center justify-center gap-4 transition-transform hover:scale-[1.02]">
            <span className="material-symbols-outlined text-4xl">inventory</span>
            Đa Dạng Hóa
          </div>
          <div className="p-8 bg-blue-50 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-3xl border border-blue-200 dark:border-blue-700 shadow-sm flex items-center justify-center gap-4  transition-transform hover:scale-[1.02]">
            <span className="material-symbols-outlined text-4xl">rocket_launch</span>
            Đột phá Chi Phí
          </div>
        </div>
        <div className="p-8 mt-6 max-w-xl mx-auto bg-purple-50 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 rounded-3xl border border-purple-200 dark:border-purple-700 shadow-sm flex items-center justify-center gap-4 transition-transform hover:scale-[1.02]">
          <span className="material-symbols-outlined text-4xl">diversity_1</span>
          Mở Rộng Nhiều Bài Toán Tương Lai
        </div>
      </div>
    )
  }
];

const Documentation = () => {
  const containerRef = useRef(null);

  const handlePresentationClick = (e) => {
    // Prevent triggering on interactive elements or text selection
    if (e.target.tagName.toLowerCase() === 'a' || e.target.closest('a')) return;
    if (e.target.tagName.toLowerCase() === 'button' || e.target.closest('button')) return;
    if (window.getSelection().toString().length > 0) return;

    if (!containerRef.current) return;
    const sections = Array.from(containerRef.current.querySelectorAll('section'));

    // Calculate the horizontal middle of the viewport
    const viewportMiddle = window.scrollY + (window.innerHeight / 2);

    // Find the first section whose top edge is below the viewport middle
    let nextSection = null;
    for (const section of sections) {
      if (section.offsetTop > viewportMiddle + 50) { // add small buffer
        nextSection = section;
        break;
      }
    }

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <div className="flex bg-slate-50 dark:bg-background-dark text-slate-800 dark:text-slate-200 min-h-screen overflow-x-hidden">
      <main
        className="flex-1 w-full scroll-smooth flex flex-col items-center overflow-x-hidden min-h-screen"
        ref={containerRef}
        onClick={handlePresentationClick}
      >

        <div className="pb-32 w-full flex flex-col items-center">
          {slidesData.map((slide) => (
            <section
              key={slide.id}
              id={`slide-${slide.id}`}
              className={`${slidestyle} ${slide.important ? 'border-amber-400 dark:border-amber-500 shadow-amber-200/50 dark:shadow-amber-900/30 ring-4 ring-amber-400/20' : ''}`}
            >
              <div className={`absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[100px] -z-10 transition-all duration-700 ${slide.id % 3 === 0 ? 'bg-blue-500/10 group-hover:bg-blue-500/20' : slide.id % 3 === 1 ? 'bg-purple-500/10 group-hover:bg-purple-500/20' : 'bg-emerald-500/10 group-hover:bg-emerald-500/20'}`}></div>
              <div className={`absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full blur-[80px] -z-10 transition-all duration-700 ${slide.id % 3 === 0 ? 'bg-emerald-500/5' : slide.id % 3 === 1 ? 'bg-blue-500/5' : 'bg-purple-500/5'}`}></div>

              <div className="relative z-10 flex flex-col h-full w-full">
                {slide.title && (
                  <div className="mb-10 text-center md:text-left shrink-0">
                    <h2 className="text-4xl lg:text-5xl font-black border-b-4 border-slate-300 dark:border-slate-600 inline-block pb-3 text-slate-800 dark:text-slate-100 drop-shadow-sm">
                      {slide.title}
                    </h2>
                  </div>
                )}
                <div className="flex-1 w-full max-w-none flex flex-col justify-center">
                  <div className="w-full">
                    {slide.content}
                  </div>
                </div>
              </div>

            </section>
          ))}
        </div>

        <div className="text-center pt-16 border-t border-slate-200 dark:border-slate-700 opacity-60 relative z-10 mb-8">
          <p className="text-lg font-medium tracking-wide">Đồ án Tốt nghiệp — <strong className="text-primary font-bold">Quang Mỹ Tâm</strong></p>
        </div>
      </main>
    </div>
  );
};

export default Documentation;

