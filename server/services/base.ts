export function getMilliseconds(count: number, period: 'seconds' | 'minutes' | 'hours' | 'days' | 'weeks') {
    const map = {
        seconds: 1000,
        minutes: 60 * 1000,
        hours: 60 * 60 * 1000,
        days: 24 * 60 * 60 * 1000,
        weeks: 7 * 24 * 60 * 60 * 1000
    };

    return count * map[period];
}
