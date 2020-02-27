window.onload = () => {
    btn = document.querySelectorAll('.item');

       for(let a =0; a<btn.length; a++){
        btn[a].addEventListener('click', function () { 
           let thisClass= this.lastElementChild.classList;
            for(let x= 0; x<btn.length; x++){
                let onee = btn[x].lastElementChild.classList;
                if(onee.value == "list active" && thisClass.value !== "list active"){
                   onee.remove('active');
                }
            }

            thisClass.toggle('active');

       });
       }
}