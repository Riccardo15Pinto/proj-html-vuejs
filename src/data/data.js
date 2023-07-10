import { reactive } from 'vue'

export const store = reactive({
icons : [

    {
        typeIcon : 'facebook',
        nameIcon: 'fa-brands fa-facebook'
    },  
    {
        typeIcon : 'twitter',
        nameIcon:'fa-brands fa-twitter'
    },  
    {
        typeIcon : 'instagram',
        nameIcon: 'fa-brands fa-instagram'
    },
    {
        typeIcon : 'linkedin',
        nameIcon: 'fa-brands fa-linkedin'
    },  
    {
        typeIcon : 'google-plus',
        nameIcon: 'fa-brands fa-google-plus'
    }, 
    {
        typeIcon : 'youtub',
        nameIcon: 'fa-brands fa-youtube'
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
]
})