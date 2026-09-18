import { Competition, Speaker, Workshop, Exhibition, ScheduleItem, PassOption } from '../types';

export const TECHFEST_CONFIG = {
  edition: '30TH EDITION',
  editionNumeral: 'XXX',
  editionNumber: '30',
  title: 'TECHFEST',
  subtitle: 'IIT BOMBAY',
  theme: 'AN AETHERIAL RENAISSANCE',
  tagline: 'THE FUTURE IS BEING REBUILT.',
  dates: '16 — 18 DECEMBER 2026',
  year: '2026',
  venue: 'IIT BOMBAY • MUMBAI, INDIA',
  geo: {
    lat: '19.1334° N',
    lng: '72.9133° E',
    alt: '34M ASL',
    location: 'Powai, Mumbai, Maharashtra 400076'
  },
  stats: [
    { label: 'ATTENDEES & FOOTFALL', value: '175,000+', hint: "Asia's Largest Footfall" },
    { label: 'PRIZE POOL', value: '₹50,00,000+', hint: 'Cash & Research Grants' },
    { label: 'COLLEGES & INSTITUTES', value: '2,500+', hint: 'PAN India & Global' },
    { label: 'INTERNATIONAL NATIONS', value: '60+', hint: 'Global Representation' },
  ],
  patronages: [
    { name: 'UNESCO', desc: 'Under the Patronage of United Nations Educational, Scientific and Cultural Organization' },
    { name: 'UNICEF', desc: 'Recognized for Child Education & STEM Advancement' },
    { name: 'MAKE IN INDIA', desc: 'Supported by Department for Promotion of Industry and Internal Trade' },
    { name: 'DIGITAL INDIA', desc: 'Endorsed for Flagship Technological Transformation' }
  ]
};

