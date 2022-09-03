<template>
<div>
  <gradient-box>
    <div class="py-3">
      <div class="container-fluid economy">
        <div class="container pt-4 pb-5">
          <span
            ><a href="index.html">Главная </a> /
            <a href="#">Часто задаваемые вопросы</a></span
          >
          <h3 style="color: #fff" class="mt-2">
            Услуги доставки из Великобритании
          </h3>
        </div>
      </div>
    </div>
  </gradient-box>
    

     <section class="container search my-5">
        <h6>Поиск в вопросах и ответах:</h6>
        <form>
            <label class=" d-flex justify-content-between align-items-end" for="quith">
                <p class="mb-0">Введите свой вопрос...</p><i class="bi bi-search" style="color: #00C97B ;"></i>
            </label>
            <div>
                <input type="text" name="quith" id="quith"></div>
        </form>
    </section>


    <question-item class="mb-5"></question-item>

      <gradient-box class="mt-5"> 
         <div class="container">
                <div class="row my-5">
                    <div class="col-lg-10 col-md-12 col-sm-12 flex-shrink-0">
                        <h3 style="color: #fff;">Остались вопросы? Спросите нас в соцсетях!</h3>
                    </div>
                    <div
                        class="col-lg-2 col-md-12 mt-lg-0 mt-sm-3 mt-md-3 col-sm-12 d-flex flex-row justify-content-center">
                        <div> <a href="#"> <img src="@/assets/imgs/Ватсап.png" alt="rasm topilmadi"></a></div>
                        <div><a href="#"> <img src="@/assets/imgs/Вайбер.png" alt=""></a></div>
                        <div><a href="#"><img src="@/assets/imgs/Чат.png" alt=""></a></div>
                    </div>
                </div>
            </div>
    </gradient-box>

    <footer-section></footer-section>

  </div>
</template>

<script>
import GradientBox from "@/components/cards/GradientBox.vue";
import QuestionItem from "@/components/cards/QuestionItem.vue"
import FooterSection from "@/components/cards/FooterSection.vue"
export default {
  name: "OkeypostvuePageHelp",
  components: {
    GradientBox,
    QuestionItem,
    FooterSection
  },

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
</style>