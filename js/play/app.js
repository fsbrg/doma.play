import api from '../api';
import Engine from './engine';
import Views from './components';

const engine = new Engine();
const statusEl = document.getElementById('status');
const sceneEl = document.getElementById('scene');

function checkReady() {
  api.get('/play/ready', ({success}) => {
    if (success) {
      clearInterval(interval);
      Views.Splash(sceneEl, success, () => engine.start());
    } else {
      Views.Splash(sceneEl, success);
    }
  });
}

checkReady();
let interval = setInterval(() => {
  checkReady();
}, 200);
