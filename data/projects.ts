export interface Project {
  name: string;
  link: string;
  thumbnail: string;
  description: string;
}

export const projects: Project[] = [
  {
    name: "Prior Adventures",
    link: "https://www.youtube.com/@prioradventures6727",
    thumbnail: "/images/projects/prior-adventures-videos.jpg",
    description: "Video collection documenting our family adventures and experiences."
  },
  {
    name: "Orienteering",
    link: "https://www.google.com/maps/d/embed?mid=1AinyvhmrpH7WMhmCFMNU27As6qlwRWI&ehbc=2E312F",
    thumbnail: "/images/orienteering.PNG",
    description: "Running through the forest."
  },
  {
    name: "Roads",
    link: "https://www.google.com/maps/d/u/0/edit?mid=1s-zPMGDh0pxWspr1IO7HvPE4LVc&usp=sharing",
    thumbnail: "/images/road.jpeg",
    description: "Climbing all 29 paved US roads with over 5,000 feet of vertical."
  },
  {
    name: "Countries",
    link: "https://www.google.com/maps/d/u/0/edit?mid=1-DqdmOg60EUM9XpxA3uB_8fmvKvMNt4&usp=sharing",
    thumbnail: "/images/countries.JPG",
    description: "I've been (almost) everywhere"
  },
  {
    name: "San Diego Orienteering",
    link: "https://sandiegoorienteering.org",
    thumbnail: "/images/sdo.png",
    description: "No trail. No mercy."
  }
];

