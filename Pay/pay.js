function myFun(){
    var a = document.getElementById("Gender").value;

    if(a=="Gender"){
        document.getElementById("ge").innerHTML="** select Gender";
        return false;
    }document.getElementById("ge").innerHTML="";
    var b = document.getElementById("Plan").value;

    if(b=="Plan"){
        document.getElementById("pe").innerHTML="** select Plan";
        return false;
    }document.getElementById("pe").innerHTML="";
    var c = document.getElementById("pers").value;

    if(c=="person"){
        document.getElementById("per").innerHTML="** select number of person";
        return false;
    } document.getElementById("per").innerHTML="";

    if(b == "practice"){
        var c = document.getElementById("am").value = c*199;
        return false;
    }
    if(b == "coach"){
        var c = document.getElementById("am").value = c*399;
        return false;
    }
    if(b == "Corporate"){
        var c = document.getElementById("am").value = c*899;
        return false;
    }
    if(b == "world"){
        var c = document.getElementById("am").value = c*999;
        return false;
    }
    if(b == "universe"){
        var c = document.getElementById("am").value = c*1399;
        return false;
    }
    if(b == "annual"){
        var c = document.getElementById("am").value = c*1899;
        return false;
    }
}

