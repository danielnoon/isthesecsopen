import { useEffect, useState } from "react";
import { database } from "./firebase";

interface Hours {
  daily: string;
  [date: string]: string;
}

class TimeRange {
  private start: number;
  private end: number;

  constructor(range: string) {
    [this.start, this.end] = range.split("-").map((t) => parseFloat(t));
  }

  includes(hours: number, minutes: number) {
    const t = hours + minutes / 60;
    return t > this.start && t < this.end;
  }
}

export function useIsOpen() {
  const [open, setIsOpen] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    (async () => {
      const hours = (await (
        await database.ref("/hours").once("value")
      ).val()) as Hours;

      const dt = new Date();
      const date = `${dt.getFullYear}-${dt.getMonth}-${dt.getDate}`;

      console.log(dt.getDay().toString());
      console.log(hours[dt.getDay().toString()]);

      const today = hours[date] ?? hours[dt.getDay().toString()];

      if (!today) {
        setIsOpen(false);
        setReady(true);
        return;
      }

      const ranges = today.split("/").map((r) => new TimeRange(r));

      setIsOpen(
        ranges.some((range) => range.includes(dt.getHours(), dt.getMinutes()))
      );
      setReady(true);
    })();
  }, []);

  return [open, ready];
}
