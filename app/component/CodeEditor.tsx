"use client";

import Editor from "@monaco-editor/react";

interface Props {
    code: string;
    setCode: (value: string) => void;
}

export default function CodeEditor({ code, setCode }: Props) {
    return (
        <div className="w-full h-[400px] border rounded shadow">
            <Editor
                language="javascript"
                value={code}
                onChange={(val) => setCode(val || "")}
                theme="vs-dark"
                height="100%"
            />
        </div>
    );
}