export const COMPETITIONS: Competition[] = [
  {
    id: 'robowars',
    name: 'INTERNATIONAL ROBOWARS',
    category: 'Robotics',
    tagline: "Asia's Premier Combat Robotics Showdown in a Bulletproof Octagon",
    prizePool: '₹12,00,000',
    teamSize: '2 — 8 Members',
    registrationStatus: 'Closing Soon',
    description: 'The heavyweight championship of Asia. Steel against steel in an reinforced polycarbonate arena. Featherweight (15kg) and Heavyweight (60kg) combat bots designed with pneumatic flippers, spinners, and titanium armor battle for supremacy.',
    rulesSnippet: [
      '60kg & 15kg weight categories with strict radio fail-safes',
      'Flame, magnetic, and RF jamming weapons are strictly regulated',
      'Dual-elimination tournament bracket with international telemetry logging'
    ],
    venue: 'Gymkhana Grounds Arena, IIT Bombay',
    date: '16 — 18 DEC 2026',
    featured: true,
  },
  {
    id: 'micromouse',
    name: 'INTERNATIONAL MICROMOUSE',
    category: 'Robotics',
    tagline: 'Autonomous High-Speed Maze-Solving Robotics Competition',
    prizePool: '₹4,50,000',
    teamSize: '1 — 4 Members',
    registrationStatus: 'Open',
    description: 'Autonomous micro-robots map an unknown 16x16 maze in record seconds using custom infrared LIDAR, high-speed optical encoders, and real-time path discovery algorithms like Flood Fill and A*.',
    rulesSnippet: [
      'Maximum mouse dimensions: 16cm × 16cm with no external telemetry tether',
      'Pre-programmed maze mapping algorithms permitted; 5 official maze runs',
      'Fastest traversal from start coordinates to central goal cell'
    ],
    venue: 'Lecture Hall Complex (LHC 101), IIT Bombay',
    date: '17 DEC 2026',
    featured: true,
  },
  {
    id: 'boeing-aeromodelling',
    name: 'BOEING NATIONAL AEROMODELLING',
    category: 'Aeromodelling',
    tagline: 'Precision Payload Drop & High-Agility RC Aircraft Flight',
    prizePool: '₹7,00,000',
    teamSize: '2 — 5 Members',
    registrationStatus: 'Open',
    description: 'Held in collaboration with Boeing, teams engineer custom radio-controlled fixed-wing aircraft evaluated on payload-to-weight ratio, aerodynamic stability, and tactical drop precision.',
    rulesSnippet: [
      'Custom fabricated airframes utilizing balsa wood, carbon fiber, or EPP foam',
      'Electric propulsion only; telemetry and failsafe cut-off mechanisms mandatory',
      'Round 1: Payload capacity test; Round 2: Obstacle aerobatics & spot landing'
    ],
    venue: 'Gymkhana Airfield Strip, IIT Bombay',
    date: '16 — 17 DEC 2026',
    featured: true,
  },
  {
    id: 'hack-ai',
    name: 'HACK AI: THE QUANTUM CORE',
    category: 'AI & Computing',
    tagline: '36-Hour Continuous DeepTech & Frontier Intelligence Hackathon',
    prizePool: '₹6,00,000',
    teamSize: '2 — 4 Members',
    registrationStatus: 'Filling Fast',
    description: 'Build production-grade systems in frontier intelligence: Autonomous Multi-Agent Swarms, Quantum-Classical Hybrid Algorithms, Decentralized Edge Compute, and Bio-Sensing ML pipelines.',
    rulesSnippet: [
      '36 hours on-campus non-stop hacking in the Department of Computer Science',
      'Mentorship from senior AI research scientists and industry technology fellows',
      'Live code audits, latency benchmarks, and functional UI evaluation'
    ],
    venue: 'Kanwal Rekhi School of IT (KReSIT), IIT Bombay',
    date: '16 — 17 DEC 2026',
    featured: true,
  },
  {
    id: 'cozmo-clench',
    name: 'COZMO CLENCH',
    category: 'Robotics',
    tagline: 'Precision Gripper Bot Obstacle Navigation Challenge',
    prizePool: '₹3,00,000',
    teamSize: '1 — 4 Members',
    registrationStatus: 'Open',
    description: 'Manual and autonomous hybrid robotics with multi-axis mechanical arms designed to maneuver across rugged terrain, pick up sensitive payloads, and place them on moving conduits.',
    rulesSnippet: [
      'Bot footprint must not exceed 30cm × 30cm × 30cm',
      'Gripper mechanism must support dynamic payloads of variable geometries',
      'Arena features steep inclines, rotating platforms, and suspended bridges'
    ],
    venue: 'Student Activity Centre (SAC), IIT Bombay',
    date: '18 DEC 2026',
  },
  {
    id: 'techfest-drone-league',
    name: 'TECHFEST DRONE LEAGUE (TDL)',
    category: 'Aeromodelling',
    tagline: 'High-Velocity FPV Drone Racing Under Dynamic UV Obstacles',
    prizePool: '₹5,50,000',
    teamSize: '1 — 3 Pilots',
    registrationStatus: 'Filling Fast',
    description: 'Top national and international FPV drone pilots maneuver custom quadcopters at speeds exceeding 140 km/h through an illuminated laser-guided neon matrix with chicanes and hairpins.',
    rulesSnippet: [
      'Standard 5-inch 4S/6S FPV racing quadcopter frame specifications',
      'Certified analog/digital video transmitters with regulated frequency assignment',
      'Time-trial qualifiers followed by 4-drone simultaneous elimination heats'
    ],
    venue: 'Open Air Theatre (OAT), IIT Bombay',
    date: '17 — 18 DEC 2026',
    featured: true,
  },
  {
    id: 'bionovus',
    name: 'BIONOVUS GENOMICS',
    category: 'Innovation & BioTech',
    tagline: 'Computational Biology & Synthetic Living Materials Summit',
    prizePool: '₹4,00,000',
    teamSize: '2 — 5 Members',
    registrationStatus: 'Open',
    description: 'Synthesizing living computing logic, CRISPR gene circuit simulations, and wearable nano-bio sensors for sustainable healthcare in resource-constrained geographies.',
    rulesSnippet: [
      'Submission of detailed scientific whitepaper and computational validation model',
      'Hardware prototype or wet-lab digital verification dataset required',
      'Judged by professors from IIT Bombay Department of Biosciences & Bioengineering'
    ],
    venue: 'VMCC Main Auditorium, IIT Bombay',
    date: '18 DEC 2026',
  },
  {
    id: 'fintech-olympiad',
    name: 'FINTECH ALGO OLYMPIAD',
    category: 'Design & Strategy',
    tagline: 'High-Frequency Quantitative Trading & Cryptographic Protocols',
    prizePool: '₹3,50,000',
    teamSize: '1 — 3 Members',
    registrationStatus: 'Open',
    description: 'Simulated multi-exchange order matching engine where teams deploy algorithmic trading strategies, risk mitigation models, and latency-optimized execution bots.',
    rulesSnippet: [
      'Direct API access to simulated exchange feed with synthetic market anomalies',
      'Evaluation on Sharpe Ratio, Maximum Drawdown, and algorithmic efficiency',
      'Automated code sandboxing and real-time public leaderboard updates'
    ],
    venue: 'Shailesh J. Mehta School of Management, IIT Bombay',
    date: '16 DEC 2026',
  }
];

