/**
 * Shared Data & Content Store (Single Source of Truth)
 * Project: trinhngocnhat.github.io (React Edition)
 * Author: Trịnh Ngọc Nhất
 */

export const SITE_DATA = {
    profile: {
        name: "Trịnh Ngọc Nhất",
        roles: {
            en: "Aspiring Backend Developer",
            vi: "Lập trình viên Backend tiềm năng"
        },
        email: "trinhngocnhat079@gmail.com",
        github: "https://github.com/trinhngocnhat",
        githubLabel: "github.com/trinhngocnhat",
        linkedin: "https://linkedin.com/in/nhat-trinhoc-87273b313",
        linkedinLabel: "linkedin.com/in/trinhngocnhat",
        location: {
            en: "Vietnam",
            vi: "Việt Nam"
        },
        avatar: "logo.jpg"
    },

    nav: [
        { key: "home", path: "/", label: { en: "Home", vi: "Trang chủ" } },
        { key: "about", path: "/about", label: { en: "About", vi: "Giới thiệu" } },
        { key: "projects", path: "/projects", label: { en: "Projects", vi: "Dự án" } }
    ],

    labels: {
        email: { en: "Email", vi: "Email" },
        github: { en: "GitHub", vi: "GitHub" },
        linkedin: { en: "LinkedIn", vi: "LinkedIn" },
        location: { en: "Location", vi: "Vị trí" },
        learnMore: { en: "Learn More About Me →", vi: "Tìm hiểu thêm về tôi →" },
        exploreProjects: { en: "Explore Projects", vi: "Xem danh sách dự án" },
        sourceCode: { en: "Source Code ↗", vi: "Mã nguồn ↗" },
        professionalSummary: { en: "Professional Summary", vi: "Tóm tắt chuyên môn" },
        aboutBackground: { en: "About & Background", vi: "Giới thiệu & Nền tảng" },
        keyExpertise: { en: "Key Expertise", vi: "Kỹ năng nổi bật" },
        technicalSkills: { en: "Technical Skills Matrix", vi: "Ma trận kỹ năng kỹ thuật" },
        featuredProjects: { en: "Featured Technical Projects", vi: "Dự án kỹ thuật tiêu biểu" },
        featuredProjectsDesc: { 
            en: "A showcase of applications, backend service designs, and software architectural explorations.",
            vi: "Tổng hợp các ứng dụng, dịch vụ backend và các thử nghiệm kiến trúc phần mềm thực tế."
        }
    },

    summaries: {
        short: {
            en: "Aspiring Backend Developer with 3 months of IT Helpdesk experience, skilled in troubleshooting hardware and software issues, network connectivity, internet configuration, system testing, and end-user technical support.",
            vi: "Là ứng viên Backend tiềm năng với 3 tháng kinh nghiệm IT Helpdesk, có kĩ năng xử lý sự cố phần cứng và phần mềm, kết nối mạng, cấu hình internet, kiểm thử hệ thống và hỗ trợ kỹ thuật cho người dùng cuối."
        },
        shortSub: {
            en: "Currently mastering backend development, RESTful API design, database architecture, and clean software patterns. Passionate about building reliable, scalable backend systems and eager to contribute to a professional engineering team.",
            vi: "Hiện đang tập trung nâng cao chuyên môn phát triển backend, xây dựng RESTful API, thiết kế cơ sở dữ liệu và kiến trúc phần mềm sạch. Đam mê xây dựng hệ thống backend ổn định, có khả năng mở rộng cao và mong muốn đóng góp vào đội ngũ phát triển chuyên nghiệp."
        },
        full: [
            {
                en: "I am an enthusiastic IT professional transitioning into backend software engineering. With a foundational background in IT Helpdesk support, I bring practical insights into system operations, network configurations, hardware/software troubleshooting, and end-user requirements.",
                vi: "Tôi là một kỹ sư CNTT nhiệt huyết đang chuyển hướng chuyên sâu sang lĩnh vực lập trình backend. Với nền tảng thực tế từ 3 tháng làm việc tại vị trí IT Helpdesk, tôi hiểu rõ quy trình vận hành hệ thống, cấu hình mạng, xử lý sự cố phần cứng/phần mềm và đáp ứng yêu cầu từ người dùng cuối."
            },
            {
                en: "Driven by a passion for how web services process data behind the scenes, I am actively building my expertise in Node.js, Express, REST APIs, SQL databases, and modern software design patterns.",
                vi: "Được thúc đẩy bởi niềm đam mê với cách các dịch vụ web xử lý dữ liệu đằng sau hậu trường, tôi liên tục học hỏi và làm chủ các công nghệ Node.js, Express, REST APIs, cơ sở dữ liệu SQL cùng các mẫu thiết kế phần mềm hiện đại."
            }
        ]
    },

    helpdeskExperience: {
        title: {
            en: "Helpdesk Experience (3 Months)",
            vi: "Kinh nghiệm Helpdesk (3 Tháng)"
        },
        items: [
            {
                en: "Resolved hardware and software incidents for end users with clear documentation and quick turnaround times.",
                vi: "Giải quyết sự cố phần cứng và phần mềm cho người dùng cuối với tài liệu hướng dẫn và theo dõi rõ ràng."
            },
            {
                en: "Configured network and internet access for office environments ensuring reliable connectivity.",
                vi: "Cấu hình mạng nội bộ và truy cập internet cho môi trường văn phòng, đảm bảo kết nối ổn định."
            },
            {
                en: "Performed system testing and quality checks for desktop and mobile setups.",
                vi: "Thực hiện kiểm thử hệ thống và kiểm tra chất lượng cài đặt cho máy tính để bàn và thiết bị di động."
            },
            {
                en: "Handled user technical support with positive communication, empathy, and continuous follow-up.",
                vi: "Hỗ trợ kỹ thuật cho người dùng với tinh thần giao tiếp tích cực, tận tâm và chu đáo."
            }
        ]
    },

    skills: [
        {
            category: { en: "Languages", vi: "Ngôn ngữ lập trình" },
            tags: ["JavaScript", "TypeScript", "SQL", "Kotlin", "C#"]
        },
        {
            category: { en: "Backend & APIs", vi: "Phát triển Backend" },
            tags: ["Node.js", "Express.js", "RESTful API", "Authentication"]
        },
        {
            category: { en: "Databases", vi: "Hệ cơ sở dữ liệu" },
            tags: ["SQL Server", "SQLite", "Room DB", "Database Design"]
        },
        {
            category: { en: "Frontend & Mobile", vi: "Frontend & Mobile" },
            tags: ["React", "Next.js", "Tailwind CSS (Basic)", "Jetpack Compose"]
        },
        {
            category: { en: "Developer Tools", vi: "Công cụ phát triển" },
            tags: ["Git", "GitHub", "Postman", "VS Code", "SSMS"]
        },
        {
            category: { en: "Architecture & Concepts", vi: "Mẫu thiết kế & Kiến thức" },
            tags: ["MVC", "MVVM", "Bridge Pattern", "Networking", "Testing"]
        }
    ],

    projects: [
        {
            id: "portfolio-website",
            title: {
                en: "Personal Portfolio & Profile",
                vi: "Trang Cá Nhân & Portfolio"
            },
            description: {
                en: "Modern Single-Page Portfolio built with React 19, Vite, and Tailwind CSS v4 featuring dynamic bilingual translation, responsive layout, and clean UI components.",
                vi: "Trang web cá nhân hiện đại xây dựng bằng React 19, Vite và Tailwind CSS v4 với tính năng chuyển đổi đa ngôn ngữ, giao diện responsive và các component tối ưu."
            },
            tags: ["React 19", "Tailwind CSS v4", "Vite", "JavaScript", "GitHub Pages"],
            githubUrl: "https://github.com/trinhngocnhat/trinhngocnhat.github.io"
        },
        {
            id: "motel-manager",
            title: {
                en: "Motel Management System",
                vi: "Hệ Thống Quản Lý Phòng Trọ (Motel Manager)"
            },
            description: {
                en: "Management system designed to log room information, track monthly utility bills, tenant records, payment statuses, and automated reporting.",
                vi: "Hệ thống quản lý phòng trọ hỗ trợ quản lý thông tin phòng, tính tiền điện nước hàng tháng, lưu trữ hồ sơ người thuê và theo dõi trạng thái thanh toán."
            },
            tags: ["Node.js", "Express", "SQL", "Backend", "Management System"],
            githubUrl: "https://github.com/trinhngocnhat/motel-manager"
        },
        {
            id: "laughing-garbanzo",
            title: {
                en: "Backend Service & API Engine",
                vi: "Dịch Vụ Backend & API Engine (Laughing Garbanzo)"
            },
            description: {
                en: "Scalable backend service featuring RESTful API endpoints, data validation, database connection modules, and structured error handling architecture.",
                vi: "Dự án dịch vụ backend xử lý RESTful API, xác thực dữ liệu, kết nối cơ sở dữ liệu và cấu trúc xử lý lỗi tập trung."
            },
            tags: ["Node.js", "Express.js", "RESTful API", "SQL Server", "Backend"],
            githubUrl: "https://github.com/trinhngocnhat/laughing-garbanzo"
        },
        {
            id: "project-intern",
            title: {
                en: "Internship System Development Project",
                vi: "Dự Án Thực Tập & Phát Triển Hệ Thống (Project Intern)"
            },
            description: {
                en: "Practical internship project demonstrating system testing, issue tracking, software integration, end-user technical support, and backend development practices.",
                vi: "Dự án thực tập ứng dụng thực tế thể hiện kỹ năng kiểm thử hệ thống, xử lý sự cố, tích hợp phần mềm và phát triển ứng dụng backend."
            },
            tags: ["JavaScript", "Node.js", "System Support", "IT Helpdesk", "Testing"],
            githubUrl: "https://github.com/trinhngocnhat/project_intern"
        }
    ],

    careerGoals: {
        title: {
            en: "Career Goals",
            vi: "Mục tiêu nghề nghiệp"
        },
        description: {
            en: "My short-term goal is to join a forward-thinking software development team as a Junior Backend Engineer, where I can apply my problem-solving skills to craft efficient API services and optimize database queries. Long-term, I aim to master distributed systems, microservice architectures, and lead impactful software initiatives.",
            vi: "Mục tiêu ngắn hạn của tôi là gia nhập một đội ngũ phát triển phần mềm chuyên nghiệp ở vị trí Junior Backend Engineer, nơi tôi có thể áp dụng tư duy giải quyết vấn đề để xây dựng các API tối ưu và truy vấn dữ liệu hiệu quả. Về lâu dài, tôi hướng tới việc làm chủ các hệ thống phân tán, kiến trúc microservices và dẫn dắt các dự án phần mềm có giá trị lớn."
        }
    },

    footer: {
        text: {
            en: "© 2026 Trịnh Ngọc Nhất | Powered by React 18, Tailwind CSS & GoF Bridge Pattern",
            vi: "© 2026 Trịnh Ngọc Nhất | Xây dựng với React 18, Tailwind CSS & GoF Bridge Pattern"
        }
    }
};
