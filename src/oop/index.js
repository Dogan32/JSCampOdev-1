class Customer{
    constructor(id,customerNumber){
        this.id = id;
        this.customerNumber = customerNumber;
    }
}

let customer = new Customer(1, "12345");
//prototyping
customer.name = "Ali Veli"
console.log(customer.name)

Customer.bisey = "Bişey"
console.log(Customer.bisey)

console.log(customer.customerNumber)

class IndividualCustomer extends Customer {
    constructor(firstName,id,customerNumber){
        super(id,customerNumber)
        this.firstName = firstName
}
}

class CorporateCustomer extends Customer {
    constructor(companyName,id,customerNumber){
        super(id,customerNumber)
        this.companyName = companyName
    }
}


let products = [
    {id:1, name : "Acer", unitPrice:10000},
    {id:2, name : "Casper", unitPrice:20000},
    {id:1, name : "Dell", unitPrice:30000},
]

console.log("<ul>")
products.map(product=>console.log(`<li>${product.name}</li>`))
console.log("</ul>")
