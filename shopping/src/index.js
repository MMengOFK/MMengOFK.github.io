let right3 = new Vue ({
    el: "#right3",
    data: {
        message: "95公益周阿里、腾讯等六家公司同台联合做公益"
    },
    methods: {
        getMessage: function(num) {
            const messageArr = [
                "",
                "95公益周阿里、腾讯等六家公司同台联合做公益",
                "新增《淘宝网汽配行业管理规范》公示通知",
                "淘宝618大促报名金牌卖家志愿者招募",
                "魔豆妈妈公益项目让母爱永不打烊！",
                "淘宝公益平台正式更名益起来商家招募即将截"
            ];
            this.message = messageArr[num];            
        }
    }
})

// let right3_1 = new Vue ({
//     el: "#right3_1",
//     method: {
//         li_1: function() {
//             this.message=""
//         }
//     }
// })