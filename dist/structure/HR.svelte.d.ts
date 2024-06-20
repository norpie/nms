import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: Record<string, never>;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type HrProps = typeof __propDef.props;
export type HrEvents = typeof __propDef.events;
export type HrSlots = typeof __propDef.slots;
export default class Hr extends SvelteComponentTyped<HrProps, HrEvents, HrSlots> {
}
export {};
