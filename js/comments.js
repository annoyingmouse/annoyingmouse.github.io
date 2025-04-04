function validateEmail(email) {
  var re =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

$(function () {
  $("#content").on("submit", "form", function (e) {
    e.preventDefault();
    debugger;
    const theForm = $(e.target);
    theForm.validate();
    if (theForm.valid()) {
      if (validateEmail(theForm.find('input[type="email"]').val())) {
        theForm.find("textarea").val(theForm.find("textarea").val());
      } else {
        e.preventDefault();
        alert("Please Provide a valid email address!");
      }
    } else {
      e.preventDefault();
      alert("No, you are not a human!");
    }
  });
});
