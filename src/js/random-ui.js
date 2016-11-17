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


      window.random.getData(api, query);

    });






















}());
