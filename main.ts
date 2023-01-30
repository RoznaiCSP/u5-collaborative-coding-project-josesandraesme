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
game.onUpdateInterval(750, function () {
	
})
