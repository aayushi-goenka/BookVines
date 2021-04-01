document.getElementById('user').style.display = "none";

function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {

           
           
                 document.getElementById('user').style.display = "block";
                document.getElementById('input-book').style.display = "none";
                document.getElementById('add-img').style.display = "none";
               
               

                function myFunction(x) {
                    if (x.matches) { // If media query matches
                        $('#user')
                        .attr('src', e.target.result)
                        .width(280)
                        .height(260)
                        .css('border-radius', '20rem');
                        document.getElementById('user').style.marginLeft = "18px";
                    } 
                    else{
                        $('#user')
                        .attr('src', e.target.result)
                        .width(280)
                        .height(270)
                        .css('border-radius', '20rem');
                        document.getElementById('user').style.marginLeft = "18px";
                    }
                  }


                var x = window.matchMedia("(max-width: 770px)")
                myFunction(x) // Call listener function at run time
                x.addListener(myFunction)
                 
                
        };

        reader.readAsDataURL(input.files[0]);
    }
}
