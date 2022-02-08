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
            <button @click="szerkesztes(statue.id)">Szerkesztés</button>
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
     <button v-if="!szerkeszt"   @click="hozzaad" >Mentés</button>
     <button v-if="szerkeszt"  @click="mentes" >Mentés</button>
     <button @click="megse">Mégse</button>
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
      szerkeszt:false,
      ment: false,
      statue: {
        id:null,
        person: "",
        height: null,
        price: null
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
    },
    
    async hozzaad() {
      
      await fetch('http://127.0.0.1:8000/api/statues', {
        method: 'POST', 
        headers:{
            'Content-Type' : 'application/json',
            'Accept' : 'application/json' 
        },
        body: JSON.stringify(this.statue)
      })
      await this.loadData()
      
    },

    async szerkesztes(id) {
      this.szerkeszt = true
      let Response = await fetch(`http://127.0.0.1:8000/api/statues/${id}`)
     let data = await Response.json();
     this.statue = {...data}
    },

    async reset() {
      this.statue = {
        id:null,
        person: "",
        height: null,
        price: null
      },
    this.szerkesz4 = false
    },
    
      async mentes() {
         
        await fetch(`http://127.0.0.1:8000/api/statues/${this.statue.id}`,
        {
          method: 'PATCH',
          headers: {
            'Content-Type' : 'application/json',
            'Accept' : 'application/json' 
          },
          body: JSON.stringify(this.statue)
        })
         await this.loadData()
         this.ment = false
         this.reset()
      
      },
    async megse() {
        this.reset()
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
