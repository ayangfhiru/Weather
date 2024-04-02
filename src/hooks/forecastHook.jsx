import { useEffect, useState } from "react";

export const forecastHook = () => {
    const [date, setDate] = useState({});

    const dateToEpoch = () => {
        const dateStart = new Date();
        const epochStart = (dateStart.getTime() / 1000).toFixed();
        const epochEnd = dateStart.setHours(dateStart.getHours() + 17);
        const start = parseInt(epochStart);
        const end = Math.floor(epochEnd / 1000);
        setDate({ start, end });
    };

    useEffect(() => {
        dateToEpoch();
    }, []);

    return date;
};
