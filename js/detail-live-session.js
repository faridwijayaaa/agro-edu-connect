const renderDetailContent = async () => {
  const itemId = localStorage.getItem("liveSessionId");

  try {
    const response = await fetch(
      `https://65262cd567cfb1e59ce7f637.mockapi.io/live-session/${itemId}`
    );
    const data = await response.json();

    document.title = `${data.name} - AgroEduConnect`;
    document.getElementById("ls-slc-container").innerHTML += `
      <h1 class="text-center fs-2 mb-3">${data.name}</h1>
      <p class="text-center mb-5 fs-6">
          ${data.description}
      </p>
      <div class="card mb-3 border-0 shadow-none pe-none">
        <div class="row g-0 justify-content-around">
          <div class="col-md-4 position-relative">
            <div class="card-body position-absolute" style="top: 10%; left: 30%">
              <h5 class="card-title mb-3">${data.prof}</h5>
              <p class="card-text mb-0">${data.date}</p>
              <p class="card-text mb-5"><small class="text-body-secondary">${data.hour}</small></p>
              <a href="./enroll-live-session.html" onclick="handleEnroll(${data.id})" class="btn btn-success pe-auto">Enroll Live Session</a>
              <a href="./live-session.html" class="btn btn-outline-danger pe-auto px-3 mt-3">Back</a>
            </div>
          </div>
          <div class="col-md-4">
            <img src="${data.imgUrl}" class="img-fluid rounded mx-auto d-block " alt="...">
          </div>
        </div>
      </div>
      `;
  } catch (error) {
    console.log(error);
  }
};

function handleEnroll(itemId) {
  localStorage.setItem("enrollId", JSON.stringify(itemId))
}

renderDetailContent();
