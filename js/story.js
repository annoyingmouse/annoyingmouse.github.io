$(function(){
    var order = JSON.parse($("#storyOrder").val());
    var container = $("#storyParts");
    var children = container.children();
    displayParts(container, children, order)
    $("#storyOrder").on("change", function(){
        order = JSON.parse($("#storyOrder").val());
        displayParts(container, children, order)
    });
    $("#randomChoice").on("click", function(e){
        e.preventDefault();
        order = shuffleArray(JSON.parse($("#storyOrder").val()));
        if(!showSelected($("#storyOrder option"), order)){
            $("#storyOrder").append($("<option></option>", {
                "value": "["+order.toString()+"]",
                "text":order.toString().replace(/[^0-9]/g, ''),
                "class":"unique",
                "selected":"selected"}));
        }
        $("#storyOrder").val("["+order.toString()+"]");
        displayParts(container, children, order)
    });
});
function displayParts(container, children, order){
    container.empty();
    for (var i = 0; i < order.length; i++){
        container.append(children[order[i]-1])
    }
}
function showSelected(options, value){
    var returnValue = false;
    $.each(options, function(k,v){
        var $this = $(v);
        if(arraysEqual(JSON.parse($this.val()), value)){
            $this.attr("selected", "selected");
            returnValue = true;
        }else{
            $this.removeAttr("selected");
        }
    });
    return returnValue;

}
function sortDivs(a, b){
    return $(a).data("order") > $(b).data("order") ? 1 : -1;
}
/**
 * Randomize array element order in-place.
 * Using Fisher-Yates shuffle algorithm.
 */
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}
function arraysEqual(arr1, arr2) {
    if(arr1.length !== arr2.length){
        return false;
    }
    for(var i = arr1.length; i--;) {
        if(arr1[i] !== arr2[i]){
            return false;
        }
    }
    return true;
}