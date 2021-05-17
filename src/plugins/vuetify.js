import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    font: {
        family: 'Red Hat Text'
    },
    theme: {
        themes: {
            light:{
                primary: '#005f9e',
                secondary: '#f46b10',
                anchor: '#8c9eff',
                success: '#0f9d58',
                danger: '#db4437',
                info: '#7c6992'
            }
        }
    }
});
