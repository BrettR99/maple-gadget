import fs from "fs";
import path from "path";

export type Deal = {
  title: string;
  retailer: string;
  oldPrice: string;
  newPrice: string;
  save: string;
  detail: string;
  url: string;
};

const dealsFile = path.join(process.cwd(), "content", "deals.json");

export function getDeals(): Deal[] {
  try {
    const raw = fs.readFileSync(dealsFile, "utf8");
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}
