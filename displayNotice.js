// イベント・フェアカレンダーアプリの情報を「お知らせ」欄に表示する
(function() {
    'use strict';

    kintone.events.on('portal.show', function() {

        var body = {
            'app': 698,
            'query': '日付 >= TODAY() order by 日付 asc, $id asc',
            'fields': ['$id', '日付', 'イベント名']
        };

        kintone.api(kintone.api.url('/k/v1/records', true), 'GET', body, function(resp) {
            var noticeSpace = $('<ul>', {
            }).appendTo('.notice');

            for (var i = 0; i < 10; i++) {
                $('<li>' + resp.records[i].日付.value + '</br>'
                + resp.records[i].イベント名.value + '</li>').appendTo(noticeSpace);
            }
        });
    });
})();
