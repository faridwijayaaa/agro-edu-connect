const renderRoom = async () => {
  const roomId = localStorage.getItem("roomId");

  try {
    const response = await fetch(
      `https://65262cd567cfb1e59ce7f637.mockapi.io/live-session/${roomId}`
    );
    const data = await response.json();
    document.title = `${data.name} Live Session - AEC`;
    document.getElementById("ls-room-container").innerHTML = `
        <div class="text-center">
            <h2 class="card-title fw-bold">${data.name}</h2>
            <h5 class="card-title mt-3 mb-5">${data.prof}</h4>
            <img src="../assets/img/room-join.png" />
        </div>
        <div class="mx-auto mt-5">
            <h4 class="text-center fw-bold mb-4">Live Chat</h4>
            <form class="bg-body-secondary p-3">
                <div class="mb-3">
                    <label for="person" class="form-label fw-bold fs-6">Person 1</label>
                    <input type="person" class="form-control bg-body-tertiary" id="examplePerson" value="Very Helpful" disabled>
                </div>
                <div class="mb-3">
                    <label for="person" class="form-label fw-bold fs-6">Person 2</label>
                    <input type="person" class="form-control bg-body-tertiary" id="examplePerson" value="Thanks" disabled>
                </div>
                <div id="yourComment" class="mt-5">
                    <h5 class="fs-6 fw-bold">You</h5>
                    <div class="form-floating">
                        <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style="height: 100px"></textarea>
                        <label for="floatingTextarea2">Comments</label>
                    </div>
                </div>
                <button type="submit" class="btn btn-primary mt-3 px-5">Add Comment</button>
            </form>
        </div>

    `;
  } catch (error) {
    console.log(error);
  }
};

renderRoom();
