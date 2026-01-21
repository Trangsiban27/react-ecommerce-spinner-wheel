export const formatDateTime = (dateString: string | Date): string => {
  if (!dateString) return '';

  const date = new Date(dateString);

  // Kiểm tra nếu date không hợp lệ
  if (isNaN(date.getTime())) return 'Invalid Date';

  // Định dạng Ngày/Tháng/Năm
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();

  // Định dạng Giờ:Phút AM/PM
  const options: Intl.DateTimeFormatOptions = {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  };
  
  const timeString = new Intl.DateTimeFormat('en-US', options).format(date);

  return `${day}/${month}/${year} ${timeString}`;
};