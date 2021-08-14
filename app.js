
$(function () {

    $(".fieldone").click(function () {
        $("#username").addClass("up");
        $(".fieldone i").addClass("up");
    })

    $(".fieldtwo").click(function () {
        $("#pswd").addClass("up");
        $(".fieldtwo i").addClass("up");
    })


    $.ajax({
        type: 'GET',
        url: "https://jsonplaceholder.typicode.com/users",
        success: function (data) {
            $users = $(".response");
    
            $("#login").click(function () {
                let ok = false;
                for (let i = 0; i < data.length; i++) {
                    
                    if ( $("#usr").val() === data[i].username ) {
                        console.log(data);
                        $users.text('Logged in succesfully!');
                        //plus verificare parola
                        ok = true;
                    }

                    if (ok == false) $users.text('Account not found!');
                }

               
             })
        }
    })



})
