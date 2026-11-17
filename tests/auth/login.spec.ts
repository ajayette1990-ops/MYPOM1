import { standardUser } from '../../src/test-data/users.js';
import { expect, test } from '../../src/utils/test-fixtures.js';

test('standard user can log in and view inventory', async ({ loginPage, inventoryPage, page }) => {
  await loginPage.goto();
  await loginPage.login(standardUser.username, standardUser.password);

  await expect(page).toHaveURL(/\/inventory\.html$/);
  await expect(inventoryPage.getTitle()).toBeVisible();
  await expect(inventoryPage.getInventoryItems()).toHaveCount(6);
});
