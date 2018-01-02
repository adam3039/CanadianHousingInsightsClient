import { Injectable, EventEmitter } from '@angular/core';


@Injectable()
export class ModalService {
    constructor() { }

    loginActive = false;
    loginActiveEmit: EventEmitter<boolean> = new EventEmitter();

    toggleLoginActiveState() {
        this.loginActive = !this.loginActive;
        this.loginActiveEmit.next(this.loginActive);
    }
}
