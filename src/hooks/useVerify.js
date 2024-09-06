const useVerify = async function () {
  const response = await fetch("http://localhost:3000/account/authenticated");
  const data = await response.json();

  if (data.authenticated) {
    return true;
  } else {
    return false;
  }
};

module.exports = useVerify;
