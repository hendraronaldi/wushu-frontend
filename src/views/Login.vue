<template>
    <section class="section section-shaped section-lg my-0">
        <div class="shape shape-style-1"
            style="background:black;"
        >
        </div>
        <div class="container pt-lg-md">
            <div class="row justify-content-center">
                <div class="col-lg-5">
                    <card type="secondary" shadow
                          header-classes="bg-white pb-5"
                          body-classes="px-lg-5 py-lg-5"
                          class="border-0">
                        <template>
                            <div class="text-center text-muted mb-4">
                                <small>Sign in</small>
                            </div>
                            <form role="form">
                                <div class="form-group mb-3 input-group input-group-alternative">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text">
                                            <i class="ni ni-single-02"></i>
                                        </span>
                                    </div>
                                    <input aria-describedby="addon-right addon-left" placeholder="Username" class="form-control" required>
                                </div>
                                <div class="form-group input-group input-group-alternative">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text">
                                            <i class="ni ni-lock-circle-open"></i>
                                        </span>
                                    </div>
                                    <input aria-describedby="addon-right addon-left" type="password" placeholder="Password" class="form-control" required>
                                </div>
                                <div class="text-center">
                                    <base-button type="primary" class="my-4"
                                        style="background:grey; border-color:grey;"
                                    >Sign In</base-button>
                                </div>
                            </form>
                        </template>
                    </card>
                    <div class="row mt-3">
                        <!-- <div class="col-6">
                            <a href="#" class="text-light">
                                <small>Forgot password?</small>
                            </a>
                        </div> -->
                        <div class="col-12 text-right">
                            <a href="/#/register" class="text-light">
                                <small>Create new account</small>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {};
</script>
<style>
</style>
