import { test, Page, expect, chromium, APIRequestContext } from "@playwright/test";
import * as XLSX from 'xlsx';

test("TitleTest", async ({ page }) => {
   page.goto("https://www.practicesoftwaretesting.com/");
   await expect(page).toHaveTitle("Practice Software Testing - Toolshop - v5.0");


});
// API test inside a test function
test("API Test", async ({ request }) => {
   const response = await request.get('https://reqres.in/api/users?page=2');
   expect(response.ok()).toBeTruthy();

   const body = await response.json();
   expect(body.data.length).toBeLessThan(2000);
});


function readData(path: string) {
   const workbook = XLSX.readFile(path);
   const sheet1 = workbook.Sheets["details"];
   const data = XLSX.utils.sheet_to_json(sheet1);
   console.log(data);
   return data;
}
//to be corrected
test("Excel read test", async () => {
   const data = readData("C://Users//pratilipib//Desktop//Documents//Personal//CodingsAndPractices//PraticeRepos//dataFolder//TestData.xlsx")
   const dataIterator = data.values();
   console.log(...dataIterator);
   expect([...dataIterator].values()).toContain("Pratilipi");

});

