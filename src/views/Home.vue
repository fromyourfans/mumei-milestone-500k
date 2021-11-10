<template>
  <div>
    <!-- HEADER -->
    <div class="header" id="header">
      <div class="headbg mx-auto"></div>
      <div class="wings mx-auto"></div>
    </div>

    <!-- BAR -->
    <div class="bar text-center">
      <div class="mainphoto">
        <div class="mainphoto-box">
          <v-img
            :aspect-ratio="1"
            lazy-src="https://pbs.twimg.com/media/FDx_j3wVUAQzKkb?format=jpg&name=medium"
            src="https://pbs.twimg.com/media/FDx_j3wVUAQzKkb?format=jpg&name=medium"
          ></v-img>
        </div>
      </div>
    </div>

    <!-- CONTENT -->
    <div class="content">
      <v-container class="content-grid pt-16">
        <div class="ribbon ribbon-left"></div>
        <div class="ribbon ribbon-right"></div>
        <p class="text-center mb-2">
          <v-btn text
            color="red" elevation="0" class="mr-4"
            href="https://www.youtube.com/channel/UC3n5uGu18FoCy23ggWWp8tA"
            target="_blank">
            <v-icon left>mdi-youtube</v-icon> YouTube
          </v-btn>
          <v-btn text
            color="blue lighten-2" elevation="0" class="mr-4"
            href="https://twitter.com/nanashimumei_en"
            target="_blank">
            <v-icon left>mdi-twitter</v-icon> Twitter
          </v-btn>
        </p>
        <p class="text-center text-h6 mb-2">
          Congratulations to Nanashi Mumei for reaching 500,000 subscribers on YouTube!
        </p>

        <!-- NAVIGATION -->
        <v-row no-gutters class="cards px-4 mb-8">
          <v-col class="text-center">
            <v-btn text class="brown--text darken-3" @click="scrollTo('#canvas')">
              <v-avatar left size="34"><img src="../assets/rune2.png" class="navimg"></v-avatar>
              <span class="pl-2 text-h6">Canvas</span>
            </v-btn>
            <v-btn text class="brown--text darken-3" @click="scrollTo('#messages')">
              <v-avatar left size="34"><img src="../assets/rune2.png" class="navimg"></v-avatar>
              <span class="pl-2 text-h6">Messages</span>
            </v-btn>
            <v-btn text class="brown--text darken-3" @click="scrollTo('#artworks')">
              <v-avatar left size="34"><img src="../assets/rune2.png" class="navimg"></v-avatar>
              <span class="pl-2 text-h6">Artworks</span>
            </v-btn>
            <v-btn text class="brown--text darken-3" @click="scrollTo('#tour')">
              <v-avatar left size="34"><img src="../assets/rune2.png" class="navimg"></v-avatar>
              <span class="pl-2 text-h6">Tour</span>
            </v-btn>
          </v-col>
        </v-row>

        <!-- CANVAS -->
        <v-row no-gutters class="mb-8" id="canvas">
          <v-col class="text-h6 text-center px-2 brown lighten-3 mx-8 rounded-xl">
            CANVAS
            <v-btn text class="float-right brown--text darken-3" @click="scrollTo('#header')">
              TOP
            </v-btn>
          </v-col>
        </v-row>
        <v-row no-gutters class="mb-8">
          <v-col class="cards px-4">
            canvas
          </v-col>
        </v-row>

        <!-- MESSAGES -->
        <v-row no-gutters class="mt-8 mb-8" id="messages">
          <v-col class="text-h6 text-center px-2 brown lighten-3 mx-8 rounded-xl">
            MESSAGES
            <v-btn text class="float-right brown--text darken-3" @click="scrollTo('#header')">
              TOP
            </v-btn>
          </v-col>
        </v-row>
        <v-row no-gutters>
          <v-col class="cards px-4">
            <div v-masonry transition-duration="0.3s" item-selector=".card">
              <div v-masonry-tile class="card pt-6" v-for="(item, ix) in cards" :key="`card-${ix}`">
                <div class="binder"></div>
                <div class="wings"><img src="../assets/feather.png" /></div>
                <div class="card-name text-subtitle-2 pr-12">{{item.name}}</div>
                <div class="card-text text-body-2 pr-4 pb-4">{{item.text}}</div>
              </div>
            </div>
          </v-col>
        </v-row>

        <!-- ARTWORKS -->
        <v-row no-gutters class="mt-8 mb-8" id="artworks">
          <v-col class="text-h6 text-center px-2 brown lighten-3 mx-8 rounded-xl">
            ARTWORKS
            <v-btn text class="float-right brown--text darken-3" @click="scrollTo('#header')">
              TOP
            </v-btn>
          </v-col>
        </v-row>
        <v-row no-gutters>
          <v-col class="cards px-4">
            artworks
          </v-col>
        </v-row>

        <!-- GAMES -->
        <v-row no-gutters class="mt-8 mb-8" id="games">
          <v-col class="text-h6 text-center px-2 brown lighten-3 mx-8 rounded-xl">
            TOUR
            <v-btn text class="float-right brown--text darken-3" @click="scrollTo('#header')">
              TOP
            </v-btn>
          </v-col>
        </v-row>
        <v-row no-gutters class="mb-8">
          <v-col class="cards px-4">
            games
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
const LOREM_IPSUM = `
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  Suspendisse viverra, eros vel venenatis pharetra,
  nisi neque porta enim, vitae tincidunt turpis metus a tellus.
  Quisque dictum fringilla felis eu ornare.
  Nulla non urna vitae neque pretium pharetra id eget elit.
  Aenean blandit magna quis augue dignissim, eu tincidunt dolor iaculis.
  Nunc scelerisque nibh et varius imperdiet.
  Phasellus sagittis, nunc et pharetra viverra, libero purus sodales ex,
  ut mattis enim lectus auctor felis. Donec ut lobortis leo.
  `.split(/\s/g).filter((v) => !!v).map((v) => v.replace(/[\W_]+/g, ''));

