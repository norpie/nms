import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: Record<string, never>;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type DefinitionProps = typeof __propDef.props;
export type DefinitionEvents = typeof __propDef.events;
export type DefinitionSlots = typeof __propDef.slots;
export default class Definition extends SvelteComponentTyped<DefinitionProps, DefinitionEvents, DefinitionSlots> {
}
export {};
