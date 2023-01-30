namespace SpriteKind {
    export const log = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.y += -16
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.x += -16
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.x += 16
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.y += 16
})
scene.onOverlapTile(SpriteKind.Player, sprites.castle.tileDarkGrass2, function (sprite, location) {
    game.gameOver(true)
    music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.UntilDone)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    game.gameOver(false)
    music.play(music.melodyPlayable(music.powerDown), music.PlaybackMode.InBackground)
})
let car4: Sprite = null
let car3: Sprite = null
let car2: Sprite = null
let car: Sprite = null
let mySprite: Sprite = null
tiles.setCurrentTilemap(tilemap`level1`)
mySprite = sprites.create(img`
    . . . . . . . . . . 2 2 2 . . . 
    . . . . . . . . . . 2 2 2 . . . 
    . . . . . . . . . 1 1 1 1 1 . . 
    . 1 1 . . . . . . 1 1 1 e 1 . . 
    . 1 1 1 1 . . . 1 1 1 1 1 1 4 . 
    . 1 1 1 1 1 . 1 1 1 1 1 1 1 . . 
    . 1 1 1 1 1 1 1 1 1 1 1 1 . . . 
    . 1 1 1 1 1 1 1 1 d 1 1 1 . . . 
    . 1 1 1 1 d 1 1 d d 1 1 1 . . . 
    . . 1 1 1 d d d d 1 1 1 1 . . . 
    . . 1 1 1 1 1 1 1 1 1 1 1 . . . 
    . . . 1 1 1 1 1 1 1 1 1 . . . . 
    . . . 1 1 1 1 1 1 1 1 . . . . . 
    . . . . 1 1 1 1 1 1 . . . . . . 
    . . . . . . 4 . 4 . . . . . . . 
    . . . . . . 4 . 4 . . . . . . . 
    `, SpriteKind.Player)
mySprite.setPosition(75, 380)
scene.cameraFollowSprite(mySprite)
// game over if sprite touches "water"
game.onUpdate(function () {
    if (mySprite.tileKindAt(TileDirection.Center, assets.tile`myTile10`)) {
        game.gameOver(false)
    }
})
game.onUpdateInterval(750, function () {
    car = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . 3 3 3 3 3 3 3 3 . . . . . . 
        . 3 d 3 3 3 3 3 3 c 3 . . . . . 
        3 c d 3 3 3 3 3 3 c c 3 . . . . 
        c c d d d d d d 3 c c d 3 d . . 
        c 3 a a a a a a a b c d 3 3 d . 
        3 a b b a b b b a a b d 3 3 3 . 
        a b b b a b b b b a 3 3 3 3 3 . 
        a 3 3 3 a 3 3 3 3 3 a 3 3 3 3 . 
        a a a a a f a a a f a 3 d d 3 . 
        a a a a a f a a f a a a 3 d d . 
        a a a a a f f f a a a a a a a . 
        f f f f a a a a f f f a a a a . 
        f f f f f a a f f f f f a . . . 
        . f f f . . . . f f f f . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    car.setVelocity(50, 0)
    tiles.placeOnRandomTile(car, assets.tile`myTile`)
    car.setFlag(SpriteFlag.DestroyOnWall, true)
    car2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . 6 6 6 6 6 6 6 6 . . . . 
        . . . 6 9 6 6 6 6 6 6 c 6 . . . 
        . . 6 c 9 6 6 6 6 6 6 c c 6 . . 
        . 6 c c 9 9 9 9 9 9 6 c c 9 6 d 
        . 6 c 6 8 8 8 8 8 8 8 b c 9 6 6 
        . 6 6 8 b b 8 b b b 8 8 b 9 6 6 
        . 6 8 b b b 8 b b b b 8 6 6 6 6 
        . 8 8 6 6 6 8 6 6 6 6 6 8 6 6 6 
        . 8 8 8 8 8 8 f 8 8 8 f 8 6 d d 
        . 8 8 8 8 8 8 f 8 8 f 8 8 8 6 d 
        . 8 8 8 8 8 8 f f f 8 8 8 8 8 8 
        . 8 f f f f 8 8 8 8 f f f 8 8 8 
        . . f f f f f 8 8 f f f f f 8 . 
        . . . f f f . . . . f f f f . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    car2.setVelocity(50, 0)
    tiles.placeOnRandomTile(car2, assets.tile`myTile0`)
    car3 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . 3 3 3 3 3 3 3 3 . . . . 
        . . . 3 d 3 3 3 3 3 3 c 3 . . . 
        . . 3 c d 3 3 3 3 3 3 c c 3 . . 
        . 3 c c d d d d d d 3 c c d 3 d 
        . 3 c 3 a a a a a a a b c d 3 3 
        . 3 3 a b b a b b b a a b d 3 3 
        . 3 a b b b a b b b b a 3 3 3 3 
        . a a 3 3 3 a 3 3 3 3 3 a 3 3 3 
        . a a a a a a f a a a f a 3 d d 
        . a a a a a a f a a f a a a 3 d 
        . a a a a a a f f f a a a a a a 
        . a f f f f a a a a f f f a a a 
        . . f f f f f a a f f f f f a . 
        . . . f f f . . . . f f f f . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    car3.setVelocity(50, 0)
    tiles.placeOnRandomTile(car3, assets.tile`myTile4`)
    car3.setFlag(SpriteFlag.DestroyOnWall, true)
    car4 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . 5 5 5 5 5 5 5 5 . . . . 
        . . . 5 4 5 5 5 5 5 5 c 5 . . . 
        . . 5 c 4 5 5 5 5 5 5 c c 5 . . 
        . 5 c c 4 4 4 4 4 4 5 c c 4 5 d 
        . 5 c 5 e e e e e e e b c 4 5 5 
        . 5 5 e b b e b b b e e b 4 5 5 
        . 5 5 b b b e b b b b e 5 5 5 5 
        . 5 5 4 4 4 e 4 4 4 4 4 5 5 5 5 
        . 5 5 5 5 5 5 f 5 5 5 f 5 5 4 4 
        . 5 5 5 5 5 5 f 5 5 f 5 5 5 5 4 
        . 5 5 5 5 5 5 f f f 5 5 5 5 5 5 
        . 5 f f f f 5 5 5 5 f f f 5 5 5 
        . . f f f f f 5 5 f f f f f 5 . 
        . . . f f f . . . . f f f f . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    car4.setVelocity(50, 0)
    tiles.placeOnRandomTile(car4, assets.tile`myTile3`)
    car4.setFlag(SpriteFlag.DestroyOnWall, true)
})
