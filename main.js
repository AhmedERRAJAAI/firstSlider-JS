let counter = 0;
setInterval(function(){
    counter++;
    document.getElementById('radio'+counter).checked = true;
    console.log(counter);
    counter>=4? counter = 0:counter ;
},3000);