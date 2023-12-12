let btnblack = document.getElementsByClassName("btn-black");
btnblack.addEventListener("click", (e) => {
    f(btnblack.value)
  function f() {
    fetch("https://data.api.customerlabs.co/user/${city}")
      .then((response) => response.json())
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log("error");
      });
  }
});

f();
