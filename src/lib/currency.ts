export const numberToNaira = (
  value: number,
  localeString: boolean = false
): string => {
  if (!Number.isFinite(value)) return "₦0";
  return `₦${localeString ? value.toLocaleString() : value}`;
};
