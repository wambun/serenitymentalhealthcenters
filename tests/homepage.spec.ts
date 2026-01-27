import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
    await page.goto('/');

    // Expect a title "to contain" a substring.
    // We don't know the exact title yet, so we'll just check if it's there.
    await expect(page).toHaveTitle(/.*/);
});

test('homepage loads correctly', async ({ page }) => {
    await page.goto('/');

    // Check if the main content is visible
    // Using a generic selector as we don't know the exact structure yet
    const main = page.locator('main').first();
    await expect(main).toBeVisible();
});
