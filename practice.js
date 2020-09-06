console.log("hi")


input="3
20 2
30 6
10 7
2
60 1
30 5
4
15 1
25 2
30 3
10 5
-1
"


lastvalue=0
for (const item of input) {
    sum += (item.split(" ")[0])*((item.split(" ")[1])-lastvalue)
    lastvalue=item.split(" ")[1]
}
console.log(sum)


    //Enter your code here
    var data = input.split('\n');
    var firstLine = data[0].split(' ');
    var len = firstLine[0];
    //process.stdout.write('length:'+len);
    var toFind = firstLine[1];
    //process.stdout.write('toFind:'+toFind);
    //process.stdout.write('\n');
    var arr = data[1].split(' '); 
    //process.stdout.write(arr);
    for(var i=len-1;i>=0;i--) {
        if(arr[i] == toFind){
            process.stdout.write(i+1);
            return;
        }
    }
    process.stdout.write(-1);





