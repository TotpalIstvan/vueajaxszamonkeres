<template>
  <div id="app">
   <table>
     <thead>
     <tr>
       <th>Személy</th>
       <th>Magasság</th>
       <th>Ár</th>
       <th>Műveletek</th>
     </tr>
     </thead>
     <tbody>
       <tr v-for="statue in statues" :key="statue.id">
          <td>{{ statue.person }}</td>
          <td>{{ statue.height }}</td>
          <td>{{ statue.price }}</td>
          <td>
            <button @click="torles(statue.id)">Törlés</button>
            <button>Szerkesztés</button>
          </td>
       </tr>
       <tr>
     
     </tr>
     </tbody>

    
   </table>
   <form>
     <label>Személy:</label><input type="text" v-model="statue.person"><br>
     <label>Magasság:</label><input type="number" v-model="statue.height"><br>
     <label>Ár:</label><input type="number" v-model="statue.price"><br>
     <button>Mentés</button>
     <button>Mégse</button>
     </form>
  </div>
</template>

<script>


export default {
  name: 'App',
  components: {
   
  },
    data() {
    return {
      statue: {
        id:null,
        person: "",
        height: '',
        price: ''
      },
      statues: []
    }
  },
  methods:{
    async loadData (){
      let Response = await fetch('http://127.0.0.1:8000/api/statues')
     let data = await Response.json();
     this.statues = data;
    },

    async torles(id) {
       await fetch(`http://127.0.0.1:8000/api/statues/${id}`, {
        method: 'DELETE'
      })
      await this.loadData()
    }
  },
  mounted() {
    this.loadData()
  }
  

}
  

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
