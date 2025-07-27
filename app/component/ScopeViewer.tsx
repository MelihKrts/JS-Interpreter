import { JSInterpreter } from "@/lib/interpreter";

type Props = {
    interpreter: JSInterpreter;
};

export default function ScopeViewer({ interpreter }: Props) {
    const global = interpreter.globalObject;
    const scopeVars: string[] = [];

    for (const name in global.properties) {
        const value = global.properties[name];
        if (value) {
            const jsValue = value.toPrimitive
                ? value.toPrimitive()
                : value.toString(); // fallback

            const jsType = interpreter.pseudoToNative
                ? typeof interpreter.pseudoToNative(value)
                : "object";

            scopeVars.push(`${name}: ${jsValue} (${jsType})`);
        }
    }

    return (
        <div className="bg-white p-4 rounded shadow">
            <h2 className="text-lg font-bold mb-2">🌍 Global Scope</h2>
            <ul className="text-sm font-mono space-y-1">
                {scopeVars.map((item, i) => (
                    <li key={i}>🔹 {item}</li>
                ))}
            </ul>
        </div>
    );
}
