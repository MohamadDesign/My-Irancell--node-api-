window.addEventListener("load", () => {
    const serviceTitle = $.querySelector(".service-title");
    const urlApi = "http://localhost:3000/api";
    fetch(`${urlApi}/services/0`)
        .then((res) => res.json())
        .then((data) => {
            data.forEach((service) => {
                serviceTitle.insertAdjacentHTML(
                    "afterend",
                    `<div class="active-service-box flex align-items-center vazir-fb">
            <span class="active-service-icon flex align-items-center justify-content-center">
              <i class='fa-regular fa-envelope'></i>
            </span>
            <div class="active-service-box-desc">
              <h4>${service.title}</h4>
              <h6>${service.expireDate}</h6>
            </div>
          </div>`
                );
            });
            console.log(data);
        });
});
