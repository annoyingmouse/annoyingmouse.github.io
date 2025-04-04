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
        <form action="https://docs.google.com/forms/d/1p5O_oT5nhZeR2o6M5G2WH1a150W8eucRql_dH338rF8/formResponse"
              method="POST"
              target="hidden_iframe"
              onsubmit="submitted=true;"
              class="card-body"
              data-sortable="{{>id}}">
          <input type="hidden"
                 name="entry.645503591"
                 value="{{>id}}"/>
          <div class="mb-3">
            <label for="entry_1915033572{{>id}}"
                   class="form-label">
              Email address
            </label>
            <input type="email"
                   class="form-control"
                   id="entry_1915033572{{>id}}"
                   aria-describedby="emailHelp"
                   placeholder="email"
                   required>
            <div id="emailHelp"
                 class="form-text">
              Please provide an email address associated with a 
              <a href="http://gravatar.com">Gravatar</a>.
            </div>
          </div>
          <div class="form-floating mb-3">
            <textarea class="form-control"
                      placeholder="Leave a comment here"
                      id="entry_2006478066{{>id}}"
                      style="height: 100px"></textarea>
            <label for="entry_2006478066{{>id}}">
              Comments
            </label>
          </div>
          <button type="submit" class="btn btn-primary" id="singlebutton{{>id}}">Submit</button>
        </form>          
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
