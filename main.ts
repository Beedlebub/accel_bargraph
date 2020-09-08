let acc = 0
basic.forever(function () {
    acc = input.acceleration(Dimension.X)
    led.plotBarGraph(
    acc,
    0
    )
})
