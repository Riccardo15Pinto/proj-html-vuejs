import { reactive } from 'vue'

export const store = reactive({
icons : [

    {
        typeIcon : 'facebook',
        nameIcon: 'fa-brands fa-facebook',
        valid:true
    },  
    {
        typeIcon : 'twitter',
        nameIcon:'fa-brands fa-twitter',
        valid:true
    },  
    {
        typeIcon : 'instagram',
        nameIcon: 'fa-brands fa-instagram',
        valid:true
    },
    {
        typeIcon : 'linkedin',
        nameIcon: 'fa-brands fa-linkedin',
        valid:true
    },  
    {
        typeIcon : 'google-plus',
        nameIcon: 'fa-brands fa-google-plus',
        valid:true
    }, 
    {
        typeIcon : 'youtube',
        nameIcon: 'fa-brands fa-youtube',
        valid:true
    }, 
    {
        typeIcon : 'pinterest',
        nameIcon: 'fa-brands fa-pinterest',
    },
    {
        typeIcon : 'skype',
        nameIcon: 'fa-brands fa-skype',
    },   
    {
        typeIcon : 'other',
        nameIcon: 'fa-solid fa-basketball',
    },
    
],

voices:[
    {
        name:'Home',
    },
    {
        name:'Pages', 
    },
    {
        name:'Course Formats', 
    },
    {
        name:'Courses',
    },
    {
        name:'Demos',
    }
],

features:[
    {
        title:'Business',
        image:'fa-solid fa-chart-line'
    },
    {
        title:'Design',
        image:'fa-solid fa-palette'
    },
    {
        title:'Development',
        image:'fa-solid fa-gear'
    },
    {
        title:'Lifestyle',
        image:'fa-solid fa-face-smile'
    },
    {
        title:'Office Productivity',
        image:'fa-solid fa-wallet'
    }
],

testimonials:[
{
    title:'Investing for Your Future',
    nameAuthor: 'Linda Green',
    role:'Product Manager, Apple Inc',
    imagePath:'testimonial-1-1917x640-1-1914x639.jpg',
    description:'It is no exaggeration to say this MasterStudy experience was transformative–both professionally and personally. This workshop will long remain a high point of my life. Thanks again…. I am feeling energized and eager to start teaching my class next week. I can’t wait to use all of my new teaching tools. I will absolutely recommend this workshop to other educators!'
},
{
    title:'Paints of the Future',
    nameAuthor: 'Xatashi Froust',
    role:'SEO, Froust Inc',
    imagePath:'micah-296507-unsplash-1-copy-1-1920x700-1-1917x699.jpg',
    description:'The response to your MasterStudy has been really overwhelming! Those who participated in the workshop are spreading the word here on campus and the “buzz” is on. The VP of Instruction wants you to come back! Her goal is to have more faculty trained. She also wants to attend a workshop herself. Our President told me Masterstudy needs to be the cornerstone of our success program.”'
},
],

activities:[
    {
        title:'Become Udemy Affiliate',
        text:'Import Udemy courses to your website and earn commission on every sale!',
        image:'valentine.jpg'
    },
    {
        title:'Udemy Affiliate Sales',
        text:'Monetize your audience and attract new customers with Udemy',
        image:'slide-1.jpg'
    }
],

courses:[
    {
        id:'1',
        popular:true,
        imagePathM:'186792_41e4_4-272x161.jpg',
        imagePathL:'186792_41e4_4-544x322.jpg',
        title:'Become an Arabic Calligraphy Artist from Scratch',
        category:'Arts & Crafts',
        average:'4',
        actualPrice:'$199.99',
        price:'',
        time:'6 total Hours',
        teacher:'Omar Uddin',
        teacherImage:'4387876_78bc.jpg',
        description:'The Masterstudy LMS is a free plugin but there is a paid PRO version as well. PRO version has everything from the free plugin plus a bunch of premi...'
    },
    {
        id:'2',
        popular:true,
        imagePathM:'246154_d8b0_3-272x161.jpg',
        imagePathL:'246154_d8b0_3-544x322.jpg',
        title:'Web Designer for Beginners:Real world coding Html & CSS',
        category:'Development',
        average:'4',
        actualPrice:'$65.00',
        price:'$129.99',
        time:'11 total Hours',
        teacher:'Brad Schiff',
        teacherImage:'4387876_78bc.jpg',
        description:'TMasterstudy learning management system will meet the challenge. To make sure, keep watching the lessons and we’ll show how to work with plugin fast...'
    },
    {
        id:'3',
        popular:true,
        imagePathM:'366802_6fcc-272x161.jpg',
        imagePathL:'366802_6fcc-544x322.jpg',
        title:'Get Wine-smart',
        category:'Food & Beverage',
        average:'4',
        actualPrice:'$25.00',
        price:'$49.99',
        time:'6.5 total Hours',
        teacher:'John Boyer',
        teacherImage:'4387876_78bc.jpg',
        description:'Masterstudy learning management system will meet the challenge. To make sure, keep watching the lessons and we’ll show how to work with plugin fast...'
    },
    {
        id:'4',
        popular:true,
        imagePathM:'381588_2e6d_4-272x161.jpg',
        imagePathL:'381588_2e6d_4-544x322.jpg',
        title:'The Colored Pencil Drawing Course',
        category:'Arts & Crafts',
        average:'4',
        actualPrice:'$18.00',
        price:'$34.90',
        time:'5 total Hours',
        teacher:'Matthew Fussell',
        teacherImage:'4387876_78bc.jpg',
        description:'Among those features are gamification tools like points reward system, trial and group courses, assignments and lesson live streaming. You can lear...'
    },
    {
        id:'5',
        popular:true,
        imagePathM:'752950_b773-272x161.jpg',
        imagePathL:'752950_b773-544x322.jpg',
        title:'GitHub Ultimate:Master Git and GitHub - Beginner to Expert',
        category:'Development',
        average:'4',
        actualPrice:'$50.00',
        price:'$99.99',
        time:'6.5 total Hours',
        teacher:'Jason Taylor',
        teacherImage:'4387876_78bc.jpg',
        description:'The WordPress plugin is a part of the Masterstudy WordPress theme for the education business. Upgrading to the theme is optional but does come with...'
    },
    {
        id:'6',
        popular:true,
        imagePathM:'838056_611a_3-272x161.jpg',
        imagePathL:'838056_611a_3-544x322.jpg',
        title:'Paint Realistic WaterColor and Botanicols - STUDIO BASICS',
        category:'Arts & Crafts',
        average:'4',
        actualPrice:'$35.00',
        price:'$69.99',
        time:'3 total Hours',
        teacher:'Heidi Willis',
        teacherImage:'4387876_78bc.jpg',
        description:'Masterstudy LMS is a feature-rich WP product from StylemixThemes developed specifically for educational needs. Its main purpose is helping you to b...'
    },
    {
        id:'7',
        popular:true,
        imagePathM:'895786_7b4b_2-272x161.jpg',
        imagePathL:'895786_7b4b_2-544x322.jpg',
        title:'The Complete iOS 10 & Swift 3 Developer Course ',
        category:'Development',
        average:'4',
        actualPrice:'Free',
        price:'',
        time:'30 total Hours',
        teacher:'Rob Percival',
        teacherImage:'4387876_78bc.jpg',
        description:'The WordPress plugin is a part of the Masterstudy WordPress theme for the education business. Upgrading to the theme is optional but does come with...'
    },
    {
        id:'8',
        popular:false,
        imagePathM:'919872_ed54_6-272x161.jpg',
        imagePathL:'919872_ed54_6-544x322.jpg',
        title:'Android Java Masterclass - Became an App Developer',
        category:'Development',
        average:'4',
        actualPrice:'$50.00',
        price:'$99.99',
        time:'60.5 total Hours',
        teacher:'Tim Buchalka',
        teacherImage:'4387876_78bc.jpg',
        description:'The plugin is a full package of innovative features. The system includes a powerful admin panel and course builder, messaging system, advanced quiz...'
    },
    {
        id:'9',
        popular:true,
        imagePathM:'949316_2a64_11-272x161.jpg',
        imagePathL:'949316_2a64_11-544x322.jpg',
        title:'Fondation for Mastering Watercolors Painting',
        category:'Arts & Crafts',
        average:'5',
        actualPrice:'$10.00',
        price:'$19.99',
        time:'3.5 total Hours',
        teacher:'Jill Poyerd',
        teacherImage:'4387876_78bc.jpg',
        description:'Masterstudy LMS is a feature-rich WP product from StylemixThemes developed specifically for educational needs. Its main purpose is helping you to b...'
    },
    {
        id:'10',
        popular:false,
        imagePathM:'951684_9c1a_2-272x161.jpg',
        imagePathL:'951684_9c1a_2-544x322.jpg',
        title:'Xamarian Forms: Build Native Cross-platform Apps with C#',
        category:'Development',
        average:'4',
        actualPrice:'$95.00',
        price:'$189.99',
        time:'7.5 total Hours',
        teacher:'Mosh Hamedani',
        teacherImage:'4387876_78bc.jpg',
        description:'Masterstudy learning management system will meet the challenge. To make sure, keep watching the lessons and we’ll show how to work with plugin fast...'
    },
    {
        id:'11',
        popular:true,
        imagePathM:'1208228_d61c_4-272x161.jpg',
        imagePathL:'1208228_d61c_4-544x322.jpg',
        title:'Digitally painting Light and Color: Amateur to Master',
        category:'Design',
        average:'4',
        actualPrice:'$70.00',
        price:'$139.99',
        time:'5.5 total Hours',
        teacher:'Austin Batchelor',
        teacherImage:'4387876_78bc.jpg',
        description:'The plugin is a full package of innovative features. The system includes a powerful admin panel and course builder, messaging system, advanced quiz...'
    },
    {
        id:'12',
        popular:false,
        imagePathM:'1253188_58f7_2-272x161.jpg',
        imagePathL:'1253188_58f7_2-544x322.jpg',
        title:'The Complete iOS 11 & Swift Developer Course : Build 20 Apps',
        category:'Development',
        average:'4',
        actualPrice:'$100.00',
        price:'$199.99',
        time:'36.5 total Hours',
        teacher:'Rob Percival',
        teacherImage:'4387876_78bc.jpg',
        description:'The Masterstudy LMS is a free plugin but there is a paid PRO version as well. PRO version has everything from the free plugin plus a bunch of premi...'
    },
    {
        id:'13',
        popular:true,
        imagePathM:'1414956_d944_15-272x161.jpg',
        imagePathL:'1414956_d944_15-544x322.jpg',
        title:'Martering Brushstrokes - Part 1',
        category:'Arts & Craft',
        average:'5',
        actualPrice:'$10.00',
        price:'$19.99',
        time:'5 total Hours',
        teacher:'Jill Poyerd',
        teacherImage:'4387876_78bc.jpg',
        description:'Whenever it comes to individual instructors, language or coaching centers, universities, and eLearning platforms'
    },
    {
        id:'14',
        popular:true,
        imagePathM:'1561458_7f3b-272x161.jpg',
        imagePathL:'1561458_7f3b-544x322.jpg',
        title:'CSS - The Complete Guide 2020 (incl.Flexbox,Grid & Sass)',
        category:'Design',
        average:'5',
        actualPrice:'$100.00',
        price:'$199.99',
        time:'23 total Hours',
        teacher:'Academind by Maximilian Schwarzmüller',
        teacherImage:'4387876_78bc.jpg',
        description:'The Masterstudy LMS is a free plugin but there is a paid PRO version as well. PRO version has everything from the free plugin plus a bunch of premi...'
    }, 
    {
        id:'15',
        popular:true,
        imagePathM:'1776542_30b1-272x161.jpg',
        imagePathL:'1776542_30b1-544x322.jpg',
        title:'Google Searching Ninja!',
        category:'Google',
        average:'4',
        actualPrice:'$45.00',
        price:'$89.99',
        time:'1.5 total Hours',
        teacher:'Marcin Stasko',
        teacherImage:'4387876_78bc.jpg',
        description:'Among those features are gamification tools like points reward system, trial and group courses, assignments and lesson live streaming. You can lear...'
    },
    {
        id:'16',
        popular:true,
        imagePathM:'1109398_4c13-272x161.jpg',
        imagePathL:'1109398_4c13-544x322.jpg',
        title:'Paint Realistic Watercolour and botanicals Magnolias',
        category:'Arts & Crafts',
        average:'5',
        actualPrice:'$35.00',
        price:'$$69.99',
        time:'7 total hours',
        teacher:'Heidi Willis',
        teacherImage:'4387876_78bc.jpg',
        description:'Masterstudy LMS plugin was designed for everyone. It literally covers every need in the niche of the education business.'
    },




],

categories:[
    {
        name:'Business',
    },
    {
        name:'Design',
    },
    {
        name:'Development',
    },
    {
        name:'Health & Fitness',
    },
    {
        name:'It & Software',
    },
    {
        name:'Lifestyle',
    },
    {
        name:'Marketing',
    },
    {
        name:'Music',
    },
    {
        name:'Office Productivity',
    },
    {
        name:'Photography',
    },
],

contacts:[
    {
        title:'Become an Instructor',
        description:'Teach what you love. Masterstudy gives you the tools to create a course.',
        imagePath:'image_box_1-221x231.png',
        inizialize:'START TEACHING'
    },
    {
        title:'Access For Business',
        description:'Get unlimited access to 2,500 of top courses for your team.',
        imagePath:'image_box_2-234x231.png',
        inizialize:'DOING BUSINESS'
    }
]

})