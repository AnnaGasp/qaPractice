import {Builder, WebDriver, WebElement, until, By, Capabilities} from "selenium-webdriver";
const chromedriver = require ("chromedriver");
const driver:WebDriver = new Builder().withCapabilities(Capabilities.chrome()).build();

import {employeePage} from"./employeeManagerPOM";

const emPOM = new employeePage(driver);

describe ("create a new employee and edit an employee", ()=>{
    beforeEach(async() =>{
        await emPOM.navigate();
    });
    afterAll(async() =>{
        await emPOM.driver.quit();
    });

    test('add new employee', async() =>{
        await emPOM.click(emPOM.addEmployee);
        await emPOM.click(emPOM.newEmployee);
        await emPOM.setInput(emPOM.nameField, "John Doe");
        await emPOM.setInput(emPOM.phoneField, 8767894323);
        await emPOM.setInput(emPOM.titleField,"Not sure who is he")
        await emPOM.click(emPOM.saveButton);
    });
    test('edit an employee', async() => {
        await emPOM.click(emPOM.bernice);
        await emPOM.setInput(emPOM.titleField,"New CEO");
        await emPOM.click(emPOM.saveButton);
    });
});