<template>
<div>
  <gradient-box>
       <div class="row">
          <div class="col-lg-6 col-md-12 col-sm-12 d-flex justify-content-center  flex-column">
            <h1>Доставка товаров из Великобритании в Россию</h1>
            <p class=" my-md-3 ">Начните экономить до 80% на шопинге. Регистрируйтесь в OkeyPost, чтобы покупать со скидками
              в UK одежду,
              обувь, гаджеты известных брендов и безопасно отправлять вещи в Россию.
            </p>
           <button-btn class="btn-center">Получить адрес в UK</button-btn>
          </div>
          <div class="col-lg-6 col-md-12 col-sm-12 py-5">
            <img src="@/assets/imgs/Иллюстрация.png" alt="rasm topilmadi">
          </div>
        </div>
  </gradient-box>


  <servis-section></servis-section>

  <gradient-box>
     <div class="row py-5 ">
           <div class="col-lg-4 col-md-4 col-sm-12 d-flex justify-content-center align-items-center">
            <img width="100%" style="object-fit:cover ;" src="@/assets/imgs/fon-img.png" alt="icon">
          </div>
          <div class="col-lg-8 col-md-8 col-sm-12  p-5 d-flex flex-column justify-content-center ">
            <h4 class=" t-c-sm">
              Поручите нашим мастерам шопинга оформить заказы в английских магазинах и освободите время для более важных
              дел.
            </h4>
            <p class=" t-c-sm text-md-start" style="margin-top:20px;">Такой способ покупки также подойдёт, если магазин принимает только английские
              карты.</p>
            <button-btn>Попробовать</button-btn>
          </div>
        </div>
  </gradient-box>

  <delivery-card></delivery-card> 

  <marketing-section></marketing-section>

  <gradient-box>
    <div class="row ">
          <div class="col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center align-items-center p-5">
            <img src="@/assets/imgs/box-img.png" alt="icon">
          </div>
          <div class="col-lg-8 col-md-6 col-sm12 d-flex flex-column justify-content-center p-5 ">
            <h4 class=" t-c-sm">
              Виртуальный тур по нашему складу в реальном времени
            </h4>
            <p class=" t-c-sm text-md-start" style="">Вы можете всегда посмотреть на нашу слаженую работу на складе.</p>
           <div class="m-box"><button-btn>Попробовать</button-btn></div>
          </div>
        </div>
  </gradient-box>

  <choise-section> </choise-section>

  <choise-info> </choise-info>

  <gradient-box class="my-5 pt-5">
    <div>
         <div class="container py-5 aksiya ">
        <div class="row ">  
          <div class="col-lg-4 col-md-12 col-sm-12 d-flex justify-content-center align-items-center">
            <h4>Подпишитеть и будьте в курсе всех скидок и акций магазинов Великобритании!</h4>
          </div>
          <div class="col-lg-8 col-md-12 col-sm-12 d-flex justify-content-center align-items-center px-4 ">
            <form action="#">
              <div class="row w-100">
                <div class="col-lg-8 col-md-12 col-sm-12"> <label for="Введите ваш email"><i
                      class="bi bi-envelope-open"></i> Введите ваш
                    email</label>
                  <input type="email" name="email" id="Введите ваш email"></div>
                <div class="col-lg-4 col-md-12 col-sm-12 mt-2 ">
                  <button type="submit" class="btn-okey ">Попробовать </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </gradient-box>
  <footer-section></footer-section>
  </div>
</template>

<script>
import GradientBox from "@/components/cards/GradientBox.vue"
import ButtonBtn from "@/components/ButtonBtn.vue"
import ServisSection from "@/components/cards/ServisSection.vue"
import DeliveryCard from "@/components/cards/DeliveryCard.vue"
import MarketingSection from "@/components/cards/MarketingSection.vue"
import ChoiseSection from "@/components/cards/ChoiseSection.vue"
import ChoiseInfo from "@/components/cards/ChoiseInfo.vue"
import FooterSection from "@/components/cards/FooterSection.vue"
export default {
    components:{
        GradientBox,
        ButtonBtn,
        ServisSection,
        DeliveryCard,
        MarketingSection,
        ChoiseSection,
        ChoiseInfo,
        FooterSection,
    }
}
</script>

<style>

</style>