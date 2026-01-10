import { describe, test, expect, beforeEach } from "vitest";
import HashTable from "./HashTable";

describe("HashTable", () => {
  let table: HashTable<number>;

  beforeEach(() => {
    table = new HashTable<number>(10);
  });

  test("should set and get values", () => {
    table.set("a", 1);
    table.set("b", 2);

    expect(table.get("a")).toBe(1);
    expect(table.get("b")).toBe(2);
  });

  test("should update existing key", () => {
    table.set("a", 1);
    table.set("a", 99);

    expect(table.get("a")).toBe(99);
  });

  test("should handle collisions using chaining", () => {
    table.set("abc", 10);
    table.set("cba", 20);

    expect(table.get("abc")).toBe(10);
    expect(table.get("cba")).toBe(20);
  });

  test("should remove a key", () => {
    table.set("x", 5);

    expect(table.remove("x")).toBe(true);
    expect(table.get("x")).toBeUndefined();
  });

  test("should return false when removing missing key", () => {
    expect(table.remove("missing")).toBe(false);
  });
});
