$("document").ready(function(){
  $("a[href='#']").click(ignoreLink);
  renderErrorJSON();

  $(".respond").each(function(){
    renderRespond($(this));
  })
})

function renderRespond(res){
  var url = res.data("url");
  var verb = res.data("verb");
  $.ajax({
    url: url,
    type: verb,
    success: function(json){
      json = json.filter((i, index) => (index < 2)); //if array length is big -> display only first 2 objects
      res.jsonPresenter({json});
    }
  })
}

function ignoreLink(e){
  e.preventDefault();
  alert("Link not available because Verb isn't GET. try to use Postman instead");
}

function renderErrorJSON(){
  $("#errorRespond").jsonPresenter({
    json: {
      status: 'failure',
      error: 'this is your error message'
    }
  })
}
