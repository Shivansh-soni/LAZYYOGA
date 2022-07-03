<%@page import="java.sql.*"%>

<html>
<head>
<title>
First webpage
</title>
</head>
<body>
            
<%
String fname = request.getParameter("fname");
String lname = request.getParameter("lname");
String gender = request.getParameter("Gender");
String email = request.getParameter("Eid");
String number = request.getParameter("Phone");
String plan = request.getParameter("Plan");
String person = request.getParameter("pers");
String amount = request.getParameter("am");
String coupon = request.getParameter("coupon");


try
{
    Class.forName("com.mysql.cj.jdbc.Driver");
}
catch(ClassNotFoundException e)
{
out.println("Error in Loading Driver"+e);
}

try
{
 Connection con= DriverManager.getConnection("jdbc:mysql://localhost:3307/lazyyoga? user = root&password=");

 String query= "INSERT INTO individual_plan(fname,lname,gender,email,number,plan,person,amount,coupon) values (?,?,?,?,?,?,?,?,?);";
 PreparedStatement ps=con.prepareStatement(query);
 ps.setString(1, fname);    
 ps.setString(2, lname);    
 ps.setString(3, gender);    
 ps.setString(4, email);    
 ps.setString(5, number);    
 ps.setString(6, plan); 
 ps.setString(7, person); 
 ps.setString(8, amount); 
 ps.setString(9, coupon);  

    int x=ps.executeUpdate(); 
    if(x==1)    
    {    
    out.println(ps);
    out.println("Soon You'll be redirected to payment gateway, Please do not refresh...");    
    }
}
    catch(Exception e)
        {
        out.println(e);
        e.printStackTrace();
        }
 

        
        
%>
</form> 
