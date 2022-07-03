function myFun(){
    var a = document.getElementById("Gender").value;
    var b = document.getElementById("Plan").value;
    var c = document.getElementById("pers").value;
    var amt = document.getElementById("am").value;
    var fname  = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var Phone = document.getElementById("Phone").value;

    
    console.log( "fname : ",fname)
    console.log("lname : ", lname)
    console.log("Phone : ", Phone)
    console.log("Gender : ", a)
    console.log("Person : ", c)
    console.log("Plan : ", b)
    

    func_search()

    if(a=="Gender"){
        document.getElementById("ge").innerHTML="** select Gender";
        return false;
    } document.getElementById("ge").innerHTML = "";
    

    if(b=="Plan"){
        document.getElementById("pe").innerHTML="** select Plan";
        return false;
    }document.getElementById("pe").innerHTML="";

    if(c=="person"){
        document.getElementById("per").innerHTML="** select number of person";
        return false;
    } document.getElementById("per").innerHTML="";


    


    if (b == "world") {
     var  amt =  document.getElementById("am").value = c*999;
    console.log("am: ", amt)

        return false;
    }
    if(b == "universe"){
      var amt =  document.getElementById("am").value = c*1399;
      console.log("am: ", amt)
        return false;
    }
    if(b == "annual"){
      var  amt =  document.getElementById("am").value = c*1899;
      console.log("am: ", amt)
        return false;
    }
   
//    func_search()
}

function func_search()
            {               
             window.location="./Payment.jsp"
            }
            