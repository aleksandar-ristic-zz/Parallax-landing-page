let controller = new ScrollMagic.Controller();
let timeline = new TimelineMax();

timeline
  .to('.fence', 3, { y: -300 })
  .to('.grass', 3, { y: -200 }, '-=3')
  .to('.treeline', 3, { y: -200}, '-=3')
  .fromTo('.main', 3, { y: 50 }, '-=3')
  .to('.content', 3, { top:"0" }, '-=3');

let scene = new ScrollMagic.Scene({
  triggerElement: "section",
  triggerHook: 0,
  duration: "100%"
})
  .setTween(timeline)
  .setPin("section")
  .addTo(controller);