import { ExperienceCardProps } from "./interface";

export const EXPERIENCES: ExperienceCardProps[] = [
  {
    id: 0,
    place: "COMPFEST",
    title: "PIC of Software Engineering",

    jobDescriptions: [
      "Led a 12-person team to develop 3 COMPFEST websites with sprint-based workflow; resolved bug fixes",
      "Improved COMPFEST's open source component library, Silicon, with an additional of 10+ frequently used components added",
      "Reviewed code across 5 repositories to increase codebase readability, scalability, and sustainability",
      "Implemented API contract to maintain ease of use of the backend services",
      "Worked with UI/UX department to accomplish their design and Automation department to increase the quality of the product being developed",
    ],
    period: "Mar '23 - Nov '23",
    mode: "Hybrid",
    type: "Seasonal",
    backgroundColor: "#1A1B2F",
    color: "#FFFFFF",
  },
  {
    id: 1,
    place: "HubbedIn",
    title: "Software Engineer Intern",
    jobDescriptions: [
      "Worked on the frontend pages on HubbedIn (jobs discovery service) and HubbedIn internal tools, coordinating with the UI/UX and backend department",
      "Resolved bugs on HubbedIn's services",
    ],
    period: "Jul '23 - Jan '24",
    mode: "Remote",
    type: "Internship",
    backgroundColor: "#000000",
    color: "#FFFFFF",
  },
  {
    id: 2,
    place: "Faculty of Computer Science, Universitas Indonesia",
    title: "Teaching Assistant of Advanced Programming",
    jobDescriptions: [
      "Guided 3 groups to create a project with microservice architecture with Java Spring Boot",
      "Graded labs for 20+ students about test-driven development, clean code, profiling, design patterns, GRPC, Kubernetes with Minikube",
    ],
    period: "Jan '24 - Jun '24",
    mode: "Hybrid",
    type: "Part-time",
    backgroundColor: "#282627",
    color: "#FFFFFF",
  },
  {
    id: 3,
    place: "Braincore.id",
    title: "Mobile Developer Intern",

    jobDescriptions: [
      "Selected as one of the teams to work on a company capstone project in Bangkit Academy at Braincore",
      "Developed an AI-powered product imagery identification system Android app with Android Studio, Kotlin, and Material 3 Components",
    ],
    period: "Apr '24 - Jun '24",
    mode: "Remote",
    type: "Internship",
    backgroundColor: "#37517E",
    color: "#FFFFFF",
  },
  {
    id: 4,
    place: "Career Talk UI",
    title: "Frontend Developer",
    jobDescriptions: [
      "Worked on the frontend pages of the Career Talk UI 2024 website",
    ],
    period: "May '24 - Aug '24",
    mode: "Remote",
    type: "Freelance",
    backgroundColor: "#5E7153",
    color: "#FFFFFF",
  },
];
