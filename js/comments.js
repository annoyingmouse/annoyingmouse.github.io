$(function () {
  $("#content").on("submit", "form", function (e) {
    e.preventDefault();
    // var theForm = $(e.target);
    // var formId = theForm.attr("data-sortable");
    // if ($('ul.sortable[data-id="' + formId + '"]').validate()) {
    // 	if (validateEmail(theForm.find('input[type="email"]').val())) {
    // 		theForm.find("textarea").val(theForm.find("textarea").val());
    // 	} else {
    // 		e.preventDefault();
    // 		alert("Please Provide a valid email address!");
    // 	}
    // } else {
    // 	e.preventDefault();
    // 	alert("No, you are not a human!");
    // }
  });
});
