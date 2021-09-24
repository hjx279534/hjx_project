// 路由
import VueRouter from 'vue-router'
import Vue  from 'vue'
import Index from '../views/index.vue'
import Neopterin from '../components/index/neopterin.vue'
import Ranking from '../components/index/ranking.vue'
import Mv from '../components/index/MV.vue'
import Footer from '../components/index/footer.vue'
import Login from '../components/login/login.vue'
import Register from '../components/register/register.vue'

Vue.use(VueRouter)

const routers=[
    {
        path:'/index',
        component:Index,
    },
    {
        path:'/new',
        component:Neopterin
    },
    {
        path:'/ranking',
        component:Ranking
    },
    {
        path:'/mv',
        component:Mv        
    },
    {
        path:'/footer',
        component:Footer
    },
    {
        path:'/login',
        component:Login
    },
    {
        path:'/register',
        component:Register
    },
    {
        path:'/',
        redirect:'/login'
    }
]


const router = new VueRouter({
    mode:'history',
    routes:routers
})

// 导航守卫
router.beforeEach((to, from, next) => {
    var isAuthenticated=false
    if(localStorage.getItem('cookie')==null || localStorage.getItem('cookie')==''){
        isAuthenticated=false
    }else{
        isAuthenticated=true
    }
    if (to.path !== '/login' && to.path !== '/register'  && !isAuthenticated) next({ path: '/' })
    else {        
        next()
    }
  })

export default router
