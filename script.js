var name1 = prompt("write your name ").toLowerCase//"ali"
var name2 = prompt("write your name")//"selim"
var user1 = prompt("write your prefer  /tas kagıt/or makas")//"tas"
var user2 = prompt("write your prefer  /tas kagıt/or makas")//"kagıt"
if(user1 =="tas" && user2 == "kagıt") {
  console.log(name2 +" kazandı")
}else if(user1 =="tas" && user2 == "makas") {
  console.log(name1 +" kazndı")
}else if(user1 =="tas" && user2 == "tas") {
  console.log("kazanan yok berabere")
}else if(user1 =="kagıt" && user2 == "tas") {
  console.log(name +" kazandı")
}else if(user1 =="kagıt" && user2 == "makas") {
  console.log(name2 +" kazandı")
}else if(user1 =="kagıt" && user2 == "kagıt") {
  console.log("kazanan yok berabere ")
}else if(user1 =="makas" && user2 == "kagıt") {
  console.log(name1 + " kazandı ")
}else if(user1 =="makas" && user2 == "tas") {
  console.log(name2 + " kazandı ")
}else if(user1 =="makas" && user2 == "makas") {
  console.log("kazanan yok berabere" )
}else {
  console.log("tekrar deneyın")
}