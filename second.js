// thou (th)
// [{pos:1,unit:th,value:1},{pos:1,unit:inch,value:1000 thous},
//     {pos:1,unit:th,value:1},{pos:1,unit:th,value:1},{pos:1,unit:th,value:1}]
 
// inch (in)

// 1000 thous

// foot (ft)

// 12 inches

// yard (yd)

// 3 feet

// chain (ch)

// 22 yards

// furlong (fur)

// 10 chains

// mile (mi)

// 8 furlongs

// league (lea)

// 3 miles
a=['inc','ft', 'yd']
b=["1 th",'12 inc',"3 ft"]
value=1;
console.log(converter('yd','inc'),"here")
function converter(unit1 , unit2){
    // if(((b[a.indexOf(unit1)]).split(" ")[0]))
    
    if(unit1==unit2){
        return value
    }else if(a.indexOf(unit1)>a.indexOf(unit2)){
            console.log(unit1,unit2)
               if(a.indexOf(a[a.indexOf(unit2)+1])!=-1){
                 console.log("onsode")
            
            converter(unit1,((b[(a.indexOf(unit2)+1)]).split(" ")[1]))
               }
            // value= value*parseInt(((b[a.indexOf(unit1)]).split(" ")[0]))
            //  value=value/ (b[a.indexOf(unit2)].split(" ")[0])x
            // if(((b[(a.indexOf(unit1))-1]).split(" ")[1])){
            //   converter(unit1,((b[(a.indexOf(unit1))-1]).split(" ")[1]))
            }
    }
    // }else if((a.indexOf(unit1)<a.indexOf(unit2))){
    //         console.log(b[a.indexOf(unit2)].split(" ")[0])
          //  value=value* parseFloat(b[a.indexOf(unit2)].split(" ")[0])
           // converter(unit1,b[a.indexOf(unit2)+1]) 
        //    converter(unit1,b[a.indexOf(unit2)].split(" ")[1])

        // }
    


// var l=0
// var sum=0;
// var lastvalue=0
// for (const iterator of array) {
//     if(l==0){
//         l=iterator
//     }else{
//         l -=1
//     }
//     sum += (iterator.split(" ")[0])*((iterator.split(" ")[1])-lastvalue)
//     lastvalue=iterator.split(" ")[1] 
// }

