define(['jquery', 'handlebars'], function($, Handlebars) {
    function ReaderItem(id, data, content) {
        var tpl = $(id).html();
        var template = Handlebars.compile(tpl);
        var html = template(data);
        $(content).html(html);
    }
    return ReaderItem;
});