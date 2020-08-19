import { Observable } from 'rxjs';

export class AttachViewRef<T> {
    result: Observable<T>;
    close: () => void;
}
