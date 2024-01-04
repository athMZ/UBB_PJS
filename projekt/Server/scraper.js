"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Scraper = void 0;
const playwright_1 = require("playwright");
const node_json_db_1 = require("node-json-db");
class Scraper {
    constructor() {
        this.dbSaveLocation = "..\\Client\\";
        this.dbFileName = "szkoleniaDb.json";
        let saveLocation = this.dbSaveLocation + this.dbFileName;
        this.db = new node_json_db_1.JsonDB(new node_json_db_1.Config(saveLocation, true, false, '/'));
    }
    ScrapePage() {
        return __awaiter(this, void 0, void 0, function* () {
            const browser = yield playwright_1.chromium.launch({
                headless: true
            });
            console.log("Starting browser...");
            const page = yield browser.newPage();
            yield page.goto("https://rejestracja.wombb.edu.pl");
            console.log("Page is loaded.");
            yield page.waitForTimeout(2000);
            const response = yield page.evaluate(() => {
                let table = document.getElementById('coursesTable');
                let data = [...table.rows].map(x => $('#coursesTable').DataTable().row(x).data()).filter(x => x !== undefined);
                return data;
            });
            console.log(response);
            for (let item of response) {
                yield this.db.push(`/szkolenie_${response.indexOf(item)}`, item);
            }
            yield page.waitForTimeout(2000);
            yield browser.close();
            console.log("Finished");
        });
    }
}
exports.Scraper = Scraper;
