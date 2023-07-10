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
]
})