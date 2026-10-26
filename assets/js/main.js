/* ==========================================================================
   MAIN.JS - HỆ THỐNG TƯƠNG TÁC WEBSITE CÔ GIÁO CHỦ NHIỆM MAI HƯỜNG
   Trường Cao đẳng Công nghiệp, Thương mại và Du lịch
   Tích hợp sẵn Fallback Data 100% để chạy trực tiếp cả trên file:// và GitHub Pages
   ========================================================================== */

const FALLBACK_CLASS_DATA = {
  "teacherInfo": {
    "name": "Cô giáo Mai Hường",
    "role": "Giáo viên Chủ nhiệm Khối 10 - 11 - 12 (Hệ Văn hóa & Đào tạo Nghề)",
    "school": "Trường Cao đẳng Công nghiệp, Thương mại và Du lịch",
    "phone": "0982909515",
    "phoneFormatted": "0982.909.515",
    "zalo": "https://zalo.me/0982909515",
    "facebook": "https://www.facebook.com/huong.tn.34518",
    "slogan": "Từ núi cao về mái trường chung – Vững văn hóa, giỏi tay nghề, ấm áp tình yêu thương nội trú!"
  },
  "studyPrograms": [
    {
      "id": "grade-10",
      "grade": "10",
      "badge": "Khối Lớp 10",
      "title": "Khối Lớp 10 – Làm Quen Môi Trường Mới & Xây Nền Tảng Vững Chắc",
      "sampleNote": "[DỮ LIỆU MẪU - CẬP NHẬT THEO HỌC KỲ]",
      "culturalFocus": "Hệ thống hóa kiến thức nền tảng từ THCS lên THPT; tập trung các môn Toán, Ngữ Văn, Lịch Sử, Địa Lý, Vật Lý, Hóa Học theo chương trình Giáo dục thường xuyên cấp THPT. Rèn phương pháp tự học buổi tối tại Ký túc xá.",
      "vocationalFocus": "Nhập môn kỹ năng nghề cơ bản, tham quan xưởng thực hành, rèn luyện tác phong công nghiệp, an toàn lao động và làm quen thiết bị thực tế tại Trường CĐ Công nghiệp, Thương mại và Du lịch.",
      "supportFocus": "Cô Mai Hường đặc biệt sát sao hỗ trợ các em lớp 10 mới từ bản làng vùng cao xuống trường, hướng dẫn từng bước cách sắp xếp phòng ở KTX, quản lý tiền ăn sáng/trưa/tối và kết bạn.",
      "dailySchedule": [
        {
          "time": "05:45 - 06:30",
          "activity": "Thức dậy, thể dục buổi sáng, vệ sinh cá nhân & ăn sáng tại KTX"
        },
        {
          "time": "07:00 - 11:15",
          "activity": "Học các môn Văn hóa lớp 10 trên giảng đường"
        },
        {
          "time": "11:30 - 13:30",
          "activity": "Ăn trưa tại nhà ăn nhà trường & nghỉ trưa tại phòng Ký túc xá"
        },
        {
          "time": "13:45 - 17:00",
          "activity": "Học lý thuyết cơ sở nghề & thực hành xưởng cơ bản"
        },
        {
          "time": "17:15 - 19:00",
          "activity": "Thể thao chiều (bóng chuyền, cầu lông), tắm giặt & ăn tối"
        },
        {
          "time": "19:30 - 21:30",
          "activity": "Giờ tự học văn hóa buổi tối có cán bộ lớp & cô chủ nhiệm đôn đốc"
        },
        {
          "time": "22:00",
          "activity": "Điểm danh quân số phòng KTX, tắt đèn nghỉ ngơi đảm bảo sức khỏe"
        }
      ]
    },
    {
      "id": "grade-11",
      "grade": "11",
      "badge": "Khối Lớp 11",
      "title": "Khối Lớp 11 – Tăng Tốc Kiến Thức & Rèn Luyện Tay Nghề Chuyên Sâu",
      "sampleNote": "[DỮ LIỆU MẪU - CẬP NHẬT THEO HỌC KỲ]",
      "culturalFocus": "Hoàn thành trọn vẹn chương trình Văn hóa lớp 11; nâng cao kỹ năng giải bài tập, làm bài kiểm tra định kỳ đạt điểm khá giỏi; chuẩn bị sớm kiến thức cốt lõi cho năm cuối cấp.",
      "vocationalFocus": "Tăng thời lượng thực hành chuyên ngành tại xưởng (Điện công nghiệp, Công nghệ Ô tô, Điện tử, Thương mại - Du lịch, Chế biến món ăn, Tin học ứng dụng...). Rèn tay nghề thành thạo từng mô-đun.",
      "supportFocus": "Phát huy vai trò anh chị khóa giữa: kèm cặp các em lớp 10 cùng phòng KTX, tham gia tích cực câu lạc bộ văn nghệ, thể thao và giữ vững kỷ luật nội trú.",
      "dailySchedule": [
        {
          "time": "05:45 - 06:30",
          "activity": "Thức dậy, gấp chăn màn vuông vắn, ăn sáng chuẩn bị lên xưởng"
        },
        {
          "time": "07:00 - 11:15",
          "activity": "Thực hành nghề chuyên sâu tại xưởng thực hành của trường"
        },
        {
          "time": "11:30 - 13:30",
          "activity": "Ăn trưa dinh dưỡng & nghỉ trưa tại Ký túc xá"
        },
        {
          "time": "13:45 - 17:00",
          "activity": "Học các môn Văn hóa THPT khối 11 trên lớp"
        },
        {
          "time": "17:15 - 19:00",
          "activity": "Sinh hoạt ngoại khóa, chăm sóc bồn hoa KTX, ăn tối"
        },
        {
          "time": "19:30 - 21:30",
          "activity": "Ôn bài văn hóa & thảo luận nhóm kỹ năng nghề"
        },
        {
          "time": "22:00",
          "activity": "Điểm danh nội trú, khóa cửa phòng an toàn và đi ngủ đúng giờ"
        }
      ]
    },
    {
      "id": "grade-12",
      "grade": "12",
      "badge": "Khối Lớp 12",
      "title": "Khối Lớp 12 – Về Đích Tốt Nghiệp THPT & Vững Tay Nghề Ra Trường",
      "sampleNote": "[DỮ LIỆU MẪU - CẬP NHẬT THEO HỌC KỲ]",
      "culturalFocus": "Tập trung ôn luyện tổng hợp, luyện đề sát cấu trúc Kỳ thi Tốt nghiệp THPT Quốc gia. Phân nhóm học sinh để kèm sát từng môn thi, quyết tâm 100% đỗ tốt nghiệp THPT.",
      "vocationalFocus": "Hoàn thiện các mô-đun nghề nâng cao, thực tập trải nghiệm thực tế tại doanh nghiệp và thi tốt nghiệp lấy Bằng Trung cấp nghề chính quy để học liên thông Cao đẳng hoặc đi làm có thu nhập ngay.",
      "supportFocus": "Tư vấn tâm lý mùa thi, hướng dẫn làm hồ sơ thi tốt nghiệp, định hướng liên thông Cao đẳng hoặc kết nối việc làm uy tín để phụ huynh vùng cao hoàn toàn yên tâm.",
      "dailySchedule": [
        {
          "time": "05:30 - 06:30",
          "activity": "Thức dậy sớm ôn bài nhẹ nhàng, vệ sinh cá nhân & ăn sáng"
        },
        {
          "time": "07:00 - 11:15",
          "activity": "Học chính khóa & Ôn luyện trọng tâm Tốt nghiệp THPT"
        },
        {
          "time": "11:30 - 13:30",
          "activity": "Ăn trưa, nghỉ ngơi lấy lại năng lượng tại KTX"
        },
        {
          "time": "13:45 - 17:00",
          "activity": "Thực hành nghề tổng hợp / Luyện đề thi thử theo tổ hợp môn"
        },
        {
          "time": "17:15 - 19:00",
          "activity": "Vận động thể chất giải tỏa căng thẳng, ăn tối tại KTX"
        },
        {
          "time": "19:30 - 22:00",
          "activity": "Tự học & giải đề ôn thi dưới sự đồng hành của cô Mai Hường"
        },
        {
          "time": "22:15",
          "activity": "Điểm danh, nghỉ ngơi tuyệt đối không thức quá khuya hại sức khỏe"
        }
      ]
    }
  ],
  "newsAndHonors": [
    {
      "id": "news-1",
      "category": "thong-bao",
      "categoryLabel": "Thông báo chung",
      "date": "26/10/2026",
      "tag": "[DỮ LIỆU MẪU - CÔ MAI HƯỜNG CẬP NHẬT]",
      "title": "Kế hoạch sinh hoạt lớp đầu tuần & Kiểm tra phòng ở Ký túc xá mùa Thu - Đông",
      "summary": "Cô Mai Hường thông báo lịch kiểm tra chăn ấm, bình nước nóng và nề nếp vệ sinh các phòng nội trú khối 10, 11, 12 để chuẩn bị đón đợt không khí lạnh.",
      "content": "Thân gửi các bậc phụ huynh và các em học sinh khối 10, 11, 12!\n\nThời tiết đang chuyển sang mùa lạnh, để đảm bảo sức khỏe cho các em học sinh từ vùng cao xuống ở nội trú, tuần này cô Mai Hường cùng Ban quản lý KTX sẽ kiểm tra và hỗ trợ từng phòng:\n\n1. Kiểm tra hệ thống bình nóng lạnh, cửa sổ chắn gió và chăn đệm ấm của từng em.\n2. Nhắc nhở các em tuyệt đối giữ ấm cổ, đi tất khi học sáng sớm và không tắm quá muộn sau 20h30.\n3. Phụ huynh ở quê nếu gửi thêm áo ấm, chăn bông xuống trường qua xe khách, vui lòng nhắn trước vào Zalo 0982.909.515 cho cô Hường để cô hướng dẫn các em ra nhận an toàn."
    },
    {
      "id": "news-2",
      "category": "hoc-tap",
      "categoryLabel": "Lịch thi & Học tập",
      "date": "24/10/2026",
      "tag": "[DỮ LIỆU MẪU - CÔ MAI HƯỜNG CẬP NHẬT]",
      "title": "Lịch ôn tập giữa học kỳ I các môn Văn hóa & Lịch thi kết thúc mô-đun Thực hành nghề",
      "summary": "Tổng hợp lịch kiểm tra định kỳ các môn Văn hóa THPT và lịch chấm điểm bài thực hành tại xưởng cho học sinh khối 10, 11 và 12.",
      "content": "Cô Mai Hường gửi tới các em học sinh và quý phụ huynh lịch trọng tâm trong 2 tuần tới:\n\n- Khối 10: Kiểm tra giữa kỳ môn Toán, Ngữ Văn và bài thực hành An toàn lao động tại xưởng.\n- Khối 11: Thi kết thúc mô-đun thực hành nghề chuyên ngành; hoàn thành đề cương ôn tập Văn hóa.\n- Khối 12: Khảo sát chất lượng đợt 1 các môn thi Tốt nghiệp THPT. Các em chú ý khung giờ tự học buổi tối từ 19h30 - 21h30 tại phòng KTX để ôn bài đạt kết quả cao nhất!"
    },
    {
      "id": "news-3",
      "category": "hoat-dong-ktx",
      "categoryLabel": "Hoạt động KTX",
      "date": "20/10/2026",
      "tag": "[DỮ LIỆU MẪU - CÔ MAI HƯỜNG CẬP NHẬT]",
      "title": "Tổng kết phong trào 'Phòng ở Ký túc xá Xanh - Sạch - Ấm áp như nhà mình'",
      "summary": "Biểu dương các phòng nội trú gọn gàng, chăn màn gấp vuông vắn, đoàn kết giúp đỡ bạn mới xuống trường làm quen nếp sống tập thể.",
      "content": "Trong tháng qua, các phòng nội trú của lớp cô Mai Hường đã thực hiện rất tốt nội quy Ký túc xá:\n\n- 100% phòng ở quét dọn sạch sẽ mỗi sáng trước khi lên giảng đường và xuống xưởng thực hành.\n- Các anh chị lớp 11, 12 đã nhiệt tình hướng dẫn các em lớp 10 mới xa bản làng cách đi chợ/ăn cơm nhà ăn tiết kiệm, cách bảo quản đồ dùng cá nhân.\n- Cô Hường khen ngợi tinh thần tự giác tắt thiết bị điện khi ra khỏi phòng và giữ trật tự giờ nghỉ trưa, tối."
    },
    {
      "id": "news-4",
      "category": "guong-sang",
      "categoryLabel": "Gương sáng vùng cao",
      "date": "18/10/2026",
      "tag": "[DỮ LIỆU MẪU - CÔ MAI HƯỜNG CẬP NHẬT]",
      "title": "Gương sáng nội trú: Tập thể Tổ 1 (Khối 10) vượt bỡ ngỡ đầu năm, đạt 100% giờ học tốt",
      "summary": "Từ những ngày đầu xuống trường còn nhớ nhà, bỡ ngỡ, các em học sinh vùng cao Tổ 1 đã nhanh chóng hòa nhập, đi học đúng giờ và thực hành nghề rất khéo tay.",
      "content": "Những ngày đầu nhập học, nhiều em ở các xã vùng núi cao cách trường hàng trăm cây số còn rụt rè, nhớ bố mẹ và chưa quen lịch học kết hợp giữa Văn hóa và Thực hành nghề.\n\nNhờ sự động viên sát sao mỗi tối của cô chủ nhiệm Mai Hường và sự đùm bọc của tập thể lớp, cả tổ đã lập nhóm đôi bạn cùng tiến: sáng gọi nhau dậy đúng 5h45, lên lớp ghi chép bài đầy đủ, vào xưởng thực hành nghiêm túc và cuối tuần gọi điện báo tin vui về cho gia đình!"
    },
    {
      "id": "news-5",
      "category": "guong-sang",
      "categoryLabel": "Gương sáng vùng cao",
      "date": "15/10/2026",
      "tag": "[DỮ LIỆU MẪU - CÔ MAI HƯỜNG CẬP NHẬT]",
      "title": "Vinh danh nhóm học sinh Khối 11 & 12 đạt điểm Giỏi bài thực hành tay nghề tại xưởng",
      "summary": "Không chỉ chăm chỉ học Văn hóa buổi chiều, các em còn hoàn thành xuất sắc bài thực hành kỹ thuật tại xưởng và được thầy cô bộ môn khen ngợi.",
      "content": "Học hệ vừa học văn hóa vừa học nghề tại Trường Cao đẳng Công nghiệp, Thương mại và Du lịch giúp các em rèn luyện đôi bàn tay khéo léo ngay từ năm lớp 10, 11, 12.\n\nTrong đợt đánh giá kỹ năng thực hành vừa qua, nhóm học sinh nội trú của lớp cô Mai Hường đã hoàn thành sản phẩm thực hành trước thời gian quy định, đảm bảo tuyệt đối an toàn lao động và độ chính xác kỹ thuật cao. Đây là niềm tự hào lớn gửi về cho bố mẹ nơi quê nhà!"
    },
    {
      "id": "news-6",
      "category": "thong-bao",
      "categoryLabel": "Thông báo chung",
      "date": "10/10/2026",
      "tag": "[DỮ LIỆU MẪU - CÔ MAI HƯỜNG CẬP NHẬT]",
      "title": "Hướng dẫn quy trình xin phép về thăm nhà dịp cuối tuần dành cho học sinh nội trú",
      "summary": "Quy định bắt buộc để đảm bảo an toàn tuyệt đối khi học sinh từ Ký túc xá bắt xe về quê thăm gia đình và quay lại trường đúng giờ.",
      "content": "Để đảm bảo an toàn giao thông và quản lý sĩ số nội trú chặt chẽ, cô Mai Hường nhắc nhở phụ huynh và các em quy trình xin phép về quê cuối tuần:\n\n1. Phụ huynh trực tiếp gọi điện hoặc nhắn Zalo số 0982.909.515 cho cô Mai Hường trước chiều thứ Sáu để xác nhận đón con.\n2. Học sinh viết giấy xin phép có chữ ký của cô chủ nhiệm trước khi nộp cho Ban quản lý Ký túc xá.\n3. Khi về đến nhà và khi lên xe quay lại trường vào chiều Chủ nhật, học sinh hoặc phụ huynh nhắn tin báo ngay cho cô Hường biết để cô yên tâm."
    }
  ],
  "parentFaqs": [
    {
      "q": "1. Con từ vùng núi cao xuống ở Ký túc xá (KTX) có an toàn không? Buổi tối ai quản lý các cháu?",
      "a": "Phụ huynh hoàn toàn yên tâm ạ! Ký túc xá của Trường Cao đẳng Công nghiệp, Thương mại và Du lịch có cổng bảo vệ trực 24/24, có cán bộ quản lý nội trú và cô chủ nhiệm Mai Hường thường xuyên kiểm tra, điểm danh vào 22h00 mỗi tối. Các em có khung giờ tự học buổi tối từ 19h30 - 21h30 và không được tự ý ra khỏi trường vào ban đêm."
    },
    {
      "q": "2. Học hệ vừa học Văn hóa (lớp 10, 11, 12) vừa học Nghề có bị nặng quá không? Khi ra trường con nhận được những bằng cấp gì?",
      "a": "Lịch học được nhà trường phân bổ rất khoa học và vừa sức: một buổi học các môn Văn hóa THPT cốt lõi, một buổi thực hành nghề thực tế tại xưởng (giúp các em đỡ căng thẳng lý thuyết). Sau 3 năm hoàn thành chương trình, các em vừa đủ điều kiện dự thi lấy Bằng Tốt nghiệp THPT Quốc gia, vừa nhận Bằng Trung cấp nghề chính quy để đi làm ngay hoặc học liên thông lên Cao đẳng rất thuận lợi."
    },
    {
      "q": "3. Con ở nội trú ăn uống như thế nào? Chi phí sinh hoạt hàng tháng bố mẹ nên gửi thế nào cho hợp lý?",
      "a": "Trong khuôn viên trường có căng-tin và khu dịch vụ ăn uống sạch sẽ, giá bình dân dành cho học sinh. Cô Mai Hường luôn hướng dẫn các em cách giữ thẻ ATM/tiền mặt an toàn, khuyên phụ huynh gửi tiền ăn theo từng tuần hoặc 2 tuần/lần để các em chi tiêu tiết kiệm, hợp lý, tránh tiêu xài lãng phí."
    },
    {
      "q": "4. Khi bố mẹ ở quê muốn gửi đồ ăn, chăn ấm xuống trường hoặc muốn xin phép cho con về thăm nhà thì làm thế nào?",
      "a": "Bố mẹ chỉ cần bấm nút Gọi điện hoặc Nhắn Zalo trực tiếp cho cô Mai Hường theo số 0982.909.515 trên trang web này. Nếu gửi đồ qua xe khách, bố mẹ báo biển số xe và giờ xe qua cổng trường để cô dặn con ra nhận. Nếu xin phép về quê, bố mẹ gọi trực tiếp cho cô để cô ký giấy ra cổng KTX và theo dõi cho đến khi con về tới nhà an toàn."
    },
    {
      "q": "5. Chẳng may con bị ốm sốt, cảm cúm khi thay đổi thời tiết ở Ký túc xá thì ai chăm sóc?",
      "a": "Ngay trong trường có Phòng Y tế chăm sóc sức khỏe ban đầu. Ngoài ra, các bạn cùng phòng KTX và ban cán sự lớp đều có số hotline 0982.909.515 của cô Mai Hường. Khi có em nào mệt, sốt, cô và y tế nhà trường sẽ kịp thời thăm khám, mua thuốc, nấu cháo ấm và thông báo ngay cho gia đình nắm được tình hình."
    }
  ]
};

