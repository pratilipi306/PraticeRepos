import { test, Page, expect, chromium,APIRequestContext   } from "@playwright/test";

test("TitleTest", async ({ page }) => {
   page.goto("https://www.practicesoftwaretesting.com/");
   await expect(page).toHaveTitle("Practice Software Testing - Toolshop - v5.0");


});
// API test inside a test function
test("API Test", async({request}) =>
{
const response = await request.get('https://reqres.in/api/users?page=2');
expect (response.ok()).toBeTruthy();

const body =await response.json();
expect(body.data.length).toBeLessThan(2000);
});


