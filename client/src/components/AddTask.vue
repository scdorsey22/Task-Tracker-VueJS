<template>
<v-container>
<v-sheet width="700" class="mx-auto">
  <v-card>
  <v-form @submit="onSubmit" class="add-form">
    <v-text-field 
        type="text" 
        v-model="text" 
        name="text" 
        placeholder="Add Task" 
        required>
    </v-text-field>
    <v-text-field 
        type="text"
        v-model="date"
        name="day"
        placeholder="Add Day & Time"
        required>
    </v-text-field>
    <v-container class="form-control form-control-check">
      <label>Set Reminder</label>
      <input type="checkbox" v-model="reminder" name="reminder"/>
    </v-container>
    <v-btn color="green" type="submit" value="Save Task" block>Save Task</v-btn>
  </v-form>
  </v-card>
</v-sheet>
</v-container>
</template>


<script>
import {
  mdiCheckboxBlankOutline,
  mdiCheckboxMarked,
  mdiCheckboxMarkedOutline,
} from '@mdi/js'


export default {
    name: 'AddTask',
    data() {
        return {
            text: '',
            day: '',
            reminder: false,
             mdiCheckboxBlankOutline,
            mdiCheckboxMarked,
            mdiCheckboxMarkedOutline,
        }
    },
    methods: {
        onSubmit(e) {
            e.preventDefault()

            if(!this.text) {
                alert('Please add a task')
                return
            }

            const newTask ={
                id: Math.floor(Math.random() * 100000),
                text: this.text,
                date: this.date,
                reminder: this.reminder,
            }
           this.$emit('add-task', newTask)

            this.text = ''
            this.date = ''
            this.reminder = 'false'
        }
    }
}
</script>

<style scoped>
.add-form {
  margin-bottom: 40px;
}
.form-control {
  margin: 10px 0;
}
.form-control label {
  display: block;
}
.form-control input {
  width: 100%;
  height: 40px;
  margin: 1px;
  padding: 1px 1px;
  font-size: 20px;
}
.form-control-check {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.form-control-check label {
  flex: 10;
}
.form-control-check input {
  flex: 1;
  height: 20px;
}
</style>
