console.log("this is a script");

let result = {
  tag: "",
  free: true,
  role: false,
  user: "rawatrawat1824",
  email: "rawatrawat1824@gmail.com",
  score: 0.48,
  state: "undeliverable",
  domain: "gmail.com",
  reason: "invalid_mailbox",
  mx_found: true,
  catch_all: null,
  disposable: false,
  smtp_check: false,
  did_you_mean: "",
  format_valid: true,
}
submitBtn.addEventListener("click", async(e) => {
    e.preventDefault()
  console.log("Clicked!")
  let key = "ema_live_RlUNEZNNYC0aQLTvAkKvIRMF9zCRscnadrqdA0y0";
  let email = document.getElementById("email").value;

  let url = `https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`;
 let res = await fetch(url)
 let result = await res.json()
  let str = ``;

  for (key of Object.keys(result)) {
    if (result[key] !== "" && result[key] !== " ")
    {
        str = str + `<div>${key}: ${result[key]}</div>`;
        
    }

    
    
  }

  console.log(str);
  resultCont.innerHTML = str;
});
