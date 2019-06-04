var publication_html = ""
$.each(PUBLICATIONS, function( index, value ) {
    publication_html = publication_html + `<div class="card border-primary mb-12" style="margin: 1rem;max-width: 45rem;">
    <div class="card-body text-primary">
      <p class="card-text">${value}</p>
    </div>
  </div>`;
  });
$("#publications").html(publication_html);