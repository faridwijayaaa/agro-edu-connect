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
          <div class="card text-center mb-3" style="width: 18rem;">
              <img src=${item.imgUrl} class="card-img-top" alt="..." />
              <div class="card-body">
              <h5 class="card-title">${item.name}</h5>
              <p class="card-text">
                  ${item.description.slice(
                    0,
                    item.description.indexOf(".") + 1
                  )}
              </p>
              <a href="#" class="btn btn-primary">Detail</a>
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
