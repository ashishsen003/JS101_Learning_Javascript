// Problem 4: Given stored username and password and input username and password, Print if the user can login or not.

let stored_username = "ashi"
let stored_password = "ashi0511"

let input_username = "ashi"
let input_password = "ashi0591"

if(stored_username==input_username){
  if(stored_password==input_password){
    console.log("login")
  } else {
    console.log("not")
  }
}

