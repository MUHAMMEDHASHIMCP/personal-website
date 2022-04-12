// $(document).ready(function(){
   

//     $("#submit").click(function() {
//         var fullname= $("#fullName").val();
//         var email = $("#mobileNumber").val();
//         var email = $("#emailAddress").val();
//         var subject= $("#subject").val();
//         var message= $("#message").val();
//         if (fullname == '' || mobileNumber == '' ||  email == '' || subject == '' || message == '') {

//             $("#infoError").show()
//             $("#mobileNumberError").show()
//             $("#emailError").show()
//             $("#fullNameError").show()
//             $("#emailError").show()
//             $("#subjectError").show()
//             $("#messageError").show()
                       
//         }else{

//     $("#infoError").hide()
//     $("#mobileNumberError").hide()
//     $("#emailError").hide()
//     $("#fullNameError").hide()
//     $("#emailError").hide()
//     $("#subjectError").hide()
//     $("#messageError").hide()


//         }


    


//     }) ; 
// )};
// }



    // $(document).ready(function()
    // {
    //    $("#fnam").blur(function() {
    
    //       if($(this).val() == null || $(this).val() == undefined || $(this).val() == "")
    //       {
    //          alert("field is empty");
    //       }
    
    //    });

// });




// MY CODE



 

       
        
    // $("#fullName").blur(function() {
    //     $("#fullNameError").show()
          
       





        //  });


        // $("#fnam").blur(function() {

        //     if($(this).val() == null || $(this).val() == undefined || $(this).val() == "")
        //     {
        //        alert("field is empty");
        //     }
      
        //  });

        
    // });
    // $("#fullname").blur(function(){
    //     filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/; 
    //     var name = $(this).val();
    //     if(name == ''){
    //         $("#fullNameError").show()


    //     }else if(name.length<6){
    //         $("#fullNameError").hide()
    //         $("#fullNameWarning").show()

    //     }
        
     
    //     else if ( name.val(_).match(filter) ){

        
           
    //             $("#nameWarning").show()
    //         } else {
    //             $("#nameWarning").hide()   
    //                 }
    //     }


    // CODE FROM STACK OVER FLOW

    //     $("#fullName").on("blur", function() {
    //         if ( $(this).val().match('^[a-zA-Z]{3,16}$') ) {
    //             alert( "Valid name" );
    //         } else {
    //             alert("That's not a name");
    //         }
    //     })   
    // })
    // $("#email").blur(function(){
    //     var email = $("#emailaddress").val();
    //     if(email == ''){
    //         $("#emailError").show()


    //     }else if (email !== /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/) {
    //         $("#emailError").hide()
    //         $("#emailWarning").show()
    //     }else{
    //         $("#emailWarning").hide()


    //     }
    // })

    // $(("#submit").click(function(){


    // }


    



// https://www.codegrepper.com/code-examples/javascript/javascript+email+validation+w3schools


// https://www.geeksforgeeks.org/form-validation-using-jquery/


// Document is ready
// $(document).ready(function () {
	
//     // Validate fullName
//     $('#usercheck').hide();
//     let fullNameError = true;
//     $('#fullNames').keyup(function () {
//         validatefullName();
//     });
    
//         function validatefullName() {
//         let fullNameValue = $('#fullNames').val();
//         if (fullNameValue.length == '') {
//         $('#usercheck').show();
//             fullNameError = false;
//             return false;
//         }
//         else if((fullNameValue.length < 3)||
//                 (fullNameValue.length > 10)) {
//             $('#usercheck').show();
//             $('#usercheck').html
//     ("**length of fullName must be between 3 and 10");
//             fullNameError = false;
//             return false;
//         }
//         else {
//             $('#usercheck').hide();
//         }
//         }
    
//     // Validate Email
//         const email =
//             document.getElementById('email');
//         email.addEventListener('blur', ()=>{
//         let regex =
//     /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
//         let s = email.value;
//         if(regex.test(s)){
//             email.classList.remove(
//                     'is-invalid');
//             emailError = true;
//             }
//             else{
//                 email.classList.add(
//                     'is-invalid');
//                 emailError = false;
//             }
//         })
        
