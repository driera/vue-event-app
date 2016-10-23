'use strict';

const $ = require('jquery');
let Vue = require('vue/dist/vue.js')
let vueResource = require('vue-resource');
let Data = require('./vue-event-data.js');
Vue.use(vueResource);

let app = new Vue({
    delimiters: ['${', '}'],

    el: '#events',

    data: {
        event: { name: '', description: '', color: '', date: '' },
        events: []
    },

    mounted: function() {
        this.fetchEvents();
    },

    methods: {
        fetchEvents: function() {
            this.events = Data;
        },

        addEvent: function() {
            if(this.event.name) {
                this.events.push(this.event);
                this.event = { name: '', description: '', color: '', date: '' };
            }
        },

        deleteEvent: function(index) {
            if(confirm("Are you sure you want to delete this event?")) {
                this.events.splice(index, 1);
            }
        },

        editEvent: function(index) {
            this.event = {
                name: this.events[index].name,
                description: this.events[index].description,
                color: this.events[index].color,
                date: this.events[index].date
            };
            this.events.splice(index, 1);
        }
    }
});
