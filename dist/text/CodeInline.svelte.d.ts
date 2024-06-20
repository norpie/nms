import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: Record<string, never>;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type CodeInlineProps = typeof __propDef.props;
export type CodeInlineEvents = typeof __propDef.events;
export type CodeInlineSlots = typeof __propDef.slots;
export default class CodeInline extends SvelteComponentTyped<CodeInlineProps, CodeInlineEvents, CodeInlineSlots> {
}
export {};
