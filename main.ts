//% icon="\uf0c9" block="Useful" block.loc.cs="Užitečné" color=#189851
namespace useful {
    //% block="comment $c" block.loc.cs="komentář $c" color=#707070 weight=100
    export function comment(c: string) { }
    //% block="comment $c" block.loc.cs="komentář $c" color=#707070 weight=99 handlerStatement
    export function commentSection(c: string, a: Action) {
        a()
    }
    //% block="comment $c" block.loc.cs="komentář $c" color=#707070 weight=98
    export function commentBlocks(c: string, a: Action) { }
    //% block="in background" block.loc.cs="na pozadí" weight=97 handlerStatement
    export function inBackground(a: Action) {
        control.inBackground(a)
    }
}