const KTX_CHECKLIST_DEFAULT = [
  {
    id: "ktx-1",
    category: "Giấy tờ & Liên lạc",
    text: "Lưu số điện thoại & Zalo Cô chủ nhiệm Mai Hường (0982.909.515) vào danh bạ máy của em và máy của bố mẹ ở quê."
  },
  {
    id: "ktx-2",
    category: "Hành trang cá nhân",
    text: "Chuẩn bị đủ đồng phục học Văn hóa, quần áo bảo hộ thực hành xưởng nghề, áo ấm mùa đông và đồ dùng vệ sinh cá nhân."
  },
  {
    id: "ktx-3",
    category: "Nề nếp buổi sáng",
    text: "Thức dậy đúng giờ 05:45, gấp chăn màn vuông vắn, quét dọn phòng ở sạch thoáng trước khi lên lớp."
  },
  {
    id: "ktx-4",
    category: "An toàn điện & phòng cháy",
    text: "Tắt hết quạt, đèn, bình nóng lạnh và rút sạc điện thoại khi rời khỏi phòng Ký túc xá; tuyệt đối không đun nấu trái quy định."
  },
  {
    id: "ktx-5",
    category: "Giờ tự học buổi tối",
    text: "Thực hiện nghiêm túc khung giờ tự học Văn hóa & ôn bài nghề từ 19:30 - 21:30 tại phòng, giữ trật tự chung."
  },
  {
    id: "ktx-6",
    category: "Đoàn kết & Điểm danh",
    text: "Yêu thương, giúp đỡ bạn cùng phòng như anh chị em một nhà; có mặt điểm danh tại phòng trước 22:00 mỗi tối."
  },
  {
    id: "ktx-7",
    category: "Báo tin cho gia đình",
    text: "Gọi điện hỏi thăm ông bà, bố mẹ ở quê ít nhất 2-3 lần/tuần và xin phép cô Mai Hường trước mỗi lần về thăm nhà."
  }
];

