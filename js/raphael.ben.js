Raphael.fn.drawStar = function (points) {
    var paper = this;
    for (var a = 0; a < 7; a++) {
        var st = paper.set();
        var arm = paper.path("M 400,60 L 445,225 L 400,300 L 355,225 z").attr({
            "fill": '#C6DEA6',
            "stroke-width": 0
        });
        var outline = paper.path("M 355,225, L 400,60 L 445,225").attr({
            "stroke": "#45952a"
        });
        var circles = paper.set();
        for (var i = 100, j = 10; j > 0; i = i + 17.5, j--) {
            var circle = paper.circle(400, i, 7).attr({
                "fill": "#fff",
                "stroke-width":0,
                "stroke": "#000"
            });
            var text = paper.text(400, i, j).attr({
                "font-size": 10,
                "font-weight": "bold"
            });
            circles.push(
                circle,
                text
            )
        }
        st.push(
            arm,
            circles,
            outline
        );
        st.rotate(((a + 1) * 60), 400, 300);
    }
    paper.circle(400, 300, 30).attr({
        "fill": "#fff",
        "stroke": "#45952a"
    });

    var rects = [{x:340,y:20},{x:600,y:140},{x:600,y:430},{x:340,y:550},{x:80,y:430},{x:80,y:140}];
    $.each(rects, function(index, value){
        paper.rect(value.x, value.y, 120, 30, 15).attr({
            "fill": '#fff',
            "stroke-width": 1,
            "stroke": "#45952a"
        });
        paper.text(value.x + 60, value.y + 13, points[index]).attr({
            "text-align":'center'
        });
    });


};

Raphael.fn.star = function (metrics, stages, stageC, score, colour) {
    var paper = this;
    var positions = [42.5, 60, 77.5, 95, 112.5, 130, 147.5, 165, 182.5, 200];
    var centre = {x:400,y:300};
    var starPath = "";
    var title = score.title;

    /*
    $.each(positions, function(key, value){
        var x = value * Math.sin(Math.PI * 60 / 180);
        var y = value * Math.cos(Math.PI * 60 / 180);
        paper.circle(centre.x,centre.y - value ,7).attr({ "fill": "#f00", "stroke-opacity": 0, "fill-opacity": 0.5});          // top
        paper.circle(centre.x + x, centre.y - y, 7).attr({ "fill": "#f00", "stroke-opacity": 0, "fill-opacity": 0.5});         // top-right
        paper.circle(centre.x + x, centre.y + y, 7).attr({ "fill": "#f00", "stroke-opacity": 0, "fill-opacity": 0.5});         // bottom-right
        paper.circle(centre.x, centre.y + value, 7).attr({ "fill": "#f00", "stroke-opacity": 0, "fill-opacity": 0.5});         // bottom
        paper.circle(centre.x - x, centre.y + y, 7).attr({ "fill": "#f00", "stroke-opacity": 0, "fill-opacity": 0.5});         // bottom-left
        paper.circle(centre.x - x, centre.y - y, 7).attr({ "fill": "#f00", "stroke-opacity": 0, "fill-opacity": 0.5});         // top-left
    });
    */
    $.each(score.scores, function(index, value){
        var p = {};
        var x = positions[value - 1] * Math.sin(Math.PI * 60 / 180);
        var y = positions[value - 1] * Math.cos(Math.PI * 60 / 180);
        switch (index){
            case 0:
                p.x = centre.x;
                p.y = centre.y - positions[value - 1];
                break;
            case 1:
                p.x = centre.x + x;
                p.y = centre.y - y;
                break;
            case 2:
                p.x = centre.x + x;
                p.y = centre.y + y;
                break;
            case 3:
                p.x = centre.x;
                p.y = centre.y + positions[value - 1];
                break;
            case 4:
                p.x = centre.x - x;
                p.y = centre.y + y;
                break;
            default:
                p.x = centre.x - x;
                p.y = centre.y - y;
                break;
        }
        point = paper.circle(p.x, p.y, 7).attr({
            "fill": colour,
            "stroke-opacity": 0,
            "fill-opacity": 0.5
        });
        $(point.node).qtip({
            content: {
                text: title+ "<br/>"+stages[value - 1] + "<br/>(" + metrics[index] +")"
            },
            style: {
                textAlign: 'center',
                background: stageC[value - 1],
                color: "#fff",
                fontWeight: 400,
                border: {
                    width: 3,
                    radius: 4,
                    color: "#000"
                }
            },
            position: {
                corner: {
                    target: 'topRight',
                    tooltip: 'bottomLeft'
                }
            }
        });
        if(index == 0){
            starPath += "M" + p.x + "," + p.y;
        }else if(index == 5){
            starPath += "L" + p.x + "," + p.y + "z";
        }else{
            starPath += "L" + p.x + "," + p.y;
        }
    });
    paper.path(starPath).attr({
        "stroke": colour,
        "stroke-opacity": 0.75,
        "stroke-width": 2
    });

}