const $ = document;
window.addEventListener("load", () => {
  const userProfile = $.querySelector(".user-profile");
  const userName = $.querySelector(".user-name");
  const userNumber = $.querySelector(".user-number");
  const userCharge = $.querySelector(".overlay");

  const urlApi = "http://localhost:3000/api";
  let userToken = localStorage.getItem("token");

  fetch(`${urlApi}/users`, {
    headers: {
      authorization: userToken,
    },
  })
    .then((res) => res.json())
    .then((data) => {
      userProfile.setAttribute('src', data[0].profileImg)
      userName.innerHTML = `سلام ${data[0].firstName} ${data[0].lastName} هستم`
      userNumber.innerHTML = data[0].phone
      userCharge.innerHTML = `${data[0].simCharge} تومان `
      console.log(data);
    });
});
