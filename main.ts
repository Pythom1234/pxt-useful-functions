//% icon="\uf0c9" block="Useful" block.loc.cs="Užitečné" color=#189851
namespace useful {
    //% block="comment $c" block.loc.cs="komentář $c" color=#707070 weight=100
    export function comment(c: string) { }
    //% block="comment $c||(run code $run)" block.loc.cs="komentář $c||(spouštět kód $run)" color=#707070 weight=99 handlerStatement run.shadow="toggleYesNo" expandableArgumentMode="enabled"
    export function commentSection(c: string, run: boolean = true, a: Action) {
        if (run) {
            a()
        }
    }
    //% block="comment $c" block.loc.cs="komentář $c" color=#707070 weight=98
    export function commentBlocks(c: string, a: Action) { }
    //% block="run in background" block.loc.cs="spusť na pozadí" weight=97 handlerStatement color=#000000
    export function inBackground(a: Action) {
        control.inBackground(a)
    }
}