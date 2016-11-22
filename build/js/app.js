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
      url:url.split("{")[0],
      method: "GET",
      dataType: "json",
      headers: {
        authorization: "token " + api
      }
    });
  }

}());

(function() {
  'use strict';
  window.random = window.random || {};
  var previousUsers = [];


  var storedNames = JSON.parse(localStorage.getItem("previousUsers"));

  storedNames.forEach(function (item){
    $("#contributors ul").append(
      '<li>' +
      '<img src="' + item.url + '">' +
      ' ' + item.name + '</li>'
    );
  });


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
      var url = randomPick.commits_url;
      var p = window.random.getRepo(api, url);

      return p;
    })

    .then(function handelPromise(data){
      console.log("It worked", data);
      var avatar = data[0].author.avatar_url;
      var author = data[0].commit.author.name;

      var userInfo = {
        url: avatar,
        name: author
      };

      //Pushing userInfo Objects in to the array
      previousUsers.push(userInfo);
      localStorage.setItem("previousUsers", JSON.stringify(previousUsers));
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
