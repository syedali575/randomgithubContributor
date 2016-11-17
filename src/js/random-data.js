(function() {
  'use strict';

    window.random = window.random || {};
    window.random.searchRepo = searchRepo;


    function searchRepo(api, query){

      return $.ajax({
        url:"https://api.github.com/search/repositories?q="+query,
        method: "GET",
        dataType : "json",
        header:{
          authorization: "token " + api,
        }

      });
    }
















}());
