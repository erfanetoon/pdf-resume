import { WindowStorage } from "./class";
import type { TLocalStorageKeys, TSessionStorageKeys } from "./types";

class LocalStorage extends WindowStorage<TLocalStorageKeys> {
    constructor() {
        if (typeof window !== "undefined") {
            super(window.localStorage);
        } else {
            throw Error("Window is not defined");
        }
    }
}

class SessionStorage extends WindowStorage<TSessionStorageKeys> {
    constructor() {
        if (typeof window !== "undefined") {
            super(window.sessionStorage);
        } else {
            throw Error("Window is not defined");
        }
    }
}

const storage = {
    localStorage: new LocalStorage(),
    sessionStorage: new SessionStorage(),
};

export default storage;
