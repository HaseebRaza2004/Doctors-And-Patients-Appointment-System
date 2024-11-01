export const categories = [
    "Allergist/Immunologist",
    "Anesthesiologist",
    "Cardiologist",
    "Dermatologist",
    "Endocrinologist",
    "Gastroenterologist",
    "Geriatrician",
    "Hematologist",
    "Infectious Disease Specialist",
    "Internal Medicine Specialist",
    "Nephrologist",
    "Neurologist",
    "Obstetrician/Gynecologist (OB/GYN)",
    "Oncologist",
    "Ophthalmologist",
    "Orthopedic Surgeon",
    "Otolaryngologist (ENT Specialist)",
    "Pediatrician",
    "Plastic Surgeon",
    "Psychiatrist",
    "Pulmonologist",
    "Radiologist",
    "Rheumatologist",
    "Sports Medicine Specialist",
    "Surgeon (General)",
    "Urologist",
    "Vascular Surgeon",
];


export const doctors = [
    {
        name: "Dr. Sarah Johnson",
        appointmentTime: "9:00 AM - 12:00 PM",
        fees: 150,
        category: "Cardiologist",
        hospital: "City Heart Hospital",
        gender: "Female",
        id: 1,
    },
    {
        name: "Dr. Robert Smith",
        appointmentTime: "2:00 PM - 6:00 PM",
        fees: 200,
        category: "Dermatologist",
        hospital: "Skin Care Clinic",
        gender: "Male",
        id: 2,
    },
    {
        name: "Dr. Emily Davis",
        appointmentTime: "10:00 AM - 1:00 PM",
        fees: 180,
        category: "Pediatrician",
        hospital: "Children's Medical Center",
        gender: "Female",
        id: 3,
    },
    {
        name: "Dr. Michael Brown",
        appointmentTime: "11:00 AM - 3:00 PM",
        fees: 250,
        category: "Orthopedic Surgeon",
        hospital: "Prime Ortho Hospital",
        gender: "Male",
        id: 4,
    },
    {
        name: "Dr. Lisa Thompson",
        appointmentTime: "3:00 PM - 7:00 PM",
        fees: 220,
        category: "Psychiatrist",
        hospital: "Mind Wellness Center",
        gender: "Female",
        id: 5,
    },
    {
        name: "Dr. Daniel Wilson",
        appointmentTime: "8:00 AM - 12:00 PM",
        fees: 300,
        category: "Oncologist",
        hospital: "Cancer Care Hospital",
        gender: "Male",
        id: 6,
    },
    {
        name: "Dr. Olivia Martinez",
        appointmentTime: "1:00 PM - 4:00 PM",
        fees: 170,
        category: "Allergist/Immunologist",
        hospital: "Allergy Relief Center",
        gender: "Female",
        id: 7,
    },
    {
        name: "Dr. James Anderson",
        appointmentTime: "2:00 PM - 5:00 PM",
        fees: 160,
        category: "Gastroenterologist",
        hospital: "Digestive Health Clinic",
        gender: "Male",
        id: 8,
    },
    {
        name: "Dr. Sophia Lee",
        appointmentTime: "9:00 AM - 12:00 PM",
        fees: 190,
        category: "Ophthalmologist",
        hospital: "Vision Care Institute",
        gender: "Female",
        id: 9,
    },
    {
        name: "Dr. Christopher King",
        appointmentTime: "10:00 AM - 2:00 PM",
        fees: 210,
        category: "Urologist",
        hospital: "Men's Health Clinic",
        gender: "Male",
        id: 10,
    },
    {
        name: "Dr. Rachel Evans",
        appointmentTime: "1:00 PM - 6:00 PM",
        fees: 180,
        category: "Rheumatologist",
        hospital: "Arthritis Relief Center",
        gender: "Female",
        id: 11,
    },
    {
        name: "Dr. William Parker",
        appointmentTime: "8:00 AM - 12:00 PM",
        fees: 270,
        category: "Pulmonologist",
        hospital: "Lung Care Hospital",
        gender: "Male",
        id: 12,
    },
];

export const currentUser = {
    name: "Bilal",
    role: "doctor",
    email: "bilal@gmail.com",
};

export const appointments = [
    {
        user: {
            name: "John Doe",
            email: "john.doe@example.com",
        },
        appointmentTime: "9:30 AM",
        status: "Confirmed",
        appointmentDate: "2024-11-01",
        doctor: {
            name: "Dr. Sarah Johnson",
            hospital: "City Heart Hospital",
        },
    },
    {
        user: {
            name: "Emma Wilson",
            email: "emma.wilson@example.com",
        },
        appointmentTime: "2:15 PM",
        status: "Pending",
        appointmentDate: "2024-11-03",
        doctor: {
            name: "Dr. Robert Smith",
            hospital: "Skin Care Clinic",
        },
    },
    {
        user: {
            name: "Michael Brown",
            email: "michael.brown@example.com",
        },
        appointmentTime: "10:45 AM",
        status: "Cancelled",
        appointmentDate: "2024-11-05",
        doctor: {
            name: "Dr. Emily Davis",
            hospital: "Children's Medical Center",
        },
    },
    {
        user: {
            name: "Sophia Lee",
            email: "sophia.lee@example.com",
        },
        appointmentTime: "11:30 AM",
        status: "Confirmed",
        appointmentDate: "2024-11-08",
        doctor: {
            name: "Dr. Michael Brown",
            hospital: "Prime Ortho Hospital",
        },
    },
    {
        user: {
            name: "Daniel Parker",
            email: "daniel.parker@example.com",
        },
        appointmentTime: "3:00 PM",
        status: "Pending",
        appointmentDate: "2024-11-09",
        doctor: {
            name: "Dr. Lisa Thompson",
            hospital: "Mind Wellness Center",
        },
    },
    {
        user: {
            name: "Olivia Garcia",
            email: "olivia.garcia@example.com",
        },
        appointmentTime: "8:15 AM",
        status: "Confirmed",
        appointmentDate: "2024-11-12",
        doctor: {
            name: "Dr. Daniel Wilson",
            hospital: "Cancer Care Hospital",
        },
    },
    {
        user: {
            name: "James Anderson",
            email: "james.anderson@example.com",
        },
        appointmentTime: "2:30 PM",
        status: "Confirmed",
        appointmentDate: "2024-11-15",
        doctor: {
            name: "Dr. Olivia Martinez",
            hospital: "Allergy Relief Center",
        },
    },
    {
        user: {
            name: "Rachel Evans",
            email: "rachel.evans@example.com",
        },
        appointmentTime: "9:45 AM",
        status: "Cancelled",
        appointmentDate: "2024-11-18",
        doctor: {
            name: "Dr. Sophia Lee",
            hospital: "Vision Care Institute",
        },
    },
    {
        user: {
            name: "William Taylor",
            email: "william.taylor@example.com",
        },
        appointmentTime: "1:00 PM",
        status: "Pending",
        appointmentDate: "2024-11-20",
        doctor: {
            name: "Dr. Christopher King",
            hospital: "Men's Health Clinic",
        },
    },
    {
        user: {
            name: "Grace Martin",
            email: "grace.martin@example.com",
        },
        appointmentTime: "11:00 AM",
        status: "Confirmed",
        appointmentDate: "2024-11-23",
        doctor: {
            name: "Dr. Rachel Evans",
            hospital: "Arthritis Relief Center",
        },
    },
];