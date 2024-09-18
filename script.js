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
function  kursor(){
  console.log('dziala');
  const cursors = ['all-scroll','alias','auto','cell','context-menu','col-resize'];
  const cursor = Math.floor(Math.random() * cursors.length);
  document.body.style.cursor = cursors[cursor];
}
function form_return(){
  let _gender = document.getElementById('gender').value;
  let _checkbox1 = document.getElementById('checkbox1').checked;
  let _checkbox2 = document.getElementById('checkbox2').checked;
  let radiobut1 = document.getElementById('radio1').checked;
  let radiobut2 = document.getElementById('radio2').checked;
  console.log(_gender);
  console.log(_checkbox1);
  console.log(_checkbox2);
  console.log(radiobut1);
  console.log(radiobut2);
}