<template>
  <div class="content">
    <!--
        Code by Théo (STM3900)
        DONT USE IN WYSIWYG PLS AAAAAAAAA
      -->
    <div class="d-flex justify-content-center">
      <div style="max-width: 1000px">
        <!--
            INTRO CARD
          -->
        <div
          class="card mb-4"
          style="border-radius: 20px; transform: rotate(-1deg)"
        >
          <div
            class="card-header container"
            style="border-top-left-radius: 20px; border-top-right-radius: 20px"
          >
            <div class="row">
              <!--
                  Character name
                -->
              <h2 class="col-4">Mike</h2>
              <!--
                  Navbar
                -->
              <ul
                class="nav nav-tabs card-header-tabs col"
                style="justify-content: flex-end; align-self: flex-end"
              >
                <li class="nav-item">
                  <a
                    class="nav-item nav-link active"
                    id="nav-about-tab"
                    data-toggle="tab"
                    href="#nav-about"
                    role="tab"
                    aria-controls="nav-about"
                    aria-selected="false"
                    >About</a
                  >
                </li>
                <li class="nav-item">
                  <a
                    class="nav-item nav-link"
                    id="nav-story-tab"
                    data-toggle="tab"
                    href="#nav-story"
                    role="tab"
                    aria-controls="nav-story"
                    aria-selected="true"
                    >Story</a
                  >
                </li>
              </ul>
            </div>
          </div>
          <!--
              Intro section (with attributes & description)
            -->
          <div class="card-body">
            <div class="container">
              <div class="row py-4">
                <div
                  class="traits col-12 pl-3 col-lg-3 d-flex justify-content-start justify-content-lg-center"
                >
                  <div>
                    <div>
                      <!--
                          pronouns
                        -->
                      <div
                        class=""
                        style="
                          transform: rotate(-1deg);
                          padding: 2px 10px;
                          width: auto;
                          display: inline-block;
                          border-radius: 20px;
                          border: solid 1px black;
                        "
                      >
                        He
                      </div>
                      <!--
                          age
                        -->
                      <div
                        class=""
                        style="
                          transform: rotate(1deg);
                          padding: 2px 10px;
                          width: auto;
                          display: inline-block;
                          border-radius: 20px;
                          border: solid 1px black;
                        "
                      >
                        19 y/o
                      </div>
                    </div>
                    <div class="my-3">
                      <!--
                          oriantation (put direct link on img)
                        -->
                      <!-- VALID FLAG IMG  -->
                      <div class="d-inline mr-1">
                        <img
                          src="https://cdn-icons-png.flaticon.com/512/8259/8259335.png"
                          alt=""
                          width="30px"
                          height="30px"
                          style="
                            filter: contrast(0.9) drop-shadow(0 0 0.1rem black);
                            opacity: 0.9;
                            transform: rotate(5deg);
                          "
                        />
                      </div>
                      <!-- PLACEHOLDER FLAG IMG  -->
                      <div class="d-inline mr-1">
                        <img
                          src="https://cdn-icons-png.flaticon.com/512/8259/8259335.png"
                          alt=""
                          width="30px"
                          height="30px"
                          style="
                            filter: contrast(0) drop-shadow(0 0 0.1rem black);
                            opacity: 0.2;
                            transform: rotate(-5deg);
                          "
                        />
                      </div>
                      <div class="d-inline mr-1">
                        <img
                          src="https://cdn-icons-png.flaticon.com/512/8259/8259335.png"
                          alt=""
                          width="30px"
                          height="30px"
                          style="
                            filter: contrast(0) drop-shadow(0 0 0.1rem black);
                            opacity: 0.2;
                            transform: rotate(5deg);
                          "
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <!-- Description  -->
                <div class="resume col-12 col-lg-9">
                  <p>
                    He's a cute boi who needs a lot of love xD. He's really
                    childish. he's the brother of Laï and he loves her more than
                    anything else. He's pan. He's a really joyfull person. He
                    also has ADHD and struggle to socialise because of it, but
                    he tries his best !! Golden retriever energy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--
            Main section
          -->
        <div class="tab-content" id="nav-tabContent">
          <div
            class="tab-pane fade active show"
            id="nav-about"
            role="tabpanel"
            aria-labelledby="nav-about-tab"
          >
            <div class="container px-0">
              <div class="row">
                <div
                  class="col-lg-8 d-block col-12 pb-4 pb-lg-0"
                  style="height: 670px"
                >
                  <!--
                      Refs img carousel
                    -->
                  <div
                    id="refs-img"
                    class="carousel slide w-100 h-100"
                    data-ride="carousel"
                    style="border-radius: 20px"
                  >
                    <ol class="carousel-indicators">
                      <li
                        data-target="#refs-img"
                        data-slide-to="0"
                        class="active"
                      ></li>
                      <li data-target="#refs-img" data-slide-to="1"></li>
                      <li data-target="#refs-img" data-slide-to="2"></li>
                    </ol>
                    <!--
                        Here you can add or remove img
                        use DIRECT LINK of img
                      -->
                    <div
                      class="carousel-inner h-100"
                      style="border-radius: 20px"
                    >
                      <a
                        class="carousel-item active h-100"
                        style="cursor: pointer"
                        href="https://cdn.discordapp.com/attachments/455791465734602782/1086633688470667435/mike.png"
                        target="_blank"
                      >
                        <img
                          src="https://cdn.discordapp.com/attachments/455791465734602782/1086633688470667435/mike.png"
                          class="w-100 h-100"
                          alt="..."
                          style="object-fit: cover; object-position: center top"
                        />
                      </a>
                      <a
                        class="carousel-item h-100"
                        style="cursor: pointer"
                        href="https://f2.toyhou.se/file/f2-toyhou-se/images/62415424_wRLztgy4rdOGtD9.png"
                        target="_blank"
                      >
                        <img
                          src="https://f2.toyhou.se/file/f2-toyhou-se/images/62415424_wRLztgy4rdOGtD9.png"
                          class="w-100 h-100"
                          style="object-fit: cover; object-position: center"
                          alt="..."
                        />
                      </a>
                      <a
                        class="carousel-item h-100"
                        style="cursor: pointer"
                        href="https://f2.toyhou.se/file/f2-toyhou-se/images/61709401_7zhrAIhNS6luk2w.jpg"
                        target="_blank"
                      >
                        <img
                          src="https://f2.toyhou.se/file/f2-toyhou-se/images/61709401_7zhrAIhNS6luk2w.jpg"
                          class="w-100 h-100"
                          style="object-fit: cover; object-position: center top"
                          alt="..."
                        />
                      </a>
                    </div>
                    <a
                      class="carousel-control-prev"
                      href="#refs-img"
                      role="button"
                      data-slide="prev"
                    >
                      <span
                        class="carousel-control-prev-icon"
                        aria-hidden="true"
                      ></span>
                      <span class="sr-only">Previous</span>
                    </a>
                    <a
                      class="carousel-control-next"
                      href="#refs-img"
                      role="button"
                      data-slide="next"
                    >
                      <span
                        class="carousel-control-next-icon"
                        aria-hidden="true"
                      ></span>
                      <span class="sr-only">Next</span>
                    </a>
                  </div>
                </div>
                <div class="col infos">
                  <!--
                        Likes card
                      -->
                  <div
                    class="card"
                    style="border-radius: 20px; transform: rotate(2deg)"
                  >
                    <h5
                      class="card-header"
                      style="
                        border-top-right-radius: 20px;
                        border-top-left-radius: 20px;
                      "
                    >
                      <i class="fas fa-heart" style="opacity: 0.5"></i> Likes
                    </h5>
                    <div class="card-body px-3 pt-2 pb-3">
                      <div class="likes">
                        <ul class="list-group list-group-flush">
                          <!-- put whathever you want here -->
                          <li class="list-group-item px-0 py-1">
                            Cras justo odio
                          </li>
                          <li class="list-group-item px-0 py-1">
                            Dapibus ac facilisis in
                          </li>
                          <li class="list-group-item px-0 py-1">
                            Vestibulum at eros
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <!--
                        Dislikes card
                      -->
                  <div
                    class="card mt-4"
                    style="border-radius: 20px; transform: rotate(-2deg)"
                  >
                    <h5
                      class="card-header"
                      style="
                        border-top-right-radius: 20px;
                        border-top-left-radius: 20px;
                      "
                    >
                      <i class="fas fa-heart-broken" style="opacity: 0.5"></i>
                      Dislikes
                    </h5>
                    <div class="card-body px-3 pt-2 pb-3">
                      <div class="dislikes">
                        <ul class="list-group list-group-flush">
                          <!-- put whathever you want here -->
                          <li class="list-group-item px-0 py-1">
                            Cras justo odio
                          </li>
                          <li class="list-group-item px-0 py-1">
                            Dapibus ac facilisis in
                          </li>
                          <li class="list-group-item px-0 py-1">
                            Vestibulum at eros
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <RelationsCard v-if="enableRelations"  @relationCardDeleted="enableRelations = false"/>
                  <button v-else @click="enableRelations = true" type="button" class="btn btn-light mt-4">Add relation card</button>
                </div>
              </div>
            </div>
          </div>
          <!--
              Story tab
            -->
          <div
            class="tab-pane fade"
            id="nav-story"
            role="tabpanel"
            aria-labelledby="nav-story-tab"
          >
            <div class="container">
              <div class="row">
                <!--
                    For trigger warnings
                  -->
                <div
                  class="alert alert-danger alert-dismissible fade show mt-1 col-12 col-lg-6"
                  role="alert"
                  style="
                    transform: rotate(0.5deg);
                    border-radius: 15px;
                    display: inline-block;
                  "
                >
                  <i class="fas fa-exclamation-triangle"></i> TW parental abuse
                </div>
              </div>
            </div>
            <!--
                Story block
              -->
            <div
              class="card mt-1"
              style="
                transform: rotate(-0.5deg);
                display: inline-block;
                border-radius: 20px;
              "
            >
              <div class="card-body">
                <p style="line-height: 25px; content: ''" class="p-4">
                  He was born in a rich family and is the twin of Laï.<br /><br />His
                  parent didn't expected twins and so they valued one more than
                  the other to "take care of the legacy". His parents never
                  cared for him and he was mostly seen as a nuisance to them.
                  But Laï was always so kind and adorable to him despite all of
                  that. And so he always took care of her and stayed by her side
                  no matter what.<br /><br />
                  When he was in preschool he met Cléo in the parc and they
                  quickly became inseparable. He spent most of his time at
                  Cléo's house since his parents didn't care about him but
                  Cléo's parents did and they listened to him. They quickly
                  became familly to him. Then Laï came out as trans to him and
                  he 100% supported her and he helped her became the one that
                  she is now.<br /><br />They got kicked out of their home not
                  so long after and with the money that Laï make as an idol they
                  quickly found an appartment in the same building as Coralie.
                  He befriended Coralie in high-school and he's a Coraïl shipper
                  since the day they met-
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const enableRelations = ref(true)
// https://f2.toyhou.se/file/f2-toyhou-se/images/62415424_wRLztgy4rdOGtD9.png
</script>

<style scoped>
.content{
  margin: 50px 0;
}
</style>
