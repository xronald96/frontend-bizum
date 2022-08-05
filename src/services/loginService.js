export const login = (data) => {
    return fetch('http://localhost:8080/user/login',  {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then((response) => {
          if(response.status === 400)
            return null
        else return response.json()
      })
      .catch((error) => {
        console.log(error);
      });
  };