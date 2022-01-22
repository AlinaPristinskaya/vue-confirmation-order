<template>
  <div class="header">
    <Logo />
    <div class="content" v-if="error">
      <el-alert
        class="alert"
        title="Ошибка"
        description="Такого uid нет, ответ succeses:false"
        type="error"
        effect="dark"
        v-bind:show-icon="true"
      >
      </el-alert>
    </div>
    <div class="content" v-if="choice">
      <el-alert
        description="Отправленно"
        type="success"
        effect="dark"
        v-bind:show-icon="true"
        class="alert"
      >
      </el-alert>
    </div>
    <div class="content" v-if="!error && !choice">
      <form @submit="submit">
        <div>
          <label for="one" class="label">
            <input
              type="radio"
              id="one"
              value="1"
              v-model="status"
              class="radioBtn"
            /><span class="icon"></span>
            Підтвердити
          </label>
          <br />

          <label for="two" class="label">
            <input
              type="radio"
              id="two"
              value="2"
              v-model="status"
              class="radioBtn"
            /><span class="icon"></span>
            Скасувати
          </label>
          <br />

          <label for="three" class="label">
            <input
              type="radio"
              id="three"
              value="3"
              v-model="status"
              class="radioBtn"
            /><span class="icon"></span>
            Зателефонувати мені
          </label>
          <br />
          <button @click.prevent="submit" type="submit" class="btn">
            Відправити
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import api from "../api/api";
import Logo from "../components/Logo.vue";

export default {
  name: "Home",
  components: { Logo },
  data: () => ({
    picked: null,
    key: "D3C6D997-8CBE-42CA-81FC-EE56DA3F4418",
    uid: "1d397054-792a-11ec-85d6-b2601fe30ff7",
    func: "checkUID",
    status: "1",
    error: "false",
    choice: "false",
  }),
  async created() {
    this.choice = false; //Эту строку надо будет удалить, чтоб пользователь не мог отправлять 100 подтверждений
    const uid = this.$route.params.uid;
    this.uid = uid;
    const { data } = await api.fetchTrackingInfo(
      this.key,
      "checkUID",
      this.uid
    );
    if (data.success === false) {
      this.error = true;
    }
  },
  methods: {
    submit() {
      api.fetchTrackingInfo(this.key, "confirm", this.uid, this.status);
      this.choice = true;
    },
  },
};
</script>
<style lang="scss" scoped>
@import "../assets/scss/_variables.scss";
@import "../assets/scss/_reset.scss";
.header {
  display: flex;
  flex-direction: column;
  width: 100%;
}
.content {
  display: flex;
  flex-direction: column;
  color: white;
  padding: 20px;
  align-items: center;
  :not(:last-child) {
    margin-bottom: 15px;
  }
}
.radioBtn {
  margin: 5px 10px;
  appearance: none;
}
.icon {
  content: "";
  display: inline-block;
  width: 14px;
  height: 14px;
  background-color: white;
  border-radius: 20px;
  margin-right: 5px;
  margin-left: -20px;
  border: 2px solid;
  border-color: white;
}
.radioBtn:checked + .icon {
  background-color: black;
}
.label {
  display: block;
  padding: 3px 0px;
}
.btn {
  position: relative;
  display: inline-block;
  background: #fff;
  color: black;
  padding: 8px 8px;
  border-radius: 6px;
  border: none;
  font-size: 24px;
}
/* .alert {
  width: 100%;
} */
</style>
