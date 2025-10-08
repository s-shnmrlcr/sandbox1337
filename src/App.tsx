import { useState, useEffect } from 'react'
import { ReactLenis } from 'lenis/react'
import Lenis from 'lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import YouTube from 'react-youtube'
import './App.css'

function fullAnimationTimeline(){
  gsap.timeline({
    scrollTrigger: {
      trigger: 'body',
      start: 'top',
      end: "96.29%",
      scrub: true,
      invalidateOnRefresh: true
    }
  })

  // --- your animations unchanged ---
  .to('#landing-h1', { opacity: 0 })
  .to('#p1-lira-svg', { bottom: 0, left: '40%' },'<')
  .to('#p1-text', { opacity: 1 })
  .to('#p1-lira-cam-svg', { opacity: 1 },'<')
  .from('#p1-sun-svg', { opacity: 0, y: 100 })
  .from('#p1-rain-svg', { opacity: 0, y: 100 })
  .to('#p1-sun-svg', { opacity: 0, y: -100 }, '<')
  .to('#p1-rain-svg', { opacity: 0, y: -100 })
  .from('#p1-stars-svg', { opacity: 0, y: 100 }, '<')
  .to('#p1-text', { opacity: 0 })
  .to('#p1-lira-svg', { opacity: 0 }, '<')
  .to('#p1-lira-cam-svg', { opacity: 0 }, '<')
  .to('#p1-stars-svg', { opacity: 0 }, '<')
  .from('#p2-text', { opacity: 0 })
  .from('#p2-book-svg', { opacity: 0 }, '<')
  .from('#p2-tv-svg', { opacity: 0 }, '<')
  .to('#p2-book-svg', { opacity: 0 })
  .to('#p2-tv-svg', { scale: 1.3, x: -100 }, '<')
  .to('#p2-tv-svg', { opacity: 0 })
  .to('#p2-text', { opacity: 0 }, '<')
  .from('#p4-sun-svg', { opacity: 0 })
  .from('#p4-text', { opacity: 0 }, '<')
  .from('#p4-earth-svg', { opacity: 0 }, '<')
  .to('#p4-text', { opacity: 0 })
  .to('#p4-earth-svg', { opacity: 0 })
  .to('#p4-sun-svg', { scale: 1.2, x: 200 }, '<')
  .from('#p5-text', { opacity: 0 }, '<')
  .to('#p5-text', { opacity: 0 })
  .from('#p6-text', { opacity: 0 })
  .to('#p4-sun-svg', { opacity: 0 })
  .to('#p4-earth-svg', { opacity: 1, scale: 1.2, x: -200 }, '<')
  .to('#p6-text', { opacity: 0 })
  .to('#p4-earth-svg', { opacity: 0 }, '<')
  .from('#p7-text', { opacity: 0 })
  .from('#p7-tv-svg', { opacity: 0 }, '<')
  .to('#p7-tv-svg', { opacity: 0 })
  .to('#p7-text', { opacity: 0 }, '<')
  .from('#p8-luggage-svg', { opacity: 0 })
  .from('#p8-hand-svg', { x:-100, y:-100, opacity: 0 }, '<')
  .from('#p8-text', { opacity: 0 }, '<')
  .to('#p8-luggage-svg', { opacity: 0 })
  .to('#p8-hand-svg', { opacity: 0 }, '<')
  .from('#p8-plane-svg', { opacity: 0 }, '<')
  .from('#p8-cloud1-svg', { opacity: 0 }, '<')
  .from('#p8-cloud2-svg', { opacity: 0 }, '<')
  .to('#p8-cloud1-svg', { x: -100, opacity: 0 })
  .to('#p8-cloud2-svg', { x: -300, opacity: 0 }, '<')
  .to('#p8-text', { opacity: 0 })
  .from('#p9-text', { opacity: 0 })
  .to('#p8-plane-svg', { scale: 0.8, y: 50 }, '<')
  .from('#p9-signal1-svg', { opacity: 0 })
  .to('#p9-signal1-svg', { opacity: 0 })
  .from('#p9-signal2-svg', { opacity: 0 }, '<')
  .to('#p8-plane-svg', { opacity: 0 })
  .to('#p9-signal2-svg', { opacity: 0 }, '<')
  .from('#p9-alley-svg', { opacity: 0 }, '<')
  .to('#p9-alley-svg', { opacity: 0 })
  .to('#p9-text', { opacity: 0 }, '<')
  .from('#p10-text', { opacity: 0 })
  .from('#p10-light-svg', { opacity: 0 }, '<')
  .to('#p10-light-svg', { opacity: 0 })
  .to('#p10-no-light-svg', { opacity: 1 }, '<')
  .to('#p10-no-light-svg', { opacity: 0 })
  .to('#p10-text', { opacity: 0 }, '<')
  .from('#p11-text', { opacity: 0 })
  .from('#p11-cloud1-svg', { opacity: 0 }, '<')
  .from('#p11-cloud2-svg', { opacity: 0 }, '<')
  .to('#p11-cloud1-svg', { x: -350 })
  .to('#p11-cloud2-svg', { x: 350 }, '<')
  .from('#p11-aurora-svg', { opacity: 0 })
  .to('#p11-aurora-svg', { opacity: 0 })
  .to('#p11-cloud1-svg', { opacity: 0 })
  .to('#p11-cloud2-svg', { opacity: 0 }, '<')
  .to('#p11-text', { opacity: 0 }, '<')
  .from('#p12-camera-svg', { opacity: 0, y: 100 })
  .from('#p12-text', { opacity: 0 }, '<')
  .to('#p12-text', { opacity: 0 })
  .to('#p12-text', { opacity: 0 }, '<')
  .to('#p12-text', { opacity: 0 }, '<')
  .to('#p12-camera-svg', { opacity: 0 }, '<')
  .from('#p13-text', { opacity: 0 })
  .from('#p13-living-room-svg', { opacity: 0 }, '<')
}

