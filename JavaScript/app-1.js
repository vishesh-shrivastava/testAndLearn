//for loop question star pattern
for (let i = 0; i < 5; i++) {
    let str = "";
    for (let j = 0; j < 5-i; j++) {
        str = str+"*"
    }
    console.log(str);
}