<template>
  <div>
    <router-view></router-view>
    <div class="mx-80 flex flex-col justify-center">
      <div class="flex justify-between items-center">
        <h1 class="py-20 uppercase font-bold ">LE MIE CLASSI</h1>
        <button
          @click="addClassroom()"
          class="flex items-center justify-center border border-transparent text-base font-medium rounded-md text-white bg-indigo-700 hover:bg-indigo-200 hover:text-indigo-700 md:py-2 md:text-lg md:px-4"
        >
          ADD
        </button>
      </div>
      <table class="text-left">
        <tr>
          <th
            :class="header.custom_css"
            class="bg-blue-100 p-5 border-b-2 border-t-2 font-bold uppercase"
            v-for="header in headers"
            :key="header.index"
          >
            {{ header.nome }}
          </th>
        </tr>
        <tr v-for="classroom in classrooms" :key="classroom.id">
          <td class="p-5 border-l-2 border-b-2">{{ classroom.name }}</td>
          <td class="p-5 border-b-2">...</td>
          <td class="p-5 border-b-2">...</td>
          <td class="p-5 border-r-2 border-b-2 text-center">
            <a @click="viewClassroom(classroom.id)"
              ><button
                class="inline-flex items-center justify-center px-5 py-3 mx-2 border-2 text-base font-medium rounded-md text-black bg-white hover:bg-indigo-100"
              >
                👁️
              </button></a
            >
            <a @click="editClassroom(classroom.id)"
              ><button
                class="inline-flex items-center justify-center px-5 py-3 mx-2 border-2 text-base font-medium rounded-md text-black bg-white hover:bg-indigo-100"
              >
                ✏️
              </button></a
            >
            <a @click="deleteClassroom(classroom.id)"
              ><button
                class="inline-flex items-center justify-center px-5 py-3 mx-2 border-2 text-base font-medium rounded-md text-black bg-white hover:bg-indigo-100"
              >
                🗑️
              </button></a
            >
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "ClassroomsList",
  data() {
    return {
      classrooms: [],
      headers: [
        {
          nome: "classe",
          custom_css: "w-1/4 border-l-2 underline",
        },
        {
          nome: "partecipanti",
          custom_css: "w-1/5 underline",
        },
        {
          nome: "media",
          custom_css: "w-1/5 underline",
        },
        {
          nome: "",
          custom_css: "w-2/3 border-r-2",
        },
      ],
    };
  },
  async mounted() {
    let response = await this.$api.get("/classrooms");
    this.classrooms = response.data;
  },
  methods: {
    viewClassroom(classroomId) {
      this.$router.push({
        name: "classrooms_view",
        params: {
          id: classroomId,
        },
      });
    },
    addClassroom() {
      this.$router.push({
        name: "classrooms_add",
      });
    },
    editClassroom(classroomId) {
      this.$router.push({
        name: "classrooms_edit",
        params: {
          id: classroomId,
        },
      });
    },
    async deleteClassroom(classroomId) {
      await this.$api.delete(`/classrooms/delete/${classroomId}`);
      let response = await this.$api.get("/classrooms");
      this.classrooms = response.data;
    },
  },
};
</script>
