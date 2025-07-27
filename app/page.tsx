"use client";

import CodeEditor from "@/app/component/CodeEditor";
import Visualizer from "@/app/component/Visualizer";
import { useRef, useState } from "react";
import { parseCodeToAST } from "@/lib/parseAST";
import { createInterpreter, JSInterpreter } from "@/lib/interpreter";

export default function Home() {
    const [code, setCode] = useState(`function greet() {
  console.log("Hello World!");
}
greet();`);

    const [interpreter, setInterpreter] = useState<JSInterpreter | null>(null);
    const interpreterRef = useRef<JSInterpreter | null>(null);

    const handleInit = () => {
        const i = createInterpreter(code);
        if (i) {
            setInterpreter(i);
            interpreterRef.current = i;
            console.log("Yorumlayıcı başlatıldı");
        }
    };

    const handleStep = () => {
        const i = interpreterRef.current;
        if (i) {
            const hasMore = i.step();
            setInterpreter({ ...i }); // trigger UI update
            console.log("Bir adım çalıştırıldı. Devam var mı?", hasMore);
        }
    };

    return (
        <main className="min-h-dvh p-8 bg-gray-100">
            <h1 className="text-2xl font-bold mb-4">🧠 JS Görselleştirici</h1>
            <CodeEditor code={code} setCode={setCode} />

            <div className="mt-4 flex gap-4 flex-wrap">
                <button
                    onClick={handleInit}
                    className="px-4 py-2 bg-green-600 text-white rounded"
                >
                    Yorumlayıcıyı Başlat
                </button>
                <button
                    onClick={handleStep}
                    className="px-4 py-2 bg-blue-600 text-white rounded"
                >
                    Bir Adım Çalıştır
                </button>
            </div>

            <Visualizer interpreter={interpreter} code={code} />
        </main>
    );
}
