let CopanCode:boolean = false;
let OderAmount:number =1100;
let isMember:boolean = true;


if (CopanCode || (OderAmount >= 1100 && isMember)){

    console.log("Discount Avail");
}

else{
       console.log("Discount not Avail");
} 


let BookAvailable:boolean = true;
let LibraryMembershipGold:boolean = true
let LibraryMembership:boolean = false
let BooksBowered:number = 5

if (BookAvailable && LibraryMembershipGold && BooksBowered < 5 ){
    console.log("You can borrow Book Because your Gold Member")
}

else if (BookAvailable && LibraryMembership && BooksBowered < 3){
    console.log("You can borrow Book")
}

else{
    console.log("You can't borrow Book")
}
