import kartik from "../assets/kartik.jpg";
import prem from "../assets/prem.jpg";
import vansh from "../assets/vansh.jpg";
import digant from "../assets/digant.jpg";

const teamMembers = [
    {
        name: "Ladani Prem",
        role: "Coder / Problem Solver / Animation",
        image: prem, // Use imported image
        description:
            "An exceptional coder with a passion for solving problems and creating captivating animations.",
    },
    {
        name: "Vansh Gahlot",
        role: "Coder / Problem Solver / Good Boy",
        image: vansh, // Use imported image
        description:
            "A dedicated coder and problem solver, known for his helpful nature and sharp skills.",
    },
    {
        name: "Digant Malviya",
        role: "Full Stack Developer",
        image: digant, // Use imported image
        description:
            "An expert full-stack developer with a deep knowledge of both front-end and back-end technologies.",
    },
    {
        name: "Kartik Bhatt",
        role: "Full Stack Developer",
        image: kartik, // Use imported image
        description:
            "A passionate full-stack developer with experience in building scalable and maintainable applications.",
    },
];

const About = () => {
    return (
        <div className="bg-gradient-to-b from-gray-900 to-gray-800 text-white py-10 px-5">
            <div className="max-w-7xl mx-auto text-center">
                <h1 className="text-4xl font-bold mb-8">Meet Our Team</h1>
                <p className="text-lg mb-12">
                    Our team is a blend of coding enthusiasts, problem solvers, and
                    developers passionate about creating innovative solutions.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                    {teamMembers.map((member, index) => (
                        <div
                            key={index}
                            className="bg-gray-800 rounded-lg shadow-lg p-6 transform transition-transform duration-500 hover:scale-105"
                        >
                            <img
                                src={member.image}
                                alt={member.name}
                                className="w-32 h-32 object-cover mx-auto rounded-full border-4 border-gray-700 mb-4"
                            />
                            <h2 className="text-xl font-semibold">{member.name}</h2>
                            <p className="text-sm text-gray-400">{member.role}</p>
                            <p className="mt-4 text-sm">{member.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default About;
