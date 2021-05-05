let controller = new ScrollMagic.Controller();
let timeline = new TimelineMax();

timeline
  .to('.fence', 3, { y: -300 })
  .to('.grass', 3, { y: -350 }, '-=3')
  .to('.treeline', 3, { y: -200}, '-=3')
  .fromTo('.main', { y: -50 }, { y: 0, duration: 3 }, '-=3')
  .to('.content', 3, { top:"0" }, '-=3')
  .fromTo('.content-images', { opacity: 0 }, { opacity: 1, duration: 3 }, '-=3');

let scene = new ScrollMagic.Scene({
  triggerElement: "section",
  triggerHook: 0,
  duration: "200%"
})
  .setTween(timeline)
  .setPin("section")
  .addTo(controller);