$.templates({
    addPost: '\
        <article data-id="{{>id}}" class="post">\
            <header>\
                <h2><a id="{{>id}}">{{>title}}</a></h2>\
                <p>Published: <time datetime="{{>pubdate}}">{{>date}}</time></p>\
            </header>\
            {{:content}}\
            <section class="comments">\
                <h3>Comments</h3>\
            </section>\
            <section class="newComment">\
                <h3 class="showCommentArea">New Comment</h3>\
                <form action="https://docs.google.com/forms/d/1p5O_oT5nhZeR2o6M5G2WH1a150W8eucRql_dH338rF8/formResponse" method="POST" target="hidden_iframe" onsubmit="submitted=true;" class="form-horizontal" data-sortable="{{>id}}">\
                    <fieldset>\
                        <legend>Your Comment</legend>\
                        <input type="hidden" name="entry.645503591" value="{{>id}}"/>\
                        <div class="control-group">\
                            <label class="control-label" for="entry_1915033572{{>id}}">Email Address</label>\
                            <div class="controls">\
                                <input id="entry_1915033572{{>id}}" name="entry.1915033572" placeholder="email" class="input-xlarge span8" type="email" required>\
                                <p class="help-block">Please provide an email address associated with a <a href="http://gravatar.com">Gravatar</a></p>\
                            </div>\
                        </div>\
                        <div class="control-group">\
                            <label class="control-label" for="entry_2006478066{{>id}}">Comment</label>\
                            <div class="controls">\
                                <textarea rows="4" class="span8" id="entry_2006478066{{>id}}" name="entry.2006478066" required></textarea>\
                            </div>\
                        </div>\
                        <div class="captcha_wrap">\
                            <div class="captcha">\
                                Drag to order\
                            </div>\
                            <ul class="sortable" data-id="{{>id}}">\
                                <li class="captchaItem">1</li>\
                                <li class="captchaItem">2</li>\
                                <li class="captchaItem">3</li>\
                                <li class="captchaItem">4</li>\
                                <li class="captchaItem">5</li>\
                                <li class="captchaItem">6</li>\
                            </ul>\
                        </div>\
                        <div class="control-group">\
                            <label class="control-label" for="singlebutton{{>id}}"></label>\
                            <div class="controls">\
                                <input type="submit" id="singlebutton{{>id}}" name="submit" value="Submit" class="btn btn-primary"/>\
                            </div>\
                        </div>\
                    </fieldset>\
                </form>\
            </section>\
        </article>\
        <hr />\
    ',
    addComment: '\
        <article>\
            <header>\
                <h4><a name="{{:who}}">{{>who}}</a></h4>\
                <img src="https://www.gravatar.com/avatar/{{:icon}}?s=50" alt="icon for {{:who}}"/>\
                <p>Published: <time datetime="{{>pubdate}}">{{>date}}</time></p>\
            </header>\
            {{:content}}\
        </article>\
    '
});
