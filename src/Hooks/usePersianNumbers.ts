export function usePersianNumbers(s: number | string): string {
  if (typeof s === "string") {
    return Number(s).toLocaleString("fa-EG");
  }
  return s.toLocaleString("fa-EG");
}
