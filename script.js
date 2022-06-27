var names=new Array();
names[0]=" Yaakov";
names[1]=" JOhn";
names[2]=" Jen";
names[3]=" Jason";
names[4]=" Paul";
names[5]=" Frank";
names[6]=" larry";
names[7]=" paula";
names[8]=" Laura";
names[5]=" Jim";

for (var i = 0; i < names.length; i++) {
    if(names[i].charAt(0)=='J' || names[i].charAt(0)=='j'){
        console.log("GoodBye"+ names[i])
    }
    else{
        console.log("Hello"+ names[i])
    }
}
