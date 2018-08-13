import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        selected:[],
        workers: []
    },
    getters:{   // computed 
        getWorkersListing(state){
            return state.workers
        },
        getSelected(state){
            return state.selected
        }
    },
    mutations:{ //responsible for settting and updating the state.
        setSelected(state, payload){
            state.selected = payload
        },
        setWorkers(state, payload){
            if(Object.keys(payload).length === 0 && payload.constructor === Object){
                state.workers = []
                return
            }else{
                state.workers = []
                let output = []
                payload.forEach(element => {
                    element.attandanceTimestamps.forEach( ts => {
                        output.push({
                            worker_name: element.name,
                            rfid: element.rfid,
                            date: ts
                        })
                    });
                });
                state.workers = output
            }
        }
    },
    actions:{   // methods
        fetchWorkersInRange({commit}, start, end){
            axios.get('http://localhost:3000/api/getWorkersInRange',
                                        { params:
                                            { start,
                                                end
                                            }
                                        }
                                        ).then( response => {
                                            commit('setSelected',[])
                                            commit('setWorkers', response.data)
                                        })            
        },
        // async deleteSelectedWorkersListing({commit}){
        //     try{
        //         const toDel = commit.getSelected.map(worker => worker.rfid)
        //         const response = await axios.get(`http://jsonplaceholder.com/posts/${toDel}`)
        //         commit('setSelected',[])
        //         commit('setWorkers', response)
        //     } catch(e){
        //         return
        //     }
        // },
        // async addWorkerListing({commit}, payload){
            //...
        // },
        // async editWorkerListing({commit}, payload){
            //...
        // },
        // async authUser({commit}, payload){
        //     try{
        //         const response = await axios.get(`http://jsonplaceholder.com/posts/${payload}`)
        //         if(response){
        //             return response
        //         }
        //     } catch(e){
        //         return
        //     }
        // }

    }
})