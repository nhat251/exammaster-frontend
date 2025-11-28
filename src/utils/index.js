export function formatNumber(value) {
  return new Intl.NumberFormat('vi-VN').format(value).replace(/\./g, ',');
}

export const formatLocalTime = (utcString) => {
  const date = new Date(utcString);
  return date.toLocaleString('vi-VN', {
    timeZone: 'Asia/Ho_Chi_Minh',
    hour12: false,
  });
};

export const formatExpire = (expiredAt) => {
  const now = new Date();
  const exp = new Date(expiredAt);

  const isToday = exp.toDateString() === now.toDateString();

  const time = exp.toLocaleTimeString('vi-VN', {
    timeZone: 'Asia/Ho_Chi_Minh',
    hour: '2-digit',
    minute: '2-digit',
  });

  if (isToday) return `Hết hạn hôm nay lúc ${time}`;

  return `Hết hạn ngày ${exp.getDate()}/${exp.getMonth() + 1}`;
};
