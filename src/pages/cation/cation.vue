<template>
  <div class="cation hh flex">
    <div class="left flex-c">
      <ul>
        <li
          @click="switchtab(d)"
          :class="d === active ? `active` : ``"
          v-for="(i, d) in data"
          :key="i.text"
        >
          {{ i.text }}
        </li>
      </ul>
    </div>
    <div class="right hh">
      <ul class="flex-c ul">
        <transition-group>
          <li class="item  flex" v-for="i in list" :key="i.id">
            <div class="img">
              <img :src="i.img" />
            </div>
            <div class="text flex-c">
              <h5 class="top">{{ i.name }}</h5>
              <p class="olo-price">原价 ¥{{ i.oldPrice }}</p>
              <p class="new-price">折扣价 ¥{{ i.price }}</p>
            </div>
          </li>
        </transition-group>
      </ul>
    </div>
  </div>
</template>

<script>
import { getCation } from "@/api";
export default {
  name: "cation",
  data() {
    return {
      data: [],
      active: 0
    };
  },
  computed: {
    list() {
      if (this.data[this.active]) {
        return this.data[this.active].children;
      }
      return this.data;
    }
  },
  created() {
    getCation().then(e => (this.data = e.data));
  },
  methods: {
    switchtab(index) {
      this.active = index;
    }
  }
};
</script>

<style lang="scss" scoped>
.cation {
  background-color: #f2f2f2;
}
.active {
  color: white;
  padding: 0px 20px;
  background-color: black;
  border-radius: 20px;
}
.left {
  background: white;
  width: 188px;
  height: 100%;
  align-items: center;

  li {
    margin-top: 40px;
    height: 52px;
    text-align: center;
  }
}
.right {
  align-items: stretch;
  overflow: auto;
  margin: 20px;
  flex: 1;

  .item {
    padding: 10px;
    border-radius: 20px;
    height: 200px;
    background-color: white;
    margin: 20px 0;
  }
  .img {
    width: 187px;
    flex-shrink: 0;
  }
  .text {
    flex-grow: 1;
  }
  .top {
    font-size: 24px;
    font-weight: 500;
  }
  .olo-price {
    text-decoration: line-through;
    color: #bbb;
    font-size: 25px;
    margin: 10px 0;
    font-size: 22px;
  }
  .new-price {
    color: red;
    font-size: 26px;
  }
}
.v-enter {
  opacity: 0;
}
.v-enter-active {
  transition: all 2s ease;
}
.v-leave {
  opacity: 1;
}
</style>
