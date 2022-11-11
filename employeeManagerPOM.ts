import{Builder, By, Capabilities, until,WebDriver, WebElement}from"selenium-webdriver";
const chromedriver = require("chromedriver")
const driver:WebDriver = new Builder().withCapabilities(Capabilities.chrome()).build();

export class employeePage{
    driver: WebDriver;
    url: string ="https://devmountain-qa.github.io/employee-manager/1.2_Version/index.html";

    header: By = By.xpath('//div[@class="titleBar"]');
    addEmployee: By = By.name("addEmployee");
    newEmployee: By = By.name("employee11");
    nameField: By = By.xpath('//input[@name="nameEntry"]');
    phoneField: By= By.css('[name="phoneEntry"]');
    titleField: By = By.name ("titleEntry");
    saveButton: By = By.xpath ('//button[@class="confirmationButton"]');
    cancelButton: By = By.css('[name="cancel"]');
    bernice:By = By.name("employee1");

    constructor(driver:WebDriver){
        this.driver = driver;
    };

    async navigate(){
        await this.driver.get(this.url);
        await this.driver.wait(until.elementLocated(this.header));
    };

    async click(elementBy){
        await this.driver.wait(until.elementLocated(elementBy));
        return (await this.driver.findElement(elementBy).click());
    };

    async sendKeys(elementBy, keys:any){
        await this.driver.wait(until.elementLocated(elementBy));
        return this.driver.findElement(elementBy).sendKeys(keys);
    };

    async clear(elementBy){
        await this.driver.wait(until.elementLocated(elementBy));
        return (await this.driver.findElement(elementBy).clear());
    };

    async setInput(elementBy: By,keys:any):Promise<void>{
        let input =await this.driver.findElement(elementBy);
        await input.click();
        await input.clear();
        await input.sendKeys();
    };



};