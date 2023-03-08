export const formatAmount = (amount: number): string => {
    return amount.toLocaleString('ru-RU', {
        minimumFractionDigits: 0,
    });
};
