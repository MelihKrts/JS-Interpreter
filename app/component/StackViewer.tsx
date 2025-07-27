import {JSInterpreter} from "@/lib/interpreter";

type Props = {
    interpreter: JSInterpreter;
    code: string; // kodu prop olarak al
};

export default function StackViewer({ interpreter, code }: Props) {
    const stackFrames = interpreter.stateStack;

    return (
        <div className="bg-white p-4 rounded shadow mt-4">
            <h2 className="text-lg font-bold mb-2">📚 Call Stack</h2>
            <ul className="text-sm font-mono space-y-1">
                {stackFrames.map((frame: any, index: number) => {
                    const node = frame.node;
                    const type = node.type;
                    const startLine = node.loc?.start?.line ?? "-";
                    const codeSnippet = code.substring(node.start, node.end).trim();

                    return (
                        <li key={index}>
                            🔸 {type} — Line {startLine}:{" "}
                            <span className="text-blue-600">{codeSnippet}</span>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