export const SPEAKERS: Speaker[] = [
  {
    id: 'sp-1',
    name: 'DR. ELENA VANCE',
    title: 'Chief Quantum Scientist',
    organization: 'CERN & Quantum Computing Directorate',
    topic: 'Superconducting Qubits and the Dawn of Topological Matter',
    bio: 'Pioneered non-abelian anyon braiding research for fault-tolerant quantum microarchitectures. Leading global initiatives connecting particle physics with quantum algorithmic scalability.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop',
    date: '16 DEC 2026 • 11:30 AM',
    venue: 'Convocation Hall, IIT Bombay',
    badge: 'KEYNOTE // QUANTUM'
  },
  {
    id: 'sp-2',
    name: 'COMMANDER MARCUS STERLING',
    title: 'Former ISS Mission Commander & Senior Flight Engineer',
    organization: 'NASA Jet Propulsion Laboratory',
    topic: 'Deep Space Autonomous Navigation: Lessons From 410 Days in Low-Earth Orbit',
    bio: 'Logged over 6,000 hours in zero-gravity. Overseeing optical deep-space communications and automated life-support telemetry architectures for upcoming lunar and martian surface expeditions.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop',
    date: '17 DEC 2026 • 02:00 PM',
    venue: 'Convocation Hall, IIT Bombay',
    badge: 'LUMINARY // AEROSPACE'
  },
  {
    id: 'sp-3',
    name: 'PROF. ARJUN CHATTERJEE',
    title: 'Distinguished Professor of Robotics & Bipedal Dynamics',
    organization: 'ETH Zürich / Autonomous Systems Lab',
    topic: 'Neuromorphic Motor Control in Humanoid Bipedal Locomotion',
    bio: 'World leader in zero-moment point dynamics and event-camera tactile feedback. Developed agile humanoid actuators capable of navigating unstructured disaster relief environments.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop',
    date: '17 DEC 2026 • 05:00 PM',
    venue: 'PC Saxena Auditorium, IIT Bombay',
    badge: 'FRONTIER // ROBOTICS'
  },
  {
    id: 'sp-4',
    name: 'DR. AISHA AL-MANSOORI',
    title: 'Director of Neuro-Engineering',
    organization: 'Stanford Neural Prosthetics Research Group',
    topic: 'Synthetic Synaptic Interfaces: Restoring Mobility via High-Bandwidth BCIs',
    bio: 'Inventor of biocompatible 10,000-channel neural mesh interfaces. Pioneering non-invasive cortical decoding that converts neural impulse cascades directly into motor intent.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop',
    date: '18 DEC 2026 • 10:30 AM',
    venue: 'Convocation Hall, IIT Bombay',
    badge: 'BIO-TECH // FRONTIER'
  }
];

