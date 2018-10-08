$(document).ready(function() {
  numPlace();

  //calculator "logic" starts

  var exp = "",
    acc = 0,
    val = "",
    op = "",
    curOp = "";

  $(".num").on("click", function() {
    if (op === "=") {
      exp = "";
      op = "";
      val = "";
      acc = 0;
    }
    exp += $(this).text();
    val += $(this).text();
    append();
  });

  //rep
  $(".neg").on("click", function() {
    if (exp === "") {
      exp += $(this).text();
      val += $(this).text();
      append();
    }
    //repetition
    if (/\d/.test(exp[exp.length - 1])) {
      curOp = $(this).text();
      if (op !== "") {
        switch (op) {
          case "+":
            acc += parseFloat(val);
            break;
          case "x":
            acc *= parseFloat(val);
            break;
          case "-":
            acc -= parseFloat(val);
            break;
          case "/":
            acc /= parseFloat(val);
            break;
          case "=":
            op = "";
            break;
        }
      } else {
        acc += parseFloat(val);
      }
      exp += curOp;
      //repetition
      op = curOp;
      val = "";
      append();
    } //repeatation
  });

  $(".op").on("click", function() {
    if (exp === "") return;
    //repetition
    if (/\d/.test(exp[exp.length - 1])) {
      curOp = $(this).text();
      if (op !== "") {
        switch (op) {
          case "+":
            acc += parseFloat(val);
            break;
          case "x":
            acc *= parseFloat(val);
            break;
          case "-":
            acc -= parseFloat(val);
            break;
          case "/":
            acc /= parseFloat(val);
            break;
          case "=":
            op = "";
            break;
        }
      } else {
        acc += parseFloat(val);
      }
      exp += curOp;
    } //repetition

    if (curOp !== "-") val = "";
    op = curOp;
    append();
  });

  $(".eq").on("click", function() {
    acc = Math.round(acc * 1000) / 1000; //To round digits
    exp = acc.toString();
    append();
    op = "=";
  });

  //calculator "logic" ends

  $(".ac").on("click", function() {
    val = "";
    acc = 0;
    exp = "";
    append();
  });

  $(".ce").on("click", function() {
    val = "";
    append();
  });

  function numPlace() {
    for (var i = 1; i < 10; i++) {
      $(".digs").append("<button class='num'>" + i + "</button>");
      if (i % 3 == 0) $(".digs").append("<br>");
    }
  } //to create number pads from 1 t0 9

  function append() {
    $(".exp,.ans").html("");
    $(".exp").append(exp);
    $(".ans").append(val);
  }
});

//Tweak AC button
