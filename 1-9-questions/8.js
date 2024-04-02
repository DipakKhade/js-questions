function pyramid(rows) {
    for (let i = 1; i <= rows; i++) {
        let row = ''
        let spaces = ' '.repeat(rows - i)     //to get even spaces
       
        for (let j = 1; j <= i; j++) {
            row += j;
        }
        for (let k = i - 1; k >= 1; k--) {
            row += k;
        }
        console.log(spaces + row);
    }
}

pyramid(5)
