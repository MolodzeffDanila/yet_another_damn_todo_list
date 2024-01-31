import { test, expect } from '@playwright/test';

test('Is theme switch', async({page})=>{
    await page.goto('http://localhost:3001/');

    await expect(page.getByRole('checkbox', { name: '' })).toBeVisible();
})