function initLenisSmoothScroll(){
  const lenis = new Lenis();
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });
  gsap.ticker.lagSmoothing(0);
}

function handleMouseLeave() {
  gsap.to('#cursor-follower', {
    opacity: 0
  })
}

function handleMouseEnter() {
  gsap.to('#cursor-follower', {
    opacity: 1
  })
}

function App() {
  // --- AUDIO STATE & PLAYER SETUP ---  THIS CONTROLS BACKGROUND MUSIC
  const [isMuted, setIsMuted] = useState(false)       // 👉 Tracks if music is muted or not
  const [player, setPlayer] = useState<any>(null)     // 👉 Reference to YouTube player instance

  // YouTube Player Options (Hidden)
  const playerOptions = {
    height: '0',
    width: '0',
    playerVars: {
      autoplay: 1,
      loop: 1,
      playlist: '1NBnN0IAljQ', // REQUIRED for looping
    },
  }

  // This runs when YouTube is ready
  const onPlayerReady = (event: any) => {
  setPlayer(event.target)
  if (!isMuted) {
    event.target.setVolume(100)
    event.target.playVideo()
  }
}


  // --- MUTE / UNMUTE TOGGLE BUTTON HANDLER ---
  const handleToggleAudio = () => {
  if (!player) return
  const newMutedState = !isMuted
  setIsMuted(newMutedState)

  if (newMutedState) {
    player.pauseVideo()  // actually stops the music
  } else {
    player.playVideo()   // plays music again
    player.setVolume(100)
  }
}


  // --- ENSURE AUTOPLAY AFTER USER INTERACTION (Modern Browser Requirement) 
  useEffect(() => {
    const tryPlay = () => {
      if (player) {
        player.playVideo()
        document.removeEventListener('click', tryPlay)
        document.removeEventListener('scroll', tryPlay)
      }
    }

    document.addEventListener('click', tryPlay)
    document.addEventListener('scroll', tryPlay)

    return () => {
      document.removeEventListener('click', tryPlay)
      document.removeEventListener('scroll', tryPlay)
    }
  }, [player])

  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(useGSAP);

  initLenisSmoothScroll();  
  useGSAP(fullAnimationTimeline)

   useEffect(() => {
  const mouseHandle = (e: MouseEvent) => {
    const { clientX, clientY } = e;
    gsap.to('#cursor-follower', {
      x: clientX,
      y: clientY
    });
  };
  window.addEventListener('mousemove', mouseHandle);

  return () => {
    window.removeEventListener('mousemove', mouseHandle);
  };
}, []);



  return (
    <>
      <ReactLenis root />
      <div id="cursor-follower"></div>


      <div id="animation-container" onMouseLeave={handleMouseLeave} onMouseEnter={handleMouseEnter}>

        {/*Hidden Background Music Player */}
        <div style={{ display: 'none' }}>
          <YouTube
            videoId="1NBnN0IAljQ"
            opts={playerOptions}
            onReady={onPlayerReady}
          />
        </div>

        {/* Visible Mute / Unmute Button */}
        <button id='audio-btn' onClick={handleToggleAudio}>
          <img
            src={isMuted ? 'assets/audio-img/muted.png' : 'assets/audio-img/unmute.png'}
            id='unmute-audio-btn'
            alt="Audio Button"
          />
        </button>


        {/* your svgs unchanged */}
        <img id="p1-lira-svg" src="assets/p1/lira.svg" alt="Lira character"></img>
        <img id="p1-lira-cam-svg" src="assets/p1/lira-cam.svg" alt="Lira with camera"></img>
        <img id="p1-sun-svg" src="assets/p1/sun.svg" alt="Sun"></img>
        <img id="p1-rain-svg" src="assets/p1/rain.svg" alt="Rain"></img>
        <img id="p1-stars-svg" src="assets/p1/stars.svg" alt="Stars"></img>

        <img id="p2-book-svg" src="assets/p2/book.svg" alt="Book"></img>
        <img id="p2-tv-svg" src="assets/p2/tv.svg" alt="Television"></img>

        <img id="p4-sun-svg" src="assets/p4/sun.svg" alt="Sun"></img>
        <img id="p4-earth-svg" src="assets/p4/earth.svg" alt="Earth"></img>

        <img id="p7-tv-svg" src="assets/p7/tv.svg" alt="Television"></img>

        <img id="p8-luggage-svg" src="assets/p8/luggage.svg" alt="Luggage"></img>
        <img id="p8-hand-svg" src="assets/p8/hand.svg" alt="Hand"></img>
        <img id="p8-plane-svg" src="assets/p8/plane.svg" alt="Airplane"></img>
        <img id="p8-cloud1-svg" src="assets/p8/cloud1.svg" alt="Cloud"></img>
        <img id="p8-cloud2-svg" src="assets/p8/cloud2.svg" alt="Cloud"></img>

        <img id="p9-signal1-svg" src="assets/p9/signal1.svg" alt="Radio signal"></img>
        <img id="p9-signal2-svg" src="assets/p9/signal2.svg" alt="Radio signal"></img>
        <img id="p9-alley-svg" src="assets/p9/alley.svg" alt="Alley"></img>

        <img id="p10-light-svg" src="assets/p10/light.svg" alt="Light"></img>
        <img id="p10-no-light-svg" src="assets/p10/no-light.svg" alt="No light"></img>

        <img id="p11-cloud1-svg" src="assets/p11/cloud.svg" alt="Cloud"></img>
        <img id="p11-cloud2-svg" src="assets/p11/cloud.svg" alt="Cloud"></img>
        <img id="p11-aurora-svg" src="assets/p11/aurora.svg" alt="Aurora"></img>

        <img id="p12-camera-svg" src="assets/p12/camera.svg" alt="Camera"></img>

        <img id="p13-living-room-svg" src="assets/p13/living-room.svg" alt="Living room"></img>
        
      </div>

      <div id="text-container">
        <h1 id="landing-h1">Hi, I'm Lira, a Photographer</h1>
        <p id='p1-text'>I chase beauty everywhere — in glowing sunsets, in tiny drops of rain, and in the twinkling stars above.
        But there is one dream I hold close to my heart — to capture the aurora, the magical ribbons of light that dance and swirl across the dark sky.
        </p>
        <p id="p2-text">I always wondered how such a breathtaking sight is born. So I opened books, watched videos, and read stories.
        I learned that the aurora is a gift from the Sun — a part of something called space weather.
        Even though the Sun is nearly 100 million miles away, it still touches our daily lives.
        </p>
        <p id="p4-text">Sometimes, the Sun sends out bursts of energy called solar flares or clouds of particles known as coronal mass ejections (CMEs).
        These explosions are part of solar storms. When these storms reach Earth, they can disturb our planet’s magnetic field, causing radio blackouts, 
        power outages, and most wonderfully, auroras.
        </p>
        <p id="p5-text">
        Solar storms begin deep within the Sun, where magnetic fields twist and tangle like messy strands of hair. As the Sun spins, its middle turns faster than its poles, pulling and stretching those magnetic lines.
        Sometimes they twist so tightly that they snap and reconnect, an event called magnetic reconnection, and when they do, they release huge amounts of energy into space.
        And so, a solar storm is born, racing toward Earth.
        </p>
        <p id="p6-text">
        When the charged particles from the Sun reach our planet, Earth’s invisible magnetic shield guides them toward the poles.
        There, high in the atmosphere, they collide with gases, and the sky begins to paint itself.
        Green, purple, and pink light swirl and ripple like waves on an invisible sea.
        </p>
        <p id="p7-text">
        But auroras don’t appear every night.
        Each morning, I checked the aurora forecast, watching and hoping.
        One day, the news I’d been waiting for appeared — a strong aurora was coming to the Northern Hemisphere. My heart soared. It was time.
        </p>
        <p id="p8-text">
        I packed my camera with trembling hands and boarded a plane that would carry me closer to the dancing sky.
        Through the window, the clouds drifted like soft waves. I imagined the auroras waiting beyond the horizon, ready to perform their cosmic ballet.
        </p>
        <p id='p9-text'>
        Then something unusual happened. The radio signal in the cockpit faded and crackled.
        The pilot calmly explained that a solar storm was interfering with communication. Space weather was making its presence known;
        It felt like the Sun was whispering to us: 'I am part of your journey too.'
        </p>
        <p id='p10-text'>
        When we landed, the town below was quiet and dark. A power outage had swept across the area.
        People explained that a solar flare had disturbed the power grid, leaving the streets without electricity.
        I realized then that space weather doesn’t just paint the sky, it shapes life on Earth.
        </p>
        <p id='p11-text'>
        As darkness deepened, the clouds drifted away, and the stars came out to watch.
        And then it happened.
        From the edge of the world, ribbons of light unfurled — glowing green, violet, and rose, weaving and swaying in the silent night.
        </p>
        <p id='p12-text'>
        I lifted my camera, my heart beating fast, and clicked — once, twice, again and again.
        Each photograph captured a story of sunlight turned into color, of science transformed into wonder.
        My dream had finally come true.
        </p>
        <p id='p13-text'>
        Now, whenever I look at my photos, I remember that space weather is more than just science. It is the Sun’s heartbeat, reaching across space to touch our world.
        It can silence radios, turn off lights, and push satellites from their paths.
        But it also gifts us the most magical sights — proof that even in the vastness of space, the Sun and Earth are dancing together.
        And as long as the Sun shines, the auroras will return painting the night with stories written in light.
        </p>
      </div>
    </>
  )
}

export default App