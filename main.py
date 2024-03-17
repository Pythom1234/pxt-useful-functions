# % icon="\uf0c9" block="Useful" block.loc.cs="Užitečné" color=#189851
@namespace
class useful:
    # % block="comment $c" block.loc.cs="komentář $c" color=#707070 weight=100
    def comment(c: str):
        pass
    # % block="comment $c" block.loc.cs="komentář $c" color=#707070 weight=99 handlerStatement
    def commentSection(d: str, a: Action):
        a()
     # % block="run $c" block.loc.cs="spustit $c" color=#707070 weight=99 handlerStatement
    def commentSection(d: str):
        exec(d)