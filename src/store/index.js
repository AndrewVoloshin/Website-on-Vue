import Vue from 'vue'
import Vuex from 'vuex'
import menu from '@/store/menu.js'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isActiveSidebar: false,
    isActiveButtonOrder:false,
    isRegistered:true,
    valueGeneralOrder:0,
    mainOrderList:[],
  },                    
  getters: {
    computedOrder(state){
      let localOrderList=[]
      for (let key in state.menu){
        state.menu[key].forEach((elem)=>{
          if(elem.order>0) localOrderList.push(elem)
        })
      }
      return  localOrderList
    },

  },
  mutations: {
  },
  actions: {
  },
  modules: {
    menu
  }
})
