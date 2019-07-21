<template>
    <div class="profile-page">
        <section class="section section-shaped section-lg my-0">
            <div class="shape shape-style-1 shape-primary shape-skew alpha-4"
                style="background:black;"
            >
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>

            <div class="container pt-lg-md">
                <div class="row justify-content-center">
                    <div class="col-xl-12 order-xl-1">
                        <div class="card shadow bg-secondary">
                            <div class="card-header">
                                <div class="border-0">
                                    <div class="row align-items-center">
                                        <div class="col-8">
                                            <h3 class="mb-0">Admin</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card-body">
                                <div class="nav-wrapper">
                                    <ul class="nav nav-pills nav-fill flex-column flex-md-row" id="tabs-icons-text" role="tablist">
                                        <li class="nav-item">
                                            <button @click="toggleCategory(0)" class="btn btn-warning my-1" id="tabs-icons-text-1-tab" data-toggle="tab" href="#tabs-icons-text-1" role="tab" aria-controls="tabs-icons-text-1" aria-selected="true">{{category[0]}}</button>
                                        </li>
                                        <li class="nav-item">
                                            <button @click="toggleCategory(1)" class="btn btn-success my-1" id="tabs-icons-text-2-tab" data-toggle="tab" href="#tabs-icons-text-2" role="tab" aria-controls="tabs-icons-text-2" aria-selected="false">{{category[1]}}</button>
                                        </li>
                                        <li class="nav-item">
                                            <button @click="toggleCategory(2)" class="btn btn-danger my-1" id="tabs-icons-text-3-tab" data-toggle="tab" href="#tabs-icons-text-3" role="tab" aria-controls="tabs-icons-text-3" aria-selected="false">{{category[2]}}</button>
                                        </li>
                                    </ul>
                                </div>
                                <div class="card shadow">
                                    <div class="card-body">
                                        <div class="tab-content" id="myTabContent">
                                            <div v-if="activeCategory == 0" class="tab-pane fade show active" id="tabs-icons-text-1" role="tabpanel" aria-labelledby="tabs-icons-text-1-tab">
                                                <p class="description">Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth.</p>
                                                <p class="description">Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse.</p>
                                            </div>
                                            <div v-else-if="activeCategory == 1" class="tab-pane fade show active" id="tabs-icons-text-2" role="tabpanel" aria-labelledby="tabs-icons-text-2-tab">
                                                <p class="description">Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.</p>
                                            </div>
                                            <div v-else class="tab-pane fade show active" id="tabs-icons-text-3" role="tabpanel" aria-labelledby="tabs-icons-text-3-tab">
                                                <p class="description">Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script>

export default {
    data(){
        return {
            category: ['Pending', 'Verified', 'Rejected'],
            activeCategory: 0
        }
    },
    methods: {
        toggleCategory(index) {
            this.activeCategory = index;
        }
    }
};
</script>
<style>
</style>
