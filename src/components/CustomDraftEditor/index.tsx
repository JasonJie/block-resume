import React, { Component, useEffect, useState } from "react";
import { EditorState, convertToRaw, ContentState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";
import "./index.css";

const EditorPage = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  useEffect(() => {
    const testContent =
      "<p>测试一下测试一下</p><p>换行p</p><p><strong><em>加粗</em></strong></p>";
    const blocksFromHtml = htmlToDraft(testContent);
    const { contentBlocks, entityMap } = blocksFromHtml;
    const contentState = ContentState.createFromBlockArray(
      contentBlocks,
      entityMap
    );
    const editorState = EditorState.createWithContent(contentState);
    setEditorState(editorState);
  }, []);

  const onEditorStateChange = (editorState: any) => {
    setEditorState(editorState);
  };

  return (
    <div style={{ padding: 20 }}>
      <Editor
        editorState={editorState}
        wrapperClassName="demo-wrapper"
        editorClassName="demo-editor"
        onEditorStateChange={onEditorStateChange}
      />
      <textarea
        className="demo-content no-focus"
        disabled
        value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
      />
    </div>
  );
};

export default EditorPage;
