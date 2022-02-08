<template>
  <div id="app">
    <h1>Szobrok</h1>
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

    
   </table><br>
   <form>
     <label>Személy:</label><input type="text" v-model="statue.person"><br>
     <label>Magasság:</label><input type="number" v-model="statue.height"><br>
     <label>Ár:</label><input type="number" v-model="statue.price"><br>
     <button  @click="hozzaad" >Mentés</button>
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
         this.reset()
    },

    async szerkesztes(id) {
      this.szerkeszt = true
      let Response = await fetch(`http://127.0.0.1:8000/api/statues/${id}`)
     let data = await Response.json();
     this.statue = {...data}
    },

     reset() {
      this.statue = {
        id:null,
        person: "",
        height: '',
        price: ''
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
         
         this.reset()
      
      },
     megse() {
        this.reset()
      }
  },
  mounted() {
    this.loadData()
  }
  

}
  

</script>

<style>
table {
  margin: auto;
  border: 2px solid darkblue;
}
th{
  border: 1px solid darkblue;
  padding: 10px 10px 10px 10px;
}
td{
  border: 1px solid darkblue;
  padding: 10px 10px 10px 10px;
}

form {
  box-sizing: content-box;
  text-align: center;
  border: 1px solid brown;

}

input[type=text] {
  border: 2px solid red;
  border-radius: 4px;
}
input[type=number] {
  border: 2px solid green;
  border-radius: 4px;
}

h1 {
  text-align: center;
  color: red;
  text-transform: uppercase;
  font-size: 50px;
  text-decoration: underline;
}
#app {
  background-color: seashell;
}
</style>
