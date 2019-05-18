<template>
  <div class="image-uploader"
      :style="`width: ${width}`">
    <input v-show="!logo"
      type="file"
      name="fileToUpload" id="fileToUpload"
      ref="image-uploader"
      accept="image/png, image/jpeg, image/gif"
      @change="handleFileInput"
      :style="`width: ${width};`"/>
    <img :src="logo"
        :style="`max-width: ${width}; max-height: ${width}; margin: .5rem auto;`"/>
    <button v-if="logo" class="edit icon" @click="edit"><svg height="32" viewBox="0 0 48 48" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 34.5v7.5h7.5l22.13-22.13-7.5-7.5-22.13 22.13zm35.41-20.41c.78-.78.78-2.05 0-2.83l-4.67-4.67c-.78-.78-2.05-.78-2.83 0l-3.66 3.66 7.5 7.5 3.66-3.66z"/></svg></button>
    <button v-if="logo" class="delete icon" @click="maybeDelete"><svg enable-background="new 0 0 80 80" height="32px" width="32px" version="1.1" viewBox="0 0 80 80" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><polygon points="56.971,52.728 44.243,40 56.971,27.272 52.728,23.029 40,35.757 27.272,23.029 23.029,27.272 35.757,40   23.029,52.728 27.272,56.971 40,44.243 52.728,56.971 "/></svg></button>
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
      tooltip: '',
      showUpload: true,
    }
  },
  props: ['width'],
  computed: {
    ...mapGetters(['logo']),
  },
  methods: {
    ...mapMutations(['setLogo']),
    maybeDelete() {
      if (confirm("Are you sure you would like to delete this logo?")) {
        this.setLogo();
      }
    },
    edit() {
      // this.showUpload = !this.showUpload;
      this.$refs['image-uploader'].click();
    },
    handleFileInput(e) {
      let vm = this;
      // let path = e.target.value;
      let file = e.target.files[0];
      const reader = new FileReader();

      reader.onload = function(){
        let dataURL = reader.result;
        let newHeight = 90;
        let imageType = dataURL.split(';base64')[0].replace('data:', '');
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
#app {
.image-uploader {
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;

  button.icon {
    border: none;
    padding: 0;
    background: transparent;

    svg {
        polygon,
        path {
        fill: gray;
      }
    }
    &:hover svg {
        polygon,
        path {
          fill: black;
        }
    }
  }
  button.delete {
    position: absolute;
    top: -2rem;
    right: 0;
  }
  button.edit {
    position: absolute;
    top: -2rem;
    right: 2.5rem;
  }

  div.temp-image {
    position: fixed;
    visibility: hidden;
  }
}
}
</style>
