import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        selected:[],
        workers: [
            // {
            //   rfid: 25872405745,
            //   worker_name: 'Moshe Malka',
            //   date: '2018-8-19 21:23:23'
            // },
            // {
            //   rfid: 8943563974865,
            //   worker_name: 'KKKkkkk Malka',
            //   date: '2018-2-09 11:23:23'
            // },
            // {
            //   rfid: 86586767,
            //   worker_name: 'kiko Malka',
            //   date: '2018-1-09 20:23:23'
            // },
            // {
            //   rfid: 235436456456,
            //   worker_name: 'Hana Hadad-Malka',
            //   date: '2018-2-29 18:23:23'
            // },
            {
              rfid: 12874645,
              worker_name: 'Blalalalal',
              date: '2018-10-17 12:23:23'
            },
            {
              rfid: 34859394756374563,
              worker_name: 'NEWWWWWWWW',
              date: '2018-7-11 1:3:2'
            }
          ]
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
            if(!payload){
                state.workers = []
                return
            }else{
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
            // const start = daterange[0].replace('T', ' ').split(".")[0]
            // const end = daterange[1].replace('T', ' ').split(".")[0]
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