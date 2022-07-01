<template>
  <div class="parallax_wrap">
    <button @click="routeHandler" class="toInfinite">infinite scroll</button>
    <Observer class="box1 box" @intersect="() => intersected('box1')" >
        <p>box1</p>
    </Observer>
    <Observer class="box2 box" @intersect="() => intersected('box2')" :options="{rootMargin:'-120px 0px'}">
        <p>box2</p>
    </Observer>
    <Observer class="box3 box" @intersect="() => intersected('box3')" :options="{rootMargin:'-120px 0px'}">
        <p>box3</p>
    </Observer>
    <Observer class="box4 box" @intersect="() => intersected('box4')" :options="{rootMargin:'-120px 0px'}">
        <p>box4</p>
    </Observer>
  </div>
</template>

<script>
import Observer from '@/components/Observer'
export default {
    methods: {
    intersected(e) {
        const getClass = document.getElementsByClassName(e)[0].classList
        getClass.add("on")
    },
    routeHandler(){
        this.$router.push({
            name:"intersection-infiniteScroll"
        })
    }
  },
  components: {
    Observer
  },
}
</script>

<style >
    .parallax_wrap{
        width:100%;
        height: 4000px;
    }

    .toInfinite{
        float: left;
        clear: both;
    }

    .box{
        width:400px;
        height: 300px;
        float: left;
        clear: both;
        margin-top: 100px;
        background-color: rgb(224, 224, 224);
        line-height: 300px;
        text-align: center;
        transform: translateX(-330px);
        transition: 0.5s;
    }

    .box2{
        margin-top: 700px;
         transform: translateX(330px);
        float: right;
    }

    .box3{
        margin-top: 700px;
    }

    .box4{
        margin-top: 700px;
        transform: translateX(330px);
        float: right;
    }

    .on{
        transform: translateX(0px);
    }
</style>