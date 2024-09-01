/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false,
};

// Projects Page
const projectsHeader = {
  projects: [
    {
      id: 0,
      title: "GetKart",
      subtitle: "Your own E-Commerce Site created with React & Vite.",
      image: "src/Assets/Projects/GetKart/GetKart_Home_Page.png",
      by: "Rajesh Ranjan",
      tech: [
        "HTML5",
        "CSS3",
        "Tailwind CSS",
        "JavaScript",
        "Node.js",
        "React JS",
        "Vite",
        "MongoDB",
        "Express JS",
      ],

      category: "React JS",
      filter: "filter-react",
      date: "29th July, 2024",
      github_link: "https://github.com/rajesh-ranjan-git/GetKart.git",
      website_link: "https://get-kart.netlify.app",
      app_link: null,
      amazon_store: null,
      google_play_link: null,
      summary:
        "This is an e-commerce website created with React + Vite. This website implements almost all the concepts of React and other frameworks.",
      features: [
        "JSX",
        "TailWind CSS",
        "Hooks (useState, useEffect, useContext, useNavigate, useParam)",
        "Shimmer UI",
        "Multiple functionalities like Search Bar, Filtering Cards, Searching, Sorting",
        "Context API",
        "Dynamic Routing using React Routing",
        "Link tags",
        "Custom Hooks",
        "Lazy Loading",
        "Higher Order Components",
        "Controlled and Uncontrolled components (Accordian)",
        "State Lifting",
        "Redux",
        "Authentication and authorization implemented along with cookies to store tokens generated from JSONWebTokens (JWT)",
        "Implementation of validations using Formik and Yup",
        "MongoDB used for database",
        "Initial render takes about 30 secs due to backend deployment on Render.com",
        "Bcrypt for encryption and hashing of passwords",
        "Axios for API calls",
        "Usage of DaisyUI, Remix-icons, DummyJSON, Tailwind-Flex",
      ],
      attribution: null,
      slides: [
        "src/Assets/Projects/GetKart/GetKart_Home_Page.png",
        "src/Assets/Projects/GetKart/GetKart_Home_Page_LightTheme.png",
        "src/Assets/Projects/GetKart/GetKart_Login_Page.png",
        "src/Assets/Projects/GetKart/GetKart_Profile_Page_WithUpdateDetails.png",
        "src/Assets/Projects/GetKart/GetKart_ShimmerUI.png",
        "src/Assets/Projects/GetKart/GetKart_SignUp_Page.png",
        "src/Assets/Projects/GetKart/GetKart_Cart_Page.png",
      ],
    },
    {
      id: 1,
      title: "MovieMania",
      subtitle: "Your own Movie-Hub Application created using React & Vite.",
      image: "src/Assets/Projects/MovieMania/MovieMania_Home_Page.png",
      by: "Rajesh Ranjan",
      tech: ["HTML5", "CSS3", "Tailwind CSS", "JavaScript", "React JS", "Vite"],

      category: "React JS",
      filter: "filter-react",
      date: "31st August, 2024",
      github_link: "https://github.com/rajesh-ranjan-git/MovieMania.git",
      website_link: "https://app-moviemania.netlify.app",
      app_link: null,
      amazon_store: null,
      google_play_link: null,
      summary:
        "You can browser for Movies, TV Shows along with Popular, Trending, Upcoming, Now Playing, On AIR, Similar and Recommended Movies/TV Shows. You can watch trailers for the movies as well. Improved performance and decreased API calls by implementing Debouncing technique used for Infinite scrolling.",
      features: [
        "JSX",
        "TailWind CSS",
        "Multiple functionalities like Search Bar, Filtering Cards, Searching",
        "Dynamic Routing using React Routing",
        "Link tags",
        "Custom Hooks",
        "Higher Order Components",
        "Controlled and Uncontrolled components (Carousel)",
        "State Lifting",
        "Infinite Scrolling",
        "Debouncing",
        "Redux",
        "Axios for API calls",
      ],
      attribution: null,
      slides: [
        "src/Assets/Projects/MovieMania/MovieMania_Home_Page.png",
        "src/Assets/Projects/MovieMania/MovieMania_Horizontal_Cards.png",
        "src/Assets/Projects/MovieMania/MovieMania_Movies_Page.png",
        "src/Assets/Projects/MovieMania/MovieMania_Search_Page.png",
        "src/Assets/Projects/MovieMania/MovieMania_SingleMovie_Page.png",
        "src/Assets/Projects/MovieMania/MovieMania_Trailer_Section.png",
        "src/Assets/Projects/MovieMania/MovieMania_TVShows_Page.png",
      ],
    },
    {
      id: 2,
      title: "PhotoPhlix",
      subtitle:
        "Your own Image Gallery Application created using React & Vite.",
      image: "src/Assets/Projects/PhotoPhlix/PhotoPhlix-Home-Page.png",
      by: "Rajesh Ranjan",
      tech: ["HTML5", "CSS3", "Tailwind CSS", "JavaScript", "React JS", "Vite"],

      category: "React JS",
      filter: "filter-react",
      date: "31st August, 2024",
      github_link: "https://github.com/rajesh-ranjan-git/PhotoPhlix.git",
      website_link: "https://photophlix.netlify.app",
      app_link: null,
      amazon_store: null,
      google_play_link: null,
      summary:
        "You can browse for images uploaded by people around the world on Unsplash. You can also view images which is implemented using React Lightbox. Share functionality also available to share photos with your loved ones through whatsapp.",
      features: [
        "JSX",
        "TailWind CSS",
        "FlowBite Components",
        "React Lightbox",
        "Multiple functionalities like Search Bar, Favorites, Searching",
        "Dynamic Routing using React Routing",
        "Link tags",
        "Custom Hooks",
        "Higher Order Components",
        "Controlled and Uncontrolled components (Carousel)",
        "State Lifting",
        "Infinite Scrolling",
        "Redux",
        "Fetch for API calls",
      ],
      attribution: null,
      slides: [
        "src/Assets/Projects/PhotoPhlix/PhotoPhlix-Home-Page.png",
        "src/Assets/Projects/PhotoPhlix/PhotoPhlix-Favorites-Page.png",
        "src/Assets/Projects/PhotoPhlix/PhotoPhlix-LightBox.png",
        "src/Assets/Projects/PhotoPhlix/PhotoPhlix-After-Search.png",
      ],
    },
    {
      id: 3,
      title: "Tic Tac Toe - React",
      subtitle: "Your own Tic Tac Toe game created using React & Vite.",
      image:
        "src/Assets/Projects/TicTacToe_React/TicTacToe_React_Start_Page.png",
      by: "Rajesh Ranjan",
      tech: ["HTML5", "CSS3", "Tailwind CSS", "JavaScript", "React JS", "Vite"],

      category: "React JS",
      filter: "filter-react",
      date: "11th August, 2024",
      github_link: "https://github.com/rajesh-ranjan-git/TicTacToe-React.git",
      website_link: "https://tictactoe-react-vite-game.netlify.app",
      app_link: null,
      amazon_store: null,
      google_play_link: null,
      summary:
        "This is a Tic Tac Toe game created using React & Vite. Enjoy the game with cool sound effects.",
      features: [
        "JSX",
        "TailWind CSS",
        "You can choose your name for playing the game",
        "Multiple functionalities like Win, Draw conditions",
        "Added cool sound effects",
        "Routing using React Routing",
        "Link tags",
        "Custom Hooks",
        "Higher Order Components",
        "State Lifting",
        "Context API",
      ],
      attribution: null,
      slides: [
        "src/Assets/Projects/TicTacToe_React/TicTacToe_React_Start_Page.png",
        "src/Assets/Projects/TicTacToe_React/TicTacToe_React_Player_Page.png",
        "src/Assets/Projects/TicTacToe_React/TicTacToe_React_Game_Page.png",
        "src/Assets/Projects/TicTacToe_React/GetKart_Profile_Page_WithUpdateDetails.png",
        "src/Assets/Projects/TicTacToe_React/TicTacToe_React_Winner_Page.png",
        "src/Assets/Projects/TicTacToe_React/TicTacToe_React_Draw_Page.png",
      ],
    },
    {
      id: 4,
      title: "Tic Tac Toe",
      subtitle: "Your own Tic Tac Toe game created using Vanilla JS.",
      image: "src/Assets/Projects/TicTacToe/TicTacToe_Game_Page.png",
      by: "Rajesh Ranjan",
      tech: ["HTML5", "CSS3", "JavaScript"],

      category: "Vanilla JS",
      filter: "filter-js",
      date: "30th May, 2024",
      github_link: "https://github.com/rajesh-ranjan-git/TicTacToe.git",
      website_link: "https://tictactoe-vanilla-js.netlify.app",
      app_link: null,
      amazon_store: null,
      google_play_link: null,
      summary:
        "This is a Tic Tac Toe game created using Vanilla JS. Enjoy the game with cool sound effects.",
      features: [
        "Vanilla JS",
        "CSS3",
        "HTML5",
        "Multiple functionalities like Win, Draw conditions",
        "Added cool sound effects",
      ],
      attribution: null,
      slides: [
        "src/Assets/Projects/TicTacToe/TicTacToe_Game_Page.png",
        "src/Assets/Projects/TicTacToe/TicTacToe_Winner_Page.png",
        "src/Assets/Projects/TicTacToe/TicTacToe_Draw_Page.png",
        "src/Assets/Projects/TicTacToe/TicTacToe_Loader.png",
      ],
    },
    {
      id: 5,
      title: "Task Manager",
      subtitle: "Your own Task Manager App created using Vanilla JS.",
      image: "src/Assets/Projects/TaskManager/TaskManager_Home_Page.png",
      by: "Rajesh Ranjan",
      tech: ["HTML5", "CSS3", "JavaScript"],

      category: "Vanilla JS",
      filter: "filter-js",
      date: "28th April, 2024",
      github_link: "https://github.com/rajesh-ranjan-git/Task-Manager.git",
      website_link: "https://rajesh-ranjan-git.github.io/Task-Manager/",
      app_link: null,
      amazon_store: null,
      google_play_link: null,
      summary:
        "Task Manager app built using HTML5, CSS3, Vanilla JS. Implementation if search and filter functionality. Usage of LocalStorage to store data on browser itself.",
      features: [
        "Vanilla JS",
        "CSS3",
        "HTML5",
        "Multiple functionalities like Add, Edit, Delete Task items",
        "LocalStorage implementation",
      ],
      attribution: null,
      slides: [
        "src/Assets/Projects/TaskManager/TaskManager_Home_Page.png",
        "src/Assets/Projects/TaskManager/TaskManager_AddTasks.png",
        "src/Assets/Projects/TaskManager/TaskManager_Tasks_With_Priorities.png",
        "src/Assets/Projects/TaskManager/TaskManager_Filtered_Tasks.png",
        "src/Assets/Projects/TaskManager/TaskManager_Tasks_After_Deleting.png",
      ],
    },
    {
      id: 6,
      title: "To Do App",
      subtitle: "Your own To Do App created using Vanilla JS.",
      image: "src/Assets/Projects/To_Do_App/To_Do_App_Home_Page.png",
      by: "Rajesh Ranjan",
      tech: ["HTML5", "CSS3", "JavaScript"],

      category: "Vanilla JS",
      filter: "filter-js",
      date: "22nd March, 2024",
      github_link: "https://github.com/rajesh-ranjan-git/To-Do-App.git",
      website_link: "https://to-do-vanillajs.netlify.app",
      app_link: null,
      amazon_store: null,
      google_play_link: null,
      summary:
        "This is a To Do App created using Vanilla JS. You can add todo items and description for it which can be edited and deleted as per your requirements. Usage of LocalStorage to store data on browser itself.",
      features: [
        "Vanilla JS",
        "CSS3",
        "HTML5",
        "Multiple functionalities like Add, Edit, Delete To Do items",
        "LocalStorage implementation",
      ],
      attribution: null,
      slides: [
        "src/Assets/Projects/To_Do_App/To_Do_App_Home_Page.png",
        "src/Assets/Projects/To_Do_App/To_Do_App_With_Items_Without_Description.png",
        "src/Assets/Projects/To_Do_App/To_Do_App_Adding_Description.png",
        "src/Assets/Projects/To_Do_App/To_Do_App_With_Description.png",
        "src/Assets/Projects/To_Do_App/To_Do_App_Editing_Title.png",
        "src/Assets/Projects/To_Do_App/To_Do_App_New_Title.png",
        "src/Assets/Projects/To_Do_App/To_Do_App_Deleting_Item.png",
      ],
    },
    {
      id: 7,
      title: "Currency Converter",
      subtitle: "Your own Currency Converter App created using Vanilla JS.",
      image: "src/Assets/Projects/Currency_Converter/Currency_Converter.png",
      by: "Rajesh Ranjan",
      tech: ["HTML5", "CSS3", "JavaScript"],

      category: "Vanilla JS",
      filter: "filter-js",
      date: "20th March, 2024",
      github_link:
        "https://github.com/rajesh-ranjan-git/Currency-Converter.git",
      website_link: "https://currency-converter-vanillajs.netlify.app",
      app_link: null,
      amazon_store: null,
      google_play_link: null,
      summary:
        "This is a Currency Converter created using Vanilla JS. You can check exchange rates between almost every country in the world.",
      features: [
        "Vanilla JS",
        "CSS3",
        "HTML5",
        "Get exchange rates between almost every country in the world",
      ],
      attribution: null,
      slides: ["src/Assets/Projects/Currency_Converter/Currency_Converter.png"],
    },
    {
      id: 8,
      title: "JP Tech Fest",
      subtitle:
        "JPIET Tech Fest Landing Page for JPIET created using HTML, CSS, Bootstrap.",
      image: "src/Assets/Projects/JPTechFest/JPTechFest_Home_Page.png",
      by: "Rajesh Ranjan",
      tech: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],

      category: "Frontend (HTML, CSS)",
      filter: "filter-frontend",
      date: "5th April, 2018",
      github_link: "https://github.com/rajesh-ranjan-git/JPTechFest.git",
      website_link: "https://rajesh-ranjan-git.github.io/JPTechFest/",
      app_link: null,
      amazon_store: null,
      google_play_link: null,
      summary:
        "This is a Tech Fest Landing Page for JPIET created using HTML, CSS, Bootstrap.",
      features: [
        "Bootstrap",
        "CSS3",
        "HTML5",
        "Tech Fest Landing Page for JPIET Fest",
      ],
      attribution: null,
      slides: [
        "src/Assets/Projects/JPTechFest/JPTechFest_Home_Page.png",
        "src/Assets/Projects/JPTechFest/JPTechFest_Events.png",
        "src/Assets/Projects/JPTechFest/JPTechFest_About.png",
        "src/Assets/Projects/JPTechFest/JPTechFest_Team.png",
        "src/Assets/Projects/JPTechFest/JPTechFest_All_Events.png",
      ],
    },
    {
      id: 9,
      title: "FQS Painting",
      subtitle:
        "This is a landing page for painting site created using HTML, CSS and Bootstrap.",
      image: "src/Assets/Projects/FQS_Painting/FQS_Painting_Home_Page.png",
      by: "Rajesh Ranjan",
      tech: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],

      category: "Frontend (HTML, CSS)",
      filter: "filter-frontend",
      date: "26th July, 2017",
      github_link: "https://github.com/rajesh-ranjan-git/JPTechFest.git",
      website_link: "https://rajesh-ranjan-git.github.io/JPTechFest/",
      app_link: null,
      amazon_store: null,
      google_play_link: null,
      summary:
        "This is a landing page for painting site created using HTML, CSS and Bootstrap.",
      features: [
        "Bootstrap",
        "CSS3",
        "HTML5",
        "Landing page for Painting Site",
      ],
      attribution: null,
      slides: [
        "src/Assets/Projects/FQS_Painting/FQS_Painting_Home_Page.png",
        "src/Assets/Projects/FQS_Painting/FQS_Painting_About_Page.png",
        "src/Assets/Projects/FQS_Painting/FQS_Painting_Gallery_Page.png",
        "src/Assets/Projects/FQS_Painting/FQS_Painting_Services_Page.png",
        "src/Assets/Projects/FQS_Painting/FQS_Painting_Contact_Page.png",
        "src/Assets/Projects/FQS_Painting/FQS_Painting_Image_View.png",
      ],
    },
    {
      id: 10,
      title: "Amazon-Clone",
      subtitle:
        "This is a landing page copy of amazon.com created using HTML and CSS.",
      image: "src/Assets/Projects/FQS_Painting/FQS_Painting_Home_Page.png",
      by: "Rajesh Ranjan",
      tech: ["HTML5", "CSS3", "JavaScript"],

      category: "Frontend (HTML, CSS)",
      filter: "filter-frontend",
      date: "26th July, 2017",
      github_link: "https://github.com/rajesh-ranjan-git/Amazon-Clone.git",
      website_link: "https://amzn-clone-site.netlify.app",
      app_link: null,
      amazon_store: null,
      google_play_link: null,
      summary:
        "This is a landing page copy of amazon.com created using HTML and CSS.",
      features: ["CSS3", "HTML5", "Landing page copy of amazon.com"],
      attribution: null,
      slides: [
        "src/Assets/Projects/FQS_Painting/FQS_Painting_Home_Page.png",
        "src/Assets/Projects/FQS_Painting/FQS_Painting_About_Page.png",
        "src/Assets/Projects/FQS_Painting/FQS_Painting_Gallery_Page.png",
        "src/Assets/Projects/FQS_Painting/FQS_Painting_Services_Page.png",
        "src/Assets/Projects/FQS_Painting/FQS_Painting_Contact_Page.png",
        "src/Assets/Projects/FQS_Painting/FQS_Painting_Image_View.png",
      ],
    },
    {
      id: 11,
      title: "Sky-Painting",
      subtitle:
        "This is a landing page for painting site created using HTML, CSS and Bootstrap.",
      image: "src/Assets/Projects/Sky_Painting/Sky_Painting_Landing_Page_1.png",
      by: "Rajesh Ranjan",
      tech: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],

      category: "Frontend (HTML, CSS)",
      filter: "filter-frontend",
      date: "26th July, 2017",
      github_link: "https://github.com/rajesh-ranjan-git/Sky-Painting.git",
      website_link: "https://sky-painting.netlify.app",
      app_link: null,
      amazon_store: null,
      google_play_link: null,
      summary:
        "This is a landing page for painting site created using HTML, CSS and Bootstrap.",
      features: [
        "Bootstrap",
        "CSS3",
        "HTML5",
        "Landing page for painting site",
      ],
      attribution: null,
      slides: [
        "src/Assets/Projects/Sky_Painting/Sky_Painting_Landing_Page_1.png",
        "src/Assets/Projects/Sky_Painting/Sky_Painting_Landing_Page_2.png",
        "src/Assets/Projects/Sky_Painting/Sky_Painting_Landing_Page_3.png",
      ],
    },
    {
      id: 12,
      title: "MakeMyTrip-Clone",
      subtitle:
        "This is a landing page copy of makemytrip.com created using HTML and CSS.",
      image: "src/Assets/Projects/FQS_Painting/FQS_Painting_Home_Page.png",
      by: "Rajesh Ranjan",
      tech: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],

      category: "Frontend (HTML, CSS)",
      filter: "filter-frontend",
      date: "26th July, 2017",
      github_link: "https://github.com/rajesh-ranjan-git/MakeMyTrip.git",
      website_link: "https://mmt-clone-site.netlify.app",
      app_link: null,
      amazon_store: null,
      google_play_link: null,
      summary:
        "This is a landing page copy of makemytrip.com created using HTML and CSS.",
      features: ["CSS3", "HTML5", "Landing page copy of makemytrip.com"],
      attribution: null,
      slides: [
        "src/Assets/Projects/FQS_Painting/FQS_Painting_Home_Page.png",
        "src/Assets/Projects/FQS_Painting/FQS_Painting_About_Page.png",
        "src/Assets/Projects/FQS_Painting/FQS_Painting_Gallery_Page.png",
        "src/Assets/Projects/FQS_Painting/FQS_Painting_Services_Page.png",
        "src/Assets/Projects/FQS_Painting/FQS_Painting_Contact_Page.png",
        "src/Assets/Projects/FQS_Painting/FQS_Painting_Image_View.png",
      ],
    },
    {
      id: 13,
      title: "Jonestree",
      subtitle:
        "This is a landing page for forestry work site created using HTML, CSS and Bootstrap.",
      image: "src/Assets/Projects/Jonestree/Jonestree_Landing_Page_1.png",
      by: "Rajesh Ranjan",
      tech: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],

      category: "Frontend (HTML, CSS)",
      filter: "filter-frontend",
      date: "26th July, 2017",
      github_link: "https://github.com/rajesh-ranjan-git/Jonestree.git",
      website_link: "https://jonestree.netlify.app",
      app_link: null,
      amazon_store: null,
      google_play_link: null,
      summary:
        "This is a landing page for forestry work site created using HTML, CSS and Bootstrap.",
      features: [
        "Bootstrap",
        "CSS3",
        "HTML5",
        "Landing page for forestry work site",
      ],
      attribution: null,
      slides: [
        "src/Assets/Projects/Jonestree/Jonestree_Landing_Page_1.png",
        "src/Assets/Projects/Jonestree/Jonestree_Landing_Page_2.png",
      ],
    },
    {
      id: 14,
      title: "Ironing",
      subtitle:
        "This is a landing page for ironing site created using HTML, CSS and Bootstrap.",
      image: "src/Assets/Projects/FQS_Painting/FQS_Painting_Home_Page.png",
      by: "Rajesh Ranjan",
      tech: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],

      category: "Frontend (HTML, CSS)",
      filter: "filter-frontend",
      date: "26th July, 2017",
      github_link: "https://github.com/rajesh-ranjan-git/Ironing.git",
      website_link: "https://ironing.netlify.app",
      app_link: null,
      amazon_store: null,
      google_play_link: null,
      summary:
        "This is a landing page for ironing site created using HTML, CSS and Bootstrap.",
      features: ["Bootstrap", "CSS3", "HTML5", "Landing page for ironing site"],
      attribution: null,
      slides: [
        "src/Assets/Projects/FQS_Painting/FQS_Painting_Home_Page.png",
        "src/Assets/Projects/FQS_Painting/FQS_Painting_About_Page.png",
        "src/Assets/Projects/FQS_Painting/FQS_Painting_Gallery_Page.png",
        "src/Assets/Projects/FQS_Painting/FQS_Painting_Services_Page.png",
        "src/Assets/Projects/FQS_Painting/FQS_Painting_Contact_Page.png",
        "src/Assets/Projects/FQS_Painting/FQS_Painting_Image_View.png",
      ],
    },
    {
      id: 15,
      title: "Exterior-Water-Blaster",
      subtitle:
        "This is a landing page for washing company site created using HTML, CSS and Bootstrap.",
      image: "src/Assets/Projects/FQS_Painting/FQS_Painting_Home_Page.png",
      by: "Rajesh Ranjan",
      tech: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],

      category: "Frontend (HTML, CSS)",
      filter: "filter-frontend",
      date: "26th July, 2017",
      github_link:
        "https://github.com/rajesh-ranjan-git/Exterior-Water-Blaster.git",
      website_link: "https://exterior-water-blaster.netlify.app",
      app_link: null,
      amazon_store: null,
      google_play_link: null,
      summary:
        "This is a landing page for washing company site created using HTML, CSS and Bootstrap.",
      features: [
        "Bootstrap",
        "CSS3",
        "HTML5",
        "Landing page for washing company site",
      ],
      attribution: null,
      slides: [
        "src/Assets/Projects/FQS_Painting/FQS_Painting_Home_Page.png",
        "src/Assets/Projects/FQS_Painting/FQS_Painting_About_Page.png",
        "src/Assets/Projects/FQS_Painting/FQS_Painting_Gallery_Page.png",
        "src/Assets/Projects/FQS_Painting/FQS_Painting_Services_Page.png",
        "src/Assets/Projects/FQS_Painting/FQS_Painting_Contact_Page.png",
        "src/Assets/Projects/FQS_Painting/FQS_Painting_Image_View.png",
      ],
    },
    {
      id: 16,
      title: "Flipkart-Clone",
      subtitle:
        "This is a landing page copy of flipkart.com created using HTML and CSS.",
      image: "src/Assets/Projects/FQS_Painting/FQS_Painting_Home_Page.png",
      by: "Rajesh Ranjan",
      tech: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],

      category: "Frontend (HTML, CSS)",
      filter: "filter-frontend",
      date: "26th July, 2017",
      github_link: "https://github.com/rajesh-ranjan-git/Flipkart-Clone.git",
      website_link: "https://flpkart-clone.netlify.app",
      app_link: null,
      amazon_store: null,
      google_play_link: null,
      summary:
        "This is a landing page copy of flipkart.com created using HTML and CSS.",
      features: [
        "Bootstrap",
        "CSS3",
        "HTML5",
        "Landing page copy of flipkart.com",
      ],
      attribution: null,
      slides: [
        "src/Assets/Projects/FQS_Painting/FQS_Painting_Home_Page.png",
        "src/Assets/Projects/FQS_Painting/FQS_Painting_About_Page.png",
        "src/Assets/Projects/FQS_Painting/FQS_Painting_Gallery_Page.png",
        "src/Assets/Projects/FQS_Painting/FQS_Painting_Services_Page.png",
        "src/Assets/Projects/FQS_Painting/FQS_Painting_Contact_Page.png",
        "src/Assets/Projects/FQS_Painting/FQS_Painting_Image_View.png",
      ],
    },
    {
      id: 17,
      title: "Commercial-Cleaning",
      subtitle:
        "This is a landing page for cleaning site created using HTML, CSS and Bootstrap.",
      image: "src/Assets/Projects/FQS_Painting/FQS_Painting_Home_Page.png",
      by: "Rajesh Ranjan",
      tech: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],

      category: "Frontend (HTML, CSS)",
      filter: "filter-frontend",
      date: "26th July, 2017",
      github_link:
        "https://github.com/rajesh-ranjan-git/Commercial-Cleaning.git",
      website_link: "https://commercial-cleaning.netlify.app",
      app_link: null,
      amazon_store: null,
      google_play_link: null,
      summary:
        "This is a landing page for cleaning site created using HTML, CSS and Bootstrap.",
      features: [
        "Bootstrap",
        "CSS3",
        "HTML5",
        "Landing page for cleaning site",
      ],
      attribution: null,
      slides: [
        "src/Assets/Projects/FQS_Painting/FQS_Painting_Home_Page.png",
        "src/Assets/Projects/FQS_Painting/FQS_Painting_About_Page.png",
        "src/Assets/Projects/FQS_Painting/FQS_Painting_Gallery_Page.png",
        "src/Assets/Projects/FQS_Painting/FQS_Painting_Services_Page.png",
        "src/Assets/Projects/FQS_Painting/FQS_Painting_Contact_Page.png",
        "src/Assets/Projects/FQS_Painting/FQS_Painting_Image_View.png",
      ],
    },
    {
      id: 18,
      title: "Car-Removal",
      subtitle:
        "This is a landing page for car repairing site created using HTML, CSS and Bootstrap.",
      image: "src/Assets/Projects/FQS_Painting/FQS_Painting_Home_Page.png",
      by: "Rajesh Ranjan",
      tech: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],

      category: "Frontend (HTML, CSS)",
      filter: "filter-frontend",
      date: "26th July, 2017",
      github_link: "https://github.com/rajesh-ranjan-git/Car-Removal.git",
      website_link: "https://car-removal.netlify.app",
      app_link: null,
      amazon_store: null,
      google_play_link: null,
      summary:
        "This is a landing page for car repairing site created using HTML, CSS and Bootstrap.",
      features: [
        "Bootstrap",
        "CSS3",
        "HTML5",
        "Landing page for car repairing site",
      ],
      attribution: null,
      slides: [
        "src/Assets/Projects/FQS_Painting/FQS_Painting_Home_Page.png",
        "src/Assets/Projects/FQS_Painting/FQS_Painting_About_Page.png",
        "src/Assets/Projects/FQS_Painting/FQS_Painting_Gallery_Page.png",
        "src/Assets/Projects/FQS_Painting/FQS_Painting_Services_Page.png",
        "src/Assets/Projects/FQS_Painting/FQS_Painting_Contact_Page.png",
        "src/Assets/Projects/FQS_Painting/FQS_Painting_Image_View.png",
      ],
    },
    {
      id: 19,
      title: "Bitcoin-Journal",
      subtitle:
        "This is a landing page for Bitcoin-Journal Blog Page created using HTML, CSS and Bootstrap.",
      image:
        "src/Assets/Projects/Bitcoin_Journal/Bitcoin_Journal_Landing_Page_1.png",
      by: "Rajesh Ranjan",
      tech: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],

      category: "Frontend (HTML, CSS)",
      filter: "filter-frontend",
      date: "26th July, 2017",
      github_link: "https://github.com/rajesh-ranjan-git/Bitcoin-Journal.git",
      website_link: "https://bitcoin-journal.netlify.app",
      app_link: null,
      amazon_store: null,
      google_play_link: null,
      summary:
        "This is a landing page for Bitcoin-Journal Blog Page created using HTML, CSS and Bootstrap.",
      features: [
        "Bootstrap",
        "CSS3",
        "HTML5",
        "Landing page or Bitcoin-Journal Blog Page",
      ],
      attribution: null,
      slides: [
        "src/Assets/Projects/Bitcoin_Journal/Bitcoin_Journal_Landing_Page_1.png",
        "src/Assets/Projects/Bitcoin_Journal/Bitcoin_Journal_Landing_Page_2.png",
        "src/Assets/Projects/Bitcoin_Journal/Bitcoin_Journal_Landing_Page_3.png",
        "src/Assets/Projects/Bitcoin_Journal/Bitcoin_Journal_Landing_Page_4.png",
      ],
    },
  ],
};