//     // Validate Password
//         $('#passcheck').hide();
//         let passwordError = true;
//         $('#password').keyup(function () {
//             validatePassword();
//         });
//         function validatePassword() {
//             let passwordValue =
//                 $('#password').val();
//             if (passwordValue.length == '') {
//                 $('#passcheck').show();
//                 passwordError = false;
//                 return false;
//             }
//             if ((passwordValue.length < 3)||
//                 (passwordValue.length > 10)) {
//                 $('#passcheck').show();
//                 $('#passcheck').html
//     ("**length of your password must be between 3 and 10");
//                 $('#passcheck').css("color", "red");
//                 passwordError = false;
//                 return false;
//             } else {
//                 $('#passcheck').hide();
//             }
//         }
            
//     // Validate Confirm Password
//         $('#conpasscheck').hide();
//         let confirmPasswordError = true;
//         $('#conpassword').keyup(function () {
//             validateConfirmPassword();
//         });
//         function validateConfirmPassword() {
//             let confirmPasswordValue =
//                 $('#conpassword').val();
//             let passwordValue =
//                 $('#password').val();
//             if (passwordValue != confirmPasswordValue) {
//                 $('#conpasscheck').show();
//                 $('#conpasscheck').html(
//                     "**Password didn't Match");
//                 $('#conpasscheck').css(
//                     "color", "red");
//                 confirmPasswordError = false;
//                 return false;
//             } else {
//                 $('#conpasscheck').hide();
//             }
//         }
        
//     // Submit button
//         $('#submitbtn').click(function () {
//             validateUsername();
//             validatePassword();
//             validateConfirmPassword();
//             validateEmail();
//             if ((usernameError == true) &&
//                 (passwordError == true) &&
//                 (confirmPasswordError == true) &&
//                 (emailError == true)) {
//                 return true;
//             } else {
//                 return false;
//             }
//         });
//     });
    

//     $('#fullNameError').hide();
//         let fullNameError = true;
//         $('#fullName').blur(function () {
//             validatefullName();
//         });
        

//     function validatefullName() {
//         let fullNameValue = $('#fullName').val();
//         if (fullNameValue.length == '') {

//         $('#fullNameError').show();
            
//         }else if(fullNameValue.length < 6) {
//             $('#fullNameError').hide();
//             $('#fullNameWarning').show();
//             fullNameError = false;
//             return false;

            
//         }else if(){
//             $('#fullNameWarning').show();
//             $('#fullNameWarning').html("**length of Full Name must be more than 6");
//             fullNameError = false;
//             return false;
//         }else {
//             $('#fullNameWarning').hide();

            
//         }


// }




