Vue.component('editable', {
  props: ['value'],
  template: `
  <p>
    <span @click="onClick" v-show="!editing">
      {{value}}
    </span>
    <span v-show="editing" >
      <input :value="value"
             @input="$emit('input', $event.target.value)"
             @blur="onBlur"
             @keydown.enter="onBlur"
             type="text" >
    </span>
  </p>
  `,
  data(){
    return {
      editing: false,
    }
  },
  methods: {
    onClick: function() {
      this.editing = true;
    },
    onBlur: function() {
      if (this.value && this.value.trim().length > 0) {
        this.editing = false;
        this.$emit('update', this.value);
      }
    }
  }
});