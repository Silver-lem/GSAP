gsap.from("#page1 #box",{
    scale:0,
    delay:1,
    duration:2,
    rotate:360,
})

gsap.from("#page2 #box",{
    scale:0,
    // delay:1,
    // duration:2,
    duration:1,
    opacity:0,
    rotate:720,
    // scrollTrigger:"#page2 #box"
    scrollTrigger:{
        trigger: "#page2 #box",
        scroller:"body",
        markers:true,
        start:"top 60%",
        end:"top 30%",
        // scrub:true
        scrub:2,
        pin:true,
    }

})

gsap.from("#page3 #box",{
    scale:0,
    delay:1,
    duration:2,
    rotate:360,
    // scrollTrigger:"#page3 #box"
    scrollTrigger:{
        trigger: "#page3 #box",
        scroller:"body",
        markers:true,
        start:"top 60%"
    }
})