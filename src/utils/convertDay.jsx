export const convertDay = (epoch) => {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    const date = new Date(epoch * 1000);
    const day = date.getDay();
    return days[day]
}