let appState = {
  data: FALLBACK_CLASS_DATA,
  selectedGrade: "all",
  selectedNewsCategory: "all",
  newsSearchQuery: "",
  fontScale: "normal",
  ktxChecked: {}
};

// Safe localStorage helpers (tuân thủ chuẩn sandbox & trình duyệt chặn cookie)
function safeGetStorage(key, defaultVal) {
  try {
    const val = localStorage.getItem(key);
    return val ? JSON.parse(val) : defaultVal;
  } catch (err) {
    return defaultVal;
  }
}

function safeSetStorage(key, val) {
  try {
    localStorage.setItem(key, JSON.stringify(val));
  } catch (err) {
    // Ignore storage errors in sandboxed preview
  }
}

function showToast(message) {
  const toast = document.getElementById("toastNotification");
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("show");
  if (window._toastTimer) clearTimeout(window._toastTimer);
  window._toastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 4200);
}

// 1. Chức năng Đổi cỡ chữ A / A+ / A++ cho Phụ huynh và Học sinh
function applyFontScale(scale) {
  appState.fontScale = scale;
  const htmlEl = document.documentElement;
  htmlEl.classList.remove("font-scale-normal", "font-scale-large", "font-scale-xlarge");
  htmlEl.classList.add("font-scale-" + scale);

  document.querySelectorAll("[data-font-scale]").forEach(btn => {
    if (btn.getAttribute("data-font-scale") === scale) {
      btn.classList.add("active");
      btn.setAttribute("aria-pressed", "true");
    } else {
      btn.classList.remove("active");
      btn.setAttribute("aria-pressed", "false");
    }
  });

  safeSetStorage("gvcn_mai_huong_font_scale", scale);
}

