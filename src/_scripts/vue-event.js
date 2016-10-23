'use strict';

const $ = require('jquery');
let Vue = require('vue/dist/vue.js')
let vueResource = require('vue-resource');
Vue.use(vueResource);

let app = new Vue({
    delimiters: ['${', '}'],

    el: '#events',

    data: {
        event: { name: '', description: '', date: '' },
        events: []
    },

    mounted: function() {
        this.fetchEvents();
    },

    methods: {
        fetchEvents: function() {
            var events = [
                {
                    id: 1,
                    name: 'TIFF',
                    description: 'Toronto International Film Festival',
                    date: '09-10-2015'
                },
                {
                    id: 2,
                    name: 'The Martian Premiere',
                    description: 'The Martian comes to theatres.',
                    date: '10-02-2015'
                },
                {
                    id: 3,
                    name: 'SXSW',
                    description: 'Music, film and interactive festival in Austin, TX.',
                    date: '03-11-2016'
                }
            ];
            this.events = events;
        },

        addEvent: function() {
            if(this.event.name) {
                this.events.push(this.event);
                this.event = { name: '', description: '', date: '' };
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
                date: this.events[index].date
            };
            this.events.splice(index, 1);
        }
    }
});
