/**
 * Shared Data & Content Store (Single Source of Truth)
 * Project: trinhngocnhat.github.io (React Edition)
 * Author: Trịnh Ngọc Nhất
 */

export const SITE_DATA = {
    profile: {
        name: "Trịnh Ngọc Nhất",
        roles: {
            en: "IT Helpdesk Specialist",
            vi: "Chuyên viên Helpdesk CNTT"
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
        featuredProjects: { en: "Featured Projects", vi: "Dự án nổi bật" },
        featuredProjectsDesc: { 
            en: "A showcase of practical projects, IT support tools, and system solutions.",
            vi: "Tổng hợp các dự án thực tế, công cụ hỗ trợ CNTT và giải pháp hệ thống."
        }
    },

    summaries: {
        short: {
            en: "IT Helpdesk candidate with 3 months of hands-on support experience, skilled at troubleshooting hardware and software issues, network connectivity, system setup, and end-user technical support.",
            vi: "Ứng viên Helpdesk CNTT với 3 tháng kinh nghiệm thực tế trong hỗ trợ, có khả năng xử lý sự cố phần cứng và phần mềm, kết nối mạng, cài đặt hệ thống và hỗ trợ người dùng cuối."
        },
        shortSub: {
            en: "Focused on helpdesk and desktop support roles with strong communication, technical documentation, and incident response skills.",
            vi: "Tập trung vào vị trí Helpdesk và hỗ trợ máy tính với kỹ năng giao tiếp tốt, viết tài liệu kỹ thuật và xử lý sự cố hiệu quả."
        },
        full: [
            {
                en: "I am an enthusiastic IT support professional seeking a helpdesk role. With practical experience in IT Helpdesk support, I provide clear incident resolution, network configuration, hardware/software troubleshooting, and supportive end-user communication.",
                vi: "Tôi là một chuyên viên hỗ trợ CNTT nhiệt huyết đang tìm kiếm vị trí Helpdesk. Với kinh nghiệm thực tế tại bộ phận Helpdesk, tôi mang đến khả năng giải quyết sự cố rõ ràng, cấu hình mạng, xử lý phần cứng/phần mềm và giao tiếp hỗ trợ người dùng cuối."
            },
            {
                en: "I am committed to improving support workflows, resolving user issues quickly, and continuing to learn IT operations, system access, and technical assistance best practices.",
                vi: "Tôi cam kết cải thiện quy trình hỗ trợ, giải quyết vấn đề người dùng nhanh chóng và tiếp tục học hỏi về vận hành CNTT, truy cập hệ thống và thực tiễn hỗ trợ kỹ thuật."
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
                en: "Resolved hardware and software incidents for end users with clear documentation and timely communication.",
                vi: "Giải quyết sự cố phần cứng và phần mềm cho người dùng cuối với tài liệu chính xác và liên lạc kịp thời."
            },
            {
                en: "Configured network access and internet connectivity for office and remote work environments.",
                vi: "Cấu hình truy cập mạng và kết nối internet cho môi trường văn phòng và làm việc từ xa."
            },
            {
                en: "Performed system setup, diagnostics, and quality checks for desktop and mobile workstations.",
                vi: "Thực hiện cài đặt hệ thống, chẩn đoán và kiểm tra chất lượng cho máy trạm và thiết bị di động."
            },
            {
                en: "Provided user technical support with empathy, proactive follow-up, and helpful guidance.",
                vi: "Cung cấp hỗ trợ kỹ thuật cho người dùng với sự đồng cảm, theo dõi chủ động và hướng dẫn hữu ích."
            }
        ]
    },

    skills: [
        {
            category: { en: "Support Tools", vi: "Công cụ hỗ trợ" },
            tags: ["Service Desk", "Ticketing", "Remote Support", "Documentation"]
        },
        {
            category: { en: "IT Support Skills", vi: "Kỹ năng Hỗ trợ CNTT" },
            tags: ["Troubleshooting", "Hardware Repair", "Software Installation", "User Training"]
        },
        {
            category: { en: "Network & Systems", vi: "Mạng & Hệ thống" },
            tags: ["Network Access", "Wi-Fi Setup", "System Configuration", "Device Management"]
        },
        {
            category: { en: "Technical Platforms", vi: "Nền tảng Kỹ thuật" },
            tags: ["Windows", "Linux Basics", "Office 365", "Active Directory"]
        },
        {
            category: { en: "Tools & Collaboration", vi: "Công cụ & Hợp tác" },
            tags: ["Git", "GitHub", "Postman", "VS Code", "SSMS"]
        },
        {
            category: { en: "Operations & Practices", vi: "Vận hành & Thực tiễn" },
            tags: ["ITIL Concepts", "Quality Checks", "User Communication", "Problem Solving"]
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
                en: "Service Desk Management System",
                vi: "Hệ Thống Quản Lý Dịch Vụ Helpdesk"
            },
            description: {
                en: "Service desk management tool for logging issues, tracking support requests, monitoring service statuses, and generating operational reports.",
                vi: "Công cụ quản lý helpdesk để ghi nhận sự cố, theo dõi yêu cầu hỗ trợ, giám sát trạng thái dịch vụ và tạo báo cáo vận hành."
            },
            tags: ["IT Support", "Ticketing", "Node.js", "SQL", "Management"],
            githubUrl: "https://github.com/trinhngocnhat/motel-manager"
        },
        {
            id: "laughing-garbanzo",
            title: {
                en: "Helpdesk Service Engine",
                vi: "Nền Tảng Dịch Vụ Helpdesk (Laughing Garbanzo)"
            },
            description: {
                en: "A support service engine built for incident handling, data validation, workflow automation, and structured response tracking.",
                vi: "Nền tảng dịch vụ hỗ trợ dành cho xử lý sự cố, xác thực dữ liệu, tự động hóa quy trình và theo dõi phản hồi có cấu trúc."
            },
            tags: ["Node.js", "Express.js", "IT Support", "Automation", "Service Workflow"],
            githubUrl: "https://github.com/trinhngocnhat/laughing-garbanzo"
        },
        {
            id: "project-intern",
            title: {
                en: "IT Support Internship Project",
                vi: "Dự Án Thực Tập Hỗ Trợ CNTT"
            },
            description: {
                en: "Internship project showcasing system testing, issue tracking, software integration, user support, and practical helpdesk workflows.",
                vi: "Dự án thực tập thể hiện kiểm thử hệ thống, theo dõi sự cố, tích hợp phần mềm, hỗ trợ người dùng và quy trình helpdesk thực tiễn."
            },
            tags: ["JavaScript", "IT Support", "System Support", "Helpdesk", "Testing"],
            githubUrl: "https://github.com/trinhngocnhat/project_intern"
        }
    ],

    careerGoals: {
        title: {
            en: "Career Goals",
            vi: "Mục tiêu nghề nghiệp"
        },
        description: {
            en: "My short-term goal is to join a professional IT helpdesk or technical support team, where I can use my troubleshooting and customer service skills to resolve issues efficiently. Long-term, I want to grow into IT operations and support leadership while helping teams maintain reliable systems.",
            vi: "Mục tiêu ngắn hạn của tôi là gia nhập đội ngũ Helpdesk hoặc hỗ trợ kỹ thuật chuyên nghiệp, nơi tôi có thể sử dụng kỹ năng xử lý sự cố và dịch vụ khách hàng để giải quyết vấn đề hiệu quả. Về lâu dài, tôi muốn phát triển vào lĩnh vực vận hành CNTT và lãnh đạo hỗ trợ, góp phần duy trì hệ thống ổn định cho đội ngũ."
        }
    },

    footer: {
        text: {
            en: "© 2026 Trịnh Ngọc Nhất | IT Helpdesk Portfolio powered by React 19 & Tailwind CSS",
            vi: "© 2026 Trịnh Ngọc Nhất | Portfolio Helpdesk CNTT xây dựng cùng React 19 & Tailwind CSS"
        }
    }
};
