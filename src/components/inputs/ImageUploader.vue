<template>
  <div class="image-uploader"
      :style="`width: ${width}`">
    <input type="file"
        name="fileToUpload" id="fileToUpload"
        accept="image/png, image/jpeg, image/gif"
        @change="handleFileInput"
        :style="`width: ${width};`"/>
    <img :src="logo"
        :style="`max-width: ${width}; max-height: ${width}`"/>
    <div class="temp-image" ref="imageHolder"/>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import { setTimeout } from 'timers';

export default {
  name: 'ImageUploader',
  components: {},
  data() {
    return  {
      tooltip: ''
    }
  },
  props: ['width'],
  computed: {
    ...mapGetters(['logo']),
  },
  methods: {
    ...mapMutations(['setLogo']),
    handleFileInput(e) {
      let vm = this;
      // let path = e.target.value;
      let file = e.target.files[0];
      const reader = new FileReader();

      reader.onload = function(){
        let dataURL = reader.result;
        let newHeight = 90;
        let imageType = dataURL.split(';base64')[0].replace('data:', '');
        debugger
        let imageArguments = null;

        // let blobURL = window.URL.createObjectURL(dataURL);
        vm.downscaleImage(dataURL, newHeight, imageType, imageArguments).then(scaledDataURL => {
          vm.setLogo(scaledDataURL);
        });
      };

      reader.onerror = function(e) {
        console.log(e);
      }

      reader.onabort = function() {
      }

      reader.readAsDataURL(file);
    },
    downscaleImage(dataUrl, newHeight, imageType = 'image/jpeg', imageArguments = 0.7) {
      var image, oldWidth, oldHeight, newWidth, canvas, ctx, newDataUrl;

      // Create a temporary image so that we can compute the height of the downscaled image.
      image = new Image();
      image.src = dataUrl;
      this.$refs.imageHolder.appendChild(image);
      return this.delay(1).then( () => {
        oldWidth = image.width;
        oldHeight = image.height;
        newWidth = Math.floor(oldWidth / oldHeight * newHeight)

        // Create a temporary canvas to draw the downscaled image on.
        canvas = document.createElement("canvas");
        canvas.width = newWidth;
        canvas.height = newHeight;

        // Draw the downscaled image on the canvas and return the new data URL.
        ctx = canvas.getContext("2d");
        ctx.drawImage(image, 0, 0, newWidth, newHeight);
        newDataUrl = canvas.toDataURL(imageType, imageArguments);

        // remove temp image
        
        this.$refs.imageHolder.removeChild(this.$refs.imageHolder.childNodes[0]);
        return Promise.resolve(newDataUrl);
      })
        
      
    },
    delay(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }
  }
}
</script>

<style lang="scss">
.image-uploader {
  display: flex;
  flex-flow: column nowrap;
  align-items: center;

  div.temp-image {
    position: fixed;
    visibility: hidden;
  }
}
</style>
