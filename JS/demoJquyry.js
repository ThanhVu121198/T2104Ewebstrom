function loadMore() {
    var p = [];
    $.ajax({
        url:"https://foodgroup.herokuapp.com/api/category/1",
        method:"GET",
        success:function (rs){
            p = rs.data.foods;
            var row = $("#row")
            for (var i=0;i<p.length;i++){
                var ct = "<div class=\"item\">\n" +
                    "            <h2>"+p[i].id+"</h2>\n" +
                    "            <h2>"+p[i].name+"</h2>\n" +
                    "            <img src=\""+p[i].image+"\"/>\n" +
                    "            <h3>"+p[i].price+"</h3>\n" +
                    "        </div>";
                row.append(ct) ;
            }
        }
    });
}