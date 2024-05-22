fetch('https://thesneakerdatabase.com/v1/sneakers')
    .then(res => res.json())
    .then(json => console.log(json));
