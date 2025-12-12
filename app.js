gsap.registerPlugin(ScrollTrigger)

// YOUR CODE HERE

const lineOneTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".line-one",        
    start: "top center",         
    end: "bottom center",        
    scrub: true                  }
});


lineOneTimeline.from(".line-one span", {
  y: 100,         
  opacity: 0,     
  stagger: 0.2    
});


lineOneTimeline.to("body", {
      backgroundColor: "#fff176", 
  duration: 0.5                
}, "<");                       


lineOneTimeline.to(".sun", {
  opacity: 1,     
  x: 0,           
  y: 0,           
  duration: 0.5
}, "<");


lineOneTimeline.to(".line-one span", {
  opacity: 0,    
  y: -50,         
  stagger: 0.1    
}, ">0.5");


lineOneTimeline.to(".sun", {
  x: "-80vw",     
  duration: 1
}, "<");


const lineTwoTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".line-two",
    start: "top center",
    end: "bottom center",
    scrub: true
  }
});


lineTwoTimeline.from(".line-two span", {
  opacity: 0,    
  scale: 0,       
  stagger: 0.3   
});


lineTwoTimeline.to(".line-two span:first-child", {y: -30, duration: 0.5}); // Primera letra sube
lineTwoTimeline.to(".line-two span:last-child", {y: 30, duration: 0.5}, "<"); // Segunda letra baja al mismo tiempo

lineTwoTimeline.to(".line-two span", {
  opacity: 0,
  y: -50,
  duration: 0.5
});


const lineThreeTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".line-three",
    start: "top center",
    end: "bottom center",
    scrub: true
  }
});


lineThreeTimeline.to("body", {
  backgroundColor: "#000",
  duration: 0.5
}, "<");

lineThreeTimeline.from(".line-three span", {
  y: 100,
  opacity: 0,
  stagger: 0.2
});

lineThreeTimeline.to(".moon", {
  opacity: 1,
  x: 0,
  y: 0,
  duration: 0.5
}, "<");


lineThreeTimeline.to(".line-three span", {
  opacity: 0,
  y: -50,
  stagger: 0.2
});
lineThreeTimeline.to(".moon", {
  opacity: 0,
  x: "80vw",     
  duration: 1
}, "<");
