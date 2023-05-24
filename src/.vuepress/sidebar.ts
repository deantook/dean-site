import {sidebar} from "vuepress-theme-hope";

export const Sidebar = sidebar({
    "/": [
        "",
        {
            icon: "note",
            text: "高并发系统实战",
            prefix: "notes/高并发系统实战",
            collapsible: true,
            children: [
                {
                    text: "什么是高并发系统",
                    prefix: "什么是高并发系统",
                    collapsible: true,
                    children: [
                        "高并发系统有哪些关键指标",
                        "对比单体系统、分布式系统和微服务系统",
                    ]
                },
                {
                    text: "生产级系统框架设计的细节",
                    prefix: "生产级系统框架设计的细节",
                    collapsible: true,
                    children: [
                        "幂等性设计",
                        "接口参数校验",
                        "统一异常处理",
                        "高质量的异步任务",
                        "对象转换实战",
                    ]
                },
                {
                    text: "缓存设计",
                    prefix: "缓存设计",
                    collapsible: true,
                    children: [
                        "什么是缓存",
                        "缓存的使用",
                    ]
                },
            ]
        },
        {
            icon: "note",
            text: "运维相关记录",
            prefix: "notes/运维相关记录",
            collapsible: true,
            children: [
                "Nginx",
                "Docker",
                "k8s"
            ]
        },

    ],
});
