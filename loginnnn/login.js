const BASE_API = "https://652ff3566c756603295dfc8e.mockapi.io";

const fetcher = async ({ endpoint = "", config = {} }) => {
  let result = {
    data: [],
    error: {},
  };

  try {
    const response = await fetch(`${BASE_API}/${endpoint}`, config);
    const data = await response.json();

    console.log(data, "data");

    result.data = data;
  } catch (error) {
    result.error = error;
  }

  return result;
};

const handleSubmit = async (e) => {
  e.preventDefault();

  const inputEmail = document.getElementById("email").value;
  const inputPassword = document.getElementById("password").value;

  const { data } = await fetcher({
    endpoint: "user",
  });

  const isUserExist = data?.find(
    (item) => item.email === inputEmail && item.password === inputPassword
  );

  if (!isUserExist) return alert("Wrong Email or Password");

  localStorage.setItem(
    "usr",
    JSON.stringify({
      id: isUserExist.id,
      name: isUserExist.name,
    })
  );
  return alert("Login Successful");
};

document.getElementById("form").onsubmit = handleSubmit;
