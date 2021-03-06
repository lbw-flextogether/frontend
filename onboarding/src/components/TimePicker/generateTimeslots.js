import moment from "moment";

export const generateTimeslots = (interval, start, end) => {
  if (interval < 15 || interval > 60 || interval % 15 !== 0) {
    throw new Error("Can only accept increments of 15, 30, or 60 minutes");
  }
  const [startHour, startMinute] = start.split(":");
  const endMinute = end.split(":")[1];
  const validIntervalMap = {
    15: ["00", "15", "30", "45"],
    30: ["00", "30"],
    60: ["00"]
  };
  if (
    validIntervalMap[interval].indexOf(startMinute) === -1 ||
    validIntervalMap[interval].indexOf(endMinute) === -1
  ) {
    throw new Error("Incorrect time interval");
  }
  class Time {
    constructor(hour, minute) {
      this.hour = Number(hour);
      this.minute = Number(minute);
    }

    get() {
      let formatted = { hour: this.hour, minute: this.minute };
      for (let prop in formatted) {
        if (formatted[prop] < 10) {
          formatted[prop] = `0${formatted[prop]}`;
        }
      }
      return `${formatted.hour}:${formatted.minute}`;
    }

    add(minute) {
      const newMinute = this.minute + minute;
      if (newMinute >= 60) {
        this.hour += Number(newMinute / 60);
        this.minute = newMinute % 60;
      } else {
        this.minute = newMinute;
      }
      return this.get();
    }
  }

  const generate = new Time(startHour, startMinute);
  const slots = [generate.get()];
  while (slots.lastIndexOf(end) === -1) {
    slots.push(generate.add(interval));
  }

  const corrected = slots.map(slot => moment(slot, "HH:mm").format("h:mm a"));

  return corrected;
};
