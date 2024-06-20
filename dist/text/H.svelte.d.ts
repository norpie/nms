import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: Record<string, never>;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type HProps = typeof __propDef.props;
export type HEvents = typeof __propDef.events;
export type HSlots = typeof __propDef.slots;
export default class H extends SvelteComponentTyped<HProps, HEvents, HSlots> {
}
export {};
