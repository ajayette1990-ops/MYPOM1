import type { Locator, Page } from '@playwright/test';

export class InventoryPage {
  constructor(private readonly page: Page) {}

  getTitle(): Locator {
    return this.page.getByText('Products', { exact: true });
  }

  getInventoryItems(): Locator {
    return this.page.locator('.inventory_item');
  }
}
