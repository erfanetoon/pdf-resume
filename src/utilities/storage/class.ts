import type { TLocalStorageKeys, TSessionStorageKeys } from "./types";

export abstract class WindowStorage<
    T extends TSessionStorageKeys | TLocalStorageKeys,
> {
    private store: Storage;

    constructor(store: Storage) {
        this.store = store;
    }

    set(key: T, value: string): void {
        this.store.setItem(key, value);
    }

    get(key: T): string | null {
        return this.store.getItem(key);
    }

    remove(key: T): void {
        return this.store.removeItem(key);
    }

    clear(): void {
        this.store.clear();
    }
}
