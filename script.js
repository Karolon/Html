function klik(){
    let ch1 = document.getElementById('checkbox1').checked;
    let ch2 = document.getElementById('checkbox2').checked;
    let button = document.getElementById('submitbutton');
    console.log(ch1);
    console.log(ch2);
    if(ch1 == true && ch2 == true){
      button.disabled = false;
    }else{
      button.disabled = false;
    }
}
/*function kursor(){
  let ku = document.  
}*/