input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . # # # .
        . . . . .
        . . . . .
        `)
    record.startRecording(record.BlockingState.Blocking)
    basic.showIcon(IconNames.StickFigure)
})
input.onButtonPressed(Button.B, function () {
    record.playAudio(record.BlockingState.Blocking)
    control.waitMicros(300)
    images.iconImage(IconNames.Yes).showImage(0)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    music.play(music.createSoundExpression(WaveShape.Sine, 469, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
})
basic.showIcon(IconNames.StickFigure)
