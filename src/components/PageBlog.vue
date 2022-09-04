<template>
    <div>
       <gradient-box>
         <div class="container-fluid economy  ">
            <div class="container py-4">
                <span><a href="#">Главная </a> / <a href="#">Блог</a></span>
                <h3 style="color: #fff;" class="mt-1">Блог</h3>
            </div>
        </div>
       </gradient-box>

        <section class="container blog my-5 py-5">
        <div class="row">
            <div class="col-lg-4 col-md-6 col-sm-12">
                <img src="@/assets/imgs/фото.png" alt="фото">
                <h6>Интернет-магазин Urban Outfitters в UK: обзор</h6>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-12">
                <img src="@/assets/imgs/фото (1).png" alt="фото">
                <h6>Overstock. Брендовые товары
                    по доступным ценам</h6>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-12">
                <img src="@/assets/imgs/фото (2).png" alt="фото">
                <h6>Skechers с Amazon. Удобная
                    обувь для всей семьи</h6>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-12">
                <img src="@/assets/imgs/фото (3).png" alt="фото">
                <h6>Интернет-магазин Urban Outfitters в UK: обзор</h6>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-12">
                <img src="@/assets/imgs/фото (4).png" alt="фото">
                <h6> Target — семейный супермаркет с ценами от 300 рублей!</h6>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-12">
                <img src="@/assets/imgs/фото (5).png" alt="фото">
                <h6> Английский магазин RIPNDIP. Покупаем самовыражение</h6>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-12">
                <img src="@/assets/imgs/фото (6).png" alt="фото">
                <h6>Nautica. Элитные товары из Англии по низким ценам</h6>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-12">
                <img src="@/assets/imgs/фото (7).png" alt="фото">
                <h6>Forever 21 - покупаем джинсы  за 1 500 рублей</h6>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-12">
                <img src="@/assets/imgs/фото (8).png" alt="фото">
                <h6>Как купить кроссовки Balenciaga на 30 000 рублей дешевле?</h6>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-12">
                <img src="@/assets/imgs/фото (9).png" alt="фото">
                <h6>Топ-7 самых дорогих сумок
                    Louis Vuitton</h6>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-12">
                <img src="@/assets/imgs/фото (10).png" alt="фото">
                <h6>BH Cosmetics Galaxy. Галактика красоты и ухода </h6>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-12">
                <img src="@/assets/imgs/фото (11).png" alt="фото">
                <h6>“Вансы”. Крутые кеды, которые не выйдут из моды никогда!</h6>
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

    <footer-section></footer-section>


    </div>
</template>

<script>
import GradientBox from "@/components/cards/GradientBox.vue"
import FooterSection from "@/components/cards/FooterSection.vue"
export default {
    name: 'OkeypostvuePageBloc',
    components:{
        GradientBox,
        FooterSection
    },
    data() {
        return {
            
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style lang="scss" scoped>

</style>