export default {
  data: () => ({
    cards: [],
  }),
  methods: {
    randomName() {
      return LOREM_IPSUM[Math.floor(Math.random() * LOREM_IPSUM.length)];
    },
    randomMessage() {
      const length = 10 + Math.floor(Math.random() * (LOREM_IPSUM.length - 10));
      const start = Math.floor(Math.random() * (LOREM_IPSUM.length - length));
      return LOREM_IPSUM.slice(start, start + length).join(' ');
    },
    scrollTo(target) {
      this.$vuetify.goTo(target, {
        duration: 1000,
        offset: 20,
        easing: 'easeInOutCubic',
      });
    },
  },
  mounted() {
    this.cards = [...new Array(50)].map(() => ({
      name: this.randomName(),
      text: this.randomMessage(),
    }));
  },
};
</script>

<style lang="scss" scoped>
.header {
  width:100%;
  height:200px;
  background:linear-gradient(to right, #907D6F 10%, #E9DCCD 40%, #E9DCCD 60%, #907D6F 90%);
  position:relative;
  .headbg {
    width:100%;
    height:200px;
    position:absolute;
    z-index:1;
    /*background-image:url("");
    background-position: center -200px;
    background-repeat: no-repeat;
    background-size:900px;*/
  }
  .wings {
    width:100%;
    height:200px;
    position:absolute;
    z-index:2;
  }
}
.bar {
  width:100%;
  height:40px;
  position:relative;
  z-index:3;
  background-color:#907D6F;
  background-image:url("../assets/glyph.png");
  background-position: center left;
  background-repeat: repeat-x;
  .mainphoto {
    width:1px;
    height:1px;
    display:inline-block;
    position:absolute;
    margin:0px auto;
    .mainphoto-box {
      width:160px;
      height:160px;
      margin-top:-80px;
      margin-left:-80px;
      position:relative;
      border-radius:50%;
      overflow:hidden;
      border:3px solid #564442;
    }
  }

}
.content {
  min-height:calc(100vh - 290px);
  background-color:#BFAC9D;
  .content-grid {
    min-height:calc(100vh - 290px);
    background-color:#E9DCCD;
    position:relative;
    .ribbon {
      position:absolute;
      top:0px;
      width:20px;
      height:100%;
      background-image: url('../assets/pattern.png');
      background-repeat: repeat-y;
      &.ribbon-left {
        left:-10px;
      }
      &.ribbon-right {
        right:-10px;
      }
    }
    .cards {
      .card {
        // background:#f1eee9;
        position:relative;
        // padding-left:15px;
        padding:0px 40px;
        min-height:100px;
        margin-bottom:10px;
        // border:1px solid #564442;
        background-image: url('../assets/scroll-1.png'), url('../assets/scroll-2.png');
        background-repeat: no-repeat;
        background-position: top center, bottom center;
        background-size: 100% 24px, 100% calc(100% - 24px);
        // .binder {
        //   background:#564442;
        //   position:absolute;
        //   top:0px;
        //   left:0px;
        //   width:10px;
        //   height:100%;
        // }
        .wings {
          position:absolute;
          top:-30px; right:-20px;
          img {
            width:70px;
            height:70px;
          }
        }
        .card-name {
          color:#984B4A;
          font-weight:bold;
          text-shadow:
            -2px -2px 0 #ffffff,
            0   -2px 0 #ffffff,
            2px -2px 0 #ffffff,
            2px  0   0 #ffffff,
            2px  2px 0 #ffffff,
            0    2px 0 #ffffff,
            -2px  2px 0 #ffffff,
            -2px  0   0 #ffffff;
        }
        .card-text {
          // color: #E9DCCD;
          color: #131313;
          font-weight:bold;
          // text-shadow:
          //   -2px -2px 0 #131313,
          //   0   -2px 0 #131313,
          //   2px -2px 0 #131313,
          //   2px  0   0 #131313,
          //   2px  2px 0 #131313,
          //   0    2px 0 #131313,
          //   -2px  2px 0 #131313,
          //   -2px  0   0 #131313;
        }
      }
    }
  }
}

.card {
  width:24%;
  margin:5px 0.5%;
}

@media only screen and (max-width: 1264px) {
  .card {
    width:32%;
    margin:10px 0.5%;
  }
}
@media only screen and (max-width: 900px) {
  .card {
    width:48%;
    margin:10px 1%;
  }
}
@media only screen and (max-width: 700px) {
  .card {
    width:96%;
    margin:10px 2%;
  }
}
</style>
