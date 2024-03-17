//% icon="\uf0c9" block="Useful" block.loc.cs="Užitečné" color=#189851
namespace useful {
    //% block="comment $c" block.loc.cs="komentář $c" color=#707070 weight=100
    export function comment(c: string) { }
    //% block="comment $c" block.loc.cs="komentář $c" color=#707070 weight=100
    export function commentSection(c: string, a: Action) {
        a()
    }
}