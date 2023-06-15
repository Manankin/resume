// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

// тут ми об'явимо змінні котрі часто використовуються на різних сторінках
// ================================================================
var address = 'Ukraine, Kyiv, 03126'
var header = {
   name: {
      firstname: 'Dmytro',
      lastname: 'Manankin',
   },
   position: 'Junior Fullstack JS Developer',
   salary: '600$ per month after taxes',
   address,
}
var footer = {
   social: {
      email: {
         text: 'write to me',
         href: 'mailto:dmitry.manankin@gmail.com',
      },
      phone: {
         text: '+380 (50) 330-7884',
         href: 'tel:+380503307884',
      },
      linkedin: {
         text: 'my LinkedIn',
         href: 'https://www.linkedin.com/in/dmytro-manankin-727bb5150/',
      },
   },
}

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
   // res.render генерує нам HTML сторінку

   //            ↙ cюди вводимо назву файлу з сontainer
   res.render('index', {})
   //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки 'summary'
router.get('/summary', function (req, res) {
   //             ↙ cюди вводимо назву файлу з сontainer
   res.render('summary', {
      page: {
         title: 'Resume | Summary',
      },
      header,
      main: {
         summary: {
            title: 'Summary',
            text: 'Open- minded for new technologies, with 1 years of experience in development. Whenever I start to work on a new project I learn the domain and try to understand the idea of the project. Good team player, every olleague is a friend to me.',
         },
         experience: {
            title: 'Other Experience',
            text: 'Pet project for parsing sport betting data from different platforms ( odds ) and sport statistics ( tournament position, goals etc), analyzing by simple mathematics models and preparing probability for such events like: money line - first win / draw / second win, totals etc.',
         },
      },
      footer,
   })
   //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки 'skills'
router.get('/skills', function (req, res) {
   //             ↙ cюди вводимо назву файлу з сontainer
   res.render('skills', {
      page: {
         title: 'Resume | Skills',
      },
      header,
      main: {
         title: 'All my skills',
         hobby: 'My hobbies',
         skills: [
            {
               name: 'HTML',
               points: 8,
               isTop: true,
            },
            {
               name: 'CSS',
               points: 6,
               isTop: false,
            },
            {
               name: 'Handlebars',
               points: 4,
            },
            {
               name: 'Git & Terminal',
               points: 4,
            },
            {
               name: 'VS Code',
               points: 8,
               isTop: true,
            },
            {
               name: 'React.js',
               points: 0,
            },
            {
               name: 'PHP',
               points: null,
            },
         ],
         hobbies: [
            {
               name: 'Bridge',
               isMain: true,
            },
            {
               name: 'cooking',
               isMain: false,
            },
            {
               name: 'snooker',
               isMain: false,
            },
         ],
      },

      footer,
   })
   //                  ↑↑ сюди вводимо JSON дані
})

//              ↙ тут вводимо шлях (PATH) до сторінки 'education'
router.get('/education', function (req, res) {
   //             ↙ cюди вводимо назву файлу з сontainer
   res.render('education', {
      page: {
         title: 'Resume | Education',
      },
      header,
      main: {
         title: 'My education',
         certificate: 'My certificates',
         educations: [
            {
               name: 'Ukrainian physic and mathematic liceum',
               isEnd: true,
            },
            {
               name: 'Kyiv State University Tarasa Shevchenka',
               isEnd: true,
            },
            {
               name: 'English course in Prime English school',
               isEnd: false,
            },
            {
               name: 'QA course in SkillUp IT school',
               isEnd: true,
            },
         ],
         certificates: [
            {
               name: 'HTML',
               id: 101,
            },
            {
               name: 'CSS',
               id: 103,
            },
            {
               name: 'ISTQB',
               id: 115,
            },
            {
               name: 'React.js',
               id: 107,
            },
            {
               name: 'EBL TD',
               id: 108,
            },
            {
               name: 'English intermediate level',
               id: 111,
            },
         ],
      },

      footer,
   })
   //                  ↑↑ сюди вводимо JSON дані
})

//              ↙ тут вводимо шлях (PATH) до сторінки 'work' це інформація про наші місця роботи
router.get('/work', function (req, res) {
   //             ↙ cюди вводимо назву файлу з сontainer
   res.render('work', {
      layout: 'big',

      page: {
         title: 'Resume | Work',
      },
      header,
      main: {
         works: [
            {
               company: {
                  name: 'Gearbox service',
                  url: 'https://akpp.kiev.ua',
               },
               position:
                  'Consultant at oil-exchange department',
               duration: {
                  from: 'Dec 2017',
                  to: null,
               },
               projectAmount: 3,
               project: [
                  {
                     name: 'ZF 9 speed',
                     url: 'https://resume.org.ua',
                     about: 'new options of 9HP48 in Acura cars',
                     stacks: [
                        {
                           name: 'react js',
                        },
                        {
                           name: 'node js',
                        },
                        {
                           name: 'HTML / CSS',
                        },
                     ],
                     stackAmount: 3,
                     awards: [
                        {
                           name: 'something for testing',
                        },
                        {
                           name: 'something for frontend dev',
                        },
                     ],
                     awardAmount: 2,
                  },
               ],
            },
            {
               company: {
                  name: 'Casino Budapest',
                  url: '',
               },
               position: 'Chief pit-boss',
               duration: {
                  from: 'Jun 1995',
                  to: 'Oct 2001',
               },
               projectAmount: null,
            },
         ],
      },

      footer,
   })
   //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки 'person'
router.get('/person', function (req, res) {
   //             ↙ cюди вводимо назву файлу з сontainer
   res.render('person', {
      layout: 'basic',

      person: {
         name: 'Maria Johnson',
         age: 32,
         gender: 'Female',
         address: {
            street: '123 Main St',
            city: 'New York',
            state: 'NY',
            zip: '10001',
            country: 'USA',
         },
         education: [
            {
               degree: 'Bachelor of Science',
               major: 'Computer Science',
               university:
                  'Massachusetts Institute of Technology',
               graduationYear: 2012,
            },
         ],
         workExperience: [
            {
               company: 'Google',
               title: 'Software Engineer',
               startDate: '2012-06-01',
               endDate: '2016-12-31',
               responsibilities: [
                  'Developed new features for Google Maps',
                  'Worked on improving search algorithms',
               ],
               year_founded: 1990,
               industry: 'Technology',
               employees: [
                  {
                     name: 'John Smith',
                     position: 'CEO',
                     department: 'Executive',
                     projects: [
                        {
                           name: 'Project Alpha',
                           description:
                              'Developing new software platform',
                           status: 'In Progress',
                           teams: [
                              {
                                 team_name: 'Awesome Team',
                                 team_leader: {
                                    name: 'John Smith',
                                    title: 'Team Leader',
                                    email: 'john.smith@example.com',
                                 },
                                 team_members: [
                                    {
                                       name: 'Alice Johnson',
                                       title: 'Software Engineer',
                                       email: 'alice.johnson@example.com',
                                       skills: [
                                          'Java',
                                          'Python',
                                          'SQL',
                                       ],
                                       projects: [
                                          {
                                             name: 'Project A',
                                             description:
                                                'Lorem ipsum dolor sit amet',
                                             technologies: [
                                                'Java',
                                                'Spring Framework',
                                             ],
                                             team_members: [
                                                {
                                                   name: 'Bob Lee',
                                                   title: 'Software Engineer',
                                                },
                                                {
                                                   name: 'Cindy Chen',
                                                   title: 'UI Designer',
                                                },
                                             ],
                                          },
                                       ],
                                    },
                                 ],
                              },
                           ],
                        },
                     ],
                  },
               ],
            },
         ],
      },
   })
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/bio', function (req, res) {
   //             ↙ cюди вводимо назву файлу з сontainer
   res.render('bio', {
      layout: 'basic',

      name: 'Albert Einstein',
      birthdate: 'March 14, 1879',
      birthplace:
         'Ulm, Kingdom of Württemberg, German Empire',
      deathdate: 'April 18, 1955',
      deathplace: 'Princeton, New Jersey, United States',
      nationality: 'Swiss, German, American',
      occupation: 'Theoretical Physicist',
      known_for: [
         'Theory of Relativity',
         'E=mc²',
         'Photoelectric Effect',
         'Brownian Motion',
      ],
      education: [
         {
            degree: 'Doctor of Philosophy',
            field: 'Physics',
            institution: 'University of Zurich',
            year: 1905,
         },
      ],
      notable_publications: [
         {
            title: 'On the Electrodynamics of Moving Bodies',
            year: 1905,
            publisher: 'Annalen der Physik',
         },
         {
            title: 'Does the Inertia of a Body Depend Upon Its Energy Content?',
            year: 1905,
            publisher: 'Annalen der Physik',
         },
      ],
      partners: [
         {
            name: 'Mileva Marić',
            relationship: 'First wife',
            years: '1903-1919',
         },
         {
            name: 'Elsa Einstein',
            relationship:
               "Second wife, also Einstein's first cousin",
            years: '1919-1936',
         },
      ],
      awards: [
         {
            title: 'Nobel Prize in Physics',
            year: 1921,
            description:
               'Awarded for his explanation of the photoelectric effect',
         },
      ],
      influences: [
         'Isaac Newton',
         'James Clerk Maxwell',
         'Hermann Minkowski',
      ],
      influenced: [
         'Niels Bohr',
         'Erwin Schrödinger',
         'Werner Heisenberg',
         'Richard Feynman',
      ],
      quotes: [
         'Imagination is more important than knowledge.',
         'I have no special talent. I am only passionately curious.',
         'The important thing is not to stop questioning.',
         'The most beautiful thing we can experience is the mysterious. It is the source of all true art and all science.',
      ],
      major_discoveries: [
         {
            title: 'Photoelectric Effect',
            year: 1905,
            description:
               'Einstein explained the photoelectric effect, where electrons are emitted from a metal surface when it is illuminated by light.',
         },
      ],
      contributions: {
         title: 'Inventions',
         description:
            'Leonardo designed and invented a wide variety of machines and devices, including a helicopter, a diving suit, and a self-propelled cart. Many of his inventions were centuries ahead of their time.',
         year: 'Late 15th to early 16th century',
         field: 'Invention',
      },
   })
})

// ================================================================

router.get('/program', function (req, res) {
   //             ↙ cюди вводимо назву файлу з сontainer
   res.render('program', {
      layout: 'basic',

      program: {
         excursion: {
            name: 'Cultural Tour',
            location: {
               city: 'Paris',
               country: 'France',
            },
            date: '2023-06-15',
            program: [
               {
                  name: 'Museum Visit',
                  type: 'Art',
                  duration: 3,
                  details: {
                     museum: {
                        name: 'The Louvre',
                        location: {
                           address: 'Rue de Rivoli',
                           city: 'Paris',
                           country: 'France',
                        },
                        exhibits: [
                           {
                              name: 'Mona Lisa',
                              artist: 'Leonardo da Vinci',
                              description:
                                 'Iconic portrait painting',
                              audio_guide: true,
                           },
                           {
                              name: 'Winged Victory of Samothrace',
                              artist: null,
                              description:
                                 'Ancient Greek statue of Nike, the goddess of victory',
                              audio_guide: true,
                           },
                        ],
                     },
                     guide: {
                        name: 'Francois',
                        language: 'French',
                        rating: 4.8,
                     },
                  },
               },
               {
                  name: 'Cultural Show',
                  type: 'Music and Dance',
                  duration: 2,
                  details: {
                     venue: {
                        name: 'Moulin Rouge',
                        location: {
                           address:
                              '82 Boulevard de Clichy',
                           city: 'Paris',
                           country: 'France',
                        },
                     },
                     performers: [
                        {
                           name: 'Mireille Mathieu',
                           type: 'Chanson singer',
                        },
                        {
                           name: "Ballet de l'Opéra National de Paris",
                           type: 'Classical ballet company',
                        },
                     ],
                     guide: {
                        name: 'Sophie',
                        language: 'English',
                        rating: 4.6,
                     },
                  },
               },
            ],
         },
      },
   })
})

// ================================================================

router.get('/web', function (req, res) {
   //             ↙ cюди вводимо назву файлу з сontainer
   res.render('web', {
      layout: 'basic',

      web: {
         languages: [
            {
               name: 'HTML',
               version: 'HTML5',
               description:
                  'Hypertext Markup Language is the standard markup language for creating web pages and web applications.',
               elements: [
                  {
                     name: 'div',
                     description:
                        'Defines a division or a section in an HTML document.',
                     attributes: [
                        {
                           name: 'id',
                           description:
                              'Specifies a unique id for an HTML element.',
                        },
                        {
                           name: 'class',
                           description:
                              'Specifies one or more class names for an HTML element.',
                        },
                     ],
                  },
                  {
                     name: 'p',
                     description:
                        'Defines a paragraph in an HTML document.',
                     attributes: [
                        {
                           name: 'id',
                           description:
                              'Specifies a unique id for an HTML element.',
                        },
                        {
                           name: 'class',
                           description:
                              'Specifies one or more class names for an HTML element.',
                        },
                     ],
                  },
               ],
            },
            {
               name: 'CSS',
               version: 'CSS3',
               description:
                  'Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in HTML or XML.',
               properties: [
                  {
                     name: 'color',
                     description:
                        'Sets the color of the text.',
                     values: [
                        {
                           value: 'red',
                           description:
                              'Sets the text color to red.',
                        },
                        {
                           value: 'blue',
                           description:
                              'Sets the text color to blue.',
                        },
                     ],
                  },
                  {
                     name: 'background-color',
                     description:
                        'Sets the background color of an element.',
                     values: [
                        {
                           value: 'white',
                           description:
                              'Sets the background color to white.',
                        },
                        {
                           value: 'black',
                           description:
                              'Sets the background color to black.',
                        },
                     ],
                  },
               ],
            },
            {
               name: 'JavaScript',
               version: 'ES6',
               description:
                  'JavaScript is a programming language used to create interactive effects within web browsers.',
               functions: [
                  {
                     name: 'alert()',
                     description:
                        'Displays an alert box with a specified message and an OK button.',
                     parameters: [
                        {
                           name: 'message',
                           type: 'string',
                           description:
                              'The message to display in the alert box.',
                        },
                     ],
                  },
                  {
                     name: 'getElementById()',
                     description:
                        'Returns the element with the specified ID.',
                     parameters: [
                        {
                           name: 'id',
                           type: 'string',
                           description:
                              'The ID of the element to find.',
                        },
                     ],
                  },
               ],
            },
         ],
      },
   })
})

// ================================================================

router.get('/js', function (req, res) {
   // res.render генерує нам HTML сторінку

   //            ↙ cюди вводимо назву файлу з сontainer
   res.render('js', {
      layout: 'basic',

      name: 'JavaScript',
      description:
         'JavaScript is a popular high-level, dynamic, and interpreted programming language.',
      history: {
         year: 1995,
         founder: 'Brendan Eich',
      },
      types: [
         'Number',
         'String',
         'Boolean',
         'Null',
         'Undefined',
         'Symbol',
         'Object',
      ],
      syntax: {
         variables: ['var', 'let', 'const'],
         functions: ['function'],
         conditionals: ['if', 'else', 'switch'],
         loops: ['for', 'while', 'do-while'],
         loops: ['class'],
      },
      features: [
         'First-class functions',
         'Closures',
         'Dynamic typing',
         'Prototype-based inheritance',
         'Asynchronous programming with Promises and async/await',
         'Modules with import/export statements',
      ],
      libraries: [
         'jQuery',
         'React',
         'Angular',
         'Vue',
         'Node.js',
         'Express.js',
         'Lodash',
         'Moment.js',
      ],
      tools: [
         'Babel',
         'Webpack',
         'ESLint',
         'Jest',
         'Mocha',
         'Chai',
         'Selenium',
         'Cypress',
      ],
      community: [
         {
            name: 'Stack Overflow',
            type: 'forum',
         },
         {
            name: 'JavaScript Weekly',
            type: 'newsletter',
         },
         {
            name: 'The Changelog',
            type: 'podcast',
         },
         {
            name: 'CSS-Tricks',
            type: 'blog',
         },
      ],
   })
   //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

// router.get Створює нам один ентпоїнт

router.get('/car', function (req, res) {
   // res.render генерує нам HTML сторінку

   //            ↙ cюди вводимо назву файлу з сontainer
   res.render('car', {
      layout: 'basic',

      make: 'Toyota',
      model: 'Camry',
      year: 2022,
      color: 'silver',
      features: {
         interior: {
            seats: {
               material: 'leather',
               color: 'black',
               heated: true,
               ventilated: true,
            },
            dashboard: {
               material: 'plastic',
               color: 'black',
               display: {
                  type: 'LCD',
                  size: 10.1,
                  resolution: '1280x720',
                  touchscreen: true,
               },
            },
            audio: {
               system: 'JBL',
               speakers: 8,
               subwoofer: true,
               bluetooth: true,
               USB: true,
            },
         },
         exterior: {
            wheels: {
               size: 18,
               type: 'alloy',
               color: 'silver',
            },
            headlights: {
               type: 'LED',
               brightness: 'high',
               automatic: true,
            },
            sunroof: {
               type: 'panoramic',
               size: 'large',
               automatic: true,
            },
         },
         safety: {
            airbags: {
               front: 2,
               side: 2,
               knee: 2,
               rear: 2,
            },
            assistance: {
               blind_spot_monitoring: true,
               rear_cross_traffic_alert: true,
               lane_departure_warning: true,
               adaptive_cruise_control: true,
               collision_warning: true,
            },
         },
      },
      engine: {
         type: 'gasoline',
         displacement: 2.5,
         horsepower: 206,
         torque: 186,
         transmission: {
            type: 'automatic',
            gears: 8,
         },
      },
      fuel_economy: {
         city: 28,
         highway: 39,
         combined: 32,
      },
      price: {
         base: 25900,
         destination: 995,
         options: {
            navigation: 1200,
            moonroof: 800,
            premium_paint: 595,
         },
         total: 28990,
      },
   })
   //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

// Підключаємо роутер до бек-енду
https: module.exports = router

// це ДЗ до модуль №2 урок №3
// №3 {{> product title=product.name price=product.cost img=product.img name=product.name}}
// №4 {{>userinfo name=user.name email=user.email phone=user.phone}}
// №5 {{> product title=product.name price=product.cost img=product.img name=product.name isAvaiable=product.isAvailable}}
// #6 {{> product title=product.name price=product.cost img=product.img name=product.name isAvaiable=product.isAvailable}}
