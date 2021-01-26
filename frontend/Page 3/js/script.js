

function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {

            var innerDiv = document.querySelector('.inner-div');
                 innerDiv.classList.remove('inner-div');
           
                
                document.getElementById('input-book').style.display = "none";

                function myFunction(x) {
                    if (x.matches) { // If media query matches
                        $('#add-book')
                        .attr('src', e.target.result)
                        .width(270)
                        .height(412);
                    } 
                    else{
                        $('#add-book')
                        .attr('src', e.target.result)
                        .width(318)
                        .height(430);
                    }
                  }


                var x = window.matchMedia("(max-width: 770px)")
                myFunction(x) // Call listener function at run time
                x.addListener(myFunction)
                 
                
        };

        reader.readAsDataURL(input.files[0]);
    }
}
