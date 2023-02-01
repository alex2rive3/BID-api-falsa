const express = require("express");
const app = express();
const { faker } = require('@faker-js/faker');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

class User {
    constructor() {
        this._id = faker.datatype.uuid()
        this.name = faker.name.firstName()
        this.lastName = faker.name.lastName()
        this.phone = faker.phone.number()
        this.email = faker.internet.email()
        this.password = faker.internet.password()
    }
}

class Company {
    constructor() {
        this._id = faker.datatype.uuid()
        this.name = faker.company.name()
        this.address = {
            street: faker.address.street(),
            cityName: faker.address.cityName(),
            state: faker.address.state(),
            countryCode: faker.address.countryCode(),
            country: faker.address.country()
        }
    }
}


app.get("/api/user/new", (req, res) => {
    res.json({ success: true, data: new User() })
})
app.get("/api/companies/new", (req, res) => {
    res.json({ success: true, data: new Company() })
})
app.get("/api/user/company", (req, res) => {
    res.json({ success: true, user: new User(), company: new Company() })
})



const server = app.listen(8000, () =>
    console.log(`Server is locked and loaded on port ${server.address().port}!`)
);
