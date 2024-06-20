import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: Record<string, never>;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type CodeSnippetProps = typeof __propDef.props;
export type CodeSnippetEvents = typeof __propDef.events;
export type CodeSnippetSlots = typeof __propDef.slots;
export default class CodeSnippet extends SvelteComponentTyped<CodeSnippetProps, CodeSnippetEvents, CodeSnippetSlots> {
}
export {};
