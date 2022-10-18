const fs = require('fs')
let credentials = JSON.parse(fs.readFileSync("./test/specs/TestData/testdata.json"))

describe("Read from json", async () =>
 {

   credentials.forEach(({username,password }) =>
     {
        it('example1', async() => 
        {
        await console.log(username);
        await console.log(password);
        })
    }
    )
})