export interface ProfessionalRole {
  id: string;
  employer: string;
  title: string;
  period: string;
  location?: string;
  responsibilities: readonly string[];
  projects?: readonly {
    name: string;
    description: string;
  }[];
}

export const professionalRoles: readonly ProfessionalRole[] = [
  {
    id: "xanadu",
    employer: "Xanadu Digital Solutions",
    title: "Software Engineer",
    period: "2024 – Present",
    responsibilities: [
      "Xanadu Digital Solutions is the software-solutions subsidiary of Metropolitan Electric Limited, and both roles are part of my work within the same group at the same location. At Xanadu, I work on the parts of web and mobile products that people interact with: the screens they navigate, the information they rely on, and the steps they take to complete a task. The products span workplace learning, electric mobility, and charging payments, so the workflows range from following a course to managing a trip or monitoring a charging session.",
      "I collaborate with designers and backend engineers to turn product requirements into usable interfaces. The work covers loading and error states, role-based permissions, and changing live information, alongside debugging, reusable components, code reviews, and delivery workflows.",
    ],
    projects: [
      {
        name: "LUQA",
        description:
          "LUQA is a learning management platform that organisations can adapt to their own training programmes. Administrators organise courses and oversee progress, instructors deliver learning and assess work, and learners move through course materials, live sessions, and assessments. Its multi-tenant structure supports separate organisations and their different roles and workflows.",
      },
      {
        name: "RYDe",
        description:
          "RYDe is an electric-mobility product for arranging journeys and managing the activity around them. It brings together ride bookings, advance reservations, recurring trips, and live journey information. Rider-facing applications and operational dashboards serve different parts of the same journey, from choosing a trip to following its progress. My work covers the frontend of the admin dashboard and app, together with CI/CD workflows supporting their delivery.",
      },
      {
        name: "MetroPay",
        description:
          "MetroPay brings the EV charging journey into one application: finding a station, checking availability, paying for energy, and following a charging session. Drivers can use a wallet or linked RFID card and review their charging and transaction history, while charging-management interfaces support the activity behind those sessions. I work on the frontend of the admin dashboard and app, as well as their CI/CD workflows.",
      },
    ],
  },
  {
    id: "metropolitan-electric",
    employer: "Metropolitan Electric Limited",
    title: "Electrical Engineer",
    period: "2024 – Present",
    location: "Nigeria",
    responsibilities: [
      "Alongside my role at Xanadu, I work with its parent company, Metropolitan Electric Limited, on the physical systems behind electric mobility. An electric vehicle depends on its motor, controller, battery, and charging equipment working together; maintenance and testing involve understanding those connections as well as the individual components.",
      "My work covers electric-vehicle architecture and maintenance, motor and controller systems, battery management, and AC/DC charging infrastructure. It complements my software work by keeping performance, equipment behaviour, and safety in view alongside the information presented in an application.",
    ],
  },
  {
    id: "pz-cussons",
    employer: "PZ Cussons Plc",
    title: "Junior Engineer — Industrial Placement",
    period: "2021 – 2022",
    location: "Nigeria",
    responsibilities: [
      "My Students’ Industrial Work Experience Scheme (SIWES) placement at PZ Cussons introduced me to the electrical infrastructure that supports a working factory. Power generation, distribution, utilities, and production equipment were connected parts of the same environment, rather than separate subjects in a classroom.",
      "Working alongside electrical and mechanical engineers, I assisted with troubleshooting and maintenance and gained practical exposure to generators, motors, transformers, and control equipment. The placement also included PLCs, variable frequency drives, and pneumatic systems used in production-line operations.",
    ],
  },
];
