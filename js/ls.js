let listLiveSession = document.getElementById("list-ls");

async function getLiveSession() {
  try {
    let respons = await fetch(
      "https://65262cd567cfb1e59ce7f637.mockapi.io/live-session"
    );
    let liveSession = await respons.json();

    console.log(liveSession);

    liveSession.map((item) => {
      let cardLiveSession = `
          <div class="card text-center mb-5 border-0 shadow-none pe-none" style="width: 24%; height: 47vh">
              <img src=${
                item.imgUrl
              } class="card-img-top mx-auto" alt="..." style="width: 10vw; height:10vw;" />
              <div class="card-body container-fluid ps-0">
                <h5 class="card-title" style="font-size: 0.9rem">${
                  item.name
                }</h5>
                <p class="card-text" style="font-size: 0.8rem">
                    ${item.description.slice(
                      0,
                      item.description.indexOf(".") + 1
                    )}
                </p>
                <a href="#" class="btn btn-primary pe-auto position-absolute bottom-0 start-5 translate-middle-x fs-6 py-1 fw-medium">Detail</a>
              </div>
          </div>
          `;

      listLiveSession.innerHTML += cardLiveSession;
    });
  } catch (err) {
    console.log(err);
  }
}

getLiveSession();
