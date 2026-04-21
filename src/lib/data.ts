export interface Product {
  id: string;
  name: string;
  company: string;
  category: string;
  subCategory: string;
  releaseDate: string;
  shortDescription: string;
  fullDescription: string;
  insight: string;
  tags: string[];
  supplierUrl: string;
  image: string;
  specifications?: Record<string, string>;
}

export const categories = [
  "All Categories",
  "Centrifugal Pumps",
  "Submersible Pumps",
  "Positive Displacement",
  "Axial Flow Pumps",
  "Peristaltic Pumps",
  "Self-Priming Pumps",
  "Multistage Pumps",
];

export const subCategories: Record<string, string[]> = {
  "Centrifugal Pumps": ["Water Supply", "Construction & Dewatering", "HVAC"],
  "Submersible Pumps": ["Wastewater", "Borehole", "Drainage"],
  "Positive Displacement": ["Chemical Processing", "Oil & Gas", "Food Grade"],
  "Axial Flow Pumps": ["Marine & Offshore", "Flood Control", "Irrigation"],
  "Peristaltic Pumps": ["Mining & Minerals", "Pharmaceutical", "Wastewater"],
  "Self-Priming Pumps": ["Agriculture & Irrigation", "Construction", "Fire Fighting"],
  "Multistage Pumps": ["HVAC & Building Services", "High Pressure", "Boiler Feed"],
};

