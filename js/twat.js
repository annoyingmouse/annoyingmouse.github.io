(function(){
    prepareExam("./exam.json", "body");
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
        $("<p></p>").text("Ready to calculate your final score?").appendTo(s);
        $("<span></span>").addClass("final btn").text("Check").button().appendTo(s).on("click", function(){
            if($('input:checked').length !== 12){
                alert("Don't be a twat, answer all the questions!");
            }else{
                var totalScore = $('input[id^="a"]:checked').length;
                var message;
                $("div.score").empty();
                if(totalScore == 0){
                    message = "You are not a twat. Well done. Unfortunately you will never make any money and are doomed to live in a perpetual state of frustration.";
                    $("div.score").css("backgroundColor","green");
                }else{
                    if(totalScore < 6){
                        message = "You a borderline twat, standing at the crossroads of twatdom. There is a small amount of hope for you, if you cancel your subscription to Stylish    Masturbator magazine.";
                        $("div.score").css("backgroundColor","orange");
                    }else{
                        message = "You are a twat. Congratulations! Not really, you're dreadful.";
                        $("div.score").css("backgroundColor","red");
                    }
                }
                var l = $("<p></p>").text(message).appendTo($("div.score"));
            }
        });
    });
}