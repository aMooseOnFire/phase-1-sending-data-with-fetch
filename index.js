// Add your code here
function submitData (userName, userEmail) {

    const configurationObject = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          name: userName,
          email: userEmail,
        }),
      };
      
      return fetch("http://localhost:3000/users", configurationObject)
        .then(resp => resp.json())
        .then(object => {
            console.log(object)
            const h1 = document.createElement('h1')
            h1.textContent = object.id
            document.body.appendChild(h1)
        }) 
        .catch(function (error) {
            const h2 = document.createElement('h2')
            h2.textContent = "Unauthorized Access"
            document.body.appendChild(h2)
        })

}