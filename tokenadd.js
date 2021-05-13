accname = prompt('Enter your blooket username');tokensamount = prompt('How many tokens do you want (max 500 daily)');fetch("https://api.blooket.com/api/users/addtokens", {
  "headers": {
    "accept": "application/json, text/plain, */*",
    "accept-language": "en-US,en;q=0.9",
    "authorization": localStorage.token,
    "content-type": "application/json;charset=UTF-8",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-site",
    "sec-gpc": "1"
  },
  "referrer": "https://www.blooket.com/",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": "{\"name\":accname,\"addedTokens\":tokensamount",
  "method": "PUT",
  "mode": "cors",
  "credentials": "include"
});
