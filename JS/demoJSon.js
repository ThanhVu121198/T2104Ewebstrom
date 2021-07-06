function loadMore() {
    var p = [];// ti nua se lay tu
    $.ajax({ //
        url: "../data/tsconfig.json",
        method:"GET",
        success:function (rs){ // callback
            p = rs.data;
            var row = $("#row");
            for (var i = 0; i < p.length; i++) {
                var ct = ""
                row.append(ct); // row.html(row.html() +ct)
                // row.prepend(ct) // row.html(ct+row.html());
            }
        }

    });

}
 