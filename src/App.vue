<template>
  <div id="app">
    <div class="col-sm-12 p-3">
      <div class="container-fluid py-2" >
          <span>Escribe texto de Notificación</span>
          <input v-model="text" type="text" class="form-control">
          <button @click="send" class="btn btn-primary my-2">Enviar notificación</button>
      </div>
    </div>
  </div>
</template>
<script>
import {mensajes}  from './db/db';
export default {
  data(){
    return {
      text:''
    }
  },
  methods: {
    async send() {
      if(this.text != '') {
         const constructMessage = {
        Titulo:'Notificación',
        texto:this.text
      }
      await mensajes.add(constructMessage);
      this.text = '';
      return;
      }
      alert('Debes de escribir un texto')
    }
  }
};
</script>