export const achievements = [
  {
    title: "FLIPR HACKATHON X",
    src: "./assets/certificates/fliprx.jpg",
    description: "Ranked 1st in Flipr Hackathon X Mobile App Development.",
  },
  {
    title: "GOLDMAN SACHS ENGINEERING VIRTUAL INTERNSHIP",
    src: "./assets/certificates/golmansachs.webp",
    description:
      "Successfully completed the given task to crack leaked password database",
  },
  {
    title: "FLIPR HACKATHON 8.0",
    src: "./assets/certificates/lop.jpg",
    description: "Ranked 2nd in Flipr Hackathon 8.0 Mobile App Development",
  },
  {
    title: "30 DAYS OF GOOGLE CLOUD PROGRAM",
    src: "./assets/certificates/google_cloud_track_machinelearning.webp",
    description:
      "Successfully completed Qwiklab tasks in Cloud Engineering Track and Data Science & Machine learning Track",
  },
  {
    title: "HACKTOBERFEST 2021",
    src: "./assets/certificates/hacktober2021.png",
    description:
      "Successfully completed the one month long open source program",
  },
  {
    title: "HACKTOBERFEST 2020",
    src: "./assets/certificates/hacktoberfest.webp",
    description:
      "Successfully completed the one month long open source program",
  },
];

export const certificates = [
  {
    title: "MERN Full Stack Web Development",
    src: "src/Assets/Certificates/MERN_GFG_Certificate.jpg",
    description:
      "Successfully completed a 155-hour course on MERN Full Stack Web Development.",
    college: null,
    provider: "GeeksForGeeks",
  },
  {
    title: "React JS Course Onine",
    src: "src/Assets/Certificates/React_GFG_Certificate.jpg",
    description:
      "Successfully completed a 8-week course on React JS Course Online - React JS Certification Course.",
    college: null,
    provider: "GeeksForGeeks",
  },
];

export { settings, projectsHeader };