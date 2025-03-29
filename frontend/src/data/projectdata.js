import bldg1 from "../assets/bldg1.jpg";
import bldg2 from "../assets/bldg2.jpg";
import bldg3 from "../assets/bldg3.jpg";
import interior1 from "../assets/interior1.jpg";
import interior2 from "../assets/interior2.jpg";
import interior3 from "../assets/interior3.jpg";

const projects = [
    {
        id: 1,
        title: "Luxury Villa",
        location: "Mumbai",
        status: "Ongoing",
        rooms: "3BHK, 4BHK",
        description: "A premium villa with modern architecture and luxurious amenities.",
        price: "₹2.5 Cr - ₹5 Cr",
        image: bldg1, // Main image for the card
        gallery: [interior1, interior2, interior3, interior1, interior2, interior3], // Extra images for detail page
        amenities: ["Swimming Pool", "Gym", "Clubhouse", "24/7 Security"],
        security: "CCTV surveillance, Gated Community, Security Guards",
        parking: "2 Car Parking per Apartment",
        area: "2000 sqft",
        floor: "15th Floor",
    },
    {
        id: 2,
        title: "Modern Apartment",
        location: "Delhi",
        status: "Completed",
        rooms: "2BHK, 3BHK",
        description: "A stylish and well-connected apartment in the heart of the city.",
        price: "₹80 L - ₹1.5 Cr",
        image: bldg3,
        gallery: [interior1, interior2, interior3, interior1, interior2, interior3],
        amenities: ["High-Speed Elevators", "Kids Play Area", "Shopping Center"],
        security: "Biometric Access, Security Personnel, CCTV",
        parking: "Basement Parking with EV Charging",
        area: "1500 sqft",
        floor: "10th Floor",
    },
    {
        id: 3,
        title: "Luxury Villa",
        location: "Mumbai",
        status: "Ongoing",
        rooms: "1BHK, 2BHK",
        description: "A premium villa with modern architecture and luxurious amenities.",
        price: "₹2.5 Cr - ₹5 Cr",
        image: bldg1, // Main image for the card
        gallery: [interior1, interior2, interior3, interior1, interior2, interior3], // Extra images for detail page
        amenities: ["Swimming Pool", "Gym", "Clubhouse", "24/7 Security", "Library", "Turf"],
        security: "CCTV surveillance, Gated Community, Security Guards",
        parking: "2 Car Parking per Apartment",
        area: "2000 sqft",
        floor: "15th Floor",
    },
    {
        id: 4,
        title: "Modern Apartment",
        location: "Delhi",
        status: "Completed",
        rooms: "2BHK, 3BHK",
        description: "A stylish and well-connected apartment in the heart of the city.",
        price: "₹80 L - ₹1.5 Cr",
        image: bldg3,
        gallery: [interior1, interior2, interior3, interior1, interior2, interior3],
        amenities: ["High-Speed Elevators", "Kids Play Area", "Shopping Center"],
        security: "Biometric Access, Security Personnel, CCTV",
        parking: "Basement Parking with EV Charging",
        area: "1500 sqft",
        floor: "10th Floor",
    },
    {
        id: 5,
        title: "Luxury Villa",
        location: "Mumbai",
        status: "Ongoing",
        rooms: "3BHK, 4BHK",
        description: "A premium villa with modern architecture and luxurious amenities.",
        price: "₹2.5 Cr - ₹5 Cr",
        image: bldg1, // Main image for the card
        gallery: [interior1, interior2, interior3, interior1, interior2, interior3], // Extra images for detail page
        amenities: ["Swimming Pool", "Gym", "Clubhouse", "24/7 Security"],
        security: "CCTV surveillance, Gated Community, Security Guards",
        parking: "2 Car Parking per Apartment",
        area: "2000 sqft",
        floor: "15th Floor",
    },
    {
        id: 6,
        title: "Luxury Villa",
        location: "Mumbai",
        status: "Ongoing",
        rooms: "1BHK, 2BHK",
        description: "A premium villa with modern architecture and luxurious amenities.",
        price: "₹2.5 Cr - ₹5 Cr",
        image: bldg3, // Main image for the card
        gallery: [interior1, interior2, interior3, interior1, interior2, interior3], // Extra images for detail page
        amenities: ["Swimming Pool", "Gym", "Clubhouse", "24/7 Security"],
        security: "CCTV surveillance, Gated Community, Security Guards",
        parking: "2 Car Parking per Apartment",
        area: "2000 sqft",
        floor: "15th Floor",
    },
];

export default projects;
