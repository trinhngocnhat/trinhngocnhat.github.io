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
            id: "rest-api",
            title: {
                en: "RESTful API Backend Engine",
                vi: "Hệ thống RESTful API Backend Engine"
            },
            description: {
                en: "Scalable backend micro-service with Express.js, SQL Server database integration, JWT authentication, and structured error handling for RESTful web applications.",
                vi: "Dịch vụ backend xử lý dữ liệu xây dựng trên Node.js, Express.js tích hợp SQL Server, phân quyền bằng JWT Token và cấu trúc xử lý lỗi tập trung cho các ứng dụng web."
            },
            tags: ["Node.js", "Express", "SQL Server", "REST API"],
            githubUrl: "https://github.com/trinhngocnhat"
        },
        {
            id: "helpdesk-tracker",
            title: {
                en: "IT Helpdesk Ticket & Asset Tracker",
                vi: "Hệ thống IT Helpdesk Ticket & Asset Tracker"
            },
            description: {
                en: "Operational management tool for logging user incidents, tracking office hardware assets, assignment workflows, and reporting connectivity statuses based on 3 months of Helpdesk experience.",
                vi: "Công cụ quản lý nội bộ ghi nhận sự cố người dùng, theo dõi tài sản phần cứng văn phòng, phân công công việc và báo cáo trạng thái dựa trên 3 tháng kinh nghiệm thực tế tại Helpdesk."
            },
            tags: ["JavaScript", "Node.js", "SQLite", "System Support"],
            githubUrl: "https://github.com/trinhngocnhat"
        },
        {
            id: "android-task-manager",
            title: {
                en: "Android Task Manager App",
                vi: "Ứng dụng Android Task Manager"
            },
            description: {
                en: "Native Android application built with Kotlin and Jetpack Compose featuring local data persistence using Room Database, asynchronous Coroutines, and clean MVVM architecture.",
                vi: "Ứng dụng di động Android thuần viết bằng Kotlin và Jetpack Compose, lưu trữ dữ liệu offline với Room Database, xử lý bất đồng bộ Coroutines và mô hình kiến trúc MVVM."
            },
            tags: ["Kotlin", "Jetpack Compose", "Room DB", "MVVM"],
            githubUrl: "https://github.com/trinhngocnhat"
        },
        {
            id: "bridge-portfolio",
            title: {
                en: "React + Tailwind Multi-Lang Portfolio",
                vi: "Website Portfolio React + Tailwind Đa Ngôn Ngữ"
            },
            description: {
                en: "Personal portfolio application built with React 18, Vite, and Tailwind CSS implementing the Gang of Four (GoF) Bridge Design Pattern for language switching & client-side routing on GitHub Pages.",
                vi: "Ứng dụng trang cá nhân xây dựng với React 18, Vite và Tailwind CSS áp dụng mẫu thiết kế Bridge (Gang of Four) để chuyển đổi ngôn ngữ & điều hướng mượt mà trên GitHub Pages."
            },
            tags: ["React 18", "Tailwind CSS", "Vite", "Bridge Pattern", "GitHub Pages"],
            githubUrl: "https://github.com/trinhngocnhat/trinhngocnhat.github.io"
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
