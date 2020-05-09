<template>
  <div class="demo4">
    <form v-on:submit.prevent="submit">
      <div>
        <label for="first_name">first name</label>
        <input type="text" name="first_name" v-model.trim="applicant.firstname" id="first_name" />
      </div>
      <div>
        <label for="last_name">last name</label>
        <input type="text" name="last_name" v-model.trim.lazy="applicant.lastname" id="last_name" />
      </div>
      <div>
        <label for="age">Age</label>
        <input type="number" name="age" v-model.number="applicant.age" id="age" />
      </div>
      <div>
        <label for="male">Male</label>
        <input type="radio" name="sex" v-model="applicant.sex" id="male" value="male" />

        <label for="female">Female</label>
        <input type="radio" name="sex" v-model="applicant.sex" id="female" value="female" />
      </div>

      <div>
        <select name="course" id="course" v-model="applicant.course">
          <option value="react">React</option>
          <option value="vue">Vue</option>
        </select>
      </div>
      <button type="button" @click.exact="clear" @click.alt="useDefault">Clear</button>
      <button type="submit">Submit</button>
    </form>
    <div>#Spy {{JSON.stringify(applicant)}}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      applicant: {
        firstname: "",
        lastname: "",
        sex: "male",
        course: "react",
        age: 0
      }
    };
  },
  methods: {
    clear() {
      this.applicant = {
        firstname: "",
        lastname: "",
        sex: "male",
        course: "react",
        age: 0
      };
    },
    useDefault() {
      this.applicant = {
        firstname: "a",
        lastname: "b",
        sex: "male",
        course: "react",
        age: 1
      };
    },
    submit() {
      alert(JSON.stringify(this.applicant));
      this.applicant = {
        firstname: "",
        lastname: "",
        sex: "male",
        course: "react"
      };
    }
  }
};
</script>

<style>
</style>