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
      layout: 'person',

      person: {
         name: 'Emma Johnson',
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

// Підключаємо роутер до бек-енду
module.exports = router

// це ДЗ до модуль №2 урок №3
// №3 {{> product title=product.name price=product.cost img=product.img name=product.name}}
// №4 {{>userinfo name=user.name email=user.email phone=user.phone}}
// №5 {{> product title=product.name price=product.cost img=product.img name=product.name isAvaiable=product.isAvailable}}
// #6 {{> product title=product.name price=product.cost img=product.img name=product.name isAvaiable=product.isAvailable}}
