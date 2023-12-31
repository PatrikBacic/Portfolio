import React, { useEffect, useRef } from 'react'

const ParticleEffect = () => {
  const particlesRef = useRef(null)

  useEffect(() => {
    if (particlesRef.current) {
      window.particlesJS('particles-container', {
        
  particles: {
    number: {
      value: 50,
      density: {
        enable: true,
        value_area: 1500.2125301084327
      }
    },
    color: {
      value: "#64c8ff"
    },
    shape: {
      type: "circle",
      stroke: {
        width: 1,
        color: "#4d88ca"
      },
      polygon: {
        nb_sides: 3
      },
      image: {
        src: "img/github.svg",
        width: 100,
        height: 100
      }
    },
    opacity: {
      value: 1,
      random: true,
      anim: {
        enable: true,
        speed: 1,
        opacity_min: 0,
        sync: false
      }
    },
    size: {
      value: 4.16725702807898,
      random: true,
      anim: {
        enable: false,
        speed: 4,
        size_min: 0.3,
        sync: false
      }
    },
    line_linked: {
      enable: false,
      distance: 150.02125301084325,
      color: "#181818",
      opacity: 0.4,
      width: 0
    },
    move: {
      enable: true,
      speed: 0.8,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 600
      }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "bubble"
      },
      onclick: {
        enable: true,
        mode: "push"
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1
        }
      },
      bubble: {
        distance: 250,
        size: 0,
        duration: 2,
        opacity: 0,
        speed: 3
      },
      repulse: {
        distance: 400,
        duration: 0.4
      },
      push: {
        particles_nb: 4
      },
      remove: {
        particles_nb: 2
      }
    }
  },
  retina_detect: true
})
    }
  }, [])

  return (
    <div
      id="particles-container"
      ref={particlesRef}
    ></div>
  )
}

export default ParticleEffect