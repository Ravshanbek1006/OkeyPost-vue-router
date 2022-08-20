<template>
<div>
  <section class="container dastavka my-5 py-5">
    <div class="row">
      <div class="col-lg-7 py-3">
        <h3>OkeyPost удобная и быстрая доставка посылок из Великобритании </h3>
      </div>
      <div class="col-lg-6 py-3">
        <p>Рассчитайте стоимость доставки : Англии к вам домой. Мы получим ваши посылки на складе, при необходимости
          объединим несколько доставок в одну и отправим их к вам надежно упакованными.</p>
      </div>
    </div>
    <div>
      <form action="#">
        <div class="form-box">
          <div class="box-item">
            <h6>Страна:</h6>
            <label for="Страна:"><i class="bi bi-globe2"></i></label>
            <select name="Страна:" id="Страна:">
              <option value="0">Россия</option>
              <option value="1">Uzb</option>
              <option value="2">USA</option>
            </select>
            <hr>
          </div>
          <div class="box-item">
            <h6>Город:</h6>
            <label for="Город"><i class="bi bi-building"></i></label>
            <input type="text" name="Город" id="Город" placeholder="Москва">
            <hr>
          </div>
          <div class="box-item">
            <h6>Индекс:</h6>
            <label for="Индекс"><i class="bi bi-layout-text-sidebar-reverse"></i></label>
            <input type="text" name="Индекс:" id="Индекс:" placeholder="Введите индекс">
            <hr>
          </div>
          <div class="box-item">
            <h6>Вес посылки:</h6>
            <label for="Вес"><img src="@/assets/imgs/Barbell.png" alt="icon" style="width: 20px ;"></label>
            <input type="text" name="Вес" id="Вес" placeholder="0,5">
            <hr>
          </div>
          <div class="box-item">
            <h6>Дополнительные услуги:</h6>
            <label for="услуги"><i class="bi bi-file-earmark-text"></i></label>
            <select name="услуги" id="услуги">
              <option value="0">Выберите услуги</option>
              <option value="1">Выберите услуги</option>
            </select>
            <hr>
          </div>
          <div>
            <button class="btn-okey">Рассчитать</button>
          </div>
        </div>
      </form>
    </div>
  </section>

   <section class=" container variant  my-5 py-5 ">
    <h3>Варианты доставки:</h3>
    <div class="row">
      <div class="col-lg-6 col-md-12 col-sm-12 ">
        <p><img src="@/assets/imgs/variant1.png" alt=""> Почта России</p>
      </div>
      <div class="col-lg-6 col-md-12 col-sm-12 ">
        <div class="variant-box">
          <div class="item-variant">
            <p>Сроки:</p>
            <h6>10-14 дней</h6>
          </div>
          <div class="item-variant">
            <p>Стоимость доставки:</p>
            <h6>от £27.00</h6>
          </div>
          <div class="item-variant">
            <p>Итого:</p>
            <h6>£41.99</h6>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-lg-6 col-md-12 col-sm-12 ">
        <p><img src="@/assets/imgs/variant2.png" alt=""> EMS ПОЧТА РОССИЯ</p>
      </div>
      <div class="col-lg-6 col-md-12 col-sm-12 ">
        <div class="variant-box">
          <div class="item-variant">
            <p>Сроки:</p>
            <h6>9-12 дней</h6>
          </div>
          <div class="item-variant">
            <p>Стоимость доставки:</p>
            <h6>от £40.00</h6>
          </div>
          <div class="item-variant">
            <p>Итого:</p>
            <h6>£54.55</h6>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-lg-6 col-md-12 col-sm-12 ">
        <p><img src="@/assets/imgs/varianr3.png" alt="rasm topilmadi"> ПОЧТА РОССИИ МЕЛКИЕ ПАКЕТЫ</p>
      </div>
      <div class="col-lg-6 col-md-12 col-sm-12 ">
        <div class="variant-box">
          <div class="item-variant">
            <p>Сроки:</p>
            <h6>10-14 дней</h6>
          </div>
          <div class="item-variant">
            <p>Стоимость доставки:</p>
            <h6>от £13.00</h6>
          </div>
          <div class="item-variant">
            <p>Итого:</p>
            <h6>£90.50</h6>
          </div>
        </div>
      </div>
    </div>

  </section>
</div>
</template>

<script>
export default {

}
</script>

<style>

</style>