(function(){
    prepareExam("./persecution.json", "body");
})();
jQuery.fn.compare = function(t) {
    if (this.length != t.length) {
        return false;
    }
    var a = this.sort(),
        b = t.sort();
    for (var i = 0; t[i]; i++) {
        if (a[i] !== b[i]) {
            return false;
        }
    }
    return true;
};
function prepareExam(paper, target) {
    $.getJSON(paper, function(exam) {
        $.each(exam.exam, function(i, v){
            var d = $("<div></div>").addClass("question").appendTo(target);

            var f = $("<fieldset></fieldset>").appendTo(d);
            var q = $("<legend></legend>").html(i+1+". "+v.question).appendTo(f);
            $.each(v.answers, function(letter, possible){
                var labelID = letter+(i+1);
                $("<label></label>",{"class":"radio","for":labelID}).append($("<input/>",{"type":"radio","name":i+1,"value":letter, "id":labelID})).append(possible).appendTo(f);

            });
            d.data({"answer":v.solution});
        });
        var s = $("<div></div>").addClass("score").appendTo(target);
        $("<p></p>").text("So, are you being persecuted?").appendTo(s);
        $("<span></span>").addClass("final btn").text("Check").button().appendTo(s).on("click", function(){
            if($('input:checked').length !== 12){
                alert("Don't be a twat, answer all the questions!");
            }else{
                var totalScore = $('input[id^="b"]:checked').length;
                var message;
                $("div.score").empty();
                switch (totalScore){
                    case 0:
                        message = "Britain does not celebrate Christmas because it is the birthday of Isaac Newton. You may actually benefit from some light persecution.";
                        $("div.score").css("backgroundColor","#33ff00");
                        break;
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                        message = "Perhaps this really is the time of year when you commemorate Judy Garland. That is deeply fabulous of you. You’re not being persecuted as much as you used to.";
                        $("div.score").css("backgroundColor","#999900");
                        break;
                    case 6:
                        message = "You’re probably always ’50-50′ in these kinds of things. You might want to shake it up a bit.";
                        $("div.score").css("backgroundColor","#ff9900");
                        break;

                    case 7:
                    case 8:
                    case 9:
                    case 10:
                    case 11:
                        message = "You are probably a Roman Catholic and are subject to some persecution, but only if you really want to be the Queen.";
                        $("div.score").css("backgroundColor","#ff6600");
                        break;
                    case 12:
                        message = "You are an Anglican Christian and you are not being persecuted. Congratulations!";
                        $("div.score").css("backgroundColor","#ff0000");
                        break;
                }
                var l = $("<p></p>").text(message).appendTo($("div.score"));
            }
        });
    });
}