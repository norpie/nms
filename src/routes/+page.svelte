<script lang="ts">
    import {
        // Text
        P,
        H,
        Link,
        Definition,
        CodeSnippet,
        CodeInline,
        Blockquote,
        // Input
        Label,
        TextInput,
        Textarea,
        Checkbox,
        Button,
        // Structure
        HR
    } from '../lib/index.js';

    function buttontest() {
        console.log('Button clicked');
    }
</script>

<main>
    <H size="1">Norpie's Minimal Svelte (NMS)</H>
    <H size="2">A Minimal svelte component library</H>
    <P>The colour palette used here is as follows:</P>
    <ul class="color-palette">
        <li style="color: var(--color-primary);">
            Primary: <span style="background-color: var(--color-primary);"
                >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
            >
        </li>
        <li style="color: var(--color-secondary);">
            Secondary: <span style="background-color: var(--color-secondary);"
                >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
            >
        </li>
        <li style="color: var(--color-action);">
            Action: <span style="background-color: var(--color-action);"
                >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
            >
        </li>
        <li style="color: var(--color-accent);">
            Accent: <span style="background-color: var(--color-accent);"
                >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
            >
        </li>
        <li style="color: var(--color-fg-success); background-color: var(--color-bg-success);">
            Success: <span style="background-color: var(--color-fg-success);"
                >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
            >
        </li>
        <li style="color: var(--color-fg-fail); background-color: var(--color-bg-fail);">
            Fail: <span style="background-color: var(--color-fg-fail);"
                >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
            >
        </li>
        <li style="color: var(--color-fg-warning); background-color: var(--color-bg-warning);">
            Warning: <span style="background-color: var(--color-fg-warning);"
                >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
            >
        </li>
        <li style="color: var(--color-fg-info); background-color: var(--color-bg-info);">
            Info: <span style="background-color: var(--color-fg-info);"
                >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
            >
        </li>
    </ul>

    <H size="2">Components</H>
    <div class="indent">
        <H size="3">Text Components</H>
        <div class="indent">
            <H size="4">Headings</H>
            <div class="indent">
                <H size="1">Heading 1</H>
                <H size="2">Heading 2</H>
                <H size="3">Heading 3</H>
                <H size="4">Heading 4</H>
                <H size="5">Heading 5</H>
                <H size="6">Heading 6</H>
            </div>
            <H size="4">Paragraph</H>
            <div class="indent">
                <P>This is a paragraph. It is used to display text content.</P>
            </div>
            <H size="4">Code</H>
            <div class="indent">
                <P>
                    This is an inline snippet <CodeInline>foo</CodeInline>.
                </P>
                <CodeSnippet>
                    function helloWorld() {'{'}
                    <br />
                    <span class="indent">console.log('Hello, World!');</span>
                    <br />
                    {'}'}
                </CodeSnippet>
            </div>
            <H size="4">Link</H>
            <div class="indent">
                <P><Link href="/page">This</Link> is a link to '/page' page.</P>
            </div>
            <H size="4">Definition</H>
            <div class="indent">
                <P>
                    This is a <Definition
                        name="definition"
                        definition="A statement of the exact meaning of a word, especially in a dictionary."
                    />
                </P>
            </div>
            <H size="4">Blockquote</H>
            <div class="indent">
                <Blockquote>
                    This is a blockquote. It is used to display a quotation from another source. <br />
                    It can span multiple lines.
                </Blockquote>
                <br />
                <Blockquote attributions="Author">It can also have attributions.</Blockquote>
            </div>
        </div>
    </div>
    <div class="indent">
        <H size="3">Input Components</H>
        <div class="indent">
            <H size="4">Input</H>
            <div class="indent">
                <Label name="input1" label="Label 1" />
                <TextInput name="input1" placeholder="Placeholder" value="input1" />
                <br />
                <Label name="input2" label="Label 2" />
                <TextInput name="input2" placeholder="Disabled input" value="input2" disabled />
            </div>
            <H size="4">Textarea</H>
            <div class="indent">
                <Label name="input3" label="Label 3" />
                <Textarea name="input3" rows="3" placeholder="Placeholder" />
            </div>
            <H size="4">Checkbox</H>
            <div class="indent">
                <Label name="input4" label="Label 4">
                    <Checkbox name="input4" value="input5" />
                </Label>

                <Label name="input5" label="Label 5">
                    <Checkbox name="input5" value="input5" checked />
                </Label>

                <Label name="input5" label="Label 5">
                    <Checkbox name="input5" value="input5" disabled />
                </Label>

                <Label name="input5" label="Label 5">
                    <Checkbox name="input5" value="input5" checked disabled />
                </Label>
            </div>
            <H size="4">Radio</H>
            <div class="indent">
                <!-- <Radio label="Label" checked/> -->
            </div>
            <H size="4">Dropdown</H>
            <div class="indent">
                <!-- <Dropdown options={['Option 1', 'Option 2', 'Option 3']} /> -->
                <!-- <Dropdown groups={['Group 1': {'Option 1': true, 'Option 2': false}, 'Group 2': {'Option 3': true}]} /> -->
            </div>
            <H size="4">Button</H>
            <div class="indent">
                <Button text="Button" onclick={buttontest}></Button> <br />
                <Button text="Button" pill></Button> <br />
                <Button><H size="3">Heading in button</H></Button> <br />
                <Button pill><H size="3">Heading in button</H></Button> <br />
                <Button disabled>Disabled Button</Button> <br />
            </div>
        </div>
    </div>

    <div class="indent">
        <H size="3">Layout Components</H>
        <div class="indent">
            <H size="4">Accordion</H>
            <div class="indent"></div>
            <H size="4">Card</H>
            <div class="indent"></div>
            <H size="4">HR</H>
            <div class="indent">
                <P>An `HR` separates content in a page.</P>
                <HR />
                <P>Separated content.</P>
            </div>
            <div class="indent"></div>
            <H size="4">Badge</H>
            <div class="indent"></div>
            <H size="4">Modal</H>
            <div class="indent"></div>
            <H size="4">Toast</H>
            <div class="indent"></div>
            <H size="4">Tooltip</H>
            <div class="indent"></div>
            <H size="4">Popover</H>
            <div class="indent"></div>
            <H size="4">Carousel</H>
            <div class="indent"></div>
            <H size="4">Footer</H>
            <div class="indent"></div>
        </div>
    </div>
</main>

<style>
    /* Main font */
    @import url('https://fonts.googleapis.com/css2?family=Inter+Tight:ital,wght@0,100..900;1,100..900&display=swap');
    /* Code font */
    @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap');

    :global(:root) {
        /* Dark Colors */
        --color-background: #343a40;
        --color-primary: #f8f9fa;
        --color-secondary: #ced4da;

        --color-action: #007bff;
        --color-accent: #6c757d;
        --color-disabled: #495057;

        --color-fg-success: #28a745;
        --color-bg-success: #d4edda;
        --color-fg-fail: #dc3545;
        --color-bg-fail: #f8d7da;

        --color-fg-warning: #ffc107;
        --color-bg-warning: #fff3cd;
        --color-fg-info: #17a2b8;
        --color-bg-info: #d1ecf1;

        --font-default: 'Inter Tight', sans-serif;
        --font-mono: 'IBM Plex Mono', monospace;
        --font-weight: 400;
        --font-weight-action: 600;
    }

    main {
        font-family: 'Inter Tight', sans-serif;
        background-color: var(--color-background);
        padding: 60px;
    }

    .color-palette {
        list-style-type: none;
        padding: 0;
        max-width: 300px;
    }

    .indent {
        margin-left: 20px;
    }
</style>