// 2. Render Chuyên mục Học Văn Hóa & Học Nghề (Khối 10 - 11 - 12)
function renderStudyPrograms() {
  const container = document.getElementById("studyProgramContainer");
  if (!container) return;

  const programs = appState.data.studyPrograms.filter(item => {
    return appState.selectedGrade === "all" || item.grade === appState.selectedGrade;
  });

  container.innerHTML = programs.map(prog => {
    const scheduleRows = prog.dailySchedule.map(row => `
      <tr class="border-b border-slate-200 hover:bg-sky-50/70 transition-colors">
        <td class="py-3 px-4 font-bold text-sky-800 whitespace-nowrap">${row.time}</td>
        <td class="py-3 px-4 text-slate-800 font-medium">${row.activity}</td>
      </tr>
    `).join("");

    return `
      <article class="card-warm p-6 md:p-8 bg-white">
        <div class="flex flex-wrap items-center justify-between gap-3 mb-4">
          <span class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-extrabold bg-sky-100 text-sky-800 border border-sky-300">
            🎓 ${prog.badge}
          </span>
          <span class="inline-block px-3 py-1 rounded-lg text-xs font-bold bg-amber-100 text-amber-900 border border-amber-300">
            ${prog.sampleNote}
          </span>
        </div>

        <h3 class="text-xl md:text-2xl font-extrabold text-slate-900 mb-5">
          ${prog.title}
        </h3>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div class="p-4 rounded-2xl bg-sky-50 border-2 border-sky-200">
            <h4 class="font-extrabold text-sky-900 mb-2 flex items-center gap-2">
              📘 Học Văn Hóa THPT
            </h4>
            <p class="text-slate-800 text-base">${prog.culturalFocus}</p>
          </div>
          <div class="p-4 rounded-2xl bg-amber-50 border-2 border-amber-200">
            <h4 class="font-extrabold text-amber-900 mb-2 flex items-center gap-2">
              🛠️ Thực Hành Nghề Tại Xưởng
            </h4>
            <p class="text-slate-800 text-base">${prog.vocationalFocus}</p>
          </div>
          <div class="p-4 rounded-2xl bg-emerald-50 border-2 border-emerald-200">
            <h4 class="font-extrabold text-emerald-900 mb-2 flex items-center gap-2">
              💛 Đồng Hành Nội Trú KTX
            </h4>
            <p class="text-slate-800 text-base">${prog.supportFocus}</p>
          </div>
        </div>

        <div class="bg-slate-50 rounded-2xl p-4 md:p-5 border-2 border-slate-200">
          <h4 class="font-extrabold text-slate-900 mb-3 flex items-center gap-2">
            ⏰ Lịch trình mẫu trong ngày của học sinh Khối ${prog.grade} (Nội trú KTX)
          </h4>
          <div class="overflow-x-auto">
            <table class="w-full text-left border-collapse">
              <thead>
                <tr class="bg-sky-700 text-white">
                  <th class="py-3 px-4 rounded-tl-xl font-bold w-44">Khung giờ</th>
                  <th class="py-3 px-4 rounded-tr-xl font-bold">Nội dung học tập & sinh hoạt nội trú</th>
                </tr>
              </thead>
              <tbody>
                ${scheduleRows}
              </tbody>
            </table>
          </div>
        </div>
      </article>
    `;
  }).join("");
}

