// Determine location of sheets using: https://spreadsheets.google.com/feeds/worksheets/0AiRgQIhodQXfdGhhdTZDaEdjTy1ZV3h4T215NFRDUmc/private/full
var posts = [];
var comments = [];
var converter = new Showdown.converter();
function populateComments(data){
    if(!empty(data.feed.entry)){
        $.each(data.feed.entry, function(k, v){
            var comment = {};
            comment.postId = parseInt(v.gsx$postid.$t, 10);
            comment.content = converter.makeHtml(v.gsx$what.$t);
            comment.date = v.gsx$timestamp.$t;
            comment.pubdate = createDateStamp(v.gsx$timestamp.$t);
            comment.who = v.gsx$who.$t;
            comment.icon = md5(v.gsx$who.$t);
            comments.push(comment);
        });
    }
}
function displayBlog(data){
    $.each(data.feed.entry, function(k, v){
        var post = {};
        post.id = parseInt(v.gsx$id.$t);
        post.date = v.gsx$date.$t;
        post.title = v.gsx$title.$t;
        post.content = converter.makeHtml(v.gsx$content.$t);
        post.link = encodeURI(v.gsx$title.$t);
        post.pubdate = createDateStamp(v.gsx$date.$t);
        posts.push(post);
    });
    $.each(posts, function(k, post){
        $("#content").append($.render.addPost(post));
        addPostLinks(k, post.id, post.title);
    });
    $(".form-horizontal").hide();
    $.each(comments, function(k,comment){
        $("article[data-id='"+comment.postId+"'] .comments").append($.render.addComment(comment));
    });
    $(".post").each(function(){
        var $this = $(this);
        var commentsSection = $this.find(".comments");
        if(commentsSection.find("article").length === 0){
            commentsSection.hide();
        }
    });
    $("pre code").each(function(i, e) {
        hljs.highlightBlock(e)
    });
}