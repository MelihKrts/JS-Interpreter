import StackViewer from "./StackViewer";
import ScopeViewer from "./ScopeViewer";
import { JSInterpreter } from "@/lib/interpreter";

type Props = {
    interpreter: JSInterpreter | null;
    code:string,
};

export default function Visualizer({ interpreter,code }: Props) {
    if (!interpreter) return null;

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
            <ScopeViewer interpreter={interpreter} />
            <StackViewer interpreter={interpreter} code={code} />
        </div>
    );
}