// 3. Render Checklist Nội trú Ký túc xá tương tác
function renderKtxChecklist() {
  const listEl = document.getElementById("ktxChecklistContainer");
  const progressTextEl = document.getElementById("ktxProgressText");
  const progressBarEl = document.getElementById("ktxProgressBar");
  if (!listEl) return;

  const total = KTX_CHECKLIST_DEFAULT.length;
  let completedCount = 0;

  listEl.innerHTML = KTX_CHECKLIST_DEFAULT.map(item => {
    const isChecked = !!appState.ktxChecked[item.id];
    if (isChecked) completedCount++;
    return `
      <label class="ktx-check-item ${isChecked ? 'checked' : ''}" for="${item.id}">
        <input type="checkbox" id="${item.id}" data-ktx-id="${item.id}" ${isChecked ? 'checked' : ''} />
        <div class="flex-1">
          <span class="inline-block text-xs font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-md mb-1 ${isChecked ? 'bg-emerald-200 text-emerald-900' : 'bg-sky-100 text-sky-900'}">
            ${item.category}
          </span>
          <p class="font-semibold text-slate-900 ${isChecked ? 'line-through opacity-80' : ''}">${item.text}</p>
        </div>
      </label>
    `;
  }).join("");

  const percent = Math.round((completedCount / total) * 100);
  if (progressTextEl) {
    progressTextEl.textContent = `Đã hoàn thành: ${completedCount}/${total} mục (${percent}%)`;
  }
  if (progressBarEl) {
    progressBarEl.style.width = `${percent}%`;
  }

  listEl.querySelectorAll("input[data-ktx-id]").forEach(input => {
    input.addEventListener("change", (e) => {
      const id = e.target.getAttribute("data-ktx-id");
      appState.ktxChecked[id] = e.target.checked;
      safeSetStorage("gvcn_mai_huong_ktx_checklist", appState.ktxChecked);
      renderKtxChecklist();
    });
  });
}

