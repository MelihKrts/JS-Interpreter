import * as acorn from "acorn"

export function parseCodeToAST (code:string)  {
    const ast = acorn.parse(code,{
        ecmaVersion:2020,
        sourceType:"script"
    })
    return ast
}