export const WORKSHOPS: Workshop[] = [
  {
    id: 'ws-quantum',
    title: 'Practical Quantum Algorithm Design with Qiskit',
    instructor: 'Dr. Rahul Sengupta',
    affiliation: 'Quantum Systems Lab, IBM Research',
    duration: '8 Hours (Full Day Intensive)',
    seats: '60 Seats Only',
    level: 'Advanced',
    description: 'Hands-on construction and execution of Grover search and VQE algorithms on live 127-qubit superconducting quantum processors via cloud transpilations.',
    prerequisites: ['Linear algebra fundamentals', 'Python / NumPy proficiency', 'Basic Dirac notation'],
    takeaways: ['Verified IIT Bombay Techfest Certification', 'Cloud Quantum Compute Credit Grants', 'Qiskit Advanced Repository Access'],
    date: '16 DEC 2026'
  },
  {
    id: 'ws-humanoid',
    title: 'Humanoid Kinematics & Autonomous ROS2 Systems',
    instructor: 'Maya Lin & Team',
    affiliation: 'Robotics Innovation Group, Boston Dynamics',
    duration: '6 Hours',
    seats: '75 Seats Only',
    level: 'Intermediate',
    description: 'Master forward and inverse kinematics, URDF modelling, simulation in Gazebo Fortress, and real-time motor CAN bus actuation on modular robotic arms.',
    prerequisites: ['C++ or Python programming', 'Basic robotics kinematics concepts', 'Ubuntu/Linux familiarity'],
    takeaways: ['Hands-on hardware bench time', 'Official IIT Bombay Certificate', 'ROS2 Package Template Library'],
    date: '17 DEC 2026'
  },
  {
    id: 'ws-ai-swarms',
    title: 'Agentic AI Swarms & Frontier Model Fine-Tuning',
    instructor: 'Kavita Sundaram',
    affiliation: 'DeepMind Fellow / Open Source Contributor',
    duration: '6 Hours',
    seats: '80 Seats Only',
    level: 'Intermediate',
    description: 'Deploy deterministic multi-agent orchestration systems, LoRA hyperparameter optimization, and low-latency speculative decoding for edge devices.',
    prerequisites: ['PyTorch or HuggingFace transformers', 'API architecture understanding'],
    takeaways: ['Fine-tuned model checkpoint on HuggingFace', 'Certification of Completion', 'Compute tokens package'],
    date: '17 DEC 2026'
  },
  {
    id: 'ws-bci',
    title: 'Brain-Computer Interfaces & EEG Signal Processing',
    instructor: 'Dr. Nikhil Kulkarni',
    affiliation: 'Center for Cognitive Computing, IIT Bombay',
    duration: '5 Hours',
    seats: '50 Seats Only',
    level: 'Beginner',
    description: 'Capture real-time brainwave potentials using multi-channel OpenBCI headsets, filter FFT signal bands (Alpha, Beta, Theta), and control motor actuators through intent.',
    prerequisites: ['Basic signal processing intuition', 'Laptop with Python 3.10+ installed'],
    takeaways: ['Raw EEG data pipeline codebase', 'Hardware interfacing kit access during lab', 'Verified Certificate'],
    date: '18 DEC 2026'
  }
];

export const EXHIBITIONS: Exhibition[] = [
  {
    id: 'ex-1',
    title: 'ROBOWARS GRAND ARENA',
    origin: 'National & Global Contenders',
    category: 'Kinetic Heavyweight Combat',
    description: 'A 40-foot polycarbonate blast-proof cage with pneumatic hazards, floor saws, and live telemetry camera tracking 60kg titanium bots colliding at 250 km/h tip speeds.',
    highlights: ['Multi-angle slow-motion HUD replays', 'Pit garage technical tours', 'Live decibel & kinetic impact meters'],
    location: 'Gymkhana Grounds Special Arena'
  },
  {
    id: 'ex-2',
    title: 'PROJECT AETHER: CELESTIAL KINETIC CHANDELIER',
    origin: 'Tokyo University of the Arts & MIT Media Lab',
    category: 'Interactive Kinetic Architecture',
    description: 'An aerial array of 1,024 robotic suspended illuminated nodes that fluidly respond to human bio-frequencies and algorithmic harmonic waveforms, representing the renaissance of scientific curiosity.',
    highlights: ['Real-time participant spatial tracking', 'Spatialized ambisonic acoustic score', 'Aetherial geometric transformations'],
    location: 'Central Foyer, Victor Menezes Convention Centre'
  },
  {
    id: 'ex-3',
    title: 'ISRO & DRDO DEFENSE AEROSPACE PAVILION',
    origin: 'Govt. of India Aerospace Research',
    category: 'Orbital & Deep Space Tech',
    description: 'Authentic 1:1 scale mockups of the Gaganyaan Crew Module, semi-cryogenic engine nozzles, satellite telemetry stations, and autonomous drone swarm interception arrays.',
    highlights: ['Gaganyaan simulator cockpit walk-through', 'Rocket propulsion cutaways', 'Real telemetry playback from Aditya-L1'],
    location: 'Open Air Grounds, Opposite SAC'
  },
  {
    id: 'ex-4',
    title: 'SWISS QUADRUPEDAL TERRAIN EXPLORER (ANYmal)',
    origin: 'ETH Zürich / ANYbotics Switzerland',
    category: 'Autonomous Mobile Robotics',
    description: 'Real-world industrial quadruped robot navigating extreme staircases, rocky obstacles, and simulating autonomous disaster reconnaissance with laser LiDAR and thermal optics.',
    highlights: ['Live autonomous gait adaptation', 'Obstacle parkour demonstrations', 'Interactive Q&A with swiss roboticists'],
    location: 'SAC Indoor Basketball Court'
  }
];

