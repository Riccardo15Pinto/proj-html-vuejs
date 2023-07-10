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
]
})