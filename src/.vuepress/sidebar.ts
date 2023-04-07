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
                        "幂等性设计——保证数据的一致性",
                        "接口参数校验——增强服务健壮性",
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
                "Docker"
            ]
        },

    ],
});
