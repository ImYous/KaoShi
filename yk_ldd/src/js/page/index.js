require([
    'jquery',
    'handlebars',
    'template',
    'text!./page/item_home.html',
    'swiper'
], function($, Handlebars, template, item, Swiper) {
    $.ajax({
        url: '/Tab1',
        success: function(data) {
            readerCon(JSON.parse(data));
            ActiveClick(JSON.parse(data));
        }
    });

    function readerCon(data) {
        template('#tlp-dl', data, '.li-list');
        new Swiper('.content');
        $('.left').on('click', function() {
            location.href = '../index.html';
        });
    }


    function ActiveClick(data) {
        $('.nav-bar>li').on('click', function() {
            var index = $(this).index();
            $(this).addClass('active').siblings().removeClass('active');
            $('.content-list>li').eq(index).show().siblings().hide();
        });
        $('.li-list>dl').on('click', function() {
            var index = $(this).index();
            var id = $(this).data('id');
            $.each(data, function(i, ele) {
                if (ele.code == id) {
                    $.ajax({
                        url: '/item',
                        success: function(data) {
                            // template('#tlp-dl', data[], '.li-list');
                            location.href = '../../page/item_home.html';
                        }
                    });
                }
            });
        })
    }
});