import Interpreter from "js-interpreter"

export type JSInterpreter = typeof Interpreter.prototype

export function createInterpreter(code:string) {
    try{
        const interpreter = new Interpreter(code)
        return interpreter
    }
    catch(error) {
        console.error("Interpreter error",error)
        return null
    }
}