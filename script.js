$(document).ready(function () {
  $("#myForm").submit(function (event) {
    event.preventDefault();
    var numberInput = $("#numberInput").val();
    var textInput = $("#textInput").val();
    $.ajax({
      url: "process.php",
      type: "POST",
      data: {
        numberInput: numberInput,
        textInput: textInput,
      },
      dataType: "json",
      success: function (data) {
        $("#myTable tbody").empty();
        for (var i = 0; i < data.length; i++) {
          var row = "<tr><td>" + i + "</td><td>" + data[i] + "</td></tr>";
          $("#myTable tbody").append(row);
        }
        $("#myTable").hide().fadeIn(1000);
      },
    });
  });
});
