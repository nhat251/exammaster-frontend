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
export function timeAgo(utcString) {
  const date = new Date(utcString);
  const now = new Date();

  const diff = now - date; // milliseconds
  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30);
  const years = Math.floor(days / 365);

  if (seconds < 10) return 'Vừa xong';
  if (seconds < 60) return `${seconds} giây trước`;
  if (minutes < 60) return `${minutes} phút trước`;
  if (hours < 24) return `${hours} giờ trước`;

  if (days === 0) return 'Hôm nay';
  if (days === 1) return 'Hôm qua';

  if (days < 30) return `${days} ngày trước`;
  if (months < 12) return `${months} tháng trước`;

  return `${years} năm trước`;
}
