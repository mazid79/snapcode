"use client";
import React from 'react'
import { Resizable } from 're-resizable';
import AceEditor from "react-ace"

function CodeEditor() {
  return (
    <Resizable
        minHeight={466}
        minWidth={510}
        maxWidth={1000}
    >
        <div>
            <AceEditor 
                value="function() { return : Hello World}" 
                fontSize={16}
                wrapEnabled={true}
                showPrintMargin={false}
                highlightActiveLine={false}
            />
        </div>
    </Resizable>
  )
}

export default CodeEditor;