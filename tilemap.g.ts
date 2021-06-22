// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`320010000505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505020505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050501010105050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050404040105050505050505050505050505050505050505050505050505050505010101010505050505050505050505050505040404040101010101010101010101010505050505050505050505050501010104040404010101010101010505050505050504040404040404040404040404040404010101010101010101010101010404040404040404040404040404010105050505050505050505050505050505050505050505050505050404040404040404040404040404040404040404040404040105050505050505050505050505050505050505050505050505050505050505040404040404040505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505010505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050501010104050505050505050505050505050505050505050505050505050505050505050505050505050505050505010101010404040405050505050505050505050505050505050505050505050505050505050505050505050505050505050104040404040404040505050505050505050505050505050505050505050505050505050505050505050505050505050501040404040404040404030505050505050505050505050501010101010105050505050101010105050505050505050505010404040404040404040401010101010101010101010101010404040404040101010101040404040101010101010101010404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404`, img`
..................................................
..................................................
222...............................................
2222............................2222..............
2222222222222222.............22222222222222.......
222222222222222222222222222222222222222222222.....
.....................2222222222222222222222222....
...........................2222222................
.................................................2
..............................................2222
..........................................22222222
.........................................222222222
........................................2222222222
..............222222.....2222..........22222222222
22222222222222222222222222222222222222222222222222
22222222222222222222222222222222222222222222222222
`, [myTiles.transparency16,sprites.castle.tilePath2,myTiles.tile1,myTiles.tile2,sprites.castle.tilePath5,myTiles.tile3], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile1":
            case "tile3":return tile3;
            case "myTile":
            case "tile1":return tile1;
            case "myTile0":
            case "tile2":return tile2;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