// 4. Render Bảng tin Lớp học & Góc Vinh danh Học sinh Vượt khó
function renderNewsBoard() {
  const gridEl = document.getElementById("newsGridContainer");
  const countEl = document.getElementById("newsCountBadge");
  if (!gridEl) return;

  const q = appState.newsSearchQuery.trim().toLowerCase();
  const filtered = appState.data.newsAndHonors.filter(item => {
    const matchCat = appState.selectedNewsCategory === "all" || item.category === appState.selectedNewsCategory;
    const matchQuery = !q ||
      item.title.toLowerCase().includes(q) ||
      item.summary.toLowerCase().includes(q) ||
      item.content.toLowerCase().includes(q);
    return matchCat && matchQuery;
  });

  if (countEl) {
    countEl.textContent = `Hiển thị ${filtered.length} bản tin`;
  }

  if (filtered.length === 0) {
    gridEl.innerHTML = `
      <div class="col-span-full card-warm p-8 text-center bg-white">
        <p class="text-xl font-bold text-slate-800 mb-2">Không tìm thấy thông báo phù hợp với từ khóa "${appState.newsSearchQuery}"</p>
        <p class="text-slate-600 mb-4">Quý phụ huynh và các em học sinh hãy thử xóa từ khóa tìm kiếm hoặc chọn mục "Tất cả".</p>
        <button type="button" id="resetNewsSearchBtn" class="btn-touch btn-zalo">Xem tất cả thông báo</button>
      </div>
    `;
    const resetBtn = document.getElementById("resetNewsSearchBtn");
    if (resetBtn) {
      resetBtn.addEventListener("click", () => {
        appState.newsSearchQuery = "";
        appState.selectedNewsCategory = "all";
        const searchInput = document.getElementById("newsSearchInput");
        if (searchInput) searchInput.value = "";
        document.querySelectorAll("[data-news-cat]").forEach(b => {
          b.classList.toggle("active", b.getAttribute("data-news-cat") === "all");
        });
        renderNewsBoard();
      });
    }
    return;
  }

  const badgeColors = {
    "thong-bao": "bg-sky-100 text-sky-900 border-sky-300",
    "hoc-tap": "bg-amber-100 text-amber-900 border-amber-300",
    "hoat-dong-ktx": "bg-emerald-100 text-emerald-900 border-emerald-300",
    "guong-sang": "bg-orange-100 text-orange-900 border-orange-300"
  };

  gridEl.innerHTML = filtered.map(item => {
    const colorClass = badgeColors[item.category] || "bg-sky-100 text-sky-900 border-sky-300";
    return `
      <article class="card-warm p-6 flex flex-col justify-between bg-white">
        <div>
          <div class="flex flex-wrap items-center justify-between gap-2 mb-3">
            <span class="px-3.5 py-1 rounded-full text-xs font-extrabold border ${colorClass}">
              ${item.categoryLabel}
            </span>
            <span class="text-sm font-bold text-slate-600">📅 ${item.date}</span>
          </div>
          <p class="text-xs font-bold text-amber-800 bg-amber-50 border border-amber-200 px-2.5 py-1 rounded-md inline-block mb-3">
            ${item.tag}
          </p>
          <h3 class="text-xl font-extrabold text-slate-900 mb-3">${item.title}</h3>
          <p class="text-slate-700 mb-5">${item.summary}</p>
        </div>
        <button type="button" data-open-news="${item.id}" class="btn-touch w-full bg-sky-50 hover:bg-sky-600 text-sky-900 hover:text-white border-2 border-sky-300 hover:border-sky-600 font-extrabold">
          📖 Xem chi tiết thông báo
        </button>
      </article>
    `;
  }).join("");

  gridEl.querySelectorAll("[data-open-news]").forEach(btn => {
    btn.addEventListener("click", () => {
      const newsId = btn.getAttribute("data-open-news");
      openNewsModal(newsId);
    });
  });
}

// 5. Modal Xem Chi Tiết Thông Báo
function openNewsModal(newsId) {
  const item = appState.data.newsAndHonors.find(n => n.id === newsId);
  if (!item) return;

  const modal = document.getElementById("newsDetailModal");
  const titleEl = document.getElementById("modalNewsTitle");
  const metaEl = document.getElementById("modalNewsMeta");
  const bodyEl = document.getElementById("modalNewsBody");

  if (!modal || !titleEl || !metaEl || !bodyEl) return;

  titleEl.textContent = item.title;
  metaEl.textContent = `${item.categoryLabel} | Ngày đăng: ${item.date} | ${item.tag}`;
  bodyEl.innerHTML = item.content.split("\n\n").map(p => `<p class="mb-4 text-slate-800 leading-relaxed">${p.replace(/\n/g, "<br/>")}</p>`).join("");

  modal.classList.remove("hidden");
  modal.classList.add("flex");
}

function closeNewsModal() {
  const modal = document.getElementById("newsDetailModal");
  if (!modal) return;
  modal.classList.add("hidden");
  modal.classList.remove("flex");
}

// 6. Lightbox Phóng to Ảnh
function openImageLightbox(src, caption) {
  const modal = document.getElementById("imageLightboxModal");
  const imgEl = document.getElementById("lightboxImage");
  const capEl = document.getElementById("lightboxCaption");
  if (!modal || !imgEl || !capEl) return;

  imgEl.src = src;
  capEl.textContent = caption || "Hình ảnh lớp học & nội trú Cô giáo chủ nhiệm Mai Hường";
  modal.classList.remove("hidden");
  modal.classList.add("flex");
}

function closeImageLightbox() {
  const modal = document.getElementById("imageLightboxModal");
  if (!modal) return;
  modal.classList.add("hidden");
  modal.classList.remove("flex");
}

// 7. Render FAQ Accordion cho Phụ huynh vùng cao
function renderParentFaqs() {
  const faqContainer = document.getElementById("parentFaqContainer");
  if (!faqContainer) return;

  faqContainer.innerHTML = appState.data.parentFaqs.map((faq, idx) => {
    const isOpen = idx === 0;
    return `
      <div class="card-warm overflow-hidden bg-white">
        <button type="button" data-faq-toggle="${idx}" aria-expanded="${isOpen ? 'true' : 'false'}" class="w-full text-left p-5 md:p-6 flex items-center justify-between gap-4 font-extrabold text-lg md:text-xl text-slate-900 hover:bg-sky-50/70 transition-colors cursor-pointer">
          <span>${faq.q}</span>
          <span data-faq-icon="${idx}" class="w-9 h-9 rounded-full bg-sky-100 text-sky-800 flex items-center justify-center flex-shrink-0 font-black text-xl">
            ${isOpen ? '−' : '+'}
          </span>
        </button>
        <div id="faq-answer-${idx}" class="${isOpen ? 'block' : 'hidden'} px-5 pb-6 md:px-6 md:pb-6 pt-2 border-t border-slate-200 bg-sky-50/40 text-slate-800 font-medium leading-relaxed">
          ${faq.a}
        </div>
      </div>
    `;
  }).join("");

  faqContainer.querySelectorAll("[data-faq-toggle]").forEach(btn => {
    btn.addEventListener("click", () => {
      const idx = btn.getAttribute("data-faq-toggle");
      const ansEl = document.getElementById(`faq-answer-${idx}`);
      const iconEl = document.querySelector(`[data-faq-icon="${idx}"]`);
      if (!ansEl) return;

      const isHidden = ansEl.classList.contains("hidden");
      ansEl.classList.toggle("hidden", !isHidden);
      ansEl.classList.toggle("block", isHidden);
      btn.setAttribute("aria-expanded", isHidden ? "true" : "false");
      if (iconEl) iconEl.textContent = isHidden ? "−" : "+";
    });
  });
}

