const btn = document.querySelector("#redirect");
const btn2 = document.querySelector("#redirect2");

btn.addEventListener("click", () => {
  setTimeout(() => {
    const a = "https://developer.mozilla.org";
    window.location.replace(a);
  }, 2000);
});

btn2.addEventListener("click", () => {
  //   var copyText = document.querySelector("#aqa");
  //   copyText.focus();
  //   document.execCommand("paste");

  navigator.clipboard
    .readText()
    .then((clipText) => (document.getElementById("aqa").value = clipText));
});


const saveUrl = async (url) => {
https://docs-examples.firebaseio.com/rest/saving-data/fireblog/users.json'
const endpoint = 'https://url-short-d62db.firebaseio.com/rest/saving-data/fireblog/users.json'
 
    // Default options are marked with *
    const response = await fetch(endpoint, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify({urls: {}}) // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  

{
        "users": {
          "alanisawesome": {
            "date_of_birth": "June 23, 1912",
            "full_name": "Alan Turing"
          }
        }
      }

    }
}