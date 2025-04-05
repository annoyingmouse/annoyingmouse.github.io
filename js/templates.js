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
      <details class="card mb-3">
        <summary class="card-header">Add a comment</summary>
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdIC425N5ZXWteo8uJWtBINtMGI16nv0eXDId1h-4iBEA8_sQ/viewform?embedded=true&entry.645503591={{>id}}"
                width="640"
                height="510"
                frameborder="0"
                marginheight="0"
                marginwidth="0">
          Loading…
        </iframe>         
      </details>
    </article>
  `,
  addComment: `
    <div class="card mb-4">
      <div class="card-body">
        {{:content}}
        <div class="d-flex justify-content-between">
          <div class="d-flex flex-row align-items-center">
            <img src="https://www.gravatar.com/avatar/{{:icon}}?s=50"
                 alt="avatar for {{:who}}"
                 width="50"
                 height="50" />
            <p class="small mb-0 ms-2">
              {{>who}}
            </p>
          </div>
          <div class="d-flex flex-row align-items-center">
            <p>
              Published: 
              <time datetime="{{>pubdate}}">
                {{>date}}
              </time>
            </p>
          </div>
        </div>
      </div>
    </div>
  `,
});
