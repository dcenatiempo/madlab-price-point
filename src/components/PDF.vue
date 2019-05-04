<template>
  <div id="pdf-maker">
    <button @click="createPDF">Create PDF</button>
  </div>
</template>

<script>
import html2pdf from 'html2pdf.js';

export default {
  name: 'PDF',
  components: {},
  props: [],
  computed: {},
  methods: {
    createPDF() {
      let element = document.querySelector('#display');
      let opt = {
        margin:       1,
        filename:     'myfile.pdf',
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2 },
        jsPDF:        { unit: 'in', format: 'letter', orientation: 'landscape' }
      };

      html2pdf().from(element).set(opt).save();
    }
  }
}
</script>

<style lang="scss">
#pdf-maker {

}
</style>
