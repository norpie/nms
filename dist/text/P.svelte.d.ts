import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: Record<string, never>;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type PProps = typeof __propDef.props;
export type PEvents = typeof __propDef.events;
export type PSlots = typeof __propDef.slots;
export default class P extends SvelteComponentTyped<PProps, PEvents, PSlots> {
}
export {};