// 8. Xử lý Biểu mẫu Gửi Lời Nhắn / Xin Phép / Tâm Sự Cùng Cô Mai Hường (Zalo / SMS)
function buildContactMessage() {
  const senderRole = document.getElementById("senderRole")?.value || "Phụ huynh học sinh";
  const studentName = document.getElementById("studentName")?.value.trim() || "";
  const studentGrade = document.getElementById("studentGrade")?.value || "Khối 10";
  const dormRoom = document.getElementById("dormRoom")?.value.trim() || "Chưa rõ phòng";
  const senderPhone = document.getElementById("senderPhone")?.value.trim() || "";
  const messageTopic = document.getElementById("messageTopic")?.value || "Hỏi thăm tình hình học tập & nội trú";
  const messageContent = document.getElementById("messageContent")?.value.trim() || "";

  if (!studentName || !messageContent) {
    showToast("⚠️ Vui lòng nhập Họ tên học sinh và Nội dung lời nhắn gửi cô Mai Hường!");
    return null;
  }

  const lines = [
    `[LỜI NHẮN GỬI CÔ CHỦ NHIỆM MAI HƯỜNG]`,
    `- Người gửi: ${senderRole}`,
    `- Học sinh: ${studentName} (${studentGrade})`,
    `- Phòng KTX: ${dormRoom}`,
    senderPhone ? `- SĐT liên hệ lại: ${senderPhone}` : null,
    `- Chủ đề: ${messageTopic}`,
    `- Nội dung: ${messageContent}`
  ].filter(Boolean);

  return lines.join("\n");
}

function copyTextToClipboard(text) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    return navigator.clipboard.writeText(text).catch(() => fallbackCopy(text));
  }
  return Promise.resolve(fallbackCopy(text));
}

function fallbackCopy(text) {
  const ta = document.createElement("textarea");
  ta.value = text;
  ta.style.position = "fixed";
  ta.style.opacity = "0";
  document.body.appendChild(ta);
  ta.select();
  try {
    document.execCommand("copy");
  } catch (err) {
    // ignore
  }
  document.body.removeChild(ta);
}

