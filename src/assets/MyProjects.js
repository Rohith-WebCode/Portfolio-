import project1_img from '../assets/Project/Ecom.jpg'
import project2_img from '../assets/Project/Flossy.jpg'
import project3_img from '../assets/Project/NodeEcom.jpg'
import project4_img from '../assets/Project/OLX.jpg'
import project5_img from '../assets/Project/SnapTo.jpg'
import project6_img from '../assets/Project/To-Do.jpg'
import project7_img from '../assets/Project/Weather.jpg'
import project8_img from '../assets/Project/Netflix.jpg'
import Screenshot2_img from '../assets/Project/Screenshot/Flossyf2page.png'
import Screenshot3_img from '../assets/Project/Screenshot/Flossyfpage.png'
import Screenshot4_img from '../assets/Project/Screenshot/Netflixf1.png'
import Screenshot5_img from '../assets/Project/Screenshot/mernscreenshot2.png'
// import Screenshot6_img from '../assets/Project/Screenshot/mernscreenshot3.png'
import Screenshot7_img from '../assets/Project/Screenshot/mernstack.png'
import Screenshot8_img from '../assets/Project/Screenshot/nodeEcomScreenshot (35).png'
import Screenshot9_img from '../assets/Project/Screenshot/Nodescreenshot.png'
import Screenshot10_img from '../assets/Project/Screenshot/Olxscreenshot.png'
import Screenshot11_img from '../assets/Project/Screenshot/OLXloginScreenshot (39).png'
import Screenshot12_img from '../assets/Project/Screenshot/snapScreenshot.png'
import Screenshot13_img from '../assets/Project/Screenshot/To-do.png'
import Screenshot14_img from '../assets/Project/Screenshot/Weatherscreenshot.png'
import Screenshot15_img from '../assets/Project/Screenshot/NScreenshot (24).png'

const MyProjects = [
{
    Project_No :1,
    Mockups:project8_img,
    title:'Netflix Clone',
    description: 'The Netflix Clone project is a replica of the popular streaming service, Netflix, designed to provide an immersive user experience similar to the original platform. The app pulls in dynamic content such as trending movies, TV shows, and genres using the TMDb API. It features a clean, responsive user interface that mimics Netflix’s layout, and users can browse through categories like Popular, Trending, Top Rated, and more.',
    technologies :["React", "CSS", "TMDb API"],
    features:["Responsive Design", "Dynamic Movie Data", "Category Browsing","YouTube Trailer Integration"],
    Screenshots:[Screenshot4_img,Screenshot15_img]
},
{
    Project_No :2,
    Mockups:project2_img,
    title:'Flossy Eye Hospital',
    description: 'Flossy Eye Hospital is a specialized hospital management website designed to optimize the patient experience for eye care services. The platform allows for easy appointment scheduling, detailed doctor profiles, service offerings, and patient management. With a responsive and intuitive design, the website ensures accessibility and ease of use for all visitors, both on desktop and mobile.',
    technologies :["HTML", "CSS", "JavaScript", "Bootstrap", "PHP", "MySQL"],
    features:["Online appointment scheduling for eye care", "Doctor and service profile browsing", "Mobile-first responsive design","Admin panel for managing appointments and patient records"],
    Screenshots:[Screenshot2_img,Screenshot3_img]
},
{
    Project_No :3,
    Mockups:project1_img,
    title:'Shelftop',
    description: 'Shelftop is a modern, user-friendly shopping cart website that provides seamless online shopping experiences. It includes features like product browsing, cart management, and secure checkout. The site is fully responsive, ensuring a smooth experience across devices.',
    technologies :["HTML", "CSS", "JavaScript", "React.js", "Node.js", "Express", "MongoDB"],
    features:["Responsive design for mobile and desktop", "Cart and wishlist management", "User login and authentication","Product browsing and search"],
    Screenshots:[Screenshot7_img,Screenshot5_img]
},
{
    Project_No :4,
    Mockups:project4_img,
    title:'OLX Clone',
    description: 'The OLX Clone is a marketplace platform where users can post and browse classified ads for various products and services. Built using React.js for the front-end and Firebase for user authentication and database management, this platform allows users to create accounts, post ads, and browse listings. It is designed to provide a simple and efficient experience for both buyers and sellers.',
    technologies :["React.js", "Firebase", "Firestore", "CSS", "JavaScript"],
    features:["Firebase Authentication for user login and registration", "Post, edit, and delete ads","Browse and search for ads across categories","Responsive design for mobile and desktop"],
    Screenshots:[Screenshot10_img,Screenshot11_img]
},
{
    Project_No :5,
    Mockups:project3_img,
    title:'E-commerce Website',
    description: 'The E-commerce Website is a fully functional online store built with Node.js, Express, and MongoDB. The website allows users to browse products, add them to the cart, and proceed with secure checkout. Admins can manage products, track orders, and update inventory. It is designed to offer a seamless shopping experience with a modern, responsive UI.',
    technologies :["Node.js", "Express", "MongoDB", "EJS", "CSS", "JavaScript"],
    features:["User authentication and account management", "Product catalog with categories and search functionality", "Mobile-responsive design","Admin panel for managing products and orders"],
    Screenshots:[Screenshot8_img,Screenshot9_img]
},
{
    Project_No :6,
    Mockups:project5_img,
    title:'SnapToScript',
    description: 'SnapToScript is an online platform that utilizes OCR technology to convert images into editable text. Users can easily upload images, and the application extracts the text for further editing.',
    technologies :["React", "Tesseract.js", "CSS", "JavaScript"],
    features:["Image upload functionality", "OCR processing to extract text", "Mobile-responsive design","ser-friendly interface"],
    Screenshots:[Screenshot12_img]
},
{
    Project_No :7,
    Mockups:project6_img,
    title:'To-Do List',
    description: 'A simple and interactive To-Do List application that allows users to add, edit, and delete tasks. Users can mark tasks as completed.',
    technologies :["HTML", "CSS", "JavaScript"],
    features:["Add new tasks", "Delete tasks", "Mobile-responsive design","Mark tasks as completed"],
    Screenshots:[Screenshot13_img]
},
{
    Project_No :8,
    Mockups:project7_img,
    title:'Weather Detector"',
    description: 'A web application that provides real-time weather updates for any location. Users can search for their city and get current weather conditions, forecasts, and other relevant data.',
    technologies :["HTML", "CSS", "JavaScript","OpenWeatherMap API"],
    features:["Search for any city", "Display current weather conditions", "Show weather forecasts","User-friendly interface"],
    Screenshots:[Screenshot14_img]
},

]

export default MyProjects;