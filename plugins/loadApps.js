import Vue from 'vue'
import config from '@/assets/apps.json'

/**
 * populate vue instance with metadata
 */
Vue.prototype.$apps = config
