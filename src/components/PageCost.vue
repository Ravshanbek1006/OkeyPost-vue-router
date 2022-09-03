<template>
  <div>
   <gradient-box class="container-fluid px-3 mb-5">
       <div class="container-fluid economy">
            <div class="container pt-4 pb-5">
                <span><a href="#">Главная </a> / <a href="#">Цены</a></span>
                <h3 style="color: #fff;" class="mt-2">Услуги доставки из Великобритании</h3>
            </div>
        </div>
   </gradient-box>

    <section class="container my-5">
      <div class="row cost">
        <div class="col-lg-3 col-md-6 col-sm-12 p-3">
          <img src="@/assets/imgs/Group.png" alt="imgs/Group.png" />
          <h4>Ваш личный адрес для покупок</h4>
          <p>
            на нашем современном автоматизированном складе в безналоговом
            Делавэре
          </p>
          <btn-blue>Бесплатно</btn-blue>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-12 p-3">
          <img src="@/assets/imgs/Group (1).png" alt="imgs/Group (1).png" />
          <h4>Объединение нескольких посылок в одну</h4>
          <p>
            ведь часто отправлять несколько посылок в одной коробке гораздо
            выгоднее, чем по одной
          </p>
          <btn-blue>от £10.00</btn-blue>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-12 p-3">
          <img src="@/assets/imgs/Group (2).png" alt="imgs/Group (2).png " />
          <h4>Усиленная упаковка по запросу</h4>
          <p>
            Мы дополнительно упакуем вашу посылку в пленку, коробку с двойными
            стенками.
          </p>
          <btn-blue>от £0.25</btn-blue>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-12 p-3">
          <img src="@/assets/imgs/Group (3).png" alt="imgs/Group (3).png" />
          <h4>Хранение входящих посылок 30 дней</h4>
          <p>
            чем больше срок хранения посылок на складе – тем больше вы сможете
            собрать
          </p>
          <btn-blue>Бесплатно</btn-blue>
        </div>
      </div>
    </section>

    <delivery-card></delivery-card>

      <section class="container my-5 Услуги">
        <h3 class="my-4">Услуги склада</h3>
        <div class="row">
            <div class="col-lg-6 col-md-12 col-sm-12 d-flex flex-row justify-content-between Услуги-box">
                <h6>Консолидация </h6>
                <h6>£1.00/1 трек</h6>
            </div>
            <div class="col-lg-6 col-md-12 col-sm-12 d-flex flex-row justify-content-between Услуги-box">
                <h6>Заполнение декларации</h6>
                <h6>£1.00</h6>
            </div>
            <div class="col-lg-6 col-md-12 col-sm-12 d-flex flex-row justify-content-between Услуги-box">
                <h6>Дополнительная упаковка</h6>
                <h6>£5.00</h6>
            </div>
            <div class="col-lg-6 col-md-12 col-sm-12 d-flex flex-row justify-content-between Услуги-box">
                <h6>Упаковка xрупкиx предметов</h6>
                <h6>£10.00</h6>
            </div>
            <div class="col-lg-6 col-md-12 col-sm-12 d-flex flex-row justify-content-between Услуги-box">
                <h6>Заполнение декларации</h6>
                <h6>£1.00</h6>
            </div>
            <div class="col-lg-6 col-md-12 col-sm-12 d-flex flex-row justify-content-between Услуги-box">
                <h6>Разделение заказа</h6>
                <h6>£2.00</h6>
            </div>
        </div>
        <div class="mt-5 ">
            <div class="row Услуги-box">
                <div class="col-9">
                    <h6>Сборка исходящей посылки вне очереди или экспресс сборка</h6>
                    <p>Чтобы сэкономить время</p>
                </div>
                <div class="col-3">
                    <h6>£5.00</h6>
                </div>
            </div>
            <div class="row Услуги-box">
                <div class="col-9">
                    <h6>Фото содержимого входящей посылки</h6>
                    <p>3 фото за $5 или 10 фото за $8, а ещё можно попросить сфотографировать бирку или подарочный
                        сертификат</p>
                </div>
                <div class="col-3">
                    <h6>£1.00 за 1 фото</h6>
                </div>
            </div>
            <div class="row Услуги-box">
                <div class="col-9">
                    <h6>Возврат вещей в магазин</h6>
                    <p>В случае, если вещи нельзя отправить в страну назначения, возврат в магазин для услуги
                        "Виртуальный адрес"</p>
                </div>
                <div class="col-3">
                    <h6>£10 + почтовые расходы</h6>
                </div>
            </div>
            <div class="row Услуги-box">
                <div class="col-9">
                    <h6>Проверка техники на работоспособность</h6>
                    <p>Проверка электроники на включение/выключение (запрос через тикеты).</p>
                </div>
                <div class="col-3">
                    <h6>£10</h6>
                </div>
            </div>
            <div class="row Услуги-box">
                <div class="col-9">
                    <h6>Удаление инвойса</h6>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </div>
                <div class="col-3">
                    <h6>Бесплатно</h6>
                </div>
            </div>
            <div class="row Услуги-box">
                <div class="col-9">
                    <h6>Дополнительная упаковка</h6>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </div>
                <div class="col-3">
                    <h6>По договоренности</h6>
                </div>
            </div>
        </div>
    </section>

     <section class="container my-5 py-5 Услуги">
        <h3 class="my-5">Покупки с операторами Okeypost.com</h3>
        <div class="row Услуги-box ">
            <div class="col-9">
                <h6>Быстрое оформление покупок в интернет-магазинах</h6>
                <p>Вы присылаете ссылки, а оформлением заказов занимаются операторы Почтой.ком. Они сделают покупки за
                    вас, проконтролируют доставку на склад и сообщат, когда всё будет готово.</p>
            </div>
            <div class="col-3">
                <h6>5% от стоимости товаров
                    минимум £7 для каждого магазина
                    Но не менее £7 для каждого лота eBay</h6>
            </div>
        </div>
        <div class="row Услуги-box my-5">
            <div class="col-9">
                <h6>Фото товара по услуге "Покупка с операторами"</h6>
                <p>Три фото выбранного вами товара, приобретенного по услуге "Полное сопровождение"</p>
            </div>
            <div class="col-3">
                <h6>£2</h6>
            </div>
        </div>

    </section>


    <gradient-box>
         <div class="container sisilka">
                <div class="row ">
                    <div class="col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center align-items-center p-5">
                        <img src="@/assets/imgs/uslugs.png" alt="icon">
                    </div>
                    <div class="col-lg-8 col-md-6 col-sm12 d-flex flex-column justify-content-center p-5 ">
                        <h4>
                            Попробуйте заказывать с оператором прямо сейчас. Пришлите ссылку на товар, его купят и
                            доставят на наш склад в кратчайшие сроки.
                        </h4>
                        <label for="text"><i class="bi bi-link-45deg"></i> Введите ссылку на товар</label>
                        <input type="text" name="text" id="text">
                        <div class="row mt-4 ">
                            <div class="col-lg-3 col-md-12 col-sm-12"> <button class="btn-okey ">Отправить </button>
                            </div>
                            <div class="col-lg-9 col-md-12 col-sm-12 text-white ps-3">
                                <p class="text-start mt-sm-3 mt-md-3  mt-lg-0">
                                    Нажимая на кнопку вы подтверждаете согласие с правилами предоставления
                                    услуги и политикой конфиденциальности</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
    </gradient-box>

     <section class="container Услуги my-5 pt-5">
        <div>
            <h3> Страхование</h3>
            <div class="Услуги-box d-flex flex-column">
                <div class="col-12 d-flex flex-row ">
                    <div class="col-6">
                        <h6 class="text-start mx-1">Дополнительное страxование</h6>
                    </div>
                    <div class="col-6">
                        <h6 class="text-start mx-1">5% от суммы на которую xотите застраxовать</h6>
                    </div>
                </div>
            </div>
            <div class="Услуги-box d-flex flex-column">
                <div class="col-12 d-flex  ">
                    <div class="col-6">
                        <h6 class="text-start mx-1">Почта России и ЕМС</h6>
                    </div>
                    <div class="col-6">
                        <h6 class="text-start mx-1">Застраxовано по умолчанию на £50.00</h6>
                    </div>
                </div>
            </div>
            <div class="Услуги-box d-flex flex-column">
                <div class="col-12 d-flex ">
                    <div class="col-6">
                        <h6 class="text-start mx-1">Дополнительное страxование</h6>
                    </div>
                    <div class="col-6">
                        <h6 class="text-start mx-1">Застраxовано на £20.00</h6>
                    </div>
                </div>
            </div>
        </div>
        <div class="my-5">
            <h3>Дополнительная упаковка</h3>
            <div class="row">
                <div class="col-lg-6 col-md-12 col-sm-12 dopo-item">
                    <div class="row">
                        <div class="col-8">
                            <h6 class="text-start th6-b">Многослойная пленка</h6>
                            <p class="text-start tp-0 ">Дополнительная защита покупок</p>
                        </div>
                        <div class="col-4">
                            <h6 class="text-center  th6-b2">£3.99</h6>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 col-md-12 col-sm-12 dopo-item">
                    <div class="row">
                        <div class="col-8">
                            <h6 class="text-start th6-b">Упаковка в пакет</h6>
                            <p class="text-start tp-0">Надежно защищает от влаги</p>
                        </div>
                        <div class="col-4">
                            <h6 class="text-center th6-b2">£1.99</h6>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 col-md-12 col-sm-12 dopo-item">
                    <div class="row">
                        <div class="col-8">
                            <h6 class="text-start th6-b">Упаковка в коробку с двойными стенками</h6>
                            <p class="text-start tp-0">Надежно защищает от влаги</p>
                        </div>
                        <div class="col-4">
                            <h6 class="text-center th6-b2">£4.99</h6>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 col-md-12 col-sm-12 dopo-item">
                    <div class="row ">
                        <div class="col-8">
                            <h6 class="text-start th6-b">Наклейка “Обращаться с осторожностью”</h6>
                            <p class="text-start tp-0">Дополнительная защита покупок</p>
                        </div>
                        <div class="col-4">
                            <h6 class="text-center th6-b2">£0.25</h6>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 col-md-12 col-sm-12 dopo-item">
                    <div class="row  ">
                        <div class="col-8">
                            <h6 class="text-start th6-b">Наклейка “Хрупкий груз”</h6>
                            <p class="text-start tp-0">Дополнительная защита покупок</p>
                        </div>
                        <div class="col-4">
                            <h6 class="text-center th6-b2">£0.25</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <gradient-box> 
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


    <FooterSection></FooterSection>


  </div>
</template>

<script>
import GradientBox from "@/components/cards/GradientBox.vue"
import BtnBlue from "@/components/cards/BtnBlue.vue"
import DeliveryCard from "@/components/cards/DeliveryCard.vue"
import FooterSection from "@/components/cards/FooterSection.vue"
export default {
  name: "OkeypostvuePageCost",
  components:{
    GradientBox,
    BtnBlue,
    DeliveryCard,
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