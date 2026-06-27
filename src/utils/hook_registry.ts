type HookCallback<T = unknown> = (payload: T) => void | Promise<void>;

export type T_COMPONENT_HOOK = "rawBody"

export class HookRegistry {
    private hooks = new Map<string, HookCallback[]>();

    on<T>(name: T_COMPONENT_HOOK, cb: HookCallback<T>) {
        let list = this.hooks.get(name);

        if (!list) {
            list = [];
            this.hooks.set(name, list);
        }

        list.push(cb as HookCallback);
    }

    async emit<T>(name: T_COMPONENT_HOOK, payload: T) {
        const list = this.hooks.get(name);

        if (!list) return;

        for (const cb of list) {
            await cb(payload);
        }
    }

    has(name: T_COMPONENT_HOOK) {
        return this.hooks.has(name);
    }

    clear(name?: T_COMPONENT_HOOK) {
        if (name) {
            this.hooks.delete(name);
        } else {
            this.hooks.clear();
        }
    }
}
