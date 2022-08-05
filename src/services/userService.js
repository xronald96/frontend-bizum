export const getFriends = (id) => {
    return fetch('http://localhost:8080/user/friends/'+id,  {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'x-access-token': sessionStorage.getItem('token')
        },
      })
      .then((response) => {
          if(response.status === 400)
            return null
          else if(response.status===401)
            console.log('back')
        else return response.json()
      })
      .catch((error) => {
        console.log(error);
      });
  };