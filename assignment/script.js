var names=new Array();
names[0]="Yaakov";
names[1]="David";
names[2]="Shin";
names[3]="Paul";
names[4]="Sergio";
names[5]="Salva";
names[6]="Khabib";
names[7]="Bogota";
names[8]="Palarmo";
names[9]="Raquel";

for (var i = 0 ; i < names.length; i++ ){
    if(names[i].charAt(0)==='J' || names[i].charAt(0)==='j'){
        console.log("Goodbye"+ names[i])
    }
    else{
        console.log("Hello " + names[i])
    }
}