// Document is ready
// $(document).ready(function () {
	
    // Validate Username
    //     $('#fullNameError').hide();
    //     let fullNameError = true;
    //     $('#fullName').keyup(function () {
    //         validateUsername();
    //     });
        
    //     function validateUsername() {
    //     let fullNameValue = $('#fullName').val();
    //     if (fullNameValue.length == '') {
    //     $('#usercheck').show();
    //         fullNameError = false;
    //         // return false;
    //     }
    //     else if((usernameValue.length < 6)) {
    //         $('#fullNameError').hide();
    //         $('#fullNameWarning').show();
    //         fullNameError = false;
    //         // return false;
    //     }else if((usernameValue.length < 6)) {
    //         $('#fullNameError').hide();
    //         $('#fullNameWarning').show();
    //         $('#usercheck').html
    // ("**length of username must be between 3 and 10");
    //         fullNameError = false;
    //         // return false;
    //     }
    //     else {
    //         $('#usercheck').hide();
    //     }
    //     }
    
    // // Validate Email
    //     const email =
    //         document.getElementById('email');
    //     email.addEventListener('blur', ()=>{
    //     let regex =
    // /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    //     let s = email.value;
    //     if(regex.test(s)){
    //         email.classList.remove(
    //                 'is-invalid');
    //         emailError = true;
    //         }
    //         else{
    //             email.classList.add(
    //                 'is-invalid');
    //             emailError = false;
    //         }
    //     })
        
    // // Validate Password
    //     $('#passcheck').hide();
    //     let passwordError = true;
    //     $('#password').keyup(function () {
    //         validatePassword();
    //     });
    //     function validatePassword() {
    //         let passwordValue =
    //             $('#password').val();
    //         if (passwordValue.length == '') {
    //             $('#passcheck').show();
    //             passwordError = false;
    //             return false;
    //         }
    //         if ((passwordValue.length < 3)||
    //             (passwordValue.length > 10)) {
    //             $('#passcheck').show();
    //             $('#passcheck').html
    // ("**length of your password must be between 3 and 10");
    //             $('#passcheck').css("color", "red");
    //             passwordError = false;
    //             return false;
    //         } else {
    //             $('#passcheck').hide();
    //         }
    //     }
            
    // // Validate Confirm Password
    //     $('#conpasscheck').hide();
    //     let confirmPasswordError = true;
    //     $('#conpassword').keyup(function () {
    //         validateConfirmPassword();
    //     });
    //     function validateConfirmPassword() {
    //         let confirmPasswordValue =
    //             $('#conpassword').val();
    //         let passwordValue =
    //             $('#password').val();
    //         if (passwordValue != confirmPasswordValue) {
    //             $('#conpasscheck').show();
    //             $('#conpasscheck').html(
    //                 "**Password didn't Match");
    //             $('#conpasscheck').css(
    //                 "color", "red");
    //             confirmPasswordError = false;
    //             return false;
    //         } else {
    //             $('#conpasscheck').hide();
    //         }
    //     }
        
    // Submit button
    //     $('#submit').click(function () {
    //         validateUsername();
    //         validatePassword();
    //         validateConfirmPassword();
    //         validateEmail();
    //         if ((usernameError == true) &&
    //             (passwordError == true) &&
    //             (confirmPasswordError == true) &&
    //             (emailError == true)) {
    //             return true;
    //         } else {
    //             return false;
    //         }
    //     });
    // });
   
    

    $(document).ready(function(){
        var fullName= $("#fullName").val();
        var mobileNumber = $("#mobileNumber").val();
        var email = $("#emailAddress").val();
        var subject= $("#subject").val();
        var message= $("#message").val();
        // var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/; 
        $("#fullName").blur(function(){
            // let nameVar=true;
            // $("#infoError").hide()
            // $("#fullNameError").hide()
            // $("#fullNameWarning").hide()
    
            if(fullName == ''){
                $("#infoError").show();
                $("#fullNameError").show();
                // nameVar=false;
                // return true;
    
    
            }else if(fullNamelength < 6){
                $("#fullNameError").hide();
                $("#fullNameWarning").show();
                // $('#fullNameWarning').html
                //     ("**length of fullName must be more than 6 letters");
                //     nameVar= false;
                //     return false;
                            
    
            // }
            // else if(!fullName==filter){
                
            //     $("#fullNameWarning").show();
            //     $('#fullNameWarning').html
            //     ("**length of fullName must be between 3 and 10");
            //     nameVar= false;
            //     return false;
    
    
                
    
            }else{
                $("#fullNameError").hide();
                $("#fullNameWarning").hide();
                // return false;
    
            }
    
            // $.post("", $("#myform").serialize(),  function(response) {
            //     $('#myform').fadeOut('slow',function(){
            //         $('#correct').html(response);
            //         $('#correct').fadeIn('slow');
            //        });
            //      });
            //      return false;
    
        });
    
        });
    
    
    
    
        // $("#submit").click(function() {
        //     if ((fullname == '' || mobileNumber == '' ||  email == '' || subject == '' || message == '') && (nameVar==true)){
                        
            
        //                 $("#infoError").show()
        //                 $("#mobileNumberError").show()
        //                 $("#emailError").show()
        //                 $("#fullNameError").show()
        //                 $("#emailError").show()
        //                 $("#subjectError").show()
        //                 $("#messageError").show()
                                   
        //             }else{
            
                
        //         $("#mobileNumberError").hide()
        //         $("#emailError").hide()
                
        //         $("#emailError").hide()
        //         $("#subjectError").hide()
        //         $("#messageError").hide()
            
            
        //             }
    
    
    
        //   })
    
        // $("#fullName").blur(function(){
        //     var fullname= $(this).val(); 
    
        //     if (fullname == '' ) {
            
        //         $("#infoError").show()
        //         $("#fullNameError").show()
           
        //     }else if (fullname == '' ) {
        //         const fullName= $("#fullName").val();
            
                
                
        //     fullName.addEventListener('blur', ()=>{
        //     let nameregex =
        // /^([_\-\.a-zA-Z]+)([_\-\.a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
        //     let s = fullName.value;
        //     if(nameregex.test(s)){
        //         fullName.classList.remove(
        //                 'is-invalid');
        //             $("#infoError").show()
        //             $("#fullNameError").show()
            
        //         }
        //         else{
        //             email.classList.add(
        //                 'is-invalid');
        //                 $("#infoError").show()
        //                 $("#fullNameError").show()
        //         }
        //     })
           
        //     }else{
    
        //         $("#infoError").hide()
        //         $("#fullNameError").hide()
    
        //     }
    
    
        // })
    
    
    // })