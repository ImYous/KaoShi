require(['jquery', 'swiper', 'handlebars', 'reader'], function($, swiper, Handlebars, reader) {
    $.ajax({
        url: '/banner',
        success: function(data) {
            reader('#banner-tpl', JSON.parse(data), '.list-Banner');
            new Swiper('.banner', {
                pagination: '.swiper-pagination'
            });
            reader('#dl-tpl', JSON.parse(data), '.dl-list');
        }
    });
});