import { UnitTests } from '../../CustomAssertLibrary/assertions';
export class PaginationHelper {
  readonly collection: number[];
  readonly itemsPerPage: number;

  constructor(collection: number[], itemsPerPage: number) {
    this.collection = collection;
    this.itemsPerPage = itemsPerPage;
  }

  // Total number of items
  itemCount(): number {
    return this.collection.length;
  }

  // Total number of pages
  pageCount(): number {
    return Math.ceil(this.itemCount() / this.itemsPerPage);
  }

  // Number of items on a specific page
  pageItemCount(pageIndex: number): number {
    // Check if the pageIndex is out of range
    if (pageIndex < 0 || pageIndex >= this.pageCount()) {
      return -1;
    }

    // Last page might not be full, so handle it separately
    if (pageIndex === this.pageCount() - 1) {
      return this.itemCount() % this.itemsPerPage || this.itemsPerPage;
    }

    // For other pages, return full itemsPerPage
    return this.itemsPerPage;
  }

  // Which page an item belongs to
  pageIndex(itemIndex: number): number {
    if (itemIndex < 0 || itemIndex >= this.itemCount()) {
      return -1;
    }

    return Math.floor(itemIndex / this.itemsPerPage);
  }
}

const collection = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];
const helper = new PaginationHelper(collection, 10);

// Unit tests
UnitTests.strictEqual(helper.pageCount(), 3); // Expect 3 pages
UnitTests.strictEqual(helper.itemCount(), 24); // Total 24 items
UnitTests.strictEqual(helper.pageItemCount(1), 10); // Second page should have 10 items
UnitTests.strictEqual(helper.pageIndex(40), -1); // Invalid index, expect -1
