# 🏫 Website Công Tác Giáo Viên Chủ Nhiệm – Cô Giáo Mai Hường
**Đơn vị:** Trường Cao đẳng Công nghiệp, Thương mại và Du lịch  
**Đối tượng phục vụ:** Học sinh Khối 10, 11, 12 (Hệ vừa học văn hóa vừa học nghề) nội trú tại Ký túc xá & Phụ huynh học sinh vùng núi cao.

---

## 1. Cấu trúc bộ mã nguồn bàn giao

```text
website-gvcn-mai-huong/
├── index.html                  # Trang chính đầy đủ giao diện, chữ to rõ, nút liên hệ 1 chạm
├── a1.jpg                      # Ảnh chân dung cô giáo Mai Hường ở thư mục gốc
├── assets/
│   ├── css/
│   │   └── style.css           # Bảng màu tươi sáng, ấm áp & hệ thống phóng to cỡ chữ A+/A++
│   ├── js/
│   │   └── main.js             # Xử lý lọc khối 10-11-12, tìm kiếm, checklist KTX, form Zalo/SMS + Fallback JSON
│   └── images/
│       ├── a1.jpg              # Bản sao dự phòng ảnh chân dung cô giáo Mai Hường
│       ├── workshop.jpg        # Ảnh minh họa giờ học thực hành nghề tại xưởng
│       └── dormitory.jpg       # Ảnh minh họa phòng ở nội trú Ký túc xá
├── data/
│   └── class-data.json         # Dữ liệu lịch học, bảng tin thông báo và câu hỏi thường gặp dễ sửa
└── README.md                   # Hướng dẫn cô Mai Hường cập nhật nội dung & đưa lên GitHub Pages
```

---

## 2. Hướng dẫn cô Mai Hường thay ảnh chân dung thực tế (`a1.jpg`)

1. Cô chuẩn bị tấm ảnh chân dung thực tế của cô trên máy tính hoặc điện thoại và đổi tên file thành **`a1.jpg`** (viết thường).
2. Chép đè file **`a1.jpg`** đó vào **thư mục gốc** (nằm cạnh file `index.html`) hoặc vào trong thư mục `assets/images/a1.jpg`.
3. Trang web đã được lập trình cơ chế tự động nhận diện cả 2 vị trí (`src="a1.jpg"` kèm `onerror="this.src='assets/images/a1.jpg'"`) và tự động căn khung tỉ lệ `object-fit: cover` để ảnh luôn sắc nét, không bao giờ bị méo hình.

---

## 3. Hướng dẫn sửa Thông báo tuần, Lịch học Khối 10 - 11 - 12

Cô có thể cập nhật nội dung mới theo 1 trong 2 cách rất đơn giản:

* **Cách 1 (Khi đăng lên GitHub Pages):** Mở file `data/class-data.json` bằng trình soạn thảo văn bản (Notepad hoặc sửa trực tiếp trên GitHub), thay đổi nội dung trong các mục:
  * `"studyPrograms"`: Lịch học Văn hóa, Thực hành nghề và thời gian biểu trong ngày của từng khối 10, 11, 12.
  * `"newsAndHonors"`: Các thông báo mới nhất của lớp và danh sách gương sáng học sinh nội trú.
  * `"parentFaqs"`: Các câu hỏi giải đáp thắc mắc cho phụ huynh vùng cao.
* **Cách 2 (Khi mở trực tiếp file `index.html` trên máy tính cá nhân):** Mở thêm file `assets/js/main.js` và cập nhật biến `FALLBACK_CLASS_DATA` ở ngay đầu file để khi mở trực tiếp không cần mạng vẫn hiện đúng dữ liệu mới nhất.

---

## 4. Cách chạy thử trên máy tính và 4 bước đưa lên GitHub Pages miễn phí

### Chạy thử ngay trên máy tính:
* Cô chỉ cần giải nén thư mục `website-gvcn-mai-huong.zip` và bấm đúp chuột vào file **`index.html`**. Nhờ cơ chế **Fallback JSON** tích hợp sẵn trong `assets/js/main.js`, toàn bộ lịch học, bảng tin và câu hỏi phụ huynh sẽ hiển thị đầy đủ 100% ngay lập tức.

### 4 bước đưa website lên GitHub Pages miễn phí để lấy link gửi vào nhóm Zalo Phụ huynh & Học sinh:
1. **Bước 1:** Đăng nhập vào tài khoản [GitHub.com](https://github.com) của cô, bấm nút **`New repository`** (Tạo kho lưu trữ mới), đặt tên ví dụ: `lop-co-mai-huong`, chọn **Public** rồi bấm **Create repository**.
2. **Bước 2:** Bấm vào dòng chữ **`uploading an existing file`**, kéo toàn bộ các file và thư mục bên trong bộ code này (`index.html`, `a1.jpg`, `assets/`, `data/`, `README.md`) thả vào, sau đó bấm nút màu xanh **`Commit changes`**.
3. **Bước 3:** Trên thanh menu của kho lưu trữ, bấm vào mục **`Settings`** (Cài đặt) -> chọn mục **`Pages`** ở cột bên trái.
4. **Bước 4:** Ở phần **Branch**, chọn **`main`** (hoặc `master`) -> bấm **`Save`**. Đợi khoảng 1 – 2 phút rồi tải lại trang, GitHub sẽ cấp cho cô một đường link chính thức dạng `https://<ten-tai-khoan>.github.io/lop-co-mai-huong/` để cô gửi vào nhóm Zalo Phụ huynh và Học sinh!

---

## 5. Lưu ý về Bảo mật & Nâng cấp (Tĩnh vs Backend)

* **Hoạt động thật 100% trên GitHub Pages tĩnh:** Nút gọi điện thoại (`tel:0982909515`), nút mở Zalo (`https://zalo.me/0982909515`), nút mở Facebook (`https://www.facebook.com/huong.tn.34518`), bộ lọc khối lớp 10 - 11 - 12, tìm kiếm thông báo, nút tăng cỡ chữ A+/A++, Checklist nội trú lưu vào `localStorage`, và biểu mẫu tự động tổng hợp tin nhắn chuyển sang Zalo/SMS.
* **Nếu muốn nâng cấp lưu điểm cá nhân hoặc lưu biểu mẫu tự động vào Google Sheets:** Cần kết nối thêm Google Apps Script Web App hoặc Formspree. Mã nguồn hiện tại tuyệt đối không chứa bất kỳ API key hay mật khẩu ẩn nào để đảm bảo an toàn thông tin 100%.
