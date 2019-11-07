var faker = require("faker");

for(var i = 0; i < 10;i++)
{
    console.log(faker.fake("{{commerce.productAdjective}} {{commerce.product}}"));
    console.log(faker.fake("${{commerce.price}}\n"));
}