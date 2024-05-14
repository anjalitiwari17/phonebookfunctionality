
// PHONE BOOK FUNCTIONALITY 




function phonebook(name,contact,email){
    return{

    };
}
function addContact(name,number,email){
    phonebook[name]={number,email};
    console.log(name+" "+"added");
}
function searchContact(name){
    if(phonebook[name]){
        console.log("Name: "+name);
        console.log("Number: "+phonebook[name].number);
        console.log("Email: "+phonebook[name].email);
    }
    else{
        console.log(name + "not found");
    }
}
function updateContact(name,newNumber,newEmail){
    if(phonebook[name]){
        phonebook[name].number=newNumber;
        phonebook[name].email=newEmail;
        console.log(name+" "+"information updated");
    }
    else{
        console.log(name+" "+"Not found");
    }
}
 function deleteContact(name){
    if(phonebook[name]){
        delete phonebook[name];
        console.log(name+" "+"deleted from contact");
    }
    else{
        console.log(name + " "+"not found");
    }
 }

addContact("arju",6543223455,"arju@av.com");
addContact("anju",1143223455,"anju@av.com");

searchContact("arju");
updateContact("arju",6544223455,"arju@v.com");
searchContact("arju");
deleteContact("arju");
searchContact("anju");