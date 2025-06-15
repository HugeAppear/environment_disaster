player.onChat("장마", function () {
    blocks.place(AIR, world(-163, 120, -172))
    blocks.place(AIR, world(-163, 120, -170))
    blocks.place(AIR, world(-163, 120, -166))
    blocks.place(AIR, world(-157, 120, -161))
    blocks.place(AIR, world(-154, 120, -161))
    blocks.place(AIR, world(-147, 120, -161))
    blocks.place(AIR, world(-144, 120, -165))
    blocks.place(AIR, world(-144, 120, -167))
    blocks.place(AIR, world(-144, 120, -171))
    blocks.place(AIR, world(-144, 120, -175))
    for (let index = 0; index < 1000; index++) {
        blocks.place(WATER, randpos(
        world(-46, 162, -25),
        world(-274, 162, -208)
        ))
    }
    player.say("장마철이 시작되었습니다!")
    blocks.place(WATER, world(-79, 73, -137))
    for (let index = 0; index < 800; index++) {
        blocks.place(WATER, randpos(
        world(-46, 162, -25),
        world(-274, 162, -208)
        ))
    }
    player.say("홍수가 발생하였습니다!")
    blocks.place(WATER, world(-173, 72, -93))
    for (let index = 0; index < 400; index++) {
        blocks.place(WATER, randpos(
        world(-46, 162, -25),
        world(-274, 162, -208)
        ))
    }
    blocks.place(WATER, world(-193, 71, -48))
})
