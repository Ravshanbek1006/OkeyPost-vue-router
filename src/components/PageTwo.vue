<template>
  <div>
    <gradient-box>
      <div class="economy">
        <div class="container py-5">
          <span><a href="#">Главная </a>/<a href="#"> Как покупать</a></span>
          <h3 style="color: #fff">Научим покупать в Великобритании!</h3>
          <p>и экономить до 70%</p>

          <div class="m-box">
            <button class="btn-okey my-4">Получить адрес в UK</button>
          </div>
        </div>
      </div>
    </gradient-box>

    <economy-buy class="my-5"> </economy-buy>

    <gradient-box>
         <div class="container py-4">
            <h3 class="my-5" style="color: #fff;">Остались вопросы? Спросите нас в соцсетях!</h3>
        </div>
    </gradient-box>
    <footer-section></footer-section>
  </div>
</template>

<script>
import GradientBox from "./cards/GradientBox.vue";
import EconomyBuy from "./cards/EconomyBuy.vue";
import FooterSection from "@/components/cards/FooterSection.vue"
export default {
  components: {
     GradientBox,
     EconomyBuy,
     FooterSection,
     }
}
</script>

<style>
</style>