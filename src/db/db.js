import { app } from "../config";

const db = app.firestore();

export const mensajes = db.collection("mensajes");
const mapaNotificaciones = new Map();
const notificaciones = {titulo:'', mensaje:''}

mensajes.onSnapshot(async (model) => {
  (await mensajes.get()).docs.forEach((collection) => {
    const keyCollectionEmpty = mapaNotificaciones.get(collection.id);
    if (keyCollectionEmpty === undefined) {
      mapaNotificaciones.set(collection.id, collection.data());
      notificaciones.mensaje = (collection.data()).texto;
      notificaciones.titulo = (collection.data()).Titulo;
    }
  });
  navigator.serviceWorker.register("service-worker.js");
  Notification.requestPermission(async function (result) {
    if (result === "granted") {
      const not = await navigator.serviceWorker.ready.then(function (registration) {
        registration.showNotification(notificaciones.titulo, {
          body: notificaciones.mensaje,
          vibrate: [200,200,200,200,200],
          silent: false,
        });
      });
    }
  });
});