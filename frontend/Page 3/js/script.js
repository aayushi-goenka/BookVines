document.getElementById('add-book').style.display = "none";

function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {

            var innerDiv = document.querySelector('.inner-div');
                 innerDiv.classList.remove('inner-div');
           
                 document.getElementById('add-book').style.display = "block";
                document.getElementById('input-book').style.display = "none";
                document.getElementById('add-img').style.display = "none";
               
               

                function myFunction(x) {
                    if (x.matches) { // If media query matches
                        $('#add-book')
                        .attr('src', e.target.result)
                        .width(230)
                        .height(370);
                        document.getElementById('add-book').style.marginLeft = "18px";
                    } 
                    else{
                        $('#add-book')
                        .attr('src', e.target.result)
                        .width(280)
                        .height(410);
                        document.getElementById('add-book').style.marginLeft = "18px";
                    }
                  }


                var x = window.matchMedia("(max-width: 770px)")
                myFunction(x) // Call listener function at run time
                x.addListener(myFunction)
                 
                
        };

        reader.readAsDataURL(input.files[0]);
    }
}
