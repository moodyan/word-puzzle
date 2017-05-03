$(function () {
  $("#btn").click (function (event) {
    var userString = $("#userInput").val();
    var vowels = ["a", "e", "i", "o", "u"];

    // for (var i = 0; i < vowels.length; i++) {
    //   var secondLoop = userString.length;
    //     for ( j = 0; j < secondLoop; j++) {
    //         if (vowels[i] == userString.charAt(j)) {
    //             userString = userString.slice(0, j).concat(userString.slice(j + 1, secondLoop));
    //             j--;           // take the removed character into account
    //             secondLoop--;  // string is now one character shorter
    //         }
    //     }
    // }

    for (var i = 0; i < vowels.length; i++) {
      var secondLoop = userString.length;
        for ( j = 0; j < secondLoop; j++) {
            if (vowels[i] == userString.charAt(j)) {
                userString = userString.replace(userString[j], "-");

            }
        }
    }
    $("#result").show();
    $("#userText").hide();

    $(".result").text(userString);

    console.log(userString);
    event.preventDefault();
  });
});
