export const convertTime = (epoch) => {
    const date = new Date(epoch * 1000);
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const formatDate = hours >= 12 ? 'PM' : 'AM'
    hours = (hours % 12) || 12
    return `${hours}:${minutes < 10 ? '0' + minutes : minutes} ${formatDate}`;
}