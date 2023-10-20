const BASE_API = "https://652ff3566c756603295dfc8e.mockapi.io";

const fetcher = async ({ endpoint = "", config = {} }) => {
  try {
    const response = await fetch(`${BASE_API}/${endpoint}`, config);
    const data = await response.json();

    return {
      data,
    };
  } catch (error) {
    return {
      error,
    };
  }
};

const handleSubmit = (e) => {
  e.preventDefault();

  const inputName = document.getElementById("username").value;
  const inputEmail = document.getElementById("email").value;
  const inputPassword = document.getElementById("password").value;

  
  if (
    inputName == "" &&
  inputEmail == "" &&
  inputPassword == ""
  ) {
    alert("Please fill the field");
  } else {
    fetcher({
      endpoint: "user",
      config: {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: inputName,
          email: inputEmail,
          password: inputPassword,
        }),
      },
    });
    alert("Register Successful");
    inputName = "";
    inputEmail = "";
    inputPassword = "";
  }
  };

document.getElementById("form").onsubmit = handleSubmit;