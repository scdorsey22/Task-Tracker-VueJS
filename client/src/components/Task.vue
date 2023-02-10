<template>
    <v-sheet 
    @dblclick="$emit('toggle-reminder', task.id)" 
    :class="[task.reminder ? 'reminder' : '', 'task']"
    >
        <h3>
            {{task.text}}
            <v-icon @click="$emit('delete-task', task.id)" class="fas fa-times"></v-icon>
        </h3>
        <p>{{ task.date }}</p>
    </v-sheet>
</template>

<script>
import {mdiDelete} from '@mdi/js'

    export default {
        name: "Task",
        props: {
            task: Object
        },
        data: () => ({
          icons: {
            mdiDelete
          }
        })
    }
</script>

<style scope>
.fas {
  color: red;
}
.task {
  margin: 5px;
  padding: 10px 20px;
  cursor: pointer;
}
.task.reminder {
  border-left: 10px solid green;
}
.task h3 {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

</style>