export const products: Product[] = [
  {
    id: "aquaforce-3000",
    name: "AquaForce 3000",
    company: "Grundfos",
    category: "Centrifugal Pumps",
    subCategory: "Water Supply",
    releaseDate: "2024-03-15",
    shortDescription:
      "High-efficiency end-suction centrifugal pump designed for municipal water distribution and industrial cooling applications up to 450 m³/h.",
    fullDescription: `The AquaForce 3000 represents the next generation of high-efficiency centrifugal pumping technology from Grundfos. Engineered for demanding municipal and industrial environments, this pump delivers exceptional hydraulic performance while minimising energy consumption through its advanced impeller geometry and IE5-compliant motor integration.

With a robust cast iron casing and ceramic-coated shaft sleeve, the AquaForce 3000 offers exceptional corrosion resistance in chlorinated water applications. The modular design allows field-swappable mechanical seals without disassembling the pump body, significantly reducing maintenance downtime.

Key specifications include a flow range of 10–450 m³/h, heads up to 65 metres, and operating temperatures from -10°C to 120°C. The integrated MGE motor features built-in frequency control, allowing precise speed modulation in response to demand signals from BMS or SCADA systems.`,
    insight:
      "Market analysis indicates a strong shift toward IE5 motor integration in municipal water infrastructure — Grundfos leads with this product by approximately 18 months over nearest competitor Xylem's CR series. Energy efficiency claims (up to 34% reduction vs. IE3 baseline) align with EU Ecodesign Regulation 2019/1781 requirements, positioning this well for European procurement cycles. Native integration with Grundfos GO remote app is a feature increasingly required in smart city tenders, creating a meaningful software lock-in advantage.",
    tags: ["water supply", "municipal", "high-efficiency", "IE5", "SCADA-compatible", "modular"],
    supplierUrl: "#",
    image: "/products/aquaforce-3000.png",
    specifications: {
      "Max Flow Rate": "450 m³/h",
      "Max Head": "65 m",
      "Motor Class": "IE5",
      "Voltage": "380-480 V",
      "Protection Class": "IP55",
      "Inlet/Outlet": "DN 150 / DN 125",
    },
  },
  {
    id: "megaflow-x7",
    name: "MegaFlow X7",
    company: "Xylem",
    category: "Submersible Pumps",
    subCategory: "Wastewater",
    releaseDate: "2024-01-22",
    shortDescription:
      "Heavy-duty submersible sewage pump engineered for continuous operation in raw wastewater and industrial effluent handling up to 1,200 m³/h.",
    fullDescription: `Xylem's MegaFlow X7 is a premium submersible sewage pump built for the most challenging wastewater environments. Its N-impeller design virtually eliminates clogging on solids up to 130mm in diameter, making it ideal for large municipal lift stations and industrial treatment plants.

The oil-cooled motor allows operation in partially submerged or non-submerged conditions, expanding installation flexibility. Double mechanical seals with oil chamber provide redundant shaft protection and extended service intervals of up to 40,000 operating hours.

Available in stainless steel and cast iron configurations, with optional explosion-proof rating (ATEX Zone 1) for chemical processing facilities. Integrated temperature and moisture sensors feed into Xylem's MissionControl SCADA platform for predictive maintenance scheduling.`,
    insight:
      "The MegaFlow X7 addresses a critical pain point in aging wastewater infrastructure: clog-induced downtime. Xylem's N-impeller geometry is covered by three active patents, creating a 3–5 year competitive moat. Growing municipal investment in wastewater infrastructure (estimated $18B CAGR 10.2% through 2030) positions this product favorably. The ATEX rating expansion unlocks the chemical sector, where Grundfos and KSB have historically dominated — a strategically important market entry.",
    tags: ["wastewater", "submersible", "submersible pump", "anti-clog", "ATEX", "heavy-duty", "N-impeller"],
    supplierUrl: "#",
    image: "/products/megaflow-x7.png",
    specifications: {
      "Max Flow Rate": "1,200 m³/h",
      "Max Solids Path": "130 mm",
      "Installation": "Submerged / Dry",
      "Rating": "ATEX Zone 1",
      "Service Interval": "40,000 hrs",
      "Impeller Type": "N-Impeller",
    },
  },
  {
    id: "propulse-500",
    name: "ProPulse 500",
    company: "KSB",
    category: "Positive Displacement",
    subCategory: "Chemical Processing",
    releaseDate: "2023-11-08",
    shortDescription:
      "Precision twin-screw positive displacement pump for high-viscosity chemical dosing and abrasive slurry transfer in demanding process environments.",
    fullDescription: `The ProPulse 500 from KSB is a precision-engineered twin-screw positive displacement pump optimised for viscous fluid handling and metered chemical dosing. With a viscosity range of 1 to 200,000 cSt and flow accuracy to ±0.5%, it delivers the consistency demanded by pharmaceutical, food-grade, and specialty chemical applications.

Hydraulic balancing of the screw shafts eliminates radial bearing loads, dramatically extending seal life. The heated jacket option enables handling of temperature-sensitive products from chocolate and polymers to bitumen without product degradation.

KSB's proprietary SealTech lip seal design provides zero-emission operation, critical for VOC-restricted facilities. The pump is available in HASTELLOY® C-276, duplex stainless steel, and PTFE-lined configurations.`,
    insight:
      "KSB's ProPulse 500 is well-differentiated in specialty chemical dosing — a market growing at 8.4% CAGR driven by pharmaceutical expansion and tighter process control requirements. The ±0.5% flow accuracy is industry-best for this flow class, outperforming Verder and Netzsch equivalent products. The PTFE-lined option targets fluorochemical processors, a historically underserved niche. Compliance with FDA 21 CFR 177.1550 opens direct food-grade pharmaceutical pathways not previously accessible to KSB.",
    tags: ["chemical", "dosing", "viscous fluids", "twin-screw", "pharmaceutical", "zero-emission"],
    supplierUrl: "#",
    image: "/products/propulse-500.png",
    specifications: {
      "Viscosity Range": "1 - 200,000 cSt",
      "Accuracy": "±0.5%",
      "Materials": "Stainless / Hastelloy",
      "Max Temperature": "240°C",
      "Seal Type": "SealTech Zero-Leak",
      "Compliance": "FDA 21 CFR",
    },
  },
  {
    id: "turbomax-elite",
    name: "TurboMax Elite",
    company: "Sulzer",
    category: "Axial Flow Pumps",
    subCategory: "Marine & Offshore",
    releaseDate: "2024-05-30",
    shortDescription:
      "Marine-grade axial flow propeller pump delivering ultra-high flow rates for ballast water management and offshore seawater lift systems.",
    fullDescription: `Sulzer's TurboMax Elite is purpose-built for marine and offshore applications requiring massive flow capacity with minimal head requirements. The adjustable pitch propeller allows capacity modulation between 40% and 100% without speed variation, optimising fuel consumption across varying ballast conditions.

Constructed with Sulzer's proprietary Super Duplex alloy casing and Inconel-coated impeller blades, the TurboMax Elite demonstrates exceptional resistance to seawater corrosion and cavitation erosion. DNV-GL type approval and IMO Ballast Water Management Convention compliance are standard.

The integrated vibration monitoring system provides real-time impeller health data, enabling condition-based maintenance planning. Remote pitch actuation via CAN bus protocol allows full bridge-control operation on modern vessels.`,
    insight:
      "IMO's Ballast Water Management Convention is driving significant fleet retrofitting demand globally — approximately 37,000 vessels require compliant systems by 2024. Sulzer's DNV-GL pre-approval removes a major procurement barrier for shipowners. The adjustable pitch capability is a key differentiator over fixed-pitch competitors, reducing fuel burn by 12–18% across typical voyage profiles. CAN bus integration targets the growing smart-ship segment, where Wärtsilä and Kongsberg partner relationships could expand distribution channels significantly.",
    tags: ["marine", "ballast water", "offshore", "IMO-compliant", "DNV-GL", "adjustable pitch"],
    supplierUrl: "#",
    image: "/products/turbomax-elite.png",
    specifications: {
      "Flow Capacity": "Up to 5,000 m³/h",
      "Pitch Range": "40% - 100%",
      "Alloy": "Super Duplex",
      "Certifications": "DNV-GL / IMO",
      "Protocol": "CAN bus",
      "Monitoring": "Real-time Vibration",
    },
  },
  {
    id: "flexpump-12",
    name: "FlexPump Series 12",
    company: "Flowserve",
    category: "Peristaltic Pumps",
    subCategory: "Mining & Minerals",
    releaseDate: "2024-02-14",
    shortDescription:
      "Industrial-grade peristaltic hose pump designed for abrasive slurry transfer, reagent dosing, and paste backfill in mining environments.",
    fullDescription: `The Flowserve FlexPump Series 12 is engineered for the punishing conditions of mining operations — thick slurries, high solids content, and continuous 24/7 duty cycles. Its fully reversible hose technology allows bidirectional operation, enabling automatic priming and line clearing without operator intervention.

The patented rotor shoe geometry distributes stress uniformly across the hose cross-section, extending hose life by up to 3× compared with conventional designs. Available hose materials include natural rubber, EPDM, Viton®, and NBR, covering pH ranges from 0.5 to 14.

The Series 12 dry-run capability for up to 30 minutes eliminates the need for low-level protection systems in mobile transfer applications. Its IP67-rated control panel integrates flow metering and hose rupture detection, with Modbus RTU/TCP output for SCADA connectivity.`,
    insight:
      "Peristaltic pumps are gaining share in mining slurry transfer from centrifugal competitors due to superior seal-free design and abrasion resistance. The Series 12's 3× hose life extension is a commercially verifiable TCO (total cost of ownership) argument Flowserve can wield effectively. Reagent dosing in heap leach operations is a high-value application growing with lithium and copper extraction — the Series 12's chemical compatibility positions it directly for the battery-metals supply chain buildout, a market worth $12B by 2027.",
    tags: ["mining", "slurry", "peristaltic", "abrasive", "reagent dosing", "IP67"],
    supplierUrl: "#",
    image: "/products/flexpump-12.png",
    specifications: {
      "pH Range": "0.5 - 14",
      "Hose Life": "3x Standard",
      "Solids Content": "Up to 80%",
      "Pressure": "15 bar",
      "Drive": "IP67 Inverter",
      "Communication": "Modbus TCP",
    },
  },
  {
    id: "hydrashield-pro",
    name: "HydraShield Pro",
    company: "Wilo",
    category: "Self-Priming Pumps",
    subCategory: "Agriculture & Irrigation",
    releaseDate: "2023-09-20",
    shortDescription:
      "Energy-intelligent self-priming surface pump with adaptive speed control for precision irrigation, land drainage, and rural water supply systems.",
    fullDescription: `Wilo's HydraShield Pro combines self-priming capability with integrated EC motor technology to deliver a fully autonomous irrigation pump that adapts in real time to system demand. Its strainer-free suction design tolerates particle-laden surface water without pre-filtration, reducing installation complexity and maintenance cost.

The onboard pressure sensor and PID controller maintain constant outlet pressure (±0.5 bar) regardless of elevation or pipeline length variation — critical for drip irrigation uniformity. Wi-Fi connectivity enables remote monitoring and schedule programming via the Wilo-Net app.

With a priming lift of up to 8 metres and automatic repriming after dry-run events, the HydraShield Pro is genuinely field-and-forget. The casing is manufactured from agricultural-grade reinforced polymer, providing UV resistance and impact protection for outdoor installation without a pump house.`,
    insight:
      "Precision irrigation is emerging as a key application for variable-speed pump technology as water scarcity regulations tighten globally. Wilo's HydraShield Pro enters a market historically served by fixed-speed commodity pumps, creating a new premium segment. The Wi-Fi connectivity and app ecosystem differentiates from Grundfos CM series and Pedrollo equivalents. Subsidy programmes in EU, India, and Australia for smart agriculture equipment make this a strong candidate for grant-assisted sales channels worth hundreds of millions annually.",
    tags: ["irrigation", "agriculture", "self-priming", "variable speed", "Wi-Fi", "pressure control"],
    supplierUrl: "#",
    image: "/products/hydrashield-pro.png",
    specifications: {
      "Suction Lift": "8 m",
      "Pressure Control": "±0.5 bar",
      "Connectivity": "Wi-Fi / Wilo-Net",
      "Casing": "Reinforced Polymer",
      "Motor": "EC Efficiency",
      "Self-Priming": "Automatic",
    },
  },
  {
    id: "indusprime-800",
    name: "IndusPrime 800",
    company: "Ebara",
    category: "Multistage Pumps",
    subCategory: "HVAC & Building Services",
    releaseDate: "2024-04-10",
    shortDescription:
      "Compact vertical multistage pump for pressure boosting, chilled water circulation, and hot water transfer in commercial and industrial HVAC systems.",
    fullDescription: `Ebara's IndusPrime 800 is a high-pressure vertical multistage centrifugal pump optimised for commercial building services applications. Its stainless steel wet-end construction and laser-welded impeller channels achieve hydraulic efficiencies exceeding IE4 motor standards, directly reducing building energy consumption.

The IndusPrime 800's compact footprint — 40% smaller than equivalent cast iron multistage pumps — enables installation in congested plant rooms without repositioning existing pipework. Flanged connections conform to EN 1092-2 standard, ensuring compatibility with European building services specifications.

An optional frequency inverter package integrates the pump with BACnet and LonWorks building management systems, enabling demand-driven variable flow operation. The epoxy-coated carbon steel casing provides class-leading corrosion resistance in glycol-based HVAC circuits.`,
    insight:
      "EU Building Energy Performance Directive revisions are tightening EPC requirements for commercial buildings, directly driving HVAC pump upgrades. Ebara's laser-welded impeller technology achieves hydraulic efficiency within 2% of Grundfos CM equivalents at an 18% lower price point — a compelling value proposition for building services contractors. The 40% compact footprint addresses a genuine pain point in plant room retrofits. BACnet integration is now mandatory in most large commercial HVAC tenders across Europe and North America.",
    tags: ["HVAC", "pressure boosting", "multistage", "BACnet", "compact", "stainless steel"],
    supplierUrl: "#",
    image: "/products/indusprime-800.png",
    specifications: {
      "Hydraulic Eff.": ">92%",
      "Size Red.": "40% vs Cast",
      "BMS Protocol": "BACnet / LonWorks",
      "Max Pressure": "25 bar",
      "Impeller": "Laser-Welded SS",
      "Paint": "Double Epoxy",
    },
  },
  {
    id: "vortexedge-2500",
    name: "VortexEdge 2500",
    company: "Gorman-Rupp",
    category: "Centrifugal Pumps",
    subCategory: "Construction & Dewatering",
    releaseDate: "2023-12-01",
    shortDescription:
      "Self-priming centrifugal dewatering pump engineered for construction site drainage, bypass pumping, and flood control with rapid deployment capability.",
    fullDescription: `The Gorman-Rupp VortexEdge 2500 is a battle-hardened self-priming centrifugal pump built for rapid deployment in construction dewatering and flood control operations. Its patented vortex impeller handles solids to 76mm spherical diameter and semi-solids without clogging, maintaining productivity when other pumps fail.

Zero-foot suction lift on flooded suction systems, combined with an 8-metre dry suction lift capability, provides unmatched versatility across site conditions. The bolt-together access plate gives technicians full impeller and seal access in under 15 minutes — critical for minimising downtime on time-critical construction schedules.

Powers from diesel or electric prime movers via a standard SAE bell housing, and available as a trailer-mounted unit for rapid site-to-site deployment. A cathodic protection system built into the baseframe eliminates corrosion in coastal environments.`,
    insight:
      "Construction dewatering is a $4.2B global market with 6.8% CAGR driven by infrastructure spending. Gorman-Rupp's vortex impeller patent provides genuine differentiation — field testing by an independent rental company showed 67% fewer service calls versus Multiquip and Pioneer equivalents over a 12-month trial period. The SAE bell housing standardisation enables Cummins and Caterpillar diesel integration, critical for rental fleets where parts standardisation reduces inventory costs. The trailer-mounted form factor targets Sunbelt, United Rentals, and similar high-volume channels.",
    tags: ["dewatering", "construction", "self-priming", "flood control", "trailer-mount", "vortex impeller"],
    supplierUrl: "#",
    image: "/products/vortexedge-2500.png",
    specifications: {
      "Max Solids": "76 mm",
      "Dry Lift": "8 m",
      "Access": "Quick-Bolted Plate",
      "Mount": "Trailer / Skid",
      "Frame": "Cathodic Protected",
      "Drive Setup": "SAE Bell Housing",
    },
  },
];
