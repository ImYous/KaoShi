define(['jquery', 'handlebars'], function($, Handlebars) {
    function readerBanner(id, data, dom) {
        // 2、获取html页面
        var tpl = $(id).html();
        // 3、预编译模板
        var template = Handlebars.compile(tpl);
        var html = template(data);
        // 4、生成HTML
        $(dom).html(html);

    }
    return readerBanner;
});