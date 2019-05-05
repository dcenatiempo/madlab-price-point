<template>
  <button class="pdf" @click="createPDF">Create PDF</button>
</template>

<script>
import { mapState } from 'vuex';
import html2pdf from 'html2pdf.js';

export default {
  name: 'PDF',
  components: {},
  props: [],
  computed: {
    ...mapState(['gymnName', 'frequencyOptions']),
    numCards() {
      return this.frequencyOptions.filter(option => true === option.checked).length;
    }
  },
  methods: {
    createPDF() {
      let time = this.getTime();
      let filename = `${this.gymnName.replace(/\s/g, '_')}_price_matrix_${time}.pdf`;
      let element = this.getDisplay();
      let opt = {
        margin:       .5,
        filename:     filename,
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2 },
        jsPDF:        { unit: 'in', format: 'letter', orientation: 'landscape' }
      };

      html2pdf().from(element).set(opt).save();
    },
    getTime() {
      let now = new Date(Date.now());
      let options = { year: 'numeric', month: 'short', day: 'numeric' };
      return now.toLocaleDateString('en-US', options).replace(/\s/g, '_').replace(/,/g, '');
    },
    getDisplay() {
      debugger
      let margin = 2 === this.numCards ? 16 : 64;
      let h1 = document.createElement('h1');
      h1.setAttribute('style', `margin: 0 auto ${margin}px; font-size: 3em;`)
      let gymn = document.createTextNode(this.gymnName);
      h1.appendChild(gymn);
      let display = document.querySelector('#display-container');
      let pdf = display.cloneNode(true);
      pdf.setAttribute('style', 'display: flex; flex-flow: column nowrap; align-items: center;')
      pdf.insertBefore(h1, pdf.firstChild);
      return pdf;
    }
  }
}
</script>

<style lang="scss">
#app {
  .pdf {
    transition: all ease .1s;

  &:hover {
    background: #0080c6;
    border: 1px solid #0080c6;
    color: white;
    font-weight: bold;
  }
}
}
</style>
