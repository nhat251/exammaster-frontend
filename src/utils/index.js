export function formatNumber(value) {
  return new Intl.NumberFormat('vi-VN').format(value).replace(/\./g, ',');
}
