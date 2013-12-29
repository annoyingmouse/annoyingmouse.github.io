$(function(){
    $("#content").on("click", ".showCommentArea", function(){
        var $this = $(this);
        var parent = $this.parent();
        if($this.text() === "New Comment"){
            parent.find(".form-horizontal").slideDown('slow', function(){
                $this.text("Hide new comment form")
            });
            $(".sortable").sortable().disableSelection();
            $('ul.sortable').shuffle();
        }else{
            parent.find(".form-horizontal").slideUp('slow', function(){
                $this.text("New Comment");
            });
        }
    }).on("submit", "form", function(e){
            var theForm = $(e.target);
            var formId = theForm.attr("data-sortable");
            if($('ul.sortable[data-id="' + formId + '"]').validate()){
                if(validateEmail(theForm.find('input[type="email"]').val())){
                    theForm.find("textarea").val(Base64.encode(theForm.find("textarea").val()));
                }else{
                    e.preventDefault();
                    alert("Please Provide a valid email address!");
                }
            }else{
                e.preventDefault();
                alert("No, you are not a human!");
            }
        });
});
function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

