$(function () {
    let index = 0; // 图片索引
    let timer;
    time();

    // 计时器函数
    function time() {
        timer = setInterval(function () {
            index++
            if (index == $('.box img').length) {
                index = 0;
                // 设置图片透明与否
                $('.box img').css("opacity", "0");
                $('.box img').eq(index).css("opacity", "1");

                // 设置下方圆点变化样式
                $('.jump li').css("background-color", "white");
                $('.jump li').eq(index).css("background-color", "red");
            } else {
                // 设置图片透明与否
                $('.box img').css("opacity", "0");
                $('.box img').eq(index).css("opacity", "1");

                // 设置下方圆点变化样式
                $('.jump li').css("background-color", "white");
                $('.jump li').eq(index).css("background-color", "red");
            }

        }, 3000)
    }

    // 鼠标移入图片盒子时左右按钮显示
    $('.box').mouseover(function() {
        $('.leftBtn').css('display','block');
        $('.rightBtn').css('display','block');
    })

    $('.box').mouseout(function() {
        $('.leftBtn').css('display','none');
        $('.rightBtn').css('display','none');
    })

    // 设置左按钮
    $('.leftBtn').click(function() {
        clearInterval(timer);
        if (index == 0) {
            index = $('.box img').length - 1;
        } else {
            index--;
        }
        // 设置图片透明与否
        $('.box img').css("opacity", "0");
        $('.box img').eq(index).css("opacity", "1");

        // 设置下方圆点变化样式
        $('.jump li').css("background-color", "white");
        $('.jump li').eq(index).css("background-color", "red");

        time();
    })

    // 设置右按钮
    $('.rightBtn').click(function () {
        clearInterval(timer);
        if (index == $('.box img').length - 1) {
            index = 0;
        } else {
            index++;
        }
        // 设置图片透明与否
        $('.box img').css("opacity", "0");
        $('.box img').eq(index).css("opacity", "1");

        // 设置下方圆点变化样式
        $('.jump li').css("background-color", "white");
        $('.jump li').eq(index).css("background-color", "red");

        time();
    })

    // 设置下面用于跳转的小圆点
    for (let i = 0; i <= $('li').length; i++) {
        $('li').eq(i).click(function () {
            clearInterval(timer);
            index = i;

            // 设置图片透明与否
            $('.box img').css("opacity", "0");
            $('.box img').eq(index).css("opacity", "1");

            // 设置下方圆点变化样式
            $('.jump li').css("background-color", "white");
            $('.jump li').eq(index).css("background-color", "red");

            time();
        })
    }
})