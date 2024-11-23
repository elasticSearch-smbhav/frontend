export const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
};

export const formatDate = (dateInput: Date | string) => {
  const date = typeof dateInput === "string" ? new Date(dateInput) : dateInput;

  if (isNaN(date.getTime())) {
    throw new Error("Invalid date input");
  }

  const options: Intl.DateTimeFormatOptions = {
    day: "2-digit",
    month: "short",
    year: "numeric",
  };

  return new Intl.DateTimeFormat("en-US", options).format(date);
};

export const convertToUTC = (dateInput: Date | null): Date => {
  if (!dateInput) {
    return new Date();
  }
  const date = new Date(dateInput);
  return new Date(date.getTime() + date.getTimezoneOffset() * 60000);
};

export const convertToLocal = (dateInput: Date | null): Date => {
  if (!dateInput) {
    return new Date();
  }
  const date = new Date(dateInput);
  return new Date(date.getTime() - date.getTimezoneOffset() * 60000);
};
