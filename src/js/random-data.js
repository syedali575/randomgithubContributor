(function() {
  'use strict';

  window.random = window.random || {};
  window.random.searchRepo = searchRepo;
  window.random.getRepo = getRepo;


  function searchRepo(api, query){

    return $.ajax({
      url:"https://api.github.com/search/repositories?q="+query,
      method: "GET",
      dataType : "json",
      headers:{
        authorization: "token " + api
      }
    });
  }

  /**
   * [secondAjax description]
   * @param  {[type]} api [description]
   * @param  {[type]} url [description]
   * @return {Promise}     [description]
   */
  function getRepo(api, url){
    return $.ajax({
      url:url,
      method: "GET",
      dataType: "json",
      headers: {
        authorization: "token " + api
      }
    });
  }
















}());
