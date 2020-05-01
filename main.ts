namespace SpriteKind {
    export const Friend = SpriteKind.create()
    export const Friend2 = SpriteKind.create()
    export const GhostOrb = SpriteKind.create()
    export const Key = SpriteKind.create()
    export const Treasure = SpriteKind.create()
    export const Item = SpriteKind.create()
    export const UsedTreasure = SpriteKind.create()
    export const Coin = SpriteKind.create()
    export const Coini = SpriteKind.create()
    export const CoinII = SpriteKind.create()
    export const CoinIII = SpriteKind.create()
    export const CoinIV = SpriteKind.create()
    export const CoinV = SpriteKind.create()
    export const CoinVI = SpriteKind.create()
    export const CoinVII = SpriteKind.create()
    export const CoinVIII = SpriteKind.create()
    export const CoinIX = SpriteKind.create()
    export const CoinX = SpriteKind.create()
}
namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
    //% blockIdentity=images._tile
    export const tile1 = img`
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
`
    //% blockIdentity=images._tile
    export const tile2 = img`
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
`
    //% blockIdentity=images._tile
    export const tile3 = img`
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
`
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Coini, function (sprite, otherSprite) {
    for (let index = 0; index < 4; index++) {
        Coin1.y += -5
        pause(100)
    }
    Coin1.destroy()
    info.changeScoreBy(1)
    music.baDing.play()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Friend2, function (sprite, otherSprite) {
    game.showLongText("You can find keys in the dungeon to unlock special rooms!", DialogLayout.Bottom)
    pause(500)
    bat2.destroy()
    SpriteKey = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . f f f . . . . 
. . . . . . . . f 5 5 5 f . . . 
. . f f f f f f 5 f f f 5 f . . 
. f 5 5 5 5 5 5 5 f . f 5 f . . 
. f 5 f 5 f f f 5 f f f 5 f . . 
. . f . f . . . f 5 5 5 f . . . 
. . . . . . . . . f f f . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Key)
    SpriteKey.setPosition(120, 215)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.CoinII, function (sprite, otherSprite) {
    for (let index = 0; index < 4; index++) {
        Coin2.y += -5
        pause(100)
    }
    Coin2.destroy()
    info.changeScoreBy(1)
    music.baDing.play()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.CoinVII, function (sprite, otherSprite) {
    for (let index = 0; index < 4; index++) {
        Coin7.y += -5
        pause(100)
    }
    Coin7.destroy()
    info.changeScoreBy(1)
    music.baDing.play()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Key, function (sprite, otherSprite) {
    SpriteKey.destroy()
    tiles.setTilemap(tiles.createTilemap(
            hex`400020000607070707070800000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003100e0e11110a000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000030f0e0e0e0e0b070707070707080000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000030e0e0e0f11110f110e0f0e0e0a0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000030e0e0e0e110d050505050c110a0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000031111100e0e0a00000000120e0a00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000405050505050900000000120e0a0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000060707070708000000000012100a0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000030f0e0e0e150000000607130e0b070800000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003110e0e101500000003110f0e0e0f15000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000030e0e0e0e0a000000160e0f0e0e0e14000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000030e110e0f1500000003100e0e0e0e15000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000040c0e0e0d09060708040505050c111500000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000030e0e1500120e1500000000030e1500000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000120e0e150012111500000000030e1500000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000030e0f1500120e150000000003110b00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000030e0e150012101500000000030e0e00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000120f0e0b07130e0b17171717130e0d00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000030e0e0e0e0e0f0e0e0e0e0e0e111500000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000120e1110110e0e0e0f0e110e0e0e150000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004191919050c0e0d05050505050509000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000120e1500000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000060707080000120e1500000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000120e0e150000120f15000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000311100b0707130e1500000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000030e0e0e0e0e100e150000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003110e0d050505050900000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000030e0f1500000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004050509000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`,
            img`
2 2 2 2 2 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
2 . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
2 . . . . . 2 2 2 2 2 2 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
2 . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
2 . . . . . 2 2 2 2 2 2 . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
2 . . . . . 2 . . . . 2 . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
2 2 2 2 2 2 2 . . . . 2 . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
2 2 2 2 2 2 . . . . . 2 . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
2 . . . . 2 . . . 2 2 2 . 2 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
2 . . . . 2 . . . 2 . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
2 . . . . 2 . . . 2 . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
2 . . . . 2 . . . 2 . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
2 2 . . 2 2 2 2 2 2 2 2 2 2 . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. 2 . . 2 . 2 . 2 . . . . 2 . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. 2 . . 2 . 2 . 2 . . . . 2 . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. 2 . . 2 . 2 . 2 . . . . 2 . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. 2 . . 2 . 2 . 2 . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. 2 . . 2 2 2 . 2 2 2 2 2 2 . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. 2 . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. 2 . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. 2 2 2 2 2 2 . 2 2 2 2 2 2 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . 2 . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
2 2 2 2 . . 2 . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
2 . . 2 . . 2 . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
2 . . 2 2 2 2 . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
2 . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
2 . . 2 2 2 2 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
2 . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
2 2 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`,
            [myTiles.tile0,myTiles.tile1,myTiles.tile2,sprites.dungeon.greenOuterWest0,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterEast1,sprites.dungeon.greenInnerSouthWest,sprites.dungeon.greenInnerNorthEast,sprites.dungeon.greenInnerNorthWest,sprites.dungeon.floorDark0,sprites.dungeon.floorDark4,sprites.dungeon.floorDark3,sprites.dungeon.floorDark1,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenInnerSouthEast,sprites.dungeon.greenOuterEast2,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterWest2,sprites.dungeon.greenOuterNorth1,myTiles.tile3,sprites.dungeon.greenOuterSouth1],
            TileScale.Sixteen
        ))
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.CoinX, function (sprite, otherSprite) {
    for (let index = 0; index < 4; index++) {
        Coin10.y += -5
        pause(100)
    }
    Coin10.destroy()
    info.changeScoreBy(1)
    music.baDing.play()
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    Stephen.setImage(img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . f f f f . . . . . . . . . . 
. . . . . . . . f f 1 1 1 1 f f . . . . . . . . 
. . . . . . . f b 1 1 1 1 1 1 b f . . . . . . . 
. . . . . . . f 1 1 1 1 1 1 1 d b f . . . . . . 
. . . . . . f d 1 1 1 1 1 1 1 d d f . . . . . . 
. . . . . . f d 1 1 1 1 1 1 d d d f . . . . . . 
. . . . . . f d 1 1 1 d d d d d d f . . . . . . 
. . . . . . f d 1 1 1 d d d d d d f . . . . . . 
. . . . . . f d 1 d d d d d d d b f . . . . . . 
. . . . . . f d 1 d f b d d b b f f . . . . . . 
. . . . . . f b d d f c d b b c f . . . . . . . 
. . . . . f f f f c c d d b f f f . . . . . . . 
. . . . f c b 1 b b b f c f f f f . . . . . . . 
. . . . f 1 b 1 d c f f f f f f f f . . . . . . 
. . . . f d f d f . . f f f f f f f f f f . . . 
. . . . . f . f . . . . . f f f f f f . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    Stephen.setImage(img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . f f f f . . . . . . . . . . 
. . . . . . . . f f 1 1 1 1 f f . . . . . . . . 
. . . . . . . f b 1 1 1 1 1 1 b f . . . . . . . 
. . . . . . . f 1 1 1 1 1 1 1 1 f . . . . . . . 
. . . . . . f d 1 1 1 1 1 1 1 1 d f . . . . . . 
. . . . . . f d 1 1 1 1 1 1 1 1 d f . . . . . . 
. . . . . . f d d d 1 1 1 1 d d d f . . . . . . 
. . . . . . f b d b f d d f b d b f . . . . . . 
. . . . . . f c d c f 1 1 f c d c f . . . . . . 
. . . . . . . f b 1 1 1 1 1 1 b f . . . . . . . 
. . . . . . f f f c d b 1 b d f f f f . . . . . 
. . . . f c 1 1 1 c b f b f c 1 1 1 c f . . . . 
. . . . f 1 b 1 b 1 f f f f 1 b 1 b 1 f . . . . 
. . . . f b f b f f f f f f b f b f b f . . . . 
. . . . . . . . . f f f f f f . . . . . . . . . 
. . . . . . . . . . . f f f . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.CoinVI, function (sprite, otherSprite) {
    for (let index = 0; index < 4; index++) {
        Coin6.y += -5
        pause(100)
    }
    Coin6.destroy()
    info.changeScoreBy(1)
    music.baDing.play()
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile3, function (sprite, location) {
    game.over(false, effects.melt)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    Stephen.setImage(img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . f f f f . . . . . . . . . . 
. . . . . . . . f f 1 1 1 1 f f . . . . . . . . 
. . . . . . . f b 1 1 1 1 1 1 b f . . . . . . . 
. . . . . . f b d 1 1 1 1 1 1 1 f . . . . . . . 
. . . . . . f d d 1 1 1 1 1 1 1 d f . . . . . . 
. . . . . . f d d d 1 1 1 1 1 1 d f . . . . . . 
. . . . . . f d d d d d d 1 1 1 d f . . . . . . 
. . . . . . f d d d d d d 1 1 1 d f . . . . . . 
. . . . . . f b d d d d d d d 1 d f . . . . . . 
. . . . . . f f b b d d b f d 1 d f . . . . . . 
. . . . . . . f c b b d c f d d b f . . . . . . 
. . . . . . . f f f b d d c c f f f f . . . . . 
. . . . . . . f f f f c f b b b 1 b c f . . . . 
. . . . . . f f f f f f f f c d 1 b 1 f . . . . 
. . . f f f f f f f f f f . . f d f d f . . . . 
. . . . . f f f f f f . . . . . f . f . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.CoinV, function (sprite, otherSprite) {
    for (let index = 0; index < 4; index++) {
        Coin5.y += -5
        pause(100)
    }
    Coin5.destroy()
    info.changeScoreBy(1)
    music.baDing.play()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Treasure, function (sprite, otherSprite) {
    Treasure.destroy()
    OpenedTreasure = sprites.create(img`
. b b b b b b b b b b b b b b . 
b e 4 4 4 4 4 4 4 4 4 4 4 4 4 b 
b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
b e e 4 4 4 4 4 4 4 4 4 4 e e b 
b b b b b b b d d b b b b b b b 
. b b b b b b c c b b b b b b . 
b c c c c c b c c b c c c c c b 
b c c c c c c b b c c c c c c b 
b c c c c c c c c c c c c c c b 
b c c c c c c c c c c c c c c b 
b b b b b b b b b b b b b b b b 
b e e e e e e e e e e e e e e b 
b e e e e e e e e e e e e e e b 
b c e e e e e e e e e e e e c b 
b b b b b b b b b b b b b b b b 
. b b . . . . . . . . . . b b . 
`, SpriteKind.UsedTreasure)
    tiles.placeOnTile(OpenedTreasure, tiles.getTileLocation(1, 8))
    Up1 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . f 2 2 . 2 2 . . . . . . 
. . . f 2 2 2 2 2 3 2 . . . . . 
. . . f 2 2 2 2 3 2 2 . . . . . 
. . . f 2 2 2 2 2 2 2 . . . . . 
. . . . f 2 2 2 2 2 . . . . . . 
. . . . . f 2 2 2 . . . . . . . 
. . . . . . f 2 . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Item)
    tiles.placeOnTile(Up1, tiles.getTileLocation(1, 8))
    for (let index = 0; index < 3; index++) {
        Up1.y += -5
        pause(100)
    }
    Up1.destroy()
    info.changeLifeBy(1)
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    Stephen.setImage(img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . f f f f . . . . . . . . . . 
. . . . . . . . f f 1 1 1 1 f f . . . . . . . . 
. . . . . . . f b 1 1 1 1 1 1 b f . . . . . . . 
. . . . . . . f 1 1 1 1 1 1 1 1 f . . . . . . . 
. . . . . . f d 1 1 1 1 1 1 1 1 d f . . . . . . 
. . . . . . f d 1 1 1 1 1 1 1 1 d f . . . . . . 
. . . . . . f d d 1 1 1 1 1 1 d d f . . . . . . 
. . . . . . f b d 1 1 1 1 1 1 d b f . . . . . . 
. . . . . . f c d 1 1 1 1 1 1 d c f . . . . . . 
. . . . . . . f b 1 1 1 1 1 1 b f . . . . . . . 
. . . . . c f f f c 1 1 1 1 c f f f c . . . . . 
. . . . . . c f f f c 1 1 c f f f c . . . . . . 
. . . . . . . c f f f f f f f f c . . . . . . . 
. . . . . . . . . f f f f f b . . . . . . . . . 
. . . . . . . . . f f f f f f . . . . . . . . . 
. . . . . . . . . . f f f f . . . . . . . . . . 
. . . . . . . . . . . f f . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Friend, function (sprite, otherSprite) {
    game.showLongText("Navigate the dungeon to find the hidden       treasure!", DialogLayout.Bottom)
    pause(2000)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.CoinIV, function (sprite, otherSprite) {
    for (let index = 0; index < 4; index++) {
        Coin4.y += -5
        pause(100)
    }
    Coin4.destroy()
    music.baDing.play()
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.CoinIX, function (sprite, otherSprite) {
    for (let index = 0; index < 4; index++) {
        Coin9.y += -5
        pause(100)
    }
    Coin9.destroy()
    info.changeScoreBy(1)
    music.baDing.play()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.CoinVIII, function (sprite, otherSprite) {
    for (let index = 0; index < 4; index++) {
        Coin8.y += -5
        pause(100)
    }
    Coin8.destroy()
    info.changeScoreBy(1)
    music.baDing.play()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.CoinIII, function (sprite, otherSprite) {
    for (let index = 0; index < 4; index++) {
        Coin3.y += -5
        pause(100)
    }
    Coin3.destroy()
    info.changeScoreBy(1)
    music.baDing.play()
})
let Up1: Sprite = null
let OpenedTreasure: Sprite = null
let SpriteKey: Sprite = null
let Coin10: Sprite = null
let Coin9: Sprite = null
let Coin8: Sprite = null
let Coin7: Sprite = null
let Coin6: Sprite = null
let Coin5: Sprite = null
let Coin4: Sprite = null
let Coin3: Sprite = null
let Coin2: Sprite = null
let Coin1: Sprite = null
let Treasure: Sprite = null
let bat2: Sprite = null
let Stephen: Sprite = null
info.setScore(0)
info.setLife(3)
tiles.setTilemap(tiles.createTilemap(
            hex`400020000607070707070800000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003100e0e11110a000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000030f0e0e0e0e0b070707070707080000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000030e0e0e0f11110f110e0f0e0e0a0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000030e0e0e0e110d050505050c110a0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000031111100e0e0a00000000120e0a00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000405050505050900000000120e0a0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000060707070708000000000012100a0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000030e0e0e0e150000000607130e0b070800000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003110e0e101500000003110f0e0e0f15000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000030e0e0e0e0a000000160e0f0e0e0e14000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000030e110e0f1500000003100e0e0e0e15000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000040c0e0e0d09060708040505050c111500000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000030e0e1500120e1500000000030e1500000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000120e0e150012111500000000030e1500000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000030e0f1500120e150000000003110b00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000030e0e150012101500000000030e0e00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000120f0e0b07030e0b17171717130e0d00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000030e0e0e0e030f0e0e0e0e0e0e111500000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000120e111011030e0e0f0e110e0e0e15000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000419191905030e0d05050505050509000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000120e1500000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000060707080000120e1500000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000120e0e150000120f15000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000311100b0707130e1500000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000030e0e0e0e0e100e150000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003110e0d050505050900000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000030e0f1500000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004050509000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`,
            img`
2 2 2 2 2 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
2 . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
2 . . . . . 2 2 2 2 2 2 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
2 . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
2 . . . . . 2 2 2 2 2 2 . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
2 . . . . . 2 . . . . 2 . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
2 2 2 2 2 2 2 . . . . 2 . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
2 2 2 2 2 2 . . . . . 2 . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
2 . . . . 2 . . . 2 2 2 . 2 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
2 . . . . 2 . . . 2 . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
2 . . . . 2 . . . 2 . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
2 . . . . 2 . . . 2 . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
2 2 . . 2 2 2 2 2 2 2 2 2 2 . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. 2 . . 2 . 2 . 2 . . . . 2 . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. 2 . . 2 . 2 . 2 . . . . 2 . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. 2 . . 2 . 2 . 2 . . . . 2 . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. 2 . . 2 . 2 . 2 . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. 2 . . 2 2 2 . 2 2 2 2 2 2 . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. 2 . . . . 2 . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. 2 . . . . 2 . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. 2 2 2 2 2 2 . 2 2 2 2 2 2 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . 2 . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
2 2 2 2 . . 2 . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
2 . . 2 . . 2 . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
2 . . 2 2 2 2 . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
2 . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
2 . . 2 2 2 2 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
2 . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
2 2 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`,
            [myTiles.tile0,myTiles.tile1,myTiles.tile2,sprites.dungeon.greenOuterWest0,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterEast1,sprites.dungeon.greenInnerSouthWest,sprites.dungeon.greenInnerNorthEast,sprites.dungeon.greenInnerNorthWest,sprites.dungeon.floorDark0,sprites.dungeon.floorDark4,sprites.dungeon.floorDark3,sprites.dungeon.floorDark1,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenInnerSouthEast,sprites.dungeon.greenOuterEast2,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterWest2,sprites.dungeon.greenOuterNorth1,myTiles.tile3,sprites.dungeon.greenOuterSouth1],
            TileScale.Sixteen
        ))
Stephen = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . f f f f . . . . . . . . . . 
. . . . . . . . f f 1 1 1 1 f f . . . . . . . . 
. . . . . . . f b 1 1 1 1 1 1 b f . . . . . . . 
. . . . . . . f 1 1 1 1 1 1 1 1 f . . . . . . . 
. . . . . . f d 1 1 1 1 1 1 1 1 d f . . . . . . 
. . . . . . f d 1 1 1 1 1 1 1 1 d f . . . . . . 
. . . . . . f d d d 1 1 1 1 d d d f . . . . . . 
. . . . . . f b d b f d d f b d b f . . . . . . 
. . . . . . f c d c f 1 1 f c d c f . . . . . . 
. . . . . . . f b 1 1 1 1 1 1 b f . . . . . . . 
. . . . . . f f f c d b 1 b d f f f f . . . . . 
. . . . f c 1 1 1 c b f b f c 1 1 1 c f . . . . 
. . . . f 1 b 1 b 1 f f f f 1 b 1 b 1 f . . . . 
. . . . f b f b f f f f f f b f b f b f . . . . 
. . . . . . . . . f f f f f f . . . . . . . . . 
. . . . . . . . . . . f f f . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
tiles.placeOnTile(Stephen, tiles.getTileLocation(3, 3))
let bat1 = sprites.create(img`
. . f f f . . . . . . . . f f f 
. f f c c . . . . . . f c b b c 
f f c c . . . . . . f c b b c . 
f c f c . . . . . . f b c c c . 
f f f c c . c c . f c b b c c . 
f f c 3 c c 3 c c f b c b b c . 
f f b 3 b c 3 b c f b c c b c . 
. c b b b b b b c b b c c c . . 
. c 1 b b b 1 b b c c c c . . . 
c b b b b b b b b b c c . . . . 
c b c b b b c b b b b f . . . . 
f b 1 f f f 1 b b b b f c . . . 
f b b b b b b b b b b f c c . . 
. f b b b b b b b b c f . . . . 
. . f b b b b b b c f . . . . . 
. . . f f f f f f f . . . . . . 
`, SpriteKind.Friend)
bat2 = sprites.create(img`
. . f f f . . . . . . . . f f f 
. f f c c . . . . . . f c b b c 
f f c c . . . . . . f c b b c . 
f c f c . . . . . . f b c c c . 
f f f c c . c c . f c b b c c . 
f f c 3 c c 3 c c f b c b b c . 
f f b 3 b c 3 b c f b c c b c . 
. c b b b b b b c b b c c c . . 
. c 1 b b b 1 b b c c c c . . . 
c b b b b b b b b b c c . . . . 
c b c b b b c b b b b f . . . . 
f b 1 f f f 1 b b b b f c . . . 
f b b b b b b b b b b f c c . . 
. f b b b b b b b b c f . . . . 
. . f b b b b b b c f . . . . . 
. . . f f f f f f f . . . . . . 
`, SpriteKind.Friend2)
Treasure = sprites.create(img`
. . b b b b b b b b b b b b . . 
. b e 4 4 4 4 4 4 4 4 4 4 e b . 
b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
b e e 4 4 4 4 4 4 4 4 4 4 e e b 
b e e e e e e e e e e e e e e b 
b e e e e e e e e e e e e e e b 
b b b b b b b d d b b b b b b b 
c b b b b b b c c b b b b b b c 
c c c c c c b c c b c c c c c c 
b e e e e e c b b c e e e e e b 
b e e e e e e e e e e e e e e b 
b c e e e e e e e e e e e e c b 
b b b b b b b b b b b b b b b b 
. b b . . . . . . . . . . b b . 
`, SpriteKind.Treasure)
tiles.placeOnTile(Treasure, tiles.getTileLocation(1, 8))
bat1.setPosition(235, 150)
bat2.setPosition(122, 215)
scene.cameraFollowSprite(Stephen)
controller.moveSprite(Stephen)
Coin1 = sprites.create(img`
. . b b b b . . 
. b 5 5 5 5 b . 
b 5 d 3 3 d 5 b 
b 5 3 5 5 1 5 b 
c 5 3 5 5 1 d c 
c d d 1 1 d d c 
. f d d d d f . 
. . f f f f . . 
`, SpriteKind.Coini)
Coin2 = sprites.create(img`
. . b b b b . . 
. b 5 5 5 5 b . 
b 5 d 3 3 d 5 b 
b 5 3 5 5 1 5 b 
c 5 3 5 5 1 d c 
c d d 1 1 d d c 
. f d d d d f . 
. . f f f f . . 
`, SpriteKind.CoinII)
Coin3 = sprites.create(img`
. . b b b b . . 
. b 5 5 5 5 b . 
b 5 d 3 3 d 5 b 
b 5 3 5 5 1 5 b 
c 5 3 5 5 1 d c 
c d d 1 1 d d c 
. f d d d d f . 
. . f f f f . . 
`, SpriteKind.CoinIII)
Coin4 = sprites.create(img`
. . b b b b . . 
. b 5 5 5 5 b . 
b 5 d 3 3 d 5 b 
b 5 3 5 5 1 5 b 
c 5 3 5 5 1 d c 
c d d 1 1 d d c 
. f d d d d f . 
. . f f f f . . 
`, SpriteKind.CoinIV)
Coin5 = sprites.create(img`
. . b b b b . . 
. b 5 5 5 5 b . 
b 5 d 3 3 d 5 b 
b 5 3 5 5 1 5 b 
c 5 3 5 5 1 d c 
c d d 1 1 d d c 
. f d d d d f . 
. . f f f f . . 
`, SpriteKind.CoinV)
Coin6 = sprites.create(img`
. . b b b b . . 
. b 5 5 5 5 b . 
b 5 d 3 3 d 5 b 
b 5 3 5 5 1 5 b 
c 5 3 5 5 1 d c 
c d d 1 1 d d c 
. f d d d d f . 
. . f f f f . . 
`, SpriteKind.CoinVI)
Coin7 = sprites.create(img`
. . b b b b . . 
. b 5 5 5 5 b . 
b 5 d 3 3 d 5 b 
b 5 3 5 5 1 5 b 
c 5 3 5 5 1 d c 
c d d 1 1 d d c 
. f d d d d f . 
. . f f f f . . 
`, SpriteKind.CoinVII)
Coin8 = sprites.create(img`
. . b b b b . . 
. b 5 5 5 5 b . 
b 5 d 3 3 d 5 b 
b 5 3 5 5 1 5 b 
c 5 3 5 5 1 d c 
c d d 1 1 d d c 
. f d d d d f . 
. . f f f f . . 
`, SpriteKind.CoinVIII)
Coin9 = sprites.create(img`
. . b b b b . . 
. b 5 5 5 5 b . 
b 5 d 3 3 d 5 b 
b 5 3 5 5 1 5 b 
c 5 3 5 5 1 d c 
c d d 1 1 d d c 
. f d d d d f . 
. . f f f f . . 
`, SpriteKind.CoinIX)
Coin10 = sprites.create(img`
. . b b b b . . 
. b 5 5 5 5 b . 
b 5 d 3 3 d 5 b 
b 5 3 5 5 1 5 b 
c 5 3 5 5 1 d c 
c d d 1 1 d d c 
. f d d d d f . 
. . f f f f . . 
`, SpriteKind.CoinX)
tiles.placeOnTile(Coin1, tiles.getTileLocation(1, 23))
tiles.placeOnTile(Coin2, tiles.getTileLocation(1, 24))
tiles.placeOnTile(Coin3, tiles.getTileLocation(1, 25))
tiles.placeOnTile(Coin4, tiles.getTileLocation(1, 26))
tiles.placeOnTile(Coin5, tiles.getTileLocation(1, 27))
tiles.placeOnTile(Coin6, tiles.getTileLocation(2, 23))
tiles.placeOnTile(Coin7, tiles.getTileLocation(2, 24))
tiles.placeOnTile(Coin8, tiles.getTileLocation(2, 25))
tiles.placeOnTile(Coin9, tiles.getTileLocation(2, 26))
tiles.placeOnTile(Coin10, tiles.getTileLocation(2, 27))
forever(function () {
    bat1.setImage(img`
. . f f f . . . . . . . . f f f 
. f f c c . . . . . . f c b b c 
f f c c . . . . . . f c b b c . 
f c f c . . . . . . f b c c c . 
f f f c c . c c . f c b b c c . 
f f c 3 c c 3 c c f b c b b c . 
f f b 3 b c 3 b c f b c c b c . 
. c b b b b b b c b b c c c . . 
. c 1 b b b 1 b b c c c c . . . 
c b b b b b b b b b c c . . . . 
c b c b b b c b b b b f . . . . 
f b 1 f f f 1 b b b b f c . . . 
f b b b b b b b b b b f c c . . 
. f b b b b b b b b c f . . . . 
. . f b b b b b b c f . . . . . 
. . . f f f f f f f . . . . . . 
`)
    pause(100)
    bat1.setImage(img`
. . f f f . . . . . . . . . . . 
f f f c c . . . . . . . . f f f 
f f c c . . c c . . . f c b b c 
f f c 3 c c 3 c c f f b b b c . 
f f b 3 b c 3 b c f b b c c c . 
. c b b b b b b c f b c b c c . 
. c b b b b b b c b b c b b c . 
c b 1 b b b 1 b b b c c c b c . 
c b b b b b b b b c c c c c . . 
f b c b b b c b b b b f c . . . 
f b 1 f f f 1 b b b b f c c . . 
. f b b b b b b b b c f . . . . 
. . f b b b b b b c f . . . . . 
. . . f f f f f f f . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`)
    pause(100)
    bat1.setImage(img`
. . . . . . . . . . . . . . . . 
. . c c . . c c . . . . . . . . 
. . c 3 c c 3 c c c . . . . . . 
. c b 3 b c 3 b c c c . . . . . 
. c b b b b b b b b f f . . . . 
c c b b b b b b b b f f . . . . 
c b 1 b b b 1 b b c f f f . . . 
c b b b b b b b b f f f f . . . 
f b c b b b c b c c b b b . . . 
f b 1 f f f 1 b f c c c c . . . 
. f b b b b b b f b b c c . . . 
c c f b b b b b c c b b c . . . 
c c c f f f f f f c c b b c . . 
. c c c . . . . . . c c c c c . 
. . c c c . . . . . . . c c c c 
. . . . . . . . . . . . . . . . 
`)
    pause(100)
    bat1.setImage(img`
. . f f f . . . . . . . . . . . 
f f f c c . . . . . . . . f f f 
f f c c . . c c . . . f c b b c 
f f c 3 c c 3 c c f f b b b c . 
f f b 3 b c 3 b c f b b c c c . 
. c b b b b b b c f b c b c c . 
. c b b b b b b c b b c b b c . 
c b 1 b b b 1 b b b c c c b c . 
c b b b b b b b b c c c c c . . 
f b c b b b c b b b b f c . . . 
f b 1 f f f 1 b b b b f c c . . 
. f b b b b b b b b c f . . . . 
. . f b b b b b b c f . . . . . 
. . . f f f f f f f . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`)
    pause(100)
})
forever(function () {
    bat2.setImage(img`
. . f f f . . . . . . . . f f f 
. f f c c . . . . . . f c b b c 
f f c c . . . . . . f c b b c . 
f c f c . . . . . . f b c c c . 
f f f c c . c c . f c b b c c . 
f f c 3 c c 3 c c f b c b b c . 
f f b 3 b c 3 b c f b c c b c . 
. c b b b b b b c b b c c c . . 
. c 1 b b b 1 b b c c c c . . . 
c b b b b b b b b b c c . . . . 
c b c b b b c b b b b f . . . . 
f b 1 f f f 1 b b b b f c . . . 
f b b b b b b b b b b f c c . . 
. f b b b b b b b b c f . . . . 
. . f b b b b b b c f . . . . . 
. . . f f f f f f f . . . . . . 
`)
    pause(100)
    bat2.setImage(img`
. . f f f . . . . . . . . . . . 
f f f c c . . . . . . . . f f f 
f f c c . . c c . . . f c b b c 
f f c 3 c c 3 c c f f b b b c . 
f f b 3 b c 3 b c f b b c c c . 
. c b b b b b b c f b c b c c . 
. c b b b b b b c b b c b b c . 
c b 1 b b b 1 b b b c c c b c . 
c b b b b b b b b c c c c c . . 
f b c b b b c b b b b f c . . . 
f b 1 f f f 1 b b b b f c c . . 
. f b b b b b b b b c f . . . . 
. . f b b b b b b c f . . . . . 
. . . f f f f f f f . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`)
    pause(100)
    bat2.setImage(img`
. . . . . . . . . . . . . . . . 
. . c c . . c c . . . . . . . . 
. . c 3 c c 3 c c c . . . . . . 
. c b 3 b c 3 b c c c . . . . . 
. c b b b b b b b b f f . . . . 
c c b b b b b b b b f f . . . . 
c b 1 b b b 1 b b c f f f . . . 
c b b b b b b b b f f f f . . . 
f b c b b b c b c c b b b . . . 
f b 1 f f f 1 b f c c c c . . . 
. f b b b b b b f b b c c . . . 
c c f b b b b b c c b b c . . . 
c c c f f f f f f c c b b c . . 
. c c c . . . . . . c c c c c . 
. . c c c . . . . . . . c c c c 
. . . . . . . . . . . . . . . . 
`)
    pause(100)
    bat2.setImage(img`
. . f f f . . . . . . . . . . . 
f f f c c . . . . . . . . f f f 
f f c c . . c c . . . f c b b c 
f f c 3 c c 3 c c f f b b b c . 
f f b 3 b c 3 b c f b b c c c . 
. c b b b b b b c f b c b c c . 
. c b b b b b b c b b c b b c . 
c b 1 b b b 1 b b b c c c b c . 
c b b b b b b b b c c c c c . . 
f b c b b b c b b b b f c . . . 
f b 1 f f f 1 b b b b f c c . . 
. f b b b b b b b b c f . . . . 
. . f b b b b b b c f . . . . . 
. . . f f f f f f f . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`)
    pause(100)
})
forever(function () {
    Coin1.setImage(img`
. . b b b . . . 
. b 5 5 5 b . . 
b 5 d 3 d 5 b . 
b 5 3 5 1 5 b . 
c 5 3 5 1 d c . 
c 5 d 1 d d c . 
. f d d d f . . 
. . f f f . . . 
`)
    pause(100)
    Coin1.setImage(img`
. . . b b . . . 
. . b 5 5 b . . 
. b 5 d 1 5 b . 
. b 5 3 1 5 b . 
. c 5 3 1 d c . 
. c 5 1 d d c . 
. . f d d f . . 
. . . f f . . . 
`)
    pause(100)
    Coin1.setImage(img`
. . . b b . . . 
. . b 5 5 b . . 
. . b 1 1 b . . 
. . b 5 5 b . . 
. . b d d b . . 
. . c d d c . . 
. . c 3 3 c . . 
. . . f f . . . 
`)
    pause(100)
    Coin1.setImage(img`
. . . b b . . . 
. . b 5 5 b . . 
. b 5 1 d 5 b . 
. b 5 1 3 5 b . 
. c d 1 3 5 c . 
. c d d 1 5 c . 
. . f d d f . . 
. . . f f . . . 
`)
    pause(100)
    Coin1.setImage(img`
. . . b b b . . 
. . b 5 5 5 b . 
. b 5 d 3 d 5 b 
. b 5 1 5 3 5 b 
. c d 1 5 3 5 c 
. c d d 1 d 5 c 
. . f d d d f . 
. . . f f f . . 
`)
})
forever(function () {
    Coin3.setImage(img`
. . b b b . . . 
. b 5 5 5 b . . 
b 5 d 3 d 5 b . 
b 5 3 5 1 5 b . 
c 5 3 5 1 d c . 
c 5 d 1 d d c . 
. f d d d f . . 
. . f f f . . . 
`)
    pause(100)
    Coin3.setImage(img`
. . . b b . . . 
. . b 5 5 b . . 
. b 5 d 1 5 b . 
. b 5 3 1 5 b . 
. c 5 3 1 d c . 
. c 5 1 d d c . 
. . f d d f . . 
. . . f f . . . 
`)
    pause(100)
    Coin3.setImage(img`
. . . b b . . . 
. . b 5 5 b . . 
. . b 1 1 b . . 
. . b 5 5 b . . 
. . b d d b . . 
. . c d d c . . 
. . c 3 3 c . . 
. . . f f . . . 
`)
    pause(100)
    Coin3.setImage(img`
. . . b b . . . 
. . b 5 5 b . . 
. b 5 1 d 5 b . 
. b 5 1 3 5 b . 
. c d 1 3 5 c . 
. c d d 1 5 c . 
. . f d d f . . 
. . . f f . . . 
`)
    pause(100)
    Coin3.setImage(img`
. . . b b b . . 
. . b 5 5 5 b . 
. b 5 d 3 d 5 b 
. b 5 1 5 3 5 b 
. c d 1 5 3 5 c 
. c d d 1 d 5 c 
. . f d d d f . 
. . . f f f . . 
`)
})
forever(function () {
    Coin5.setImage(img`
. . b b b . . . 
. b 5 5 5 b . . 
b 5 d 3 d 5 b . 
b 5 3 5 1 5 b . 
c 5 3 5 1 d c . 
c 5 d 1 d d c . 
. f d d d f . . 
. . f f f . . . 
`)
    pause(100)
    Coin5.setImage(img`
. . . b b . . . 
. . b 5 5 b . . 
. b 5 d 1 5 b . 
. b 5 3 1 5 b . 
. c 5 3 1 d c . 
. c 5 1 d d c . 
. . f d d f . . 
. . . f f . . . 
`)
    pause(100)
    Coin5.setImage(img`
. . . b b . . . 
. . b 5 5 b . . 
. . b 1 1 b . . 
. . b 5 5 b . . 
. . b d d b . . 
. . c d d c . . 
. . c 3 3 c . . 
. . . f f . . . 
`)
    pause(100)
    Coin5.setImage(img`
. . . b b . . . 
. . b 5 5 b . . 
. b 5 1 d 5 b . 
. b 5 1 3 5 b . 
. c d 1 3 5 c . 
. c d d 1 5 c . 
. . f d d f . . 
. . . f f . . . 
`)
    pause(100)
    Coin5.setImage(img`
. . . b b b . . 
. . b 5 5 5 b . 
. b 5 d 3 d 5 b 
. b 5 1 5 3 5 b 
. c d 1 5 3 5 c 
. c d d 1 d 5 c 
. . f d d d f . 
. . . f f f . . 
`)
})
forever(function () {
    Coin7.setImage(img`
. . b b b . . . 
. b 5 5 5 b . . 
b 5 d 3 d 5 b . 
b 5 3 5 1 5 b . 
c 5 3 5 1 d c . 
c 5 d 1 d d c . 
. f d d d f . . 
. . f f f . . . 
`)
    pause(100)
    Coin7.setImage(img`
. . . b b . . . 
. . b 5 5 b . . 
. b 5 d 1 5 b . 
. b 5 3 1 5 b . 
. c 5 3 1 d c . 
. c 5 1 d d c . 
. . f d d f . . 
. . . f f . . . 
`)
    pause(100)
    Coin7.setImage(img`
. . . b b . . . 
. . b 5 5 b . . 
. . b 1 1 b . . 
. . b 5 5 b . . 
. . b d d b . . 
. . c d d c . . 
. . c 3 3 c . . 
. . . f f . . . 
`)
    pause(100)
    Coin7.setImage(img`
. . . b b . . . 
. . b 5 5 b . . 
. b 5 1 d 5 b . 
. b 5 1 3 5 b . 
. c d 1 3 5 c . 
. c d d 1 5 c . 
. . f d d f . . 
. . . f f . . . 
`)
    pause(100)
    Coin7.setImage(img`
. . . b b b . . 
. . b 5 5 5 b . 
. b 5 d 3 d 5 b 
. b 5 1 5 3 5 b 
. c d 1 5 3 5 c 
. c d d 1 d 5 c 
. . f d d d f . 
. . . f f f . . 
`)
})
forever(function () {
    Coin9.setImage(img`
. . b b b . . . 
. b 5 5 5 b . . 
b 5 d 3 d 5 b . 
b 5 3 5 1 5 b . 
c 5 3 5 1 d c . 
c 5 d 1 d d c . 
. f d d d f . . 
. . f f f . . . 
`)
    pause(100)
    Coin9.setImage(img`
. . . b b . . . 
. . b 5 5 b . . 
. b 5 d 1 5 b . 
. b 5 3 1 5 b . 
. c 5 3 1 d c . 
. c 5 1 d d c . 
. . f d d f . . 
. . . f f . . . 
`)
    pause(100)
    Coin9.setImage(img`
. . . b b . . . 
. . b 5 5 b . . 
. . b 1 1 b . . 
. . b 5 5 b . . 
. . b d d b . . 
. . c d d c . . 
. . c 3 3 c . . 
. . . f f . . . 
`)
    pause(100)
    Coin9.setImage(img`
. . . b b . . . 
. . b 5 5 b . . 
. b 5 1 d 5 b . 
. b 5 1 3 5 b . 
. c d 1 3 5 c . 
. c d d 1 5 c . 
. . f d d f . . 
. . . f f . . . 
`)
    pause(100)
    Coin9.setImage(img`
. . . b b b . . 
. . b 5 5 5 b . 
. b 5 d 3 d 5 b 
. b 5 1 5 3 5 b 
. c d 1 5 3 5 c 
. c d d 1 d 5 c 
. . f d d d f . 
. . . f f f . . 
`)
})
forever(function () {
    Coin2.setImage(img`
. . b b b . . . 
. b 5 5 5 b . . 
b 5 d 3 d 5 b . 
b 5 3 5 1 5 b . 
c 5 3 5 1 d c . 
c 5 d 1 d d c . 
. f d d d f . . 
. . f f f . . . 
`)
    pause(100)
    Coin2.setImage(img`
. . . b b . . . 
. . b 5 5 b . . 
. b 5 d 1 5 b . 
. b 5 3 1 5 b . 
. c 5 3 1 d c . 
. c 5 1 d d c . 
. . f d d f . . 
. . . f f . . . 
`)
    pause(100)
    Coin2.setImage(img`
. . . b b . . . 
. . b 5 5 b . . 
. . b 1 1 b . . 
. . b 5 5 b . . 
. . b d d b . . 
. . c d d c . . 
. . c 3 3 c . . 
. . . f f . . . 
`)
    pause(100)
    Coin2.setImage(img`
. . . b b . . . 
. . b 5 5 b . . 
. b 5 1 d 5 b . 
. b 5 1 3 5 b . 
. c d 1 3 5 c . 
. c d d 1 5 c . 
. . f d d f . . 
. . . f f . . . 
`)
    pause(100)
    Coin2.setImage(img`
. . . b b b . . 
. . b 5 5 5 b . 
. b 5 d 3 d 5 b 
. b 5 1 5 3 5 b 
. c d 1 5 3 5 c 
. c d d 1 d 5 c 
. . f d d d f . 
. . . f f f . . 
`)
})
forever(function () {
    Coin6.setImage(img`
. . b b b . . . 
. b 5 5 5 b . . 
b 5 d 3 d 5 b . 
b 5 3 5 1 5 b . 
c 5 3 5 1 d c . 
c 5 d 1 d d c . 
. f d d d f . . 
. . f f f . . . 
`)
    pause(100)
    Coin6.setImage(img`
. . . b b . . . 
. . b 5 5 b . . 
. b 5 d 1 5 b . 
. b 5 3 1 5 b . 
. c 5 3 1 d c . 
. c 5 1 d d c . 
. . f d d f . . 
. . . f f . . . 
`)
    pause(100)
    Coin6.setImage(img`
. . . b b . . . 
. . b 5 5 b . . 
. . b 1 1 b . . 
. . b 5 5 b . . 
. . b d d b . . 
. . c d d c . . 
. . c 3 3 c . . 
. . . f f . . . 
`)
    pause(100)
    Coin6.setImage(img`
. . . b b . . . 
. . b 5 5 b . . 
. b 5 1 d 5 b . 
. b 5 1 3 5 b . 
. c d 1 3 5 c . 
. c d d 1 5 c . 
. . f d d f . . 
. . . f f . . . 
`)
    pause(100)
    Coin6.setImage(img`
. . . b b b . . 
. . b 5 5 5 b . 
. b 5 d 3 d 5 b 
. b 5 1 5 3 5 b 
. c d 1 5 3 5 c 
. c d d 1 d 5 c 
. . f d d d f . 
. . . f f f . . 
`)
})
forever(function () {
    Coin4.setImage(img`
. . b b b . . . 
. b 5 5 5 b . . 
b 5 d 3 d 5 b . 
b 5 3 5 1 5 b . 
c 5 3 5 1 d c . 
c 5 d 1 d d c . 
. f d d d f . . 
. . f f f . . . 
`)
    pause(100)
    Coin4.setImage(img`
. . . b b . . . 
. . b 5 5 b . . 
. b 5 d 1 5 b . 
. b 5 3 1 5 b . 
. c 5 3 1 d c . 
. c 5 1 d d c . 
. . f d d f . . 
. . . f f . . . 
`)
    pause(100)
    Coin4.setImage(img`
. . . b b . . . 
. . b 5 5 b . . 
. . b 1 1 b . . 
. . b 5 5 b . . 
. . b d d b . . 
. . c d d c . . 
. . c 3 3 c . . 
. . . f f . . . 
`)
    pause(100)
    Coin4.setImage(img`
. . . b b . . . 
. . b 5 5 b . . 
. b 5 1 d 5 b . 
. b 5 1 3 5 b . 
. c d 1 3 5 c . 
. c d d 1 5 c . 
. . f d d f . . 
. . . f f . . . 
`)
    pause(100)
    Coin4.setImage(img`
. . . b b b . . 
. . b 5 5 5 b . 
. b 5 d 3 d 5 b 
. b 5 1 5 3 5 b 
. c d 1 5 3 5 c 
. c d d 1 d 5 c 
. . f d d d f . 
. . . f f f . . 
`)
})
forever(function () {
    Coin8.setImage(img`
. . b b b . . . 
. b 5 5 5 b . . 
b 5 d 3 d 5 b . 
b 5 3 5 1 5 b . 
c 5 3 5 1 d c . 
c 5 d 1 d d c . 
. f d d d f . . 
. . f f f . . . 
`)
    pause(100)
    Coin8.setImage(img`
. . . b b . . . 
. . b 5 5 b . . 
. b 5 d 1 5 b . 
. b 5 3 1 5 b . 
. c 5 3 1 d c . 
. c 5 1 d d c . 
. . f d d f . . 
. . . f f . . . 
`)
    pause(100)
    Coin8.setImage(img`
. . . b b . . . 
. . b 5 5 b . . 
. . b 1 1 b . . 
. . b 5 5 b . . 
. . b d d b . . 
. . c d d c . . 
. . c 3 3 c . . 
. . . f f . . . 
`)
    pause(100)
    Coin8.setImage(img`
. . . b b . . . 
. . b 5 5 b . . 
. b 5 1 d 5 b . 
. b 5 1 3 5 b . 
. c d 1 3 5 c . 
. c d d 1 5 c . 
. . f d d f . . 
. . . f f . . . 
`)
    pause(100)
    Coin8.setImage(img`
. . . b b b . . 
. . b 5 5 5 b . 
. b 5 d 3 d 5 b 
. b 5 1 5 3 5 b 
. c d 1 5 3 5 c 
. c d d 1 d 5 c 
. . f d d d f . 
. . . f f f . . 
`)
})
forever(function () {
    Coin10.setImage(img`
. . b b b . . . 
. b 5 5 5 b . . 
b 5 d 3 d 5 b . 
b 5 3 5 1 5 b . 
c 5 3 5 1 d c . 
c 5 d 1 d d c . 
. f d d d f . . 
. . f f f . . . 
`)
    pause(100)
    Coin10.setImage(img`
. . . b b . . . 
. . b 5 5 b . . 
. b 5 d 1 5 b . 
. b 5 3 1 5 b . 
. c 5 3 1 d c . 
. c 5 1 d d c . 
. . f d d f . . 
. . . f f . . . 
`)
    pause(100)
    Coin10.setImage(img`
. . . b b . . . 
. . b 5 5 b . . 
. . b 1 1 b . . 
. . b 5 5 b . . 
. . b d d b . . 
. . c d d c . . 
. . c 3 3 c . . 
. . . f f . . . 
`)
    pause(100)
    Coin10.setImage(img`
. . . b b . . . 
. . b 5 5 b . . 
. b 5 1 d 5 b . 
. b 5 1 3 5 b . 
. c d 1 3 5 c . 
. c d d 1 5 c . 
. . f d d f . . 
. . . f f . . . 
`)
    pause(100)
    Coin10.setImage(img`
. . . b b b . . 
. . b 5 5 5 b . 
. b 5 d 3 d 5 b 
. b 5 1 5 3 5 b 
. c d 1 5 3 5 c 
. c d d 1 d 5 c 
. . f d d d f . 
. . . f f f . . 
`)
})