export const SCHEDULE: ScheduleItem[] = [
  // DAY 1
  { id: 's1', time: '09:00 AM', title: 'Techfest 30 Grand Opening Ceremony & Lighting of the Aetherial Flame', category: 'Keynote', venue: 'Convocation Hall', day: 1 },
  { id: 's2', time: '10:30 AM', title: 'Flagship Robowars: Featherweight (15kg) Preliminary Knockouts', category: 'Competition', venue: 'Gymkhana Arena', day: 1 },
  { id: 's3', time: '11:30 AM', title: 'Keynote: Dr. Elena Vance on Fault-Tolerant Quantum Topologies', category: 'Keynote', venue: 'Convocation Hall', day: 1, speakerOrHost: 'Dr. Elena Vance (CERN)' },
  { id: 's4', time: '01:30 PM', title: 'International Tech Exhibits & ISRO Pavilion Public Tour', category: 'Exhibit', venue: 'VMCC & Campus Grounds', day: 1 },
  { id: 's5', time: '02:30 PM', title: 'Boeing National Aeromodelling: Payload Drop Qualifiers', category: 'Competition', venue: 'Gymkhana Airfield', day: 1 },
  { id: 's6', time: '04:00 PM', title: 'Workshop: Practical Quantum Algorithm Design with Qiskit', category: 'Workshop', venue: 'Lecture Hall Complex', day: 1 },
  { id: 's7', time: '07:30 PM', title: 'International Laser Spectacle & Drone Swarm Air Ballet', category: 'Pronite & Show', venue: 'Gymkhana Grounds', day: 1 },

  // DAY 2
  { id: 's8', time: '09:30 AM', title: 'International Micromouse Maze Solvers: Speed Trials', category: 'Competition', venue: 'LHC 101', day: 2 },
  { id: 's9', time: '11:00 AM', title: 'Hack AI: The Quantum Core — Mid-Point Checkpoint & Mentorship', category: 'Competition', venue: 'KReSIT Labs', day: 2 },
  { id: 's10', time: '02:00 PM', title: 'Keynote: Cmdr. Marcus Sterling on Deep Space Life Support Systems', category: 'Keynote', venue: 'Convocation Hall', day: 2, speakerOrHost: 'Cmdr. Marcus Sterling (NASA JPL)' },
  { id: 's11', time: '03:30 PM', title: 'Workshop: Humanoid Kinematics & Autonomous ROS2 Systems', category: 'Workshop', venue: 'SAC Mechanical Bay', day: 2 },
  { id: 's12', time: '05:00 PM', title: 'Keynote: Prof. Arjun Chatterjee on Bipedal Locomotion', category: 'Keynote', venue: 'PC Saxena Auditorium', day: 2, speakerOrHost: 'Prof. Arjun Chatterjee' },
  { id: 's13', time: '07:00 PM', title: 'Techfest Drone League (TDL): Night-Vision High-Speed Heats', category: 'Competition', venue: 'Open Air Theatre (OAT)', day: 2 },
  { id: 's14', time: '08:30 PM', title: 'Aetherial Pronite: International Electronic Symphony & Holographic Stage', category: 'Pronite & Show', venue: 'Gymkhana Main Stage', day: 2 },

  // DAY 3
  { id: 's15', time: '09:30 AM', title: 'Cozmo Clench Precision Gripper Finals', category: 'Competition', venue: 'Student Activity Centre (SAC)', day: 3 },
  { id: 's16', time: '10:30 AM', title: 'Keynote: Dr. Aisha Al-Mansoori on High-Bandwidth BCIs', category: 'Keynote', venue: 'Convocation Hall', day: 3, speakerOrHost: 'Dr. Aisha Al-Mansoori' },
  { id: 's17', time: '12:00 PM', title: 'Hack AI Final Project Demos & Live Pitch to VC Panel', category: 'Competition', venue: 'KReSIT Auditorium', day: 3 },
  { id: 's18', time: '02:00 PM', title: 'Robowars Grand Heavyweight (60kg) Championship Finals', category: 'Competition', venue: 'Gymkhana Arena', day: 3 },
  { id: 's19', time: '05:30 PM', title: 'Techfest 30 Grand Valedictory Ceremony & Prize Distribution', category: 'Keynote', venue: 'Convocation Hall', day: 3 },
  { id: 's20', time: '08:00 PM', title: 'Grand Finale Pronite: World-Class Musical & Visual Performance', category: 'Pronite & Show', venue: 'Gymkhana Main Stage', day: 3 },
];

