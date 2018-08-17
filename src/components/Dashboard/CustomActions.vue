<template>
    <div>
        <v-layout>
            <!-- Add button -->
            <v-flex xs4 v-if="!getSelectedCount">
                <v-btn icon @click="addItem()">
                    <v-icon medium>add_circle</v-icon>
                </v-btn>
            </v-flex>
            <!-- Delete Item Button and Dialog box -->
            <v-flex xs4 v-if="getSelectedCount">
                <v-dialog
                    v-model="deleteDialog"
                    max-width="380"
                    persistent
                    content-class="delete-dialog"
                    >
                    <v-btn icon slot="activator">
                        <v-icon medium>delete</v-icon>
                    </v-btn>
                    <v-card>
                        <v-card-title class="headline">Confirm Deletion</v-card-title>
                        <v-card-text>Are you sure you wat to delete {{ getSelectedCount }} listings?</v-card-text>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="green darken-1" flat @click.native="deleteDialog = false">No</v-btn>
                            <v-btn color="green darken-1" flat @click.native="deleteSelectedItems">Yes</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
            </v-flex> 
            <!-- Edit Item Button -->
            <v-flex xs4 v-if="getSelectedCount">
                <v-dialog
                    v-model="editDialog"
                    max-width="800"
                    persistent
                    content-class="edit-dialog"
                    >
                    <v-btn icon slot="activator">
                        <v-icon medium>edit</v-icon>
                    </v-btn>
                    <v-card>
                        <v-card-title class="headline">Edit Item</v-card-title>
                        <v-card-text>
                            <v-container grid-list-md>
                                <v-layout wrap>
                                    <v-flex xs12 sm6 md4>
                                        <v-text-field v-model="tempData.rfid" label="rfid" hint="RFID Number of worker's card" required></v-text-field>
                                    </v-flex>
                                    <v-flex xs12 sm6 md4>
                                        <v-text-field v-model="tempData.name" label="worker name" hint="Worker name"></v-text-field>
                                    </v-flex>
                                    <v-flex xs12 sm6 md4>
                                        <v-text-field v-model="tempData.dt" label="date-time" hint="DateTime to change to"></v-text-field>
                                    </v-flex>
                                </v-layout>
                            </v-container>
                            <small>*indicates required field</small>
                        </v-card-text>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="green darken-1" flat @click.native="editDialog = false">Cancel</v-btn>
                            <v-btn color="green darken-1" flat @click.native="editSelectedItems">Confirm</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
                <!-- <v-btn icon>
                    <v-icon medium @click="editItem()">edit</v-icon>
                </v-btn> -->
            </v-flex>
        </v-layout>
    </div>
</template>
<script>
export default {
    name: 'CustomActions',
    data(){
        return{
            deleteDialog: false,
            editDialog: false,
            tempData:{
                rfid: '',
                name: '',
                dt: ''
            }
        }
    },
    methods:{
        deleteSelectedItems(){
            this.deleteDialog = false   // to close the dialog box
            this.$store.dispatch('deleteSelectedWorkersListing')
        }
        ,
        editSelectedItems(){
            if (this.$store.getters.getSelectedCount
                &&
                !Object.values(this.tempData).some(str => str === "") ) {
                this.editDialog = false   // to close the dialog box
                this.$store.dispatch('editSelectedWorkersListing')
            }else{
                alert("Error Trying to edit - no selected data.")
                
            }
        },
        addItem(){
            // popup dialog box to add one item.
            // dispatch with payload.
            // ...
        }
    },
    computed:{
        getSelectedCount(){
            return this.$store.getters.getSelected.length
        }
    }
};
</script>
<style scoped>
.layout{
  align-items: center;
  justify-content: center;
}
</style>


