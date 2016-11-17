(function() {
  'use strict';

    window.random = window.random || {};
    window.random.getData = getData;

    function getData(){
      $.ajax({
        url:"https://api.github.com/search/repositories?q=",
        method: "GET",
        dataType : "json",
        header:{
          authorization: "token " + token,
        }

      })
      .done(function handleSuccess(data){
        console.log("It worked", data);
      })

      .fail(function handleFailure(xhr){
        console.log("Unable to communicate", xhr);
      });
    }
















}());
