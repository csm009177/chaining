setTimeout(function () {
  console.log("첫번째");
  setTimeout(function () {
    console.log("두번째");
    setTimeout(function () {
      console.log("세번째");
    }, 1000);
  }, 2000);
}, 3000);