// Khởi chạy toàn bộ ứng dụng
document.addEventListener("DOMContentLoaded", () => {
  // 1. Khôi phục cỡ chữ & checklist từ localStorage
  const savedFont = safeGetStorage("gvcn_mai_huong_font_scale", "normal");
  applyFontScale(savedFont);

  appState.ktxChecked = safeGetStorage("gvcn_mai_huong_ktx_checklist", {
    "ktx-1": true,
    "ktx-3": true
  });

  // 2. Thử tải data/class-data.json (nếu chạy trên web server/GitHub Pages), nếu lỗi dùng FALLBACK_CLASS_DATA
  fetch("data/class-data.json")
    .then(res => res.ok ? res.json() : Promise.reject())
    .then(json => {
      appState.data = json;
      renderStudyPrograms();
      renderNewsBoard();
      renderParentFaqs();
    })
    .catch(() => {
      appState.data = FALLBACK_CLASS_DATA;
      renderStudyPrograms();
      renderNewsBoard();
      renderParentFaqs();
    });

  // Render tức thì lần đầu từ Fallback để không bao giờ trễ giao diện
  renderStudyPrograms();
  renderKtxChecklist();
  renderNewsBoard();
  renderParentFaqs();

  // 3. Sự kiện nút chỉnh cỡ chữ
  document.querySelectorAll("[data-font-scale]").forEach(btn => {
    btn.addEventListener("click", () => {
      const scale = btn.getAttribute("data-font-scale");
      applyFontScale(scale);
      const labelMap = {
        normal: "Đã chuyển sang cỡ chữ: Chữ vừa (100%)",
        large: "Đã chuyển sang cỡ chữ: Chữ TO (112%) dễ đọc",
        xlarge: "Đã chuyển sang cỡ chữ: Chữ RẤT TO (125%) cho phụ huynh"
      };
      showToast(labelMap[scale] || "Đã cập nhật cỡ chữ!");
    });
  });

  // 4. Sự kiện Menu Mobile
  const mobileMenuBtn = document.getElementById("mobileMenuBtn");
  const mobileNavDrawer = document.getElementById("mobileNavDrawer");
  if (mobileMenuBtn && mobileNavDrawer) {
    mobileMenuBtn.addEventListener("click", () => {
      const isHidden = mobileNavDrawer.classList.contains("hidden");
      mobileNavDrawer.classList.toggle("hidden", !isHidden);
      mobileMenuBtn.setAttribute("aria-expanded", isHidden ? "true" : "false");
    });

    mobileNavDrawer.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        mobileNavDrawer.classList.add("hidden");
        mobileMenuBtn.setAttribute("aria-expanded", "false");
      });
    });
  }

  // 5. Sự kiện Bộ lọc Khối lớp 10 - 11 - 12
  document.querySelectorAll("[data-grade-tab]").forEach(tab => {
    tab.addEventListener("click", () => {
      appState.selectedGrade = tab.getAttribute("data-grade-tab");
      document.querySelectorAll("[data-grade-tab]").forEach(t => {
        t.classList.toggle("active", t === tab);
      });
      renderStudyPrograms();
    });
  });

  // 6. Sự kiện Đặt lại Checklist KTX & Đánh dấu tất cả
  const resetKtxBtn = document.getElementById("resetKtxChecklistBtn");
  if (resetKtxBtn) {
    resetKtxBtn.addEventListener("click", () => {
      appState.ktxChecked = {};
      safeSetStorage("gvcn_mai_huong_ktx_checklist", appState.ktxChecked);
      renderKtxChecklist();
      showToast("Đã đặt lại bảng kiểm tra nội trú Ký túc xá!");
    });
  }

  const checkAllKtxBtn = document.getElementById("checkAllKtxBtn");
  if (checkAllKtxBtn) {
    checkAllKtxBtn.addEventListener("click", () => {
      KTX_CHECKLIST_DEFAULT.forEach(item => {
        appState.ktxChecked[item.id] = true;
      });
      safeSetStorage("gvcn_mai_huong_ktx_checklist", appState.ktxChecked);
      renderKtxChecklist();
      showToast("Tuyệt vời! Em đã hoàn thành 100% cẩm nang nội trú KTX!");
    });
  }

  // 7. Sự kiện Tìm kiếm & Lọc Bảng tin
  const newsSearchInput = document.getElementById("newsSearchInput");
  if (newsSearchInput) {
    newsSearchInput.addEventListener("input", (e) => {
      appState.newsSearchQuery = e.target.value;
      renderNewsBoard();
    });
  }

  document.querySelectorAll("[data-news-cat]").forEach(btn => {
    btn.addEventListener("click", () => {
      appState.selectedNewsCategory = btn.getAttribute("data-news-cat");
      document.querySelectorAll("[data-news-cat]").forEach(b => {
        b.classList.toggle("active", b === btn);
      });
      renderNewsBoard();
    });
  });

  // 8. Sự kiện Đóng Modal & Lightbox
  document.getElementById("closeNewsModalBtn")?.addEventListener("click", closeNewsModal);
  document.getElementById("closeNewsModalFooterBtn")?.addEventListener("click", closeNewsModal);
  document.getElementById("newsDetailModal")?.addEventListener("click", (e) => {
    if (e.target.id === "newsDetailModal") closeNewsModal();
  });

  document.getElementById("closeLightboxBtn")?.addEventListener("click", closeImageLightbox);
  document.getElementById("imageLightboxModal")?.addEventListener("click", (e) => {
    if (e.target.id === "imageLightboxModal") closeImageLightbox();
  });

  document.querySelectorAll("[data-lightbox-src]").forEach(el => {
    el.addEventListener("click", () => {
      const img = el.querySelector("img");
      const src = img ? img.src : el.getAttribute("data-lightbox-src");
      const cap = el.getAttribute("data-lightbox-caption");
      openImageLightbox(src, cap);
    });
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeNewsModal();
      closeImageLightbox();
    }
  });

  // 9. Sự kiện Form Gửi lời nhắn qua Zalo & SMS
  const updatePreviewBtn = () => {
    const role = document.getElementById("senderRole")?.value || "Phụ huynh học sinh";
    const name = document.getElementById("studentName")?.value.trim() || "[Tên học sinh]";
    const grade = document.getElementById("studentGrade")?.value || "Khối 10";
    const room = document.getElementById("dormRoom")?.value.trim() || "KTX";
    const topic = document.getElementById("messageTopic")?.value || "Trao đổi với cô chủ nhiệm";
    const content = document.getElementById("messageContent")?.value.trim() || "[Nội dung tin nhắn]";
    const previewEl = document.getElementById("messagePreviewBox");
    if (previewEl) {
      previewEl.textContent = `Kính gửi cô Mai Hường (0982.909.515) - ${role} của em ${name} (${grade}, Phòng ${room}) xin phép trao đổi về việc "${topic}": ${content}`;
    }
  };

  ["senderRole", "studentName", "studentGrade", "dormRoom", "senderPhone", "messageTopic", "messageContent"].forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      el.addEventListener("input", updatePreviewBtn);
      el.addEventListener("change", updatePreviewBtn);
    }
  });

  document.getElementById("sendZaloBtn")?.addEventListener("click", () => {
    const msg = buildContactMessage();
    if (!msg) return;
    copyTextToClipboard(msg).then(() => {
      showToast("✅ Đã sao chép nội dung tin nhắn! Đang mở Zalo Cô Mai Hường (0982.909.515)...");
      const resultBox = document.getElementById("contactSuccessNotice");
      if (resultBox) {
        resultBox.classList.remove("hidden");
        resultBox.innerHTML = `
          <p class="font-extrabold text-emerald-900 mb-1">✅ Đã chuẩn bị và sao chép nội dung lời nhắn vào bộ nhớ tạm!</p>
          <p class="text-sm text-emerald-800">Khi cửa sổ Zalo của cô Mai Hường (<strong>0982.909.515</strong>) mở ra, quý phụ huynh / học sinh chỉ cần bấm <strong>Dán (Paste)</strong> và gửi ngay.</p>
        `;
      }
      window.open("https://zalo.me/0982909515", "_blank", "noopener,noreferrer");
    });
  });

  document.getElementById("sendSmsBtn")?.addEventListener("click", () => {
    const msg = buildContactMessage();
    if (!msg) return;
    copyTextToClipboard(msg).then(() => {
      showToast("📩 Đang mở ứng dụng Tin nhắn SMS tới số 0982.909.515 của cô Mai Hường...");
      const encoded = encodeURIComponent(msg);
      window.location.href = `sms:0982909515?body=${encoded}`;
    });
  });

  document.getElementById("copyMessageOnlyBtn")?.addEventListener("click", () => {
    const msg = buildContactMessage();
    if (!msg) return;
    copyTextToClipboard(msg).then(() => {
      showToast("📋 Đã sao chép toàn bộ nội dung tin nhắn! Bạn có thể dán vào Zalo hoặc Facebook của cô Mai Hường.");
    });
  });
});
