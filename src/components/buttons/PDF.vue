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
    ...mapState(['gymName', 'logo', 'frequencyOptions']),
    numCards() {
      return this.frequencyOptions.filter(option => true === option.checked).length;
    }
  },
  methods: {
    createPDF() {
      let time = this.getTime();
      let filename = `${this.gymName.replace(/\s/g, '_')}_price_matrix_${time}.pdf`;
      let element = this.getDisplay();
      let margin = 2 === this.numCards ? .25 : 1;
      let opt = {
        margin:       [margin, 0, 0, 0],
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
      let margin = 2 === this.numCards ? 0 : 64;
      let header = document.createElement('header');
      header.setAttribute('style', `display: flex; justify-content: center; margin: 0 0 ${margin}px; align-items: center;`);
      if (this.logo) {
        let logo = new Image();
        logo.src = this.logo;
        logo.setAttribute('style', 'margin-right: 1em');
        header.appendChild(logo);
      }
      let h1 = document.createElement('h1');
      h1.setAttribute('style', `font-size: 2.75em; margin: 0`);
      let gym = document.createTextNode(this.gymName);
      h1.appendChild(gym);
      header.appendChild(h1);
      
      let display = document.querySelector('#display-container');
      let pdf = display.cloneNode(true);
      pdf.setAttribute('style', 'display: flex; flex-flow: column nowrap; align-items: center;')
      pdf.insertBefore(header, pdf.firstChild);
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
