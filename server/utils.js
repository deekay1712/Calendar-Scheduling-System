import ical from "ical-generator";
import { Duplex } from "stream";

export function createInvite(topic, startTime) {
    const calendar = ical({ name: "Invite from DeeKay" });
    calendar.createEvent({
        start: startTime,
        summary: topic,
        description: "",
        location: "",
        url: "",
    });
    return calendar.toString();
};

export function bufferToStream(myBuffer) {
    let tmp = new Duplex();
    tmp.push(myBuffer);
    tmp.push(null);
    return tmp;
};

export function getDateObj(date, time) {
    if (!date || !time) {
        throw new Error("invalid date or time");
    }
    return new Date(`${date}T${time}:00`);
}
