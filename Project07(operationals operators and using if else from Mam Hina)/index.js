let CopanCode = false;
let OderAmount = 1100;
let isMember = true;
if (CopanCode || (OderAmount >= 1100 && isMember)) {
    console.log("Discount Avail");
}
else {
    console.log("Discount not Avail");
}
let BookAvailable = true;
let LibraryMembershipGold = true;
let LibraryMembership = false;
let BooksBowered = 5;
if (BookAvailable && LibraryMembershipGold && BooksBowered < 5) {
    console.log("You can borrow Book Because your Gold Member");
}
else if (BookAvailable && LibraryMembership && BooksBowered < 3) {
    console.log("You can borrow Book");
}
else {
    console.log("You can't borrow Book");
}
export {};
