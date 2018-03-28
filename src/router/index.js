import Vue from 'vue'
import Router from 'vue-router'

import information from '../components/information'
import projects from '../components/projects'
import skills from '../components/skills'
import contacts from '../components/contacts'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: information
    },
    {
      path: '/information',
      component: information
    },
    {
      path: '/projects',
      component: projects
    },
    {
      path: '/skills',
      component: skills
    },
    {
      path: '/contacts',
      component: contacts
    }
  ]
})
