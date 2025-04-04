$.templates({
  addPost: `
    <article data-id="{{>id}}"
             class="post">
      <header>
        <h2>
          <a id="{{>id}}">{{>title}}</a>
        </h2>
        <p>
          Published:
          <time datetime="{{>pubdate}}">
            {{>date}}
          </time>
        </p>
      </header>
      {{:content}}
      <section class="comments"
               style="display: none;">
        <h3>
          Comments
        </h3>
        <div class="existing_comments"></div>
      </section>
    </article>
  `,
});
