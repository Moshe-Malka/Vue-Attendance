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
                    v-model="dialog"
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
                            <v-btn color="green darken-1" flat @click.native="dialog = false">No</v-btn>
                            <v-btn color="green darken-1" flat @click.native="deleteSelectedItems">Yes</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
            </v-flex> 
            <!-- Edit Item Button -->
            <v-flex xs4 v-if="getSelectedCount">
                <v-btn icon>
                    <v-icon medium @click="editItem()">edit</v-icon>
                </v-btn>
            </v-flex>
        </v-layout>
    </div>
</template>
<script>
export default {
    name: 'CustomActions',
    data(){
        return{
            dialog: false
        }
    },
    methods:{
        deleteSelectedItems(){
            this.dialog = false   // to close the dialog box
            this.$store.dispatch('deleteSelectedWorkersListing')
        }
        ,
        editItem(){
            // popup dialog box to edit one item.
            // dispatch with payload.
            // ...
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


