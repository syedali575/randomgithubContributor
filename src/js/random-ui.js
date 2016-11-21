(function() {
  'use strict';
  window.random = window.random || {};
      var previousUsers = [];


      var storedNames = JSON.parse(localStorage.getItem("previousUsers"));
      console.log(storedNames);
      console.log(storedNames[0].name);


      storedNames.forEach(function (item){
        $("#contributors ul").append(
          '<li>' +
          '<img src="' + item.url + '">' +
          ' ' + item.name + '</li>'
        );
      });



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

      var userInfo = {
        url: avatar,
        name: author
      };


      //Pushing userInfo Objects in to the array
      previousUsers.push(userInfo);
      console.log("Array with user data",previousUsers);

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
