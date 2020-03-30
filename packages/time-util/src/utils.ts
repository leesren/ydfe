export function getNextMonth(months = 1) {
    const current = new Date;
    current.setDate(1)
    return Array(months).fill(0).map((el, index) => {
        current.setMonth(current.getMonth() + index + 1);
        return new Date(current.getFullYear(), current.getMonth(), current.getDate())
    })
}