export const PASS_OPTIONS: PassOption[] = [
  {
    id: 'pass-delegate',
    title: 'GENERAL FESTIVAL PASS',
    price: 'FREE',
    eligibility: 'Open to All Students & Tech Enthusiasts Worldwide',
    benefits: [
      'Full 3-Day access to all Techfest Exhibitions & ISRO Pavilion',
      'Entry to all Keynote Lectures & Convocation Hall Summits',
      'Spectator access to International Robowars & Drone League',
      'Access to Evening Pronites, EDM Shows & Laser Displays',
      'Official Digital Attendance & Delegate Certificate'
    ],
    isPopular: true
  },
  {
    id: 'pass-competitor',
    title: 'COMPETITOR DELEGATE PASS',
    price: 'INCLUDED IN REGISTRATION',
    eligibility: 'For Verified Competition Teams (Robowars, HackAI, Micromouse, Boeing)',
    benefits: [
      'Dedicated Competitor Pit Area & Workbench Facilities with 230V power',
      'Tooling lab access & 3D printing assistance at IIT Bombay Tinkerer’s Lab',
      'Exclusive technical scrutiny pass and fast-track arena entry',
      'Competitor Certificate of Participation endorsed by IIT Bombay',
      'Eligibility for the ₹50,00,000+ Prize Pool and Research Mentorships'
    ]
  },
  {
    id: 'pass-stay',
    title: 'ACCOMMODATION + ALL-ACCESS',
    price: '₹2,499 / 3 NIGHTS',
    eligibility: 'Outstation College & University Students (Limited Availability)',
    benefits: [
      '3 Nights accommodation inside IIT Bombay Student Hostels',
      'Complimentary festival welcome kit & official Techfest 30 Commemorative Merch',
      'Priority reserved seating for Keynote Lectures in Convocation Hall',
      'On-campus Wi-Fi credentials and 24x7 medical & campus security cover',
      'Subsidized dining coupons across campus canteens and mess halls'
    ]
  }
];

export const CAMPUS_LOCATIONS = [
  { name: 'Convocation Hall', code: 'CV-01', type: 'Keynotes & Opening Ceremonies', coords: '19.1332° N, 72.9130° E' },
  { name: 'Gymkhana Grounds', code: 'GYM-01', type: 'Robowars Arena & Grand Pronite Stage', coords: '19.1350° N, 72.9152° E' },
  { name: 'VMCC (Victor Menezes Convention Centre)', code: 'VM-02', type: 'International Tech Exhibits & Symposia', coords: '19.1345° N, 72.9118° E' },
  { name: 'KReSIT (Computer Science Dept)', code: 'CS-01', type: 'Hack AI: The Quantum Core 36h Lab', coords: '19.1339° N, 72.9142° E' },
  { name: 'Open Air Theatre (OAT)', code: 'OAT-01', type: 'Techfest Drone League Night Heats', coords: '19.1328° N, 72.9160° E' },
  { name: 'Student Activity Centre (SAC)', code: 'SAC-01', type: 'Cozmo Clench & Hardware Workshops', coords: '19.1341° N, 72.9168° E' }
];
