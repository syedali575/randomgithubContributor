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

      .done(function handleSuccess(data){
        console.log("It worked", data);

        var pickMe = data.items;
        var randomPick = pickMe[Math.floor(Math.random() * 30)];
        console.log(randomPick);
        console.log(randomPick.commits_url);
        // return promise
      })
      // add another done
      .fail(function handleFailure(xhr){
        console.log("Unable to communicate", xhr);
      });

    });






















}());
