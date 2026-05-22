const path = require("node:path");

class BasePage{

    constructor(page){
        this.page = this.page;
    }

    async navigate(path){
        await this.page.goto(path);
    }

    

}