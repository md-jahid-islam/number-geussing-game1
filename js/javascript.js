  let show = document.querySelector('.show')
  let error = document.querySelector('.error')
  let player_one = document.querySelector('.player_one')
  let player_one_input = document.querySelector('.player_one_input')
  let player_one_button = document.querySelector('.player_one_button')
  let player_tow = document.querySelector('.player_tow')
  let player_tow_input = document.querySelector('.player_tow_input')
  let player_tow_button = document.querySelector('.player_tow_button')
  

  player_one_button.addEventListener('click' , ()=>{
    if(player_one_input.value == ''){

        error.innerHTML = 'faka raka jave na'
    }else{
      
     if(player_one_input.value > 10){
        error.innerHTML = '10 er beshi deya ajabe na '
     }else{
        error.innerHTML = ''
        show.innerHTML = 'player_tow'
        player_one.style = 'display:none;'
        player_tow.style = 'display:block;'

     }
    }
  })
  //================= plyear button tow =============
  player_tow_button.addEventListener('click' , ()=>{

    if(player_tow_input.value == ''){
         error.innerHTML = 'faka raka jave na player tow'
    } else{
        if(player_tow_input.value > 10){

            error.innerHTML = '10 er beshi deya ajabe na player tow'

        }else{
            error.innerHTML = ''
            if(player_one_input.value == player_tow_input.value){
                show.innerHTML = 'plyer one win'
            }else{
                show.innerHTML = 'player tow win'
            }
        }
    }

       
  })