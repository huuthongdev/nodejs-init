export class DateTimeUtils {
    static timeToSeconds(time: any) {
        time = new Date(time);
        return +Math.floor(time.getTime() / 1000).toFixed(0)
    }

    static secondsToTime(time: any) {
        return new Date(time * 1000);
    }
}