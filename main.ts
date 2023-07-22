let picker = game.createSprite(2, 2)
let litter = game.createSprite(2, input.acceleration(Dimension.X))
let accx = 0
let accy = 0 / 10
game.setScore(0)
game.startCountdown(60000)
basic.forever(function () {
    if (input.acceleration(Dimension.X) > 100) {
        picker.change(LedSpriteProperty.X, 1)
    }
    if (input.acceleration(Dimension.X) < -100) {
        picker.change(LedSpriteProperty.X, -1)
    }
    if (input.acceleration(Dimension.Y) > 100) {
        picker.change(LedSpriteProperty.Y, 1)
    }
    if (input.acceleration(Dimension.Y) < -100) {
        picker.change(LedSpriteProperty.Y, -1)
    }
    if (picker.isTouching(litter)) {
        game.addScore(1)
        litter.delete()
        litter = game.createSprite(randint(0, 5), randint(0, 5))
    }
    basic.pause(500)
})
