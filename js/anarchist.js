(function(){
    prepareExam("./anarchist.json", "body");
    $(document).on("click", "input", function(){
        $(this).closest(".question").find(".answer").show();

    });
})();
function prepareExam(paper, target) {
    $.getJSON(paper, function(exam) {
        $.each(exam.exam, function(i, v){
            var d = $("<div></div>",{
                "class":"question"
            }).appendTo(target);
            var f = $("<fieldset></fieldset>").appendTo(d);
            $("<legend></legend>").html(i+1+". "+v.question).appendTo(f);
            $.each(v.answers, function(letter, possible){
                var labelID = letter+(i+1);
                $("<label></label>",{
                    "class":"radio",
                    "for":labelID
                }).append($("<input/>",{
                        "type":"radio",
                        "name":i+1,
                        "value":letter,
                        "id":labelID
                    })).append(possible).appendTo(f);
            });
            $("<div></div>", {"class":"answer"}).html(v.html).hide().appendTo(d)
        });
    });
}