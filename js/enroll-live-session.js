const renderEnrollContent = async () => {
  const enrollId = localStorage.getItem("enrollId");

  try {
    const response = await fetch(
      `https://65262cd567cfb1e59ce7f637.mockapi.io/live-session/${enrollId}`
    );
    const data = await response.json();

    document.title = `Enroll ${data.name} - AgroEduConnect`;
    document.getElementById("ls-enroll-container").innerHTML = `
            <div class="card mb-3 pe-none border-0 shadow-none">
                <img src="../assets/img/enrollImg.png" class="card-img-top img-fluid" alt="..." style="height:100%">
                <div class="d-flex mt-3 gap-3 w-100">
                  <img src="../assets/img/enrollImg.png" class="flex-fill rounded" alt="..." style="width:23%">
                  <img src="../assets/img/enrollImg.png" class="flex-fill rounded" alt="..." style="width:23%">
                  <img src="../assets/img/enrollImg.png" class="flex-fill rounded" alt="..." style="width:23%">
                  <img src="../assets/img/enrollImg.png" class="flex-fill rounded" alt="..." style="width:23%">
                </div>

                <div class="row mt-5">
                  <div class="col-sm-6 mb-3 mb-sm-0">
                    <div class="card border-0 shadow-none">
                      <div class="card-body">
                        <h4 class="card-title">${data.name}</h4>
                        <p class="card-text text-black fs-6 mt-3">${data.description}</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6 position-relative">
                    <div class="card border-0 w-100 text-center shadow-none position-absolute top-50 start-50 translate-middle">
                      <div class="card-body">
                        <a href="#" class="btn btn-secondary rounded-0 rounded-start-3" style="padding-right: 4vw; padding-left: 2vw;">Enrolled <iconify-icon icon="subway:tick" class="ms-3" style="font-size: 0.8rem"></iconify-icon></a>
                        <a href="#" class="btn btn-success rounded-0 rounded-end-3 pe-auto" style="padding-right: 3.5vw; padding-left: 3.5vw; margin-left: -5px;">Join Live Session</a>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
  
        `;
  } catch (error) {
    console.log(error);
  }
};

renderEnrollContent();
