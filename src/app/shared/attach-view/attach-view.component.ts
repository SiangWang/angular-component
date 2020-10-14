import { Subject } from 'rxjs';

export abstract class AttachViewComponent<T = any>  {
    instaData: any;
    onDetach = new Subject<T>();
    detach(arg: T = null) {
        // avoid detaching over 1 time
        if (this.onDetach.closed) { return; }
        this.onDetach.next(arg);
    }
}
