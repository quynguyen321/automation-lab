const { Builder, Capabilities, By} = require('selenium-webdriver');
require('chromedriver');

const driver = new Builder().withCapabilities(Capabilities.chrome()).build();

beforeAll(async() =>{
    await driver.get('http://localhost:5500/movieList/index.html')
})

afterAll(async () => {
    await driver.quit();
})

test('should add a movie to the movie list', async ()=> {
    await driver.findElement(By.xpath('//input')).sendKeys('Ironman')

    await driver.findElement(By.css('button')).click()
    
    var clickMovie = await driver.findElement(By.xpath('//span'))
    await clickMovie.click()

    await driver.sleep(3000)

    var unclickMovie = await driver.findElement(By.xpath('//span[@class = "checked"]'))
    await unclickMovie.click()

    await driver.sleep(3000)

    var deleteButton = await driver.findElement(By.xpath('//button[@id]'))
    await deleteButton.click()

    
});

