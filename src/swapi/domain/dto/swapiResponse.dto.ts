export class SwapiResponseDto<T> {
    count:    number;
    next:     string;
    previous: null;
    results:  T[];
}