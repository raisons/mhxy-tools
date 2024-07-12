import {defineConfig} from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "梦幻西游工具箱",
    description: "mhxy tools",
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            {text: '主页', link: '/'},
            {text: '答题器', link: '/question'}
        ],

        sidebar: [
            {
                text: "人物相关",
                items: [
                    // {text: "人物模拟器", link: "/role/simulator"},
                    {text: "种族", link: "/role/race"},
                    {text: "符石", link: "/role/stone"},
                ]
            },
            {
                text: "答题",
                items: [
                    {text: "签到答题", link: "/question/qiandao"},
                    {text: "科举答题", link: "/question/keju"},
                    {text: "元宵节猜灯谜", link: "/question/yuanxiao"},
                ]
            }
        ],

        socialLinks: [
            {icon: 'github', link: 'https://github.com/raisons/mhxy-tools'}
        ],
        outline: false,
        aside: false,
    }
})
