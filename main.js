
             var emailArray=[];
             var passwordArray=[];

             var loginBox = document.getElementById("login");
             var regBox = document.getElementById("register");

             var loginTab = document.getElementById("lt");
             var regTab = document.getElementById("rt");


            //Log in Tab click function......................................

            function loginTabFun()
            {
                regBox.style.visibility="hidden";
                loginBox.style.visibility="visible";
                
                loginTab.style.backgroundColor="#f5f5f5";
                regTab.style.backgroundColor="#ddd";
            }
    

            //Sign Up Tab click function.......................................

            function regTabFun()
            {
                regBox.style.visibility="visible";
                loginBox.style.visibility="hidden";
              
                regTab.style.backgroundColor="#f5f5f5";
                loginTab.style.backgroundColor="#ddd";
             }



//....................................................Sign up  Function...................................................................................
            function register(){

              
                var email = document.getElementById("re").value;
                var password = document.getElementById("rp").value;
                var passwordRetype = document.getElementById("rrp").value;
               var regExp = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
                var lowerCaseLetters = /[a-z]/g;
                var upperCaseLetters = /[A-Z]/g;
                var numbers = /[0-9]/g;


            // ...........................................................................Email Section.......


                if(email.length == 0){
                    alert('Please Enter Email');               //Check Empty Box Email
//                     swal("Opps..!","Please Enter Email","warning");

                }
                 else if ((!email.match(regExp)))                //Check reg-exp with Email
                {
                    alert('Invalid Email');
//                    swal("Opps..!","Please Enter Valid Email","warning");

                }

            // ...........................................................................PassWord Section.......

                else if(password.length == 0){
                    alert('Please Enter Password');                                     //Check Empty Box of password

                }
                else if((password.length < 4) || (password.length > 15)){                 //Check length of password
                    alert('Mini 4 Char & Max 15 Char');

                }
                else if(!password.match(numbers)){
                    alert('please add atleast 1 Digit into password');                      //Check digit

                }
                else if(!password.match(upperCaseLetters)){
                    alert('please add atleast 1 Uppercase letter into password');           //Check Uppercase
                    

                }
                else if(!password.match(lowerCaseLetters)){
                    alert('please add atleast 1 Lowercase letter into password');            //Check Lowercase

                }
                else if (passwordRetype == ""){
                alert("Re Write Password required.");                                       //Check Empty RE-Password
                }

                else if ( password != passwordRetype){
                alert("Password don't match retype your Password.");                       //Check Match RE-Password              
                }

                else if(emailArray.indexOf(email) == -1){
                    emailArray.push(email);
                    passwordArray.push(password);

                    alert(email + "  Thanks for registration. \n Try to login Now");

                    //Make Empty input field 
                    document.getElementById("re").value ="";
                    document.getElementById("rp").value="";
                    document.getElementById("rrp").value="";
                }



                else{
                    alert(email + "it is already register make New register.");
                return ;
                }
        }



//....................................................Login Function...................................................................................

                    function login(){
                    var msg = document.getElementById('msg');
                    var email = document.getElementById("se").value;
                    var password = document.getElementById("sp").value;

                    var i = emailArray.indexOf(email);

                    if(emailArray.indexOf(email) == -1){
                        if (email == ""){
                            alert("Email required.");
                            return ;
                        }
                        alert("Email does not exist.");
                        return ;
                    }
                    else if(passwordArray[i] != password){
                        if (password == ""){
                            alert("Password required.");
                            return ;
                        }
                        alert("Password does not match.");
                        return ;
                    }
                    else {
                        alert(email + " you are Successfully logined Now \n Welcome to our website.");

                         //Make input field Empty
                        document.getElementById("se").value ="";
                        document.getElementById("sp").value="";
                        return ;
                    }

                }

//....................................................Show Password Function...................................................................................

                    function showPass() {
                              var x = document.getElementById("sp");
                              if (x.type === "password") {
                                x.type = "text";
                              } else {
                                x.type = "password";
                              }
                            }


//.......................................................................................................................................
                  
                       function bodyload(){
            var now =new Date();
            var hr = now.getHours(); //Start with 0-23
            var salute = document.getElementById("salute");
            var userName = prompt("Please Enter Your Good Name :)");
            
            

            if(hr>=0 && hr<=12){
                salute.innerHTML=`<i class='bx bx-sun'></i> Hello <b>${userName}</b> Good Morning...`;
            }
            else if(hr>=13 && hr<=17){
                salute.innerHTML=`<i class="bi bi-cloud-sun"></i> Hello ${userName} Good Afternoon...`;
            }
            else if(hr>=18 && hr<=21){
                salute.innerHTML=`<i class="bi bi-brightness-alt-high-fill"></i> Hello ${userName} Good Evening...`;
            }
        }
   
