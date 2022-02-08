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
            <button>Törlés</button><br>
            <button>Szerkesztés</button>
          </td>
       </tr>
       <tr>
     
     </tr>
     </tbody>

    
   </table>
   <form>
     <label>Személy:</label><input type="text"><br>
     <label>Magasság:</label><input type="number"><br>
     <label>Ár:</label><input type="number"><br>
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
        name: "",
        height: '',
        price: ''
      },
      statues: []
    }
  },
  methods:{
    async loadData (){
      let Response = await fetch('http://127.0.0.1:8000/api/statues')
     this.statues = Response.json
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
