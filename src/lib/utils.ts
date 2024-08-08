export const formatDate = (dateString: string): string => {
  if (!dateString) return "";

  const date = new Date(dateString);

  const day = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(date);

  const month = new Intl.DateTimeFormat("en", { month: "long" }).format(date);

  return `${day} ${month}`;
};

export const getFormattedDate = (date: Date): string => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}${month}${day}`;
};

export const formatDateWithTime = (
  input: Date | string,
  includeTime: boolean = false
): string => {
  const date = new Date(input);

  if (isNaN(date.getTime())) {
    throw new Error("Invalid date input");
  }

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  if (includeTime) {
    return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}`;
  } else {
    return `${year}-${month}-${day}`;
  }
};
