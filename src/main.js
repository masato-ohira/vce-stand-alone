'use strict'

import 'es6-promise/auto'
import 'document-register-element'
import Vue from 'vue'
import store from '@/store'

import 'bulma/bulma.sass'
import 'loaders.css/src/loaders.scss'

import vueCustomElement from 'vue-custom-element'
Vue.use(vueCustomElement)

import VceLoader from '@c/vce-loader'
Vue.customElement('vce-loader', VceLoader, {store})


