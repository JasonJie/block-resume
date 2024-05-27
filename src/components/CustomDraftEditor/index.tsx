import React, { useState } from "react";
import {
    Editor,
    EditorState,
    RichUtils,
    getDefaultKeyBinding,
    DraftHandleValue,
} from "draft-js";
import "draft-js/dist/Draft.css";

// const { hasCommandModifier } = KeyBindingUtil;

const CustomDraftEditor: React.FC = () => {
    const [editorState, setEditorState] = useState<EditorState>(
        EditorState.createEmpty()
    );

    const onChange = (newEditorState: EditorState) => {
        setEditorState(newEditorState);
    };

    const handleKeyCommand = (
        command: string,
        editorState: EditorState
    ): DraftHandleValue => {
        const newState = RichUtils.handleKeyCommand(editorState, command);

        if (newState) {
            onChange(newState);
            return "handled";
        }

        return "not-handled";
    };

    const mapKeyToEditorCommand = (e: React.KeyboardEvent): string | null => {
        if (e.keyCode === 9 /* TAB */) {
            const newEditorState = RichUtils.onTab(e, editorState, 4);
            if (newEditorState !== editorState) {
                onChange(newEditorState);
            }
            return null;
        }

        return getDefaultKeyBinding(e);
    };

    const toggleInlineStyle = (style: string) => {
        onChange(RichUtils.toggleInlineStyle(editorState, style));
    };

    const toggleBlockType = (blockType: string) => {
        onChange(RichUtils.toggleBlockType(editorState, blockType));
    };

    return (
        <div>
            <div>
                <button onClick={() => toggleInlineStyle("BOLD")}>Bold</button>
                <button onClick={() => toggleInlineStyle("ITALIC")}>
                    Italic
                </button>
                <button onClick={() => toggleBlockType("unordered-list-item")}>
                    Bullet List
                </button>
                <button onClick={() => toggleBlockType("ordered-list-item")}>
                    Numbered List
                </button>
                <button onClick={() => toggleInlineStyle("FONT_SIZE_24")}>
                    Size 24
                </button>
            </div>
            <div
                style={{
                    border: "1px solid black",
                    minHeight: "6em",
                    cursor: "text",
                }}>
                <Editor
                    editorState={editorState}
                    handleKeyCommand={handleKeyCommand}
                    keyBindingFn={mapKeyToEditorCommand}
                    onChange={onChange}
                />
            </div>
        </div>
    );
};

export default CustomDraftEditor;
