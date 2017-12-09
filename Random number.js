let secret_number = Math.floor(Math.random()*10)
console.log(secret_number)


function get(){
  let guess = prompt ('what is your guess?')

  if (guess == secret_number){
      alert('You got it')
  }
  else{
      alert('nope!')
      get()
  }
}

get()

