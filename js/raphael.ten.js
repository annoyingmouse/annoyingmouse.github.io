Raphael.fn.drawStar = function (points, armFill, outlineColour, textColour, fillColour, backgroundColour) {
    if((points.length > 2) && (points.length < 13)){
        // Setup:
        var paper = this;
        var rects = {
            "3": [{x:340,y:20}, {x:580,y:430}, {x:100,y:430}],
            "4": [{x:340,y:20}, {x:650,y:285}, {x:340,y:550}, {x:30,y:285}],
            "5": [{x:340,y:20}, {x:640,y:205}, {x:490,y:505}, {x:190,y:505}, {x:40,y:205}],
            "6": [{x:340,y:20}, {x:600,y:140}, {x:600,y:430}, {x:340,y:550}, {x:80,y:430},  {x:80,y:140}],
            "7": [{x:340,y:20}, {x:590,y:120}, {x:640,y:340}, {x:480,y:530}, {x:200,y:530}, {x:40,y:340},  {x:90,y:120}],
            "8": [{x:340,y:20}, {x:570,y:100}, {x:650,y:285}, {x:570,y:470}, {x:340,y:550}, {x:110,y:470}, {x:30,y:285},  {x:110,y:100}],
            "9": [{x:340,y:20}, {x:560,y:90},  {x:645,y:240}, {x:615,y:410}, {x:430,y:535}, {x:250,y:535}, {x:65,y:410},  {x:35,y:240},  {x:120,y:90}],
            "10":[{x:340,y:20}, {x:500,y:65},  {x:600,y:185}, {x:600,y:385}, {x:500,y:505}, {x:340,y:550}, {x:160,y:505}, {x:80,y:385},  {x:80,y:185}, {x:160,y:65}],
            "11":[{x:340,y:20}, {x:510,y:60},  {x:625,y:180}, {x:645,y:320}, {x:590,y:450}, {x:420,y:540}, {x:260,y:540}, {x:90,y:450},  {x:35,y:320}, {x:55,y:180},  {x:170,y:60}],
            "12":[{x:340,y:20}, {x:500,y:55},  {x:610,y:150}, {x:650,y:285}, {x:610,y:420}, {x:500,y:515}, {x:340,y:550}, {x:180,y:515}, {x:70,y:420}, {x:30,y:285},  {x:70,y:150},  {x:180,y:55}]
        };
        // Set colours to default if they're not passed to us:
        armFill = armFill || "#C6DEA6";
        outlineColour = outlineColour || "#45952a";
        textColour = textColour || "#000000";
        fillColour = fillColour || "#FFFFFF";
        backgroundColour = backgroundColour || "#FFFFFF"
        // Create our background:
        paper.rect(0,0,800,600).attr({
            "fill": backgroundColour,
            "stroke-width": 0
        });
        // Setup our local variable for this run and clean up after ourselves:
        var sacrificialNode = paper.circle(400, 190, 6);
        sacrificialNode.rotate(((360 / points.length) / 2), 400, 300);
        var bB = sacrificialNode.getBBox();
        var d = ((bB.x + (bB.width / 2)) - 400) + 1;
        var e = (bB.y + (bB.width / 2));
        sacrificialNode.remove();
        // Draw the arms of the star by iterating over the number of points we're passed:
        for (var a = 0; a < points.length; a++) {
            // Create a set for our point of the star:
            var st = paper.set();
            // Create the diamond:
            var arm = paper.path("M "+(400 - d)+","+e+" L 400,60 L "+(400 + d)+","+e+" L 400,300 z").attr({
                "fill": armFill,
                "stroke-width": 0
            });
            // Create the outline:
            var outline = paper.path("M "+(400 - d)+","+e+", L 400,60 L "+(400 + d)+","+e).attr({
                "stroke": outlineColour
            });
            // Create a set for the score circles:
            var circles = paper.set();
            // Create ten circles with numbers inside:
            for (var i = 100, j = 10; j > 0; i = i + 17.5, j--) {
                var circle = paper.circle(400, i, 7).attr({
                    "fill": fillColour,
                    "stroke-width":0,
                    "stroke": "#000"
                });
                var text = paper.text(400, i, j).attr({
                    "font-size": 10,
                    "font-weight": "bold",
                    "fill": textColour
                });
                // Add the circles and text to the circles set:
                circles.push(
                    circle,
                    text
                )
            }
            // Add the diamond, outline and circles set to our set for the point:
            st.push(
                arm,
                circles,
                outline
            );
            // Rotate the arm the correct amount:
            st.rotate(((a + 1) * (360 / points.length)), 400, 300);
        }
        // Create the inner circle:
        paper.circle(400, 300, 30).attr({
            "fill": fillColour,
            "stroke": outlineColour
        });
        // Add our point legends and the text to the point legends:
        $.each(rects[points.length], function(index, value){
            // Nice rounded legend:
            paper.rect(value.x, value.y, 120, 30, 15).attr({
                "fill": fillColour,
                "stroke-width": 1,
                "stroke": outlineColour
            });
            // Text that's split if over-long:
            paper.text(value.x + 60, value.y + 14, splitLong(points[index], 22)).attr({
                "text-align":'center',
                "fill": textColour
            });
        });
    }else{
        alert("Too few or too many points!");
    }
};

function splitLong(words, length) {
    var output;
    if (words.length < length) {
        output = words;
    }else{
        var arrofwords = words.split(" ");
        var middle = arrofwords.length / 2;
        arrofwords.splice(middle, 0, "\n");
        output = arrofwords.join(" ");
    }
    return output;
}


Raphael.fn.star = function (metrics, stages, stageC, score, colour) {
    var paper = this;
    var positions = [42.5, 60, 77.5, 95, 112.5, 130, 147.5, 165, 182.5, 200];
    var centre = {x:400,y:300};
    var starPath = "";
    var title = score.title;
    var st = paper.set();
    var angle = 360/score.scores.length;

    $.each(score.scores, function(index, value){
        var p = {};
        p.x = centre.x;
        p.y = centre.y - positions[value - 1];
        point = paper.circle(p.x, p.y, 7).attr({
            "fill": colour,
            "stroke-opacity": 0,
            "fill-opacity": 0.5
        });
        point.rotate(((index) * angle), 400, 300);
        toolTip = paper.circle(p.x, p.y, 20).attr({
            "fill": colour,
            "stroke-opacity": 0,
            "fill-opacity": 0
        }).toFront();
        toolTip.rotate(((index) * angle), 400, 300);
        st.push(toolTip);
        var t = title + "<br/>" + stages[value - 1];
        //t += (!empty(score.notes[parseInt(index)])) ? "<br/>Notes: " + score.notes[parseInt(index)] : ""
        $(toolTip.node).qtip({
            content: {
                text: t
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
        var bB = point.getBBox();
        var b = {
            "x": (bB.x + (bB.width / 2)),
            "y": (bB.y + (bB.width / 2))
        };
        if(index == 0){
            starPath += "M" + b.x + "," + b.y;
        }else if(index == score.scores.length-1){
            starPath += "L" + b.x + "," + b.y + "z";
        }else{
            starPath += "L" + b.x + "," + b.y;
        }
    });
    paper.path(starPath).attr({
        "stroke": colour,
        "stroke-opacity": 0.75,
        "stroke-width": 2
    });
    st.toFront();
}