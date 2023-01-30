function doSomething3 () {
    projectile3 = sprites.createProjectileFromSide(img`
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
        `, 50, 0)
    projectile3.setPosition(5, 279)
    projectile3.setFlag(SpriteFlag.DestroyOnWall, true)
    pause(200)
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
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    game.gameOver(false)
    music.play(music.melodyPlayable(music.powerDown), music.PlaybackMode.InBackground)
})
// This functions loads projectiles of red car
function doSomething () {
    projectile = sprites.createProjectileFromSide(img`
        . . . . . . . . . . . . . . . . 
        . . . . 2 2 2 2 2 2 2 2 . . . . 
        . . . 2 4 2 2 2 2 2 2 c 2 . . . 
        . . 2 c 4 2 2 2 2 2 2 c c 2 . . 
        . 2 c c 4 4 4 4 4 4 2 c c 4 2 d 
        . 2 c 2 e e e e e e e b c 4 2 2 
        . 2 2 e b b e b b b e e b 4 2 2 
        . 2 e b b b e b b b b e 2 2 2 2 
        . e e 2 2 2 e 2 2 2 2 2 e 2 2 2 
        . e e e e e e f e e e f e 2 d d 
        . e e e e e e f e e f e e e 2 d 
        . e e e e e e f f f e e e e e e 
        . e f f f f e e e e f f f e e e 
        . . f f f f f e e f f f f f e . 
        . . . f f f . . . . f f f f . . 
        . . . . . . . . . . . . . . . . 
        `, 50, 0)
    projectile.setPosition(5, 15)
    projectile.setFlag(SpriteFlag.DestroyOnWall, true)
    pause(1000)
}
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.y += 16
})
scene.onOverlapTile(SpriteKind.Player, sprites.castle.tileDarkGrass2, function (sprite, location) {
    game.gameOver(true)
    music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.UntilDone)
})
function doSomething2 () {
    projectile2 = sprites.createProjectileFromSide(img`
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
        `, 50, 0)
    projectile2.setPosition(5, 310)
    projectile2.setFlag(SpriteFlag.DestroyOnWall, true)
    pause(100)
}
function doSomething4 () {
    projectile4 = sprites.createProjectileFromSide(img`
        . . . . . . . . . . . . . . . . 
        . . . . 5 5 5 5 5 5 5 5 . . . . 
        . . . 5 4 5 5 5 5 5 5 c 5 . . . 
        . . 5 c 4 5 5 5 5 5 5 c c 5 . . 
        . 5 c c 4 4 4 4 4 4 5 c c 4 5 d 
        . 5 c 5 5 5 5 5 5 5 5 b c 4 5 5 
        . 5 5 5 b b 5 b b b 5 5 b 4 5 5 
        . 5 5 b b b 5 b b b b 5 5 5 5 5 
        . 5 5 4 4 4 5 4 4 4 4 4 5 5 5 5 
        . 5 5 5 5 5 5 f 5 5 5 f 5 5 d d 
        . 5 5 5 5 5 5 f 5 5 f 5 5 5 5 d 
        . 5 5 5 5 5 5 f f f 5 5 5 5 5 5 
        . 5 f f f f 5 5 5 5 f f f 5 5 5 
        . . f f f f f 5 5 f f f f f 5 . 
        . . . f f f . . . . f f f f . . 
        . . . . . . . . . . . . . . . . 
        `, 50, 0)
    projectile4.setPosition(5, 342)
    projectile4.setFlag(SpriteFlag.DestroyOnWall, true)
    pause(1000)
}
let projectile4: Sprite = null
let projectile2: Sprite = null
let projectile: Sprite = null
let projectile3: Sprite = null
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
for (let index = 0; index < 7; index++) {
    doSomething4()
    doSomething2()
    doSomething3()
    doSomething()
}
