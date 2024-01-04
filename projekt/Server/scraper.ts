import { chromium } from 'playwright';
import { JsonDB, Config } from 'node-json-db';

export class Scraper {

    db: JsonDB;

    dbSaveLocation = "..\\Client\\";
    dbFileName = "szkoleniaDb.json";

    constructor() {
        let saveLocation = this.dbSaveLocation + this.dbFileName;
        this.db = new JsonDB(new Config(saveLocation, true, false, '/'));
    }

    async ScrapePage() {
        const browser = await chromium.launch({
            headless: true
        });

        console.log("Starting browser...")
        const page = await browser.newPage();
        await page.goto("https://rejestracja.wombb.edu.pl");
        console.log("Page is loaded.");

        await page.waitForTimeout(2000);

        const response = await page.evaluate(() => {
            let table = document.getElementById('coursesTable') as HTMLTableElement;
            let data = [...table.rows].map(x => $('#coursesTable').DataTable().row(x).data()).filter(x => x !== undefined);

            return data;
        });

        console.log(response);

        for (let item of response) {
            await this.db.push(
                `/szkolenie_${response.indexOf(item)}`,
                item);
        }

        await page.waitForTimeout(2000);
        await browser.close();

        console.log("Finished");
    }
}
