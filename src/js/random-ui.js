(function() {
  'use strict';
  window.random = window.random || {};

  console.log("I am in random");


  $("#search")
  .on("submit", function findContributor(event){
    event.preventDefault();

    var api = $(".api").val();
    console.log(api);
    var query = $(".query").val();
    console.log(query);


    window.random.searchRepo(api, query)

    .then(function handleSuccess(data){
      console.log("It worked", data);

      var pickMe = data.items;
      var randomPick = pickMe[Math.floor(Math.random() * 30)];
      console.log(randomPick);
      var url = randomPick.commits_url;
      console.log(url);
      var p = window.random.getRepo(api, url);

      return p;
    })

    .then(function handelPromise(data){
      console.log("It worked", data);
      // console.log(data[0].author.avatar_url);
      var avatar = data[0].author.avatar_url;
      var author = data[0].commit.author.name;
      console.log(author);

      localStorage.setItem("avatar", avatar );

      $("#contributors ul").append(
        '<li>' +
        '<img src="' + avatar +'">' +
        " " + author + '</li>'
      );
    })


    .fail(function handleFailure(xhr){
      console.log("Unable to communicate", xhr);
    });